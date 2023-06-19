// 메인 레이아웃 컴포넌트
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";
import $ from "jquery";
import gnb_data from "./data/gnbdata";

/********************************************************* 
  [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
  1. <Link to="/경로명"></Link>
  -> to속성의 경로는 <Route path="/경로명"> 과 일치한다!

  2. <Outlet />
  -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*********************************************************/

$(() => {
  $(".gnb ul li a").click(function() {
    $(this).addClass("on").parents("li").siblings().find("a").removeClass("on");
    // $(this).css({ opacity: 1 }).siblings().css({ opacity: 0.64 });
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
            {/* GNB메뉴 */}
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
