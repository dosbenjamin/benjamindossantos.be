import { GraphQLClient } from 'graphql-request'

console.log(import.meta.env)
export const client = new GraphQLClient(import.meta.env.STRAPI_URL)
