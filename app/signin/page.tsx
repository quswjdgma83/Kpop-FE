'use client';

import { useState, useCallback } from 'react';
import { setCookie } from 'cookies-next';

import { Input, Button } from '@nextui-org/react';
import { useRecoilState } from 'recoil';
import { IconEyeClosed, IconEyeOpen } from '@/public/svgs';
import { postLogin } from '@/api/auth';
import authState from '@/store/auth';

export default function Signin() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useRecoilState(authState);

  const toggleSwitch = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const handleLogin = async () => {
    try {
      const response = await postLogin({ userEmail: email, password });
      // const accessToken = response.data?.loginUser.accessToken;
      if (response.statusCode === 200) {
        console.log(response.headers['authorization']);

        if (response.statusCode === 200 && response.message === '로그인 성공') {
          // const accessToken = response.headers['authorization'];
          // const refreshToken = response.headers['authorization-refresh'];
          // console.log(accessToken);
          // setCookie('accessToken', accessToken);
          // setCookie('refreshToken', refreshToken);
          console.log(response);
          setAuth({
            isAuthenticated: true,
            userEmail: email,
          });
        }
      } else {
        console.error('Login failed:', response.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <section className="flex flex-col items-center gap-8 my-10 ">
      <h2 className="text-xl font-semibold">로그인</h2>

      <div className="flex flex-col gap-4 w-[480px]">
        <h3 className="font-semibold text-inactive">이메일</h3>
        <Input
          type="email"
          placeholder="이메일 계정"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          classNames={{
            inputWrapper: ['bg-component'],
          }}
          className="flex gap-4"
        />
      </div>

      <div className="flex flex-col gap-4 w-[480px]">
        <h3 className="font-semibold text-inactive">비밀번호</h3>
        <div className="flex flex-col gap-3">
          <Input
            type={isVisible ? 'text' : 'password'}
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            classNames={{
              inputWrapper: ['bg-component'],
            }}
            endContent={
              <Button
                isIconOnly
                className="bg-transparent"
                onClick={toggleSwitch}
              >
                {isVisible ? <IconEyeClosed /> : <IconEyeOpen />}
              </Button>
            }
          />
        </div>
      </div>

      <Button
        className="w-[480px] bg-themeBlue/20 border-themeBlue text-inactive h-14"
        onClick={handleLogin}
      >
        이메일 로그인하기
      </Button>
    </section>
  );
}
