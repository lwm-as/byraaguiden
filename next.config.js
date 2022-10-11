const rewrite = require('./src/lib/rewrites')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['wp.xn--byrguiden-72a.no', 'images.squarespace-cdn.com']
  }
  // async rewrites() {
  //   const slugs = await rewrite()
  //
  //   return slugs.map(({ prefix, slug }) => ({
  //     source: `/${slug}`,
  //     destination: `/${prefix}/${slug}`
  //   }))
  // },
  // async redirects() {
  //   const slugs = await rewrite()
  //
  //   const redirects = slugs.map(({ prefix, slug }) => ({
  //     source: `/${prefix}/${slug}`,
  //     destination: `/${slug}`,
  //     permanent: true
  //   }))
  //
  //   return [...redirects]
  // }
}
