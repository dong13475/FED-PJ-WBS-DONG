// 프라이탁 elevator 서브JS - elev.js

function elev() {
  /************ 엘레베이터 영역 ************/
  $(".bags").draggable();
  // 불켜짐표시 처음에 숨기기
  $(".light").hide();

  $(".door").droppable({
    drop: function (evt, ui) {
      ui.draggable.fadeOut(300);

      // 드롭된 정보
      let getInfo = ui.draggable.find("img").attr("src");
      getInfo = getInfo.split("/");
      getInfo = getInfo[getInfo.length - 1].split(".")[0];
      console.log("숫자:", getInfo);

      store.state.inum = getInfo - 1;

      $(".alldoor").addClass("close");
      // 불켜짐표시 보이기
      $(".light").delay(600).show(100);

      let isrc = ui.draggable.find("img").attr("src");
      $(this).css({ background: "url(" + isrc + ") no-repeat center bottom 10%/70%" });
      setTimeout(() => {
        $(this).css({ background: "none" });
        $(".alldoor").addClass("on");
      }, 2200); ///// timeout /////////
      setTimeout(() => {
        $("#ele").css({
          transition: "3s",
          transform: "translateY(-100%)",
        });
      }, 4000); ///// timeout /////////
    },
  }); //////// drop /////////

  /*********** 엘레베이터 영역 끝 ***********/
} //////// elev 함수 /////////

// 내보내기
export default elev;

