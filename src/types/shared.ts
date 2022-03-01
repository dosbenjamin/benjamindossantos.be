import { Strapi } from './strapi'

export namespace Shared {
  export type Link = {
    name: string
    url: string
  }

  export type Header = {
    title: string
    subtitle: string
    description: string
    link: Link
  }

  export type SEO = {
    title: string
    description: string
    thumbnail: Strapi.Image
  }

  export type Global = {
    socials: Link[]
  }
}
