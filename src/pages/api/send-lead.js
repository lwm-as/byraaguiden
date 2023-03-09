import storeLeadData from './store-lead'
// import emailjs from 'emailjs-com'

export default async function handler(req, res) {
  const data = req.body

  await storeLeadData(data)

  // await emailjs.send('service_45lb66b', 'template_rnezqro', { ...data }, 'user_Tf5WUPLO6lS39d5FpP8CE')

  return res.status(200).json({ msg: 'ok' })
}
