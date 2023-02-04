export type Link = {
  name: string
  url: string
}

export type Header = {
  title: string
  subtitle: string
  link: Link
}

export type Global = {
  networks: Link[]
}
