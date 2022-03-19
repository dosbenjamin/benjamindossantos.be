import { gql } from 'graphql-request'

export const getGlobal = gql`
  query getGlobal {
    global {
      data {
        attributes {
          meta {
            title
            description
            thumbnail {
              data {
                attributes {
                  url
                }
              }
            }
          }
          favicon {
            main {
              data {
                attributes {
                  url
                  provider_metadata
                  mime
                }
              }
            }
          }
        }
      }
    }
  }
`
