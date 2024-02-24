const worker = self as unknown as ServiceWorkerGlobalScope;

const addToPrecache = async (resources: string[]): Promise<void> => {
  const cache = await worker.caches.open('precache');
  await cache.addAll(resources);
};

const putInCache = async (request: Request, response: Response): Promise<void> => {
  if (!request.url.includes('http')) return;

  const cache = await worker.caches.open('cache');
  await cache.put(request, response);
};

const cacheFirst = async (
  request: Request,
  preloadResponsePromise: Promise<Response> | undefined,
): Promise<Response> => {
  const cacheResponse = await worker.caches.match(request);
  if (cacheResponse) return cacheResponse;

  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    await putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  try {
    const networkResponse = await worker.fetch(request);
    await putInCache(request, networkResponse.clone());

    return networkResponse;
  } catch (error) {
    const fallbackResponse = await worker.caches.match('/');
    if (fallbackResponse) return fallbackResponse;

    return new Response('Network error happened', {
      headers: { 'Content-Type': 'text/plain' },
      status: 408,
    });
  }
};

const networkFirst = async (request: Request): Promise<Response> => {
  try {
    const networkResponse = await worker.fetch(request);
    await putInCache(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cacheResponse = await worker.caches.match(request);
    if (cacheResponse) return cacheResponse;

    const fallbackResponse = await worker.caches.match('/');
    if (fallbackResponse) return fallbackResponse;

    return new Response('Network error happened', {
      headers: { 'Content-Type': 'text/plain' },
      status: 408,
    });
  }
};

const onInstall = (event: ExtendableEvent): void => {
  event.waitUntil(addToPrecache(['/', '/site.webmanifest', '/SpaceGrotesk-Regular.woff2']));
};

const onFetch = (event: FetchEvent): void => {
  event.respondWith(
    event.request.mode === 'navigate'
      ? networkFirst(event.request)
      : cacheFirst(event.request, event.preloadResponse),
  );
};

worker.addEventListener('install', onInstall);
worker.addEventListener('fetch', onFetch);
