export interface ArtistListProps {
  regDt: string;
  modDt: string;
  artistId: number;
  artistCd: string;
  artistName: string;
  comment: string;
  followCnt: number;
  gender: string;
  unitYN: string | null;
  delYN: string;
  regId: string;
}

export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface ArtistListResponse {
  data: ArtistListProps[]
  pageInfo: PageInfo;
}

export interface ArtistDetailResponse {
  artistId: number;
  artistCd: string;
  artistName: string;
  comment: string;
  followCnt: number;
  gender: string;
  unitYN: string | null;
  delYN: string;
  regId: string;
  regDt: string;
  modDt: string;
  agencyId: number;
}

export interface ArtistsContainerProps {
  list: {
    imgSrc: string;
    artistName: string;
  }[];
}

export interface RankItemProps {
  rank: number;
  artist: string;
  change: string | number;
}
