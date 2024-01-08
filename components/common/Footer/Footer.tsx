export default function Footer() {
  return (
    <footer className="relative flex justify-between w-full my-24 text-sm text-inactive">
      <section className="flex flex-col">
        <p className="mb-12 text-4xl text-basic">LOGO</p>
        <div className="flex gap-28">
          <div>
            <p className="mb-12">CONTACT US</p>
            <p>COSTOMER CENTER</p>
            <p>Help@0000.kr</p>
            <p>Mon-Fri | 10:00 - 7:00</p>
            <p>Lunch | 12:00 - 13:00</p>
            <p>Sat, Sun, Holday Off</p>
          </div>
          <div>
            <p className="mb-12">SERVICE</p>
            <p>서비스 이용약관</p>
            <p>개인정보처리방침</p>
            <p>공지사항</p>
            <p>광고 / 제휴 문의</p>
          </div>
        </div>
      </section>
      <section className="absolute bottom-0 right-0">
        <p>COPYRIGHT (c) 0000.0000.com All Rights Reserved</p>
      </section>
    </footer>
  );
}
