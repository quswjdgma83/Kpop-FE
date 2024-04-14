import { ArtistListResponse } from '@/types/artist';
import http from '..';

// eslint-disable-next-line import/prefer-default-export
export const getArtistList = ({pageParam}: {pageParam: number;}) => 
  http.get<ArtistListResponse>({
    url: '/artist/list',
    params: {page: pageParam, size: 16}
  })