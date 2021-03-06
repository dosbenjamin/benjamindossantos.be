export type LinkType = {
  name: string
  url: string
}

type LinkProps = Omit<LinkType, 'name'> & {
  children: LinkType['name'] | JSX.Element
  className?: string
}

const Link = ({ children, url, className }: LinkProps) => {
  return (
    <a
      className={`inline-block text-sm transition-colors duration-1000 ease-out border-b-2 border-transparent hover:border-current ${className}`}
      href={url}
    >
      {children}
    </a>
  )
}

export default Link
