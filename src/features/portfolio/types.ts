export interface PortfolioEntry {
  description: string;
  href?: string;
  meta: string;
  organization?: {
    href: string;
    name: string;
  };
  title: string;
}

export interface PortfolioSection {
  entries: readonly PortfolioEntry[];
  id: string;
  title: string;
}
