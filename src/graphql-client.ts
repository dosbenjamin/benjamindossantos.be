import { GraphQLClient } from 'graphql-request'

console.log(import.meta.env)
export const client = new GraphQLClient(process.env.STRAPI_URL || import.meta.env.STRAPI_URL)
