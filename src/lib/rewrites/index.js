// const fetchUrlsNode = require('../../utils/fetchSlugsNode')
//
// module.exports = async () => {
//   const rewrites = await fetchUrlsNode({
//     types: ['landing'],
//     fields: ['slug', 'type']
//   })
//
//   const dynamicRewrites = rewrites.map(({ slug, type }) => {
//     return {
//       prefix: type,
//       slug
//     }
//   })
//
//   return [...dynamicRewrites]
// }
