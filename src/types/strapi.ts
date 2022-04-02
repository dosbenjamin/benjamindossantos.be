import type { Cloudinary } from './cloudinary'

export namespace Strapi {
  export type Attributes <A> = { attributes: A }
  export type Data <T> = { data: Attributes<T> }
  export type ImageData = {
    url: string
    mime: string
    provider_metadata: Cloudinary.Metadata
  }
  export type Image = Strapi.Data<ImageData>
}
