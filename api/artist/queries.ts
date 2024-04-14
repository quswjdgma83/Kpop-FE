'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getArtistList } from './apis';

// eslint-disable-next-line import/prefer-default-export
export const useGetArtistList = () =>
  useSuspenseInfiniteQuery({
    queryKey: ['/artist/list'],
    queryFn: ({pageParam}: {pageParam: number}) => getArtistList({pageParam}),
     initialPageParam: 1,
    getNextPageParam: ({ data }) => {
      const { pageInfo } = data || {};
      const { totalPages, page } = pageInfo || {};
      return page === totalPages ? undefined : page + 1;
    },
  })