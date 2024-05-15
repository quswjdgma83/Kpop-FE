export interface VerifyEmailForm {
  email: string;
  verificationCode: string;
}

export interface SignUpForm {
  userName: string;
  nickname: string;
  password: string;
}

export interface SignUpResponse {
  userId: number;
  userName: string;
  userEmail: string;
  nickname: string;
  userType: string;
  socialType: string;
  socialId: string;
}