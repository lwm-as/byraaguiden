// const rewrite = require('./src/lib/rewrites')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['wp.xn--byrguiden-72a.no', 'images.squarespace-cdn.com']
  },
  // async rewrites() {
  //   const slugs = await rewrite()

  //   return slugs.map(({ prefix, slug, catSlug }) => ({
  //     source: `${catSlug}/${slug}`,
  //     destination: `/${prefix}/${slug}`
  //   }))
  // },
  async redirects() {
    // const slugs = await rewrite()

    // const redirects = slugs.map(({ prefix, slug, catSlug }) => ({
    //   source: `/${prefix}/${slug}`,
    //   destination: `${catSlug}/${slug}`,
    //   permanent: true
    // }))

    return [
      // ...redirects,
      {
        source: '/index',
        destination: '/',
        permanent: true
      },
      {
        source: '/webutvikling/beste-crm-systemer',
        destination: '/webdesign/beste-crm-systemer',
        permanent: true
      },
    ]
  }
}
