// 프라이탁 PJ 메인 JS - main.js

$(()=>{ /////////// JQB /////////////

  // 햄버거버튼 클릭시 메뉴 활성화
  $(".ham").on("click",function(){
    $(this).toggleClass("on");
    $(".gnbbx").toggleClass("on");
  }); ///////// click //////////

  // 서브메뉴 숨기기 -> display:none 처리
  $(".smenu").hide();
  
  // GNB li 클릭시 서브메뉴 등장
  $(".gnb>ul>li").click(function(){
    $(this).find(".smenu").stop().slideToggle(400);
  }); ////////// click /////////

  
}); //////////// JQB ///////////////