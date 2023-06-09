// 메인 레이아웃 컴포넌트
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";

/********************************************************* 
  [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
  1. <Link to="/경로명"></Link>
  -> to속성의 경로는 <Route path="/경로명"> 과 일치한다!

  2. <Outlet />
  -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*********************************************************/

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
            <li>
              <Link to="/">
                <img src="./images/료칸/료칸.jpg" alt="료칸" />
                <div className="navtit">료칸</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="./images/리아드/리아드.jpg" alt="리아드" />
                <div className="navtit">리아드</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="./images/북극/북극.jpg" alt="북극" />
                <div className="navtit">북극</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="./images/사막/사막.jpg" alt="사막" />
                <div className="navtit">사막</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="./images/상징적 도시/상징적 도시.jpg" alt="상징적 도시" />
                <div className="navtit">상징적 도시</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="./images/섬/섬.jpg" alt="섬" />
                <div className="navtit">섬</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div><img src="./images/세상의 꼭대기/세상의 꼭대기.jpg" alt="세상의 꼭대기" /></div>
                <div className="navtit">세상의 꼭대기</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="./images/캐슬/캐슬.jpg" alt="캐슬" />
                <div className="navtit">캐슬</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="./images/키클라데스 주택/키클라데스 주택.jpg" alt="키클라데스 주택" />
                <div className="navtit">키클라데스 주택</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="./images/한옥/한옥.jpg" alt="한옥" />
                <div className="navtit">한옥</div>
              </Link>
            </li>
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
