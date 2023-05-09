// 프라이탁 elevator 서브JS - ele.js

$(() => {

/************ 엘레베이터 영역 ************/
$(".light").hide();
$(".bags").draggable();

$(".door").droppable({
  drop: function (evt, ui) {
    ui.draggable.fadeOut(300);
    console.log(33);
    $(".alldoor").addClass("close");

    $(".light").show();

    let isrc = ui.draggable.find("img").attr("src");
    console.log("누구냐",isrc);
    $(this).css({ background: "url(" + isrc + ") no-repeat center bottom 10%/70%" });
    setTimeout(() => {
      $(this).css({ background: "none" });
      $(".alldoor").addClass("on");
    }, 2000);
  },
});

}); ///////////// JQB /////////////////