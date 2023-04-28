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

  // GNB li에 마우스 오버시 밑줄 애니
  // $(".gnb>ul>li").hover(
  //   function(){
  //     $(".gnb>ul>li>a").removeClass("on2").addClass("on");
  //   },function(){
  //     $(".gnb>ul>li>a").removeClass("on").addClass("on2");
      
  // }); /////////// hover ///////////
  $(".gnb>ul>li").each((idx,ele)=>{
    $(ele).hover(
      function(){
        $(ele).find("a").removeClass("on2").addClass("on");
      },function(){
        $(ele).find("a").removeClass("on").addClass("on2");
    });

  }); ////////// each /////////////
  


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



  
  
  
}); //////////// JQB ///////////////