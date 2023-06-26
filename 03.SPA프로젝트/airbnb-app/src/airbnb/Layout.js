// 메인 레이아웃 컴포넌트
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";
import $ from "jquery";
import gnb_data from "./data/gnbdata";
import GnbList from "./plugin/GnbList";

/********************************************************* 
  [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
  1. <Link to="/경로명"></Link>
  -> to속성의 경로는 <Route path="/경로명"> 과 일치한다!

  2. <Outlet />
  -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*********************************************************/

$(() => {
  $(".gnb ul li a").click(function () {
    $(this).addClass("on").parents("li").siblings().find("a").removeClass("on");
    // $(this).css({ opacity: 1 }).siblings().css({ opacity: 0.64 });
  });
});

const Layout = () => {
  // 광클금지변수
  let prot = 0;

  let temp = 1;
  
  // 네비버튼 이동슬라이드 함수 //
  const goSlide = (e) => {
    // 1. 이벤트가 발생한 버튼요소
    let ele = e.target;
    // console.log(ele);

    // 광클금지
    if (prot) return;
    prot = 1;
    setTimeout(() => (prot = 0), 400);

    // 1. 버튼 구분하기
    let isB = $(ele).is(".rb");
    console.log("오른쪽?", isB);

    // 슬라이드 타겟설정
    let tg = $(ele).parents().siblings(".slider");
    console.log(tg);

    // li a요소 넓이
    let liW = $(".gnb ul").width()/10;
    // console.log(-liW)


    
    // 2. 분기하여 기능구현하기
    // (1) 오른쪽 버튼 클릭시 : (left: 0 -> -100%)
    if(isB){
      temp++;
      if(temp===10) temp =9;
    }
    else{
      temp--;
      if(temp===-1) temp = 0;
    }
    tg.animate({left:-(liW*temp)+"px"}, 300)
    console.log(liW);
    console.log(temp)
    console.log(-temp*liW+"px")
    
  }; /////////// goSlide 함수 ////////////
  
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
          {/* 왼쪽버튼박스 */}
          <div className="mbtnLbx">
            <div className="mbtn lb" onClick={goSlide}>
              <div className="btbt lbt"></div>
              <div className="btbt lbb"></div>
            </div>
          </div>
          {/* 오른쪽 버튼박스 */}
          <div className="mbtnRbx">
            <div className="mbtn rb" onClick={goSlide}>
              <div className="btbt rbt"></div>
              <div className="btbt rbb"></div>
            </div>
          </div>
          <ul className="slider">
            {gnb_data.map((v, i) => (
              <li key={i}>
                <Link to={v.link}>
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
      <footer className="info">
        <div className="txt">
          © 2023 Airbnb, Inc. · 개인정보 처리방침 · 이용약관 · 사이트맵 · 한국의 변경된 환불 정책 · 회사 세부정보
        </div>
        <div className="txt2">
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland |
          이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 |
          연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는
          통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.
          에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </div>
      </footer>
    </>
  );
}; //////////////////// Layout 컴포넌트 //////////////////////

// 내보내기
export default Layout;
