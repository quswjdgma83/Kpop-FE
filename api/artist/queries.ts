'use client';

import { useSuspenseInfiniteQuery, useQuery, useMutation, QueryClient } from '@tanstack/react-query';
import { createArtist, deleteArtist, getArtistDetail, getArtistList, getSearchArtist, modifyArtist } from './apis';

// eslint-disable-next-line import/prefer-default-export
export const useGetArtistList = () =>
  useSuspenseInfiniteQuery({
    queryKey: ['/artist/list'],
    queryFn: ({pageParam}: {pageParam: number}) => getArtistList({pageParam}), initialPageParam: 1,
    getNextPageParam: ({ data }) => {
      const { pageInfo } = data || {};
      const { totalPages, page } = pageInfo || {};
      return page === totalPages ? undefined : page + 1;
    },
  })

export const useGetArtistDetail = ({artistId}: {artistId: string;}) =>
  useQuery({
    queryKey: ['/artist/one', artistId],
    queryFn: () => getArtistDetail({artistId})
  })

export const useCreateArtist = ({agencyId, artistCd, artistName, comment,gender, unitYN, queryClient}: {agencyId: string; artistCd: string; artistName: string; comment: string; gender: string; unitYN: string | null; queryClient: QueryClient}) =>
  useMutation({
    mutationFn: () => createArtist({agencyId, artistCd, artistName, comment,gender, unitYN}),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['/artist/list']})
  })

export const useModifyArtist = ({artistId, artistCd, artistName, comment,gender, unitYN, queryClient}: {artistId: number; artistCd: string; artistName: string; comment: string; gender: string; unitYN: string | null; queryClient: QueryClient}) =>
  useMutation({
    mutationFn: () => modifyArtist({artistId, artistCd, artistName, comment,gender, unitYN}),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['/artist/one', artistId]})
  })

export const useDeleteArtist = ({artistId, queryClient}: {artistId: number;  queryClient: QueryClient}) =>
  useMutation({
    mutationFn: () => deleteArtist({artistId}),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['/artist/list']})
  })

export const useGetSearchArtist = ({artistName}: {artistName: string}) =>
  useQuery({
    queryKey: ['/artist/search'],
    queryFn: () => getSearchArtist({artistName})
  })