import { gql } from 'graphql-request'

export const Global = gql`
  query Global {
    global {
      socials {
        name
        url
      }
      seo {
        title
        twitter
        thumbnail {
          url
        }
      }
    }
  }
`
