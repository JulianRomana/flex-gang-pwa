module.exports = {
  pwa: {
    name: 'fighting-games',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      display: 'fullscreen',
    },
    iconsPath: {
      favicon16: '/public/img/icons/favicon.ico',
      favicon32: '/public/img/icons/favicon.ico',
      appleTouchIcon: '/public/img/icons/icon-152x152.png',
      maskIcon: '/public/img/icons/favicon.ico',
      msTileImage: '/public/img/icons/icon-144x144.png',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/global/mediaQuery.scss";
        `,
      },
    },
  },
}
