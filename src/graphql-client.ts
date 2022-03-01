import { GraphQLClient } from 'graphql-request'
import { STRAPI_URL } from './config'

export const client = new GraphQLClient(STRAPI_URL)
