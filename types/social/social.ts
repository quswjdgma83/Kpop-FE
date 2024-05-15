export interface SocialListProps {
  socialingId: number;
  nickname: string;
  artistName: string;
  agency: string;
  place: string;
  socialingName: string;
  del_yn: string;
  quota: number;
  view: number;
  like: number;
}

export interface Pagination {
  page: number;
  total: number;
  ranges: number;
  limit: number;
  firstRangePage: number;
  lastRangePage: number;
  prevRangePage: number;
  nextRangePage: number;
  totalPages: number;
}

export interface SocialListResponse {
  content: SocialListProps[];
  pagination: Pagination;
}

export interface SocialDetailResponse {
  nickname: string;
  artistName: string;
  agency: string;
  socialing_name: string;
  socialing_content: string;
  quota: number;
  del_yn: string;
  chat_url: string;
  start_date: string;
  end_date: string;
  view_cnt: number
  follow_cnt: number;
  like_cnt: number
  viewDesc: SocialListProps[];
  likeDesc: SocialListProps[];
}

export interface CreateSocialResponse {
  nickname: string;
  artist: string;
  socialing_name: string;
  socialing_content: string;
  type: string;
  social_place: string;
  start_date: string;
  end_date: string;
  quota: number;
  chat_url: string;
}

export interface ModifySocialResponse extends CreateSocialResponse {
  del_yn: string;
}

export type SearchSocialResponse = SocialListResponse;

export interface SocialProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface SocialItemProps {
  id: number;
  isMain?: boolean;
}
