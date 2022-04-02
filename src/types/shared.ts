import type { Strapi } from './strapi'

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

  export type Global = {
    networks: Link[]
  }

  export namespace SEO {
    export type Favicon = {
      main: Strapi.Image
    }

    export type Meta = {
      title: string
      description: string
      thumbnail: Strapi.Image
    }

    export type Structured = {
      json?: string
    }
  }
}
