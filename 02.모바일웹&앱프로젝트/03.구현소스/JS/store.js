// 뷰JS 데이터처리 뷰엑스 스토어 JS - store.js

// 제이슨 데이터 처리위해 제이슨 불러오기!
import bagData from "./bag_data.json" assert{type:"json"};

const store = new Vuex.Store({
  // (1) 데이터 셋팅구역 :
  state:{
    items:{}, // 제이슨 데이터 담을 변수
    optview:1,
    inum:2,
    bnum:1,
  }, ////// state 구역 //////

  // (2) 데이터 변경 메서드 구역 :
  // 호출시 commit() 사용!!!
  mutations:{
    // 제이슨 데이터 속성변수 업데이트 하기
    setData(st,pm){ // st-state변수,pm-전달변수
      // state구역 items변수에 제이슨 데이터 담기!
      st.items = pm;
      console.log("뮤테이션",pm);
    },
    updateBig(st,pm){
      st.bnum = pm;
    }
  }, /////// mutations 구역 /////////

  // (3) 백엔드 관련 코딩 비동기처리 메서드 구역 :
  // 호출시 dispatch() 사용!!!
  actions:{
    // 제이슨 데이터 로드하기 메서드
    initData(){
      // 전달값으로 {commit}을 쓰면 
      // 뮤테이션 구역으로 바로 commit사용가능!
      // 제이슨 데이터 변수에 할당!
      const result = bagData;

      // state의 items변수변경 메서드 호출
      this.commit('setData',result)
    }
  }, /////// actions 구역 ///////
}); ////////// 뷰엑스 인스턴스 /////////// 

// 내보내기
export default store;