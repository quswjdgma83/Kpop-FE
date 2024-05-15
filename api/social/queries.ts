'use client';

import { useSuspenseInfiniteQuery, useQuery, useMutation, QueryClient } from '@tanstack/react-query';
import { deleteSocial, getSearchSocial, getSocialDetail, getSocialList } from './apis';

export const useGetSocialList = () =>
  useSuspenseInfiniteQuery({
    queryKey: ['/social/list'],
    queryFn: ({pageParam}: {pageParam: number}) => getSocialList({pageParam}), initialPageParam: 1,
    getNextPageParam: ({ data }) => {
      const { pagination } = data || {};
      const { totalPages, page } = pagination || {};
      return page === totalPages ? undefined : page + 1;
    },
  })

export const useGetSocialDetail = ({socialId}: {socialId: string;}) =>
  useQuery({
    queryKey: ['/social/view', socialId],
    queryFn: () => getSocialDetail({socialId})
  })

// export const useCreateSocial = ({queryClient}: {queryClient: QueryClient}) =>
//   useMutation({
//     mutationFn: () => createSocial({}),
//     onSuccess: () => queryClient.invalidateQueries({queryKey: ['/social/list']})
//   })

// export const useModifyArtist = ({queryClient}: {queryClient: QueryClient}) =>
//   useMutation({
//     mutationFn: () => modifySocial({}),
//     onSuccess: () => queryClient.invalidateQueries({queryKey: ['/social/view', socialId]})
//   })

export const useDeleteSocial = ({socialId, queryClient}: {socialId: number;  queryClient: QueryClient}) =>
  useMutation({
    mutationFn: () => deleteSocial({socialId}),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['/social/list']})
  })

export const useGetSocialArtist = ({socialName}: {socialName: string}) =>
  useSuspenseInfiniteQuery({
    queryKey: ['/social/list'],
    queryFn: ({pageParam}: {pageParam: number}) => getSearchSocial({socialName, pageParam}), initialPageParam: 1,
    getNextPageParam: ({ data }) => {
      const { pagination } = data || {};
      const { totalPages, page } = pagination || {};
      return page === totalPages ? undefined : page + 1;
    },
  })