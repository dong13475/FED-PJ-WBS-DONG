// 프라이탁 PJ 메인 JS - main.js

$(()=>{ /////////// JQB /////////////

  // 햄버거버튼 클릭시 메뉴 활성화
  $(".ham").on("click",function(){
    // $(this).addClass("on");
    $(this).toggleClass("on");
    $(".gnbbx").toggleClass("on");

    // if($(".gnbbx").index("on")){
    //   $(".gnbbx").show();
    // }
    // else{
    //   $(".gnbbx").hide();
    // }
  }); ///////// click //////////
}); //////////// JQB ///////////////