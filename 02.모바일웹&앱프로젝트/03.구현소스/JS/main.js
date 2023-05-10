// 프라이탁 PJ 메인 JS - main.js

$(() => {
  /////////// JQB /////////////

  /************* 상단이동 영역 *************/
  // 새로고침시 페이지 맨위로 이동!
  setTimeout(()=>{
    window.scrollTo(0,0);
  },100); //// timeout ////
  // 상단이동버튼 클릭시 맨위로 이동!
  $(".moveTop").click(function(){
    window.scrollTo(0,0);
  }); //// click ////
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
      // $(".smenu").hide();
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

  // 흘러가는 이미지
  var width = 0;
  $(".floating ol li").each(function () {
    width += $(this).outerWidth(true);
  });
  $(".floating").width(width * 2);
  $(".floating").append($(".floating").html());
  function loop() {
    $(".floating").animate({ left: "-=3" }, 10, "linear", function () {
      if ($(".floating").offset().left < -width) {
        $(".floating").css("left", 0);
      }
      loop();
    });
  }
  loop();

  /* 신상.js 흘러가는 이미지코드 */
  /************************************** 
  함수명 : moveList
  기능 : 신상품 리스트박스를 연속하여 
        왼쪽방향으로 흘러가게 함!     
  **************************************/
  // // 대상 : .flist
  // const flist = $(".flist");
  // // 위치값변수
  // let lpos = 0;
  // // 재귀호출 상태값변수 (1-호출가능/0-호출불가)
  // let call_sts = 1;

  // function moveList() {
  //   // 1. 이동위치값(left값) 감소하기
  //   lpos--;

  //   console.log("위치값:", lpos);

  //   // 2. 한계값 초기화하기 + 첫번째 요소 맨뒤로 이동하기!
  //   if (lpos < -300) {
  //     // 위치값 초기화
  //     lpos = 0;

  //     // 첫번째 li 맨뒤로 이동!
  //     flist.append(flist.find("li").first());
  //   }

  //   // 3. 이동하기
  //   flist.css({
  //     left: lpos + "px",
  //   });

  //   // 재귀호출하기(비동기호출-setTimeout)
  //   setTimeout(moveList, 40);
  // } /////////// moveList 함수 /////////////

  // // 신상품 이동함수 최초호출
  // moveList();



  /*** 메인 페이지 가방 드래그 ***/
  // 1. 드래그 대상 : .dragBag
  const dragBag = $(".dragBag");

  // 2. 가방박스 드래그설정
  dragBag
    .draggable({
      axis: "x", // x축 고정
    })
    .css({
      transition: ".8s ease-out",
    }); ////// css ////////

  // 3. 한계값 설정
  // (1) 화면크기의 1/3로 설정
  let fpt = $(window).width() / 3;

  // (2) 마지막 한계값 설정 :
  // 드래그박스가로크기 - 화면크기 2/3
  let lpt = dragBag.width() - fpt * 2;

  // (3) 마우스 이벤트로 left값 체크하여 제한
  $("html,body").on("mousedown mouseup mousemove", () => {
    // 1. 움직이는 요소 left 위치값
    let mpos = dragBag.position().left;

    // 2. 처음한계값에 고정!
    if (mpos > fpt) {
      dragBag.css({
        left: fpt + "px",
      }); //////// css //////////
    } ///////// if /////////
    // 3. 마지막한계값 체크하여 제한하기
    else if (mpos < -lpt) {
      // 마지막한계값에 고정!
      dragBag.css({
        left: -lpt + "px",
      }); /////// css /////////
    } /////// else if /////////
  }); ///////// 마우스 이벤트 함수 ////////////


  /* 메인 공정박스 이미지 클릭시 효과 */
  // 리스트 처음에 숨김
  $(".mList").hide();
  // 영역 클릭시 크기 줄어들고 리스트 내려옴
  $(".mbox").click(function(){
    $(this).animate({
    width:"800px",
    cursor:"default"
    },400,function(){
      $(".mList").stop().slideDown(900);
    }); ////// animate //////
  }); ///////// click //////////
  
      }); //////////// JQB ///////////////