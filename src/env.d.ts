interface ImportMetaEnv {
  readonly STRAPI_URL: string
  readonly CLOUDINARY_NAME: string
  readonly CLOUDINARY_KEY: string
  readonly CLOUDINARY_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
