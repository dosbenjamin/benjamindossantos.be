import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(
  process.env.STRAPI_URL || import.meta.env.STRAPI_URL, {
    headers: {
      authorization: `Bearer ${process.env.STRAPI_TOKEN || import.meta.env.STRAPI_TOKEN}`
    }
  }
)
