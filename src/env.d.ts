interface ImportMetaEnv {
  readonly STRAPI_URL: string
  readonly SITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
