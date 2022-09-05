import { gql } from 'graphql-request'

export const getHome = gql`
  query getHome {
    home {
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
            description
            thumbnail {
              data {
                attributes {
                  url
                }
              }
            }
          }
          structured {
            json
          }
        }
      }
    }
    projects {
      data {
        attributes {
          name
          role
          date
          url
          order
        }
      }
    }
    global {
      data {
        attributes {
          networks {
            name
            url
          }
        }
      }
    }
  }
`
