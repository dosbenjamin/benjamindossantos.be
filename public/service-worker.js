// @ts-check

const worker = /** @type {ServiceWorkerGlobalScope} */ (/** @type {unknown} */ (self))

/**
 * @param {string[]} resources
 * @return {Promise<void>}
 */
const addToPrecache = async resources => {
  const cache = await caches.open('precache')
  cache.addAll(resources)
}

/**
 * @param {Request} request
 * @param {Response} response
 * @return {Promise<void>}
 */
const putInCache = async (request, response) => {
  if (!(request.url.includes('http'))) return

  const cache = await caches.open('cache')
  cache.put(request, response)
}

/**
 * @param {Request} request
 * @param {Promise<Response>} preloadResponsePromise
 * @return {Promise<Response>}
 */
const cacheFirst = async (request, preloadResponsePromise) => {
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
 * @param {Request} request
 * @return {Promise<Response>}
 */
const networkFirst = async request => {
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
 * @param {ExtendableEvent} event
 * @return {void}
 */
const onInstall = event => {
  event.waitUntil(
    addToPrecache([
      '/',
      '/site.webmanifest',
      '/SpaceGrotesk-Regular.woff2'
    ])
  )
}

/**
 * @param {FetchEvent} event
 * @return {Promise<void>}
 */
const onFetch = async event => {
  event.respondWith(
    event.request.mode === 'navigate'
      ? networkFirst(event.request)
      : cacheFirst(event.request, event.preloadResponse)
  )
}

worker.addEventListener('install', onInstall)
worker.addEventListener('fetch', onFetch)
