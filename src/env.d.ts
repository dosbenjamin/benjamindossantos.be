type Env = {
  readonly STRAPI_URL: string
  readonly CLOUDINARY_NAME: string
  readonly CLOUDINARY_KEY: string
  readonly CLOUDINARY_SECRET: string
}

interface ImportMetaEnv extends Env {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace NodeJS {
  interface ProcessEnv extends Env {}
}
