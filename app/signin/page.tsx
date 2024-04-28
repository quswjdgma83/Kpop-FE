import { Input, Button } from '@nextui-org/react';
import { IconEyeOpen } from '@/public/svgs';

export default function Signin() {
  return (
    <section className="flex flex-col items-center gap-8 my-10 ">
      <h2 className="text-xl font-semibold">로그인</h2>

      <div className="flex flex-col gap-4 w-[480px]">
        <h3 className="font-semibold text-inactive">이메일</h3>
        <Input
          type="email"
          placeholder="이메일 계정"
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
            type="password"
            placeholder="비밀번호 입력"
            classNames={{
              inputWrapper: ['bg-component'],
            }}
            endContent={<IconEyeOpen password />}
          />
        </div>
      </div>

      <Button className="w-[480px] bg-themeBlue/20 border-themeBlue text-inactive h-14">
        이메일 로그인하기
      </Button>
    </section>
  );
}
