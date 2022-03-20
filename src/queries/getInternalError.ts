import { gql } from 'graphql-request'

export const getInternalError = gql`
  query getInternalError {
    internalError {
      data {
        attributes {
          header {
            title
            subtitle
            description
            link {
              name
              url
            }
          }
          meta {
            title
          }
        }
      }
    }
  }
`
