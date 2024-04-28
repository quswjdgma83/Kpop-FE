'use client';

import { useState, useCallback } from 'react';
import { Input, Button } from '@nextui-org/react';
import { IconEyeOpen, IconEyeClosed } from '@/public/svgs';

export default function Signup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCheck, setIsVisibleCheck] = useState(false);

  const toggleSwitch = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const toggleSwitchCheck = useCallback(() => {
    setIsVisibleCheck(!isVisibleCheck);
  }, [isVisibleCheck]);

  return (
    <section className="flex flex-col items-center gap-8 my-10 ">
      <h2 className="text-xl font-semibold">이메일 간편가입</h2>

      <div className="flex flex-col gap-4 w-[480px]">
        <h3 className="font-semibold text-inactive">이메일</h3>
        <div className="flex gap-4">
          <Input
            type="email"
            placeholder="이메일 입력"
            classNames={{
              inputWrapper: ['bg-component'],
            }}
          />

          <Button className="w-[120px] bg-themeBlue/20 border-themeBlue text-inactive h-14">
            인증하기
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[480px]">
        <h3 className="font-semibold text-inactive">이름</h3>
        <Input
          type="text"
          placeholder="이름 입력"
          classNames={{
            inputWrapper: ['bg-component'],
          }}
        />
      </div>

      <div className="flex flex-col gap-4 w-[480px]">
        <h3 className="font-semibold text-inactive">비밀번호</h3>
        <div className="flex flex-col gap-3">
          <Input
            type={isVisible ? 'string' : 'password'}
            placeholder="비밀번호 입력"
            classNames={{
              inputWrapper: ['bg-component'],
            }}
            endContent={
              <Button
                isIconOnly
                className="bg-transparent"
                onClick={toggleSwitch}
              >
                {isVisible ? <IconEyeClosed /> : <IconEyeOpen password />}
              </Button>
            }
          />
          <Input
            type={isVisibleCheck ? 'string' : 'password'}
            placeholder="비밀번호 확인"
            classNames={{
              inputWrapper: ['bg-component'],
            }}
            endContent={
              <Button
                isIconOnly
                className="bg-transparent"
                onClick={toggleSwitchCheck}
              >
                {isVisibleCheck ? <IconEyeClosed /> : <IconEyeOpen password />}
              </Button>
            }
          />
        </div>
      </div>

      <Button className="w-[480px] bg-themeBlue/20 border-themeBlue text-inactive h-14">
        가입 완료하기
      </Button>
    </section>
  );
}
