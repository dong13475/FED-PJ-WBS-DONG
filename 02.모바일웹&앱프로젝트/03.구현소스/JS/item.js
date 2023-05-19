// 프라이탁 elevator 서브JS - ele.js

// 탑네비함수 가져오기
import topNav from "./topNav.js";
// 엘레베이터함수 가져오기
import elev from "./elev.js";
// 아이템2함수 가져오기
import item2 from "./item2.js";
// 공통네비 데이터 가져오기
import comData from "../tempData/data-common.js";
// 엘레베이터 데이터 가져오기
import elevData from "../tempData/data-elev.js";
// 서브데이터(메인영역) 가져오기
import subData from "../tempData/data-sub.js";

// 뷰엑스 스토어 JS 가져오기
import store from "./store.js";

// 바로실행구역 함수구역 ///
// 바로실행구역을 쓰는이유:
// 변수나 명령어를 다른 영역과 구분하여
// 코딩할때 주로 사용됨!
// GET방식 데이터를 store에서 초기값으로 셋팅하는 것을
// 인스턴스 생성전에 해야 아래쪽에 빈값으로 셋팅된값이
// 들어가서 에러나는 것을 막을 수 있다!
(() => {
  // 파라미터 변수
  let pm;

  // GET 방식으로 넘어온 데이터 처리하여
  // 분류별 서브 페이지 구성하기!
  // location.href -> 상단 url읽어옴!
  // indexOf("?")!==-1 -> 물음표가 있으면!
  if (location.href.indexOf("?") !== -1) pm = location.href.split("?")[1].split("=")[1];
  // 물음표(?)로 잘라서 뒤엣것,이퀄(=)로 잘라서 뒤엣것
  // 파라미터 값만 추출함!
  // pm에 할당이 되었다면 undefined가 아니므로 true
  if (pm) store.commit("chgData", decodeURI(pm));

  // decodeURI() - 변경할 문자열만 있어야 변환됨
  // decodeURIComponent() - url전체에 섞여 있어도 모두 변환
})(); ////////////// 바로실행함수구역 ///////////////////

//##### 엘리베이터 뷰 템플릿 셋팅하기 #####//
// Vue.component(내가지은요소명,{옵션})
Vue.component("elev-comp", {
  template: elevData.elev,
}); ///// 상단영역 Vue component //////

//##### 상단영역 메뉴 뷰 템플릿 셋팅하기 #####//
// Vue.component(내가지은요소명,{옵션})
Vue.component("top-comp", {
  template: comData.tarea,
}); ///// 상단영역 Vue component //////

//##### 상단영역 뷰 인스턴스 생성하기 #####//
new Vue({
  el: "#eleV",
  store,
  data: {},
  mounted: function () {
    elev();
  },
}); ////////// 엘리베이터 영역 뷰 인스턴스 //////////

//##### 상단영역 뷰 인스턴스 생성하기 #####//
new Vue({
  el: "#top",
  // store, // 뷰엑스 스토어 사용시 등록필수!
  data: {},
  // mounted 실행구역 : DOM연결후
  mounted: function () {
    // console.log("mounted구역");
    // 상단네비기능 호출
    topNav();
  },
  // created 실행구역 : DOM연결전
  created: function () {
    // DOM연결전 데이터 가공작업
    // console.log("created구역")
  },
}); //////// 상단영역 뷰 인스턴스 //////////

//##### 서브메인 컨텐츠 뷰 템플릿 셋팅하기 #####//
// 1. 컨텐츠영역 컴포넌트
// Vue.component(내가지은요소명,{옵션})
Vue.component("contents1-comp", {
  template: subData.contents,
  methods: {
    goData(pm) {
      store.commit("updateBig", pm);
      // console.log(555);
    },
  },
}); ///// 메인영역 Vue component /////
Vue.component("contents2-comp", {
  template: subData.contentsSub,
  methods: {
    goData(pm) {
      store.commit("updateBig", pm);
    },
  },
}); ///// 메인영역 Vue component /////

// 2. 설명영역 컴포넌트
Vue.component("intro-comp", {
  template: subData.intro,
  methods: {},
}); ///// 메인영역 Vue component /////

//##### 서브메인 뷰 인스턴스 셋팅하기 #####//
new Vue({
  el: "#cont",
  store, // 뷰엑스 스토어 등록필수!!!
  data: {
    // items:{}, // json데이터 담을 변수
  },
  mounted() {
    // 엘리베이터 임시숨기기
    // $("#ele").hide();

    // 설명박스 클릭시 해당 내용 뜨게 하기
    $(".infoList li").each((idx, ele) => {
      $(ele).click(() => {
        $(".infoList li").removeClass("on");
        $(ele).addClass("on");
        if (idx === 0) {
          $(".dimen").css("display", "block");
        } else {
          $(".dimen").css("display", "");
        } //////// 첫번째 내용 /////////
        if (idx === 1) {
          $(".dimen").css("display", "none");
          $(".materi").css("display", "block");
        } else {
          $(".materi").css("display", "");
        } //////// 두번째 내용 /////////
        if (idx === 2) {
          $(".dimen").css("display", "none");
          $(".vid").css("display", "block");
        } else {
          $(".vid").css("display", "");
        } //////// 세번째 내용 /////////
      }); ////////// click //////////
    }); ///////// each /////////

    //#### 엘리베이터함수 ####//
    $(".door").droppable({
      drop: function (evt, ui) {
        ui.draggable.fadeOut(300);

        // 드롭된 정보
        let getInfo = ui.draggable.find("img").attr("src");
        console.log(getInfo);
        getInfo = getInfo.split("/");
        getInfo = getInfo[getInfo.length - 1].split(".")[0];
        console.log("숫자:", getInfo);

        store.state.inum = getInfo - 1;
        // console.log("inum:",store.state.inum.length)

        console.log("inum:", store.state.inum);

        // 드롭정보
        let tgName = ui.draggable.find("img").attr("src");
        console.log(tgName);
        tgName = tgName.split("/");
        tgName = tgName[tgName.length - 2].split(".");
        console.log("tname:", tgName);

        store.state.tname = tgName;

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
            transition: "2s",
            transform: "translateY(-100%)",
          });
        }, 4000); ///// timeout /////////
      }, ////// drop ////////
    }); //////// droppable /////////

    $(".item a").click(function (e) {
      e.preventDefault();
      console.log("요기~!");
      store.state.optview = 2;
      setTimeout(() => {
        item2();
      }, 1000);
      $(".closebtn").click(function () {
        store.state.optview = 1;
        console.log("눌림");
      });
    });
  }, /////// mounted //////////
  // 뷰 인스턴스 생성직후(가상돔/ 돔 생성전)
  created() {},
}); //////// 서브영역 뷰 인스턴스 ////////////
