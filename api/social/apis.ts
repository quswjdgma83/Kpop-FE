
import { SearchSocialResponse, SocialDetailResponse, SocialListResponse } from '@/types/social';
import http from '..';

export const getSocialList = ({pageParam}: {pageParam: number;}) => 
  http.get<SocialListResponse>({
    url: '/social/list',
    params: {page: pageParam, size: 20}
  })

export const getSocialDetail = ({socialId}: {socialId: string}) =>
  http.get<SocialDetailResponse>({
    url: `/social/view/${socialId}`,
  })

// export const createSocial = ({}: {}) =>
//   http.post<CreateSocialResponse>({
//     url: `/social`,
//     data: {
      
//     }
//   })

// export const modifySocial = ({}: {}) =>
//   http.put<ModifySocialResponse>({
//     url: `/social/${socialId}`,
//     data: {
      
//     }
//   })

export const deleteSocial = ({socialId}: {socialId: number}) =>
  http.delete({
    url: `/social/${socialId}`
  })

export const getSearchSocial = ({socialName, pageParam}: {socialName: string; pageParam: number;}) =>
  http.get<SearchSocialResponse>({
    url: '/social/search',
    params: {socialName, page: pageParam}
  })