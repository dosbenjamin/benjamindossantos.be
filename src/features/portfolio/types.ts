export type PortfolioEntry = {
  description: string;
  href?: string;
  meta: string;
  organization?: {
    href: string;
    name: string;
  };
  title: string;
  year?: number;
};

export type PortfolioSection = {
  entries: readonly PortfolioEntry[];
  id: string;
  title: string;
};
