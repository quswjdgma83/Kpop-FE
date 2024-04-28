import { SignUpResponse } from '@/types/auth';
import http from '../core'

export const postSignUp = ({userName, userEmail, password, nickname}: {userName: string; userEmail: string; password: string; nickname: string;}) =>
  http.post<SignUpResponse>({
    url: '/user/userSignUp',
    data: {userName, userEmail, password, nickname}
  })

export const postLogin = ({userEmail, password}: {userEmail: string; password: string}) =>
  http.post({
      url: '/login',
      data: {userEmail, password}
  })