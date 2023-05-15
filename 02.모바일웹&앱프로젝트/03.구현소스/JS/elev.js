// 프라이탁 elevator 서브JS - ele.js

// import topNav from "./topNav.js";

// $(() => {
//   topNav();

function elev() {
  /************ 엘레베이터 영역 ************/
  $(".bags").draggable();
  // 불켜짐표시 처음에 숨기기
  $(".light").hide();

  $(".door").droppable({
    drop: function (evt, ui) {
      ui.draggable.fadeOut(300);
      console.log(33);
      $(".alldoor").addClass("close");
      // 불켜짐표시 보이기
      $(".light").delay(600).show(100);

      let isrc = ui.draggable.find("img").attr("src");
      console.log("누구냐", isrc);
      $(this).css({ background: "url(" + isrc + ") no-repeat center bottom 10%/70%" });
      setTimeout(() => {
        $(this).css({ background: "none" });
        $(".alldoor").addClass("on");
      }, 2200); ///// timeout /////////
      setTimeout(() => {
        $("#ele").css({
            transition:"3s",
            transform: "translateY(-100%)",
          });
      }, 4000); ///// timeout /////////
    },
  }); //////// drop /////////

  /*********** 엘레베이터 영역 끝 ***********/
}

// 내보내기
export default elev;

// }); ///////////// JQB /////////////////
