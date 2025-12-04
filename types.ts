export interface EducationLevelData {
  id: string;
  title: string;
  slug: string;
  description: string;
  ageRange: string;
  features: string[];
  image: string;
}

export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}