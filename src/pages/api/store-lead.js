const { GoogleSpreadsheet } = require('google-spreadsheet')

async function storeLeadData(data) {
  const doc = new GoogleSpreadsheet('1NoIxAKkALgswznh2iVKT7G4v3MgCVuH_JkoKURRaUWk')

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY
  })

  await doc.loadInfo()

  const sheet = doc.sheetsById['579759635']

  await sheet.addRow({
    Dato: data.dateStamp,
    Navn: data.name,
    Epost: data.email,
    Telefon: data.tlf,
    'Hva skal gjøres': data.description,
    Budsjett: data.budget,
    Prosjektstart: data.time,
    'Sannsynlighet Ansette': data.probability,
    Fakturert: '',
    'Byrå 1': '',
    'Byrå 2': ''
  })
}

export default storeLeadData
