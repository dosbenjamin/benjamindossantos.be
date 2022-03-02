import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(import.meta.env.STRAPI_URL)
