export interface SocialProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface SocialItemProps {
  id: number;
  isMain?: boolean;
}
