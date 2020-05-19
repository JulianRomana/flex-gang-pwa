/* eslint-disable no-underscore-dangle, no-undef, no-restricted-globals */

self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.setConfig({
  debug: true,
})
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typicode.com/(.*)'),
  new workbox.strategies.CacheFirst({
    cacheName: 'jsonplaceholder',
    method: 'GET',
    cacheableResponse: { statuses: [0, 200] },
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
)

let url

self.addEventListener('push', (e) => {
  const pushMessage = e.data.json()

  url = pushMessage[0].url

  const notificationOptions = {
    body: pushMessage[0].title,
    icon: './img/icons/icon-72x72.png',
    image: './img/icons/icon-72x72.png',
    vibrate: [200, 100, 200, 100],
    tag: 'vibration-sample',
  }
  e.waitUntil(
    self.registration.showNotification(pushMessage[0].title, notificationOptions),
  )
})

self.addEventListener('notificationclick', (e) => {
  e.notification.close()

  const promiseChain = clients.openWindow(url)

  e.waitUntil(
    promiseChain,
  )
})
