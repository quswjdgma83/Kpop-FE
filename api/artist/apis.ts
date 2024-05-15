import { ArtistDetailResponse, ArtistListResponse, ArtistSearchResponse } from '@/types/artist';
import http from '..';

// eslint-disable-next-line import/prefer-default-export
export const getArtistList = ({pageParam}: {pageParam: number;}) => 
  http.get<ArtistListResponse>({
    url: '/artist/list',
    params: {page: pageParam, size: 16}
  })

export const getArtistDetail = ({artistId}: {artistId: string}) =>
  http.get<ArtistDetailResponse>({
    url: `/artist/one/${artistId}`,
  })

export const createArtist = ({agencyId, artistCd, artistName, comment,gender, unitYN}: {agencyId: string; artistCd: string; artistName: string; comment: string; gender: string; unitYN: string | null;}) =>
  http.post<ArtistDetailResponse>({
    url: `/artist/${agencyId}`,
    data: {
      artistCd,
      artistName,
      comment,
      gender,
      unitYN
    }
  })

export const modifyArtist = ({artistId, artistCd, artistName, comment,gender, unitYN}: {artistId: number; artistCd: string; artistName: string; comment: string; gender: string; unitYN: string | null;}) =>
  http.put<ArtistDetailResponse>({
    url: `/artist/${artistId}`,
    data: {
      artistCd,
      artistName,
      comment,
      gender,
      unitYN
    }
  })

export const deleteArtist = ({artistId}: {artistId: number}) =>
  http.delete({
    url: `/artist/${artistId}`
  })

export const getSearchArtist = ({artistName}: {artistName: string}) =>
  http.get<ArtistSearchResponse>({
    url: '/artist/search',
    params: {artistName}
  })