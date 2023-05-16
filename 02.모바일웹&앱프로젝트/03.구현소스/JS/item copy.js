// 프라이탁 elevator 서브JS - ele.js

// 탑네비함수 가져오기
import topNav from "./topNav.js";
// 엘레베이터함수 가져오기
import elev from "./elev.js";
// 공통네비 데이터 가져오기
import comData from '../tempData/data-common.js';
// 엘레베이터 데이터 가져오기
import elevData from "../tempData/data-elev.js";
// 서브데이터(메인영역) 가져오기
import subData from '../tempData/data-sub.js';

// 뷰엑스 스토어 JS 가져오기
import store from "./store.js";




//##### 엘리베이터 뷰 템플릿 셋팅하기 #####//
// Vue.component(내가지은요소명,{옵션})
Vue.component("elev-comp",{
  template: elevData.elev,
}); ///// 상단영역 Vue component //////

//##### 상단영역 메뉴 뷰 템플릿 셋팅하기 #####//
// Vue.component(내가지은요소명,{옵션})
Vue.component("top-comp",{
  template: comData.tarea,
}); ///// 상단영역 Vue component //////


//##### 상단영역 뷰 인스턴스 생성하기 #####//
new Vue({
  el:"#eleV",
  // store,
  data:{},
  mounted: function(){
    elev();
  }
}); ////////// 엘리베이터 영역 뷰 인스턴스 //////////


//##### 상단영역 뷰 인스턴스 생성하기 #####//
new Vue({
  el:"#top",
  // store, // 뷰엑스 스토어 사용시 등록필수!
  data:{},
  // mounted 실행구역 : DOM연결후
  mounted: function(){
    // console.log("mounted구역");
    // 상단네비기능 호출
    topNav();
  },
  // created 실행구역 : DOM연결전
  created: function(){
    // DOM연결전 데이터 가공작업
    // console.log("created구역")
  },
}); //////// 상단영역 뷰 인스턴스 //////////


//##### 서브메인 컨텐츠 뷰 템플릿 셋팅하기 #####//
// 1. 컨텐츠영역 컴포넌트
// Vue.component(내가지은요소명,{옵션})
Vue.component("contents1-comp",{
  template: subData.contents,
}); ///// 메인영역 Vue component /////
Vue.component("contents2-comp",{
  template: subData.contentsSub,
  methods:{
    goData(pm){
      store.commit('updateBig',pm)
    }
  }
}); ///// 메인영역 Vue component /////


// 2. 설명영역 컴포넌트
Vue.component("intro-comp",{
  template: subData.intro,
}); ///// 메인영역 Vue component /////

//##### 서브메인 뷰 인스턴스 셋팅하기 #####//
new Vue({
  el:"#cont",
  store, // 뷰엑스 스토어 등록필수!!!
  data:{
    items:{}, // json데이터 담을 변수
  },
  mounted(){
    // 임시숨기기
    // $("#ele").hide();
    $(".infoList li").each((idx, ele) => {
      $(ele).click(() => {
        $(".infoList li").removeClass("on");
        $(ele).addClass("on");
      });
    });
    $(".door").droppable({
      drop: function (evt, ui) {
        ui.draggable.fadeOut(300);
  
        // 드롭된 정보
        let getInfo = ui.draggable.find("img").attr("src");
        getInfo = getInfo.split("/");
        getInfo = getInfo[getInfo.length-1].split(".")[0];
        console.log("숫자:",getInfo);

        store.state.inum = getInfo-1;
        console.log(store.state.inum)
  
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
              transition:"2s",
              transform: "translateY(-100%)",
            });
        }, 4000); ///// timeout /////////
  
  
      },
    }); //////// drop /////////

    $(".item a").click(function(e){
      e.preventDefault();
      store.state.optview = 2;
    })


  },
  // 뷰 인스턴스 생성직후(가상돔/ 돔 생성전)
  created(){
    // Vuex.Store actions구역 메서드 initData호출하기! 
    store.dispatch('initData');
  }
}); //////// 서브영역 뷰 인스턴스 ////////////