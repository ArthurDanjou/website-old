export default {
  authtoken: process.env.NGROK_AUTHTOKEN,
  auth: process.env.NGROK_AUTH_USER + ':' + process.env.NGROK_AUTH_PASS,
  region: 'eu',
  addr: process.env.NGROK_PORT,
  proto: 'http',
}
