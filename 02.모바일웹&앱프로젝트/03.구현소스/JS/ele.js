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

  /************ 엘레베이터 영역 ************/
  $(".bags").draggable();

  $(".ww").droppable({
    drop: function (evt, ui) {
      ui.draggable.fadeOut(300);
      console.log(33);
      $(".qw").addClass("on");

      let isrc = ui.draggable.find("img").attr("src");
      console.log("누구냐",isrc);
      $(this).css({ background: "url(" + isrc + ") no-repeat center bottom 10%/40%" });
      setTimeout(() => {
        $(this).css({ background: "none" });
        $(".qw").addClass("on2");
      }, 1000);
    },
  });


}); ///////////// JQB /////////////////
