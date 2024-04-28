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

export const postSendVerification = ({email}: {email: string}) =>
  http.post({
    url: '/email/send-verification-email',
    data: {email}
  })

export const postVerifyEmail = ({email, verificationCode}: {email: string; verificationCode: string }) =>
  http.post({
    url: '/email/verify-email',
    data: {email, verificationCode}
  })

