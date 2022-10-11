import axios from 'axios'

export default async function handler(req, res) {
  const data = req.body

  const { zapierHookId } = data

  await axios.post(`https://hooks.zapier.com/hooks/catch/${zapierHookId}/`, data)
  //   await axios.post('https://leadgen-333711.nw.r.appspot.com/leads/postLead/', data)

  return res.status(200).json({ msg: 'ok' })
}
