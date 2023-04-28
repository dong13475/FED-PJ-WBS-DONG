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


  // GNB li 오버시 밑줄 애니 클래스 "on"추가
  $(".gnb>ul>li").each((idx,ele)=>{
    $(ele).hover(
      function(){
        $(ele).find("a").removeClass("on2").addClass("on");
      },function(){
        $(ele).find("a").removeClass("on").addClass("on2");
    });
  }); ////////// each /////////////

  // 서브메뉴 마우스 오버시 애니
  $(".smenu>ol>li>a").each((idx,ele)=>{
    $(ele).hover(
      function(){ // 오버시
        $(this).css({
          transform:"translateX(3%) scale(1.03)",
        })
    },function(){ // 아웃시
      $(this).css({
        transform:"scale(1)",
      })
    });
  }); /////// each //////////
  


    // 흘러가는 이미지 
    var width = 0;
    $('.floating ol li').each(function() {
      width += $(this).outerWidth(true);
    });
    $('.floating').width(width * 2);
    $('.floating').append($('.floating').html());
    function loop() {
      $('.floating').animate({left: '-=3'}, 10, 'linear', function() {
        if($('.floating').offset().left < -width) {
          $('.floating').css('left', 0);
        }
        loop();
      });
    }
    loop();

    /* 메인 페이지 가방 드래그 */
    // 1. 드래그 대상 : .dragBag
    const dragBag = $(".dragBag");

    // 2. 가방박스 드래그설정
    dragBag.draggable({
      axis:"x" // x축 고정
    })
    .css({
      transition:".8s ease-out"
    }); ////// css ////////

    // 3. 한계값 설정
    // (1) 화면크기의 1/3로 설정
    let fpt = $(window).width()/3;

    // (2) 마지막 한계값 설정 :
    // 드래그박스가로크기 - 화면크기 2/3
    let lpt = dragBag.width() - (fpt*4);

    // (3) 마우스 이벤트로 left값 체크하여 제한
    $("#dragBx").on("mousedown mouseup mousemove",()=>{
      // 1. 움직이는 요소 left 위치값
      let mpos = dragBag.offset().left;

      // 2. 처음한계값에 고정!
      if(mpos > fpt){
        dragBag.css({
          left:fpt+"px"
        }); //////// css //////////
      } ///////// if /////////
      // 3. 마지막한계값 체크하여 제한하기
      else if(mpos < -lpt){
        // 마지막한계값에 고정!
        dragBag.css({
          left: -lpt+"px"
        }); /////// css /////////
      } /////// else if /////////
      
    }); ///////// 마우스 이벤트 함수 ////////////

  
  
  
}); //////////// JQB ///////////////