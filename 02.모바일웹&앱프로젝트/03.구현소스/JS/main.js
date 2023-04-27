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
    // 서브메뉴 등장
    $(this).find(".smenu").stop().slideToggle(400);
    // 화살표 방향
    $(this).find(".arrow").stop().toggleClass("on");
  }); ////////// click /////////
  
    // 흘러가는 이미지 
    var width = 0;
    $('.floating ol li').each(function() {
      width += $(this).outerWidth(true);
    });
    $('.floating').width(width * 2);
    $('.floating').append($('.floating').html());
    function loop() {
      $('.floating').animate({left: '-=1'}, 10, 'linear', function() {
        if($('.floating').offset().left < -width) {
          $('.floating').css('left', 0);
        }
        loop();
      });
    }
    loop();


    // 서브메뉴 밑줄 효과
    // $(".smenu li").hover(
    //   function(){
    //     $(this).
    // },function(){

    // })
  
  
  
}); //////////// JQB ///////////////