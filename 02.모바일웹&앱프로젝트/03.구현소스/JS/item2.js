// 프라이탁 elevator 서브JS - ele.js

$(() => {
  /******************** 상단 네비영역 ********************/
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
      // $(".smenu").hide();
    }
  }); ///////// click //////////

  // 검색버튼 클릭시 input 보이기
  $(".sech>div").on("click", function () {
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
  /******************** 상단 네비영역 끝 ********************/

  /* 슬라이드 */
  const dragSlide = $(".islide");

  dragSlide.draggable({
    axis:"x",
  }) ///// 드래그 /////
  .css({
    transition:".8s ease-out"
  }); ///////// css //////////
  let fpt = $(window).width() / 3;
  let lpt = dragSlide.width() - fpt*2;

  $("html,body").on("mousedown mouseup mousemove", () => {
    // 1. 움직이는 요소 left 위치값
    let mpos = dragSlide.position().left;

    // 2. 처음한계값에 고정!
    if (mpos > fpt) {
      dragSlide.css({
        left: fpt + "px",
      }); //////// css //////////
    } ///////// if /////////
    // 3. 마지막한계값 체크하여 제한하기
    else if (mpos < -lpt) {
      // 마지막한계값에 고정!
      dragSlide.css({
        left: -lpt + "px",
      }); /////// css /////////
    } /////// else if /////////
  }); ///////// 마우스 이벤트 함수 ////////////

  
}); ///////////// JQB /////////////////
