// 상단 네비 기능 JS - topNav.js

function topNav(){

/************* 상단이동 영역 *************/
  // 새로고침시 페이지 맨위로 이동!
  setTimeout(()=>{
    window.scrollTo(0,0);
  },100); //// timeout ////
  // 상단이동버튼 클릭시 맨위로 이동!
  $(".moveTop").click(function(){
    window.scrollTo(0,0);
  }), //// click ////
  /************* 상단이동 영역 끝 *************/

  /********************** 상단 네비 영역 **********************/
  // 햄버거버튼 클릭시 메뉴 활성화
  $(".ham").on("click", function () {
    // $(this).toggleClass("on").css({left:"80px"}).parents(".btbt").css({width:"130px"});
    $(this).toggleClass("on");
    $(".gnbbx").toggleClass("on");
    // .gnbbx에 클래스 on일때 css 효과
    if ($(".gnbbx").hasClass("on")) {
      $(".gnb>ul>li, .sns, .sName").css({
        opacity: "1",
        transition: ".4s",
      }); ///// css /////
    } else {
      $(".gnb>ul>li, .sns, .sName").css({
        opacity: "0",
        transition: ".4s",
      }); ///// css /////
    }
  }); ///////// click //////////


  // 전체메뉴클릭시 전체메뉴창 닫기
  $(".smenu a").click(
    ()=>$(".ham").trigger("click"));
    // 선택요소.trigger(이벤트명)
    // -> 선택요소의 이벤트 강제발생함!
    // 참고) JS 클릭이벤트 강제발생
    // document.querySelector(요소).click();
  
  // 검색버튼 클릭시 input 보이기
  $(".sech>div").on("click",function(){
    $(".sech").toggleClass("on");
  });
  
  // 서브메뉴 숨기기 -> display:none 처리
  $(".smenu").hide();

  // GNB li 클릭시 서브메뉴 등장
  $(".gnb>ul>li").click(function () {
    // 서브메뉴 등장
    $(this).find(".smenu").stop().slideToggle(400);
    // 화살표 방향
    $(this).find(".arrow").stop().toggleClass("on");
  }); ////////// click /////////

  // GNB li 오버시 밑줄 애니 클래스 "on"추가
  $(".gnb>ul>li").each((idx, ele) => {
    $(ele).hover(
      function () {
        $(ele).find("a").removeClass("on2").addClass("on");
      },
      function () {
        $(ele).find("a").removeClass("on").addClass("on2");
      }
    );
  }); ////////// each /////////////

  // 서브메뉴 마우스 오버시 애니
  $(".smenu>ol>li>a").each((idx, ele) => {
    $(ele).hover(
      function () {
        // 오버시
        $(this).css({
          transform: "translateX(3%) scale(1.03)",
        });
      },
      function () {
        // 아웃시
        $(this).css({
          transform: "scale(1)",
        });
      }
    );
  }); /////// each //////////
  /************************** 상단네비 영역 끝 **************************/

} /////// topNav 함수 ///////////

// 상단네비함수 내보내기
export default topNav;