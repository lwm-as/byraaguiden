// module.exports = async (initialConfig = {}) => {
//   const config = {
//     types: initialConfig.types || ['page'],
//     fields: initialConfig.fields || ['slug']
//   }
//
//   const fields = config.fields.join(',')
//
//   const responses = config.types.map(async type => {
//     const res = await fetch(`https://wp.wp.xn--byrguiden-72a.no/wp-json/wp/v2/${type}?_fields=${fields}`)
//
//     return res.json()
//   })
//
//   const [data] = await Promise.all(responses)
//
//   return data
// }
