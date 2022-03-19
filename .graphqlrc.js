module.exports = {
  schema: process.env.STRAPI_URL,
  extensions: {
    endpoints: {
      default: {
        url: process.env.STRAPI_URL,
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
        }
      }
    }
  }
}
