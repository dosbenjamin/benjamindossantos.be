import { gql } from 'graphql-request'

export const Home = gql`
  query Home {
    home {
      header {
        title
        subtitle
        description
        link {
          name
          url
        }
      }
      seo {
        title
        description
        thumbnail {
          url
        }
      }
    }
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
