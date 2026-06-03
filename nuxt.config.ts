export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Copyright Takedown Notices from Randy labs | copyright-abuses.com',
      meta: [
        { name: 'description', content: 'Documentation of the authorization, detection technology, and legal basis for copyright takedown notices issued by Randy labs.' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://copyright-abuses.com',
  },

  sitemap: {
    excludeAppSources: true,
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/compliance', changefreq: 'monthly', priority: 0.9 },
      { loc: '/tools', changefreq: 'monthly', priority: 0.8 },
      { loc: '/tools/har-viewer', changefreq: 'monthly', priority: 0.7 },
    ],
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  components: [
    { path: '~/components/layout', prefix: '' },
  ],

  future: {
    compatibilityVersion: 3,
  },

  vite: {
    server: {
      allowedHosts: true,
    },
  },

  compatibilityDate: '2025-01-01',
})
