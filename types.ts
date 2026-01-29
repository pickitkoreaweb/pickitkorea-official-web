export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}