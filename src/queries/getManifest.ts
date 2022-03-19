import { gql } from 'graphql-request'

export const getManifest = gql`
  query getManifest {
    global {
      data {
        attributes {
          meta {
            title
            description
          }
          favicon {
            main {
              data {
                attributes {
                  provider_metadata
                }
              }
            }
          }
        }
      }
    }
  }
`
