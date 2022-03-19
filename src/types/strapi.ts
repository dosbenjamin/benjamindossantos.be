import { Cloudinary } from './cloudinary'

export namespace Strapi {
  export type Data <T> = { data: T }
  export type Attributes <A> = { attributes: A }
  export type Image = {
    url: string
    mime: string
    provider_metadata: Cloudinary.Metadata
  }
}
