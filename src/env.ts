interface Env extends ImportMetaEnv {
  readonly STRAPI_URL: string
}

const { env } = import.meta || process

export const { STRAPI_URL, PROD } = env as Env
