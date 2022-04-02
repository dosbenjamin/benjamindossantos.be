const worker = /** @type {ServiceWorkerGlobalScope} */ (self)

/**
 * Add resources to the precache.
 *
 * @param {string[]} resources - The resources to precache.
 */
const addToPrecache = async resources => {
  const cache = await caches.open('precache')
  cache.addAll(resources)
}

/**
 *
 * @param {Request} request
 * @param {Response} response
 */
const putInCache = async (request, response) => {
  const cache = await caches.open('cache')
  cache.put(request, response)
}

/**
 * Cache first strategy.
 *
 * @param {[Request, Promise<Response>]} request
 */
const cacheFirst = async ([request, preloadResponsePromise]) => {
  const cacheResponse = await caches.match(request)
  if (cacheResponse) return cacheResponse

  const preloadResponse = await preloadResponsePromise
  if (preloadResponse) {
    putInCache(request, preloadResponse.clone())
    return preloadResponse
  }

  try {
    const networkResponse = await fetch(request)
    putInCache(request, networkResponse.clone())
    return networkResponse
  } catch (error) {
    const fallbackResponse = await caches.match('/')
    if (fallbackResponse) return fallbackResponse

    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
}

/**
 * Network first strategy.
 *
 * @param {[Request, Promise<Response>]} request
 */
const networkFirst = async ([request]) => {
  try {
    const networkResponse = await fetch(request)
    putInCache(request, networkResponse.clone())
    return networkResponse
  } catch (error) {
    const cacheResponse = await caches.match(request)
    if (cacheResponse) return cacheResponse

    const fallbackResponse = await caches.match('/')
    if (fallbackResponse) return fallbackResponse

    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
}

/**
 * Install the Service Worker and precache some resources.
 *
 * @param {ExtendableEvent} event - The installation event.
 */
const onInstall = event => {
  event.waitUntil(
    addToPrecache([
      '/',
      '/manifest.webmanifest',
      '/SpaceGrotesk-Regular.woff2'
    ])
  )
}

/**
 * Cache resources on runtime.
 *
 * @param {FetchEvent} event - The event when a resource is fetched.
 */
const onFetch = async event => {
  const request = [
    event.request,
    event.preloadResponse
  ]

  event.respondWith(
    event.request.mode === 'navigate'
      ? networkFirst(request)
      : cacheFirst(request)
  )
}

worker.addEventListener('install', onInstall)
worker.addEventListener('fetch', onFetch)
