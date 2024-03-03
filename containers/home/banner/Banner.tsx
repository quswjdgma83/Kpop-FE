import Image from 'next/image';

export default function Banner() {
  return (
    <Image
      src="/mocks/banner_bts.jpeg"
      width={1280}
      height={500}
      alt="배너 이미지"
      className="object-cover w-full h-[500px]"
    />
  );
}
