// 메인 레이아웃 컴포넌트
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";
import $ from "jquery";

/********************************************************* 
  [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
  1. <Link to="/경로명"></Link>
  -> to속성의 경로는 <Route path="/경로명"> 과 일치한다!

  2. <Outlet />
  -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*********************************************************/

// GNB데이터
const gnb_data = [
  {
    txt: "료칸",
    src: "./images/료칸/료칸.jpg",
    link: "",
  },
  {
    txt: "리아드",
    src: "./images/리아드/리아드.jpg",
    link: "",
  },
  {
    txt: "북극",
    src: "./images/북극/북극.jpg",
    link: "",
  },
  {
    txt: "사막",
    src: "./images/사막/사막.jpg",
    link: "",
  },
  {
    txt: "상징적 도시",
    src: "./images/상징적 도시/상징적 도시.jpg",
    link: "",
  },
  {
    txt: "섬",
    src: "./images/섬/섬.jpg",
    link: "",
  },
  {
    txt: "세상의 꼭대기",
    src: "./images/세상의 꼭대기/세상의 꼭대기.jpg",
    link: "",
  },
  {
    txt: "캐슬",
    src: "./images/캐슬/캐슬.jpg",
    link: "",
  },
  {
    txt: "키클라데스 주택",
    src: "./images/키클라데스 주택/키클라데스 주택.jpg",
    link: "",
  },
  {
    txt: "한옥",
    src: "./images/한옥/한옥.jpg",
    link: "",
  },
];

$(() => {
  $(".gnb ul li a").click(function() {
    $(".navtit", this).addClass("on").parents("li").siblings().find(".navtit").removeClass("on");
    $(this).css({ opacity: 1 }).siblings().css({ opacity: 0.64 });
  });
});

const Layout = () => {

  return (
    <>
      {/* 1. 상단영역 */}
      <header className="top">
        <div className="toparea">
          {/* 로고 */}
          <h1 className="logo">
            <Link to="/">
              <img src="./images/logo/logo.png" alt="로고이미지" />
            </Link>
          </h1>
          {/* 위치 */}
          <div className="loca"></div>
          {/* 회원가입 */}
          <div className="log"></div>
        </div>
        {/* 네비게이션 파트 */}
        <nav className="gnb">
          <ul>
              {gnb_data.map((v, i) => (
                <li key={i}>
                  <Link to="/">
                    <img src={v.src} alt={v.txt} />
                    <div className="navtit">{v.txt}</div>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </header>
      {/* 2. 메인영역 */}
      <main className="cont">
        {/* 출력파트 : 각페이지의 컴포넌트가 출력 */}
        <Outlet />
      </main>
      {/* 3. 하단영역 */}
      <footer className="info"></footer>
    </>
  );
}; //////////////////// Layout 컴포넌트 //////////////////////

// 내보내기
export default Layout;
