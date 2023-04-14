export interface NewsItemType {
  title: string;
  description: string;
  date: string;
  linkDetail: string;
  commentsCount: number;
}

export interface NewsItemProps {
  item: NewsItemType;
}
