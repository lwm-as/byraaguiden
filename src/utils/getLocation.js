const getLocation = zip => {
  // eslint-disable-next-line global-require
  const zipArr = require('../lib/json/zip-codes.json')
  const zipObj = zipArr.filter(node => node.postnummer === zip)
  const location = `${zip} ${zipObj[0].poststed}`
  return location
}

export default getLocation
