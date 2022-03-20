import { Resize } from '@cloudinary/url-gen/actions'
import { cloudinary } from 'cloudinary'
import { client } from 'graphql-client'
import { getManifest } from 'queries/getManifest'
import type { Shared } from 'types/shared'
import type { Strapi } from 'types/strapi'

type Manifest = {
  meta: Shared.SEO.Meta
  favicon: Shared.SEO.Favicon
}

type Request = {
  global: Strapi.Data<Manifest>
}

export const get = async () => {
  const { global } = await client.request<Request>(getManifest)

  const favicon = cloudinary.image(
    global.data.attributes.favicon.main.data.attributes.provider_metadata.public_id
  )

  return {
    body: JSON.stringify({
      name: global.data.attributes.meta.title,
      short_name: global.data.attributes.meta.title,
      description: global.data.attributes.meta.description,
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      theme_color: '#e8e8e8',
      background_color: '#2c2c2c',
      icons: [
        {
          src: favicon.resize(Resize.thumbnail(192, 192)).format('png').toURL(),
          type: 'image/png',
          sizes: '192x192'
        },
        {
          src: favicon.resize(Resize.thumbnail(512, 512)).format('png').toURL(),
          type: 'image/png',
          sizes: '512x512'
        },
        {
          src: favicon.resize(Resize.thumbnail(192, 192)).format('png').toURL(),
          type: 'image/png',
          sizes: '192x192',
          purpose: 'maskable'
        },
        {
          src: favicon.resize(Resize.thumbnail(512, 512)).format('png').toURL(),
          type: 'image/png',
          sizes: '512x512',
          purpose: 'maskable'
        }
      ]
    })
  }
}
