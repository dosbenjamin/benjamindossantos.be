import { GraphQLClient } from 'graphql-request'
import { STRAPI_URL } from './env'

export const client = new GraphQLClient(STRAPI_URL)
