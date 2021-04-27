const publicRuntimeConfig = {

}

const privateRuntimeConfig = {
  API_TOKEN: process.env.API_TOKEN,
  SENTRY_DSN: process.env.SENTRY_DSN
}

export default { publicRuntimeConfig, privateRuntimeConfig}
