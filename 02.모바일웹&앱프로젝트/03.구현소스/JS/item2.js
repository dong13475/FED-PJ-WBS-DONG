// 프라이탁 아이템2 서브JS - item2.js

function item2() {
  /* 슬라이드 */
  const dragSlide = $(".islide");
  
  dragSlide
    .draggable({
      axis: "x",
    }) ///// 드래그 /////
    .css({
      transition: ".8s ease-out",
    }); ///////// css //////////
  let fpt2 = $(".vSlidebx").width() / 3;
  let lpt2 = dragSlide.width() - fpt2 * 2;

  $("html,body").on("mousedown mouseup mousemove", () => {
    // 1. 움직이는 요소 left 위치값
    let mpos2 = dragSlide.position().left;

    // 2. 처음한계값에 고정!
    if (mpos2 > fpt2) {
      dragSlide.css({
        left: fpt2 + "px",
      }); //////// css //////////
    } ///////// if /////////
    // 3. 마지막한계값 체크하여 제한하기
    else if (mpos2 < -lpt2) {
      // 마지막한계값에 고정!
      dragSlide.css({
        left: -lpt2 + "px",
      }); /////// css /////////
    } /////// else if /////////
  }); ///////// 마우스 이벤트 함수 ////////////
} /////////// item2 함수 //////////////

// 내보내기
export default item2;
