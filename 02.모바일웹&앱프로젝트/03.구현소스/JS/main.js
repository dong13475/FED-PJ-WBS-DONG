// 프라이탁 PJ 메인 JS - main.js

import topNav from "./topNav.js";

$(() => {
  /////////// JQB /////////////
  topNav();

  // 메인 배경 로딩시 랜덤으로 이미지 변경 //
  let rdm = Math.ceil(Math.random()*4)
  // rdm = rdm*3
  console.log("랜덤수:",rdm);
  let hcode = `
    <img src="./images/main/${rdm}.jpg" alt="배경이미지" />
  `
  $(".mainBg").html(hcode);
  /////////// 이미지 변경 //////////

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
  let fpt = $("#dragBx").width() / 3;
  // console.log("한계값:",fpt,$(window).width());
  
  // (2) 마지막 한계값 설정 :
  // 드래그박스가로크기 - 화면크기 2/3
  let lpt = dragBag.width() - fpt * 2;
  // console.log("마지막한계값:",lpt);

  // (3) 마우스 이벤트로 left값 체크하여 제한
  $("html,body").on("mousedown mouseup mousemove", () => {
    // 1. 움직이는 요소 left 위치값
    let mpos = dragBag.position().left;
    // console.log("left위치값:",mpos);

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


  /*** 메인 페이지 악세서리 드래그 ***/
  // 1. 드래그 대상 : .dragBag
  const dragAcc = $(".dragAcc");

  // 2. 가방박스 드래그설정
  dragAcc
    .draggable({
      axis: "x", // x축 고정
    })
    .css({
      transition: ".8s ease-out",
    }); ////// css ////////

  // 3. 한계값 설정
  // (1) 화면크기의 1/3로 설정
  let fptA = $("#dragAcc").width() / 6;
  // console.log("한계값:",fptA,$(window).width());
  
  // (2) 마지막 한계값 설정 :
  // 드래그박스가로크기 - 화면크기 2/3
  let lptA = dragAcc.width() - fptA * 6;
  // console.log("마지막한계값:",lptA);

  // (3) 마우스 이벤트로 left값 체크하여 제한
  $("html,body").on("mousedown mouseup mousemove", () => {
    // 1. 움직이는 요소 left 위치값
    let mposA = dragAcc.position().left;
    // console.log("left위치값:",mposA);

    // 2. 처음한계값에 고정!
    if (mposA > fptA) {
      dragAcc.css({
        left: fptA + "px",
      }); //////// css //////////
    } ///////// if /////////
    // 3. 마지막한계값 체크하여 제한하기
    else if (mposA < -lptA) {
      // 마지막한계값에 고정!
      dragAcc.css({
        left: -lptA + "px",
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
