import Script from 'next/script';
import { Map } from 'react-kakao-maps-sdk';

interface KakaoMapProps {
  height: string;
}

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = ({ height }: KakaoMapProps) => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{
          width: '904px',
          height: height,
        }}
      ></Map>
    </>
  );
};

export default KakaoMap;
