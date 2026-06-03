interface SeoOptions {
  title: string
  description: string
  path: string
  image?: string
  type?: string
}

export function useSeo(options: SeoOptions) {
  const url = `https://copyright-abuses.com${options.path}`
  const image = options.image ?? 'https://copyright-abuses.com/images/og-default.png'

  useHead({
    title: options.title,
    meta: [
      { hid: 'description', name: 'description', content: options.description },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:type', content: options.type ?? 'website' },
      { property: 'og:site_name', content: 'Copyright Abuses' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: image },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}
