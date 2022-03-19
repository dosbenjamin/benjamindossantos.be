import { gql } from 'graphql-request'

export const getNotFound = gql`
  query getNotFound {
    notFound {
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
