export interface FrontmatterType {
  isDraft: boolean;
  title: string;
  description: string;
  publishDate: Date;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
}
