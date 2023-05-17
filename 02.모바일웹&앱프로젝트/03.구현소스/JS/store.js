// 뷰JS 데이터처리 뷰엑스 스토어 JS - store.js

const store = new Vuex.Store({
  // (1) 데이터 셋팅구역 :
  state: {
    BACKPACKS: {
      F155_CLAPTON: {
        name:"F155_CLAPTON",
        idx: 10,
        price: "₩452,000",
        code: [
          "F155_08406",
          "F155_08270",
          "F155_08325",
          "F155_08156",
          "F155_08151",
          "F155_08411",
          "F155_08280",
          "F155_08218",
          "F155_08403",
          "F155_08332",
        ],
      },
      F253_KOWALSKI: {
        idx: 10,
        price: "₩336,000",
        code: [
          "F253_04612",
          "F253_04630",
          "F253_04595",
          "F253_04599",
          "F253_04587",
          "F253_04551",
          "F253_04554",
          "F253_04583",
          "F253_04602",
          "F253_04592",
        ],
      },
      F306_HAZZARD: {
        idx: 10,
        price: "₩510,000",
        code: [
          "F306_07670",
          "F306_07863",
          "F306_07329",
          "F306_07861",
          "F306_07775",
          "F306_07527",
          "F306_07478",
          "F306_07754",
          "F306_07762",
          "F306_07857",
        ],
      },
    },
    LAPTOP_BAGS: {
      F304_MOSS: {
        idx: 10,
        price: "₩364,000",
        code: [
          "F304_02456",
          "F304_02448",
          "F304_02456",
          "F304_02354",
          "F304_02040",
          "F304_02058",
          "F304_02449",
          "F304_01713",
          "F304_02075",
          "F304_02474",
        ],
      },
      F305_ROY: {
        idx: 10,
        price: "₩424,000",
        code: [
          "F305_02701",
          "F305_02769",
          "F305_02860",
          "F305_02816",
          "F305_02311",
          "F305_02897",
          "F305_02920",
          "F305_02594",
          "F305_02830",
          "F305_02651",
        ],
      },
    },
    MESSENGER_BAGS: {
      F11_LASSIE: {
        idx: 10,
        price: "₩336,000",
        code: [
          "F11_24159",
          "F11_24596",
          "F11_24585",
          "F11_23962",
          "F11_24754",
          "F11_24679",
          "F11_24493",
          "F11_24108",
          "F11_24615",
          "F11_24458",
        ],
      },
      F40_JAMIE: {
        idx: 10,
        price: "₩218,000",
        code: [
          "F40_06457",
          "F40_06966",
          "F40_06886",
          "F40_07072",
          "F40_07035",
          "F40_06861",
          "F40_06980",
          "F40_06990",
          "F40_06803",
          "F40_07071",
        ],
      },
      F41_HAWAII_FIVE_O: {
        idx: 10,
        price: "₩248,000",
        code: [
          "F41_47863",
          "F41_47817",
          "F41_46552",
          "F41_47933",
          "F41_47905",
          "F41_47869",
          "F41_47932",
          "F41_48073",
          "F41_47821",
          "F41_47678",
        ],
      },
    },
    SHOPPER_BAGS: {
      F52_MIAMI_VICE: {
        idx: 10,
        price: "₩190,000",
        code: [
          "F52_18145",
          "F52_18312",
          "F52_18440",
          "F52_18452",
          "F52_18154",
          "F52_18206",
          "F52_18376",
          "F52_18394",
          "F52_18468",
          "F52_18520",
        ],
      },
      F203_BOB: {
        idx: 10,
        price: "₩364,000",
        code: [
          "F203_08959",
          "F203_08763",
          "F203_08874",
          "F203_09054",
          "F203_08997",
          "F203_08996",
          "F203_09017",
          "F203_08808",
          "F203_08915",
          "F203_08976",
        ],
      },
      F560_STERLING: {
        idx: 10,
        price: "₩364,000",
        code: [
          "F560_04868",
          "F560_04774",
          "F560_04575",
          "F560_04706",
          "F560_04870",
          "F560_04552",
          "F560_04808",
          "F560_04767",
          "F560_04668",
          "F560_04864",
        ],
      },
    },
    SHOULDER_BAGS: {
      F553_LOU: {
        idx: 10,
        price: "₩248,000",
        code: [
          "F553_11720",
          "F553_11698",
          "F553_11712",
          "F553_11541",
          "F553_11670",
          "F553_11710",
          "F553_11536",
          "F553_11626",
          "F553_11636",
          "F553_11543",
        ],
      },
    },
    SPORTS_BAGS: {
      F45_LOIS: {
        idx: 10,
        price: "₩364,000",
        code: [
          "F45_08110",
          "F45_08279",
          "F45_08669",
          "F45_08533",
          "F45_08394",
          "F45_08283",
          "F45_08677",
          "F45_08616",
          "F45_08537",
          "F45_08657",
        ],
      },
      F512_VOYAGER: {
        idx: 10,
        price: "₩540,000",
        code: [
          "F512_04994",
          "F512_05344",
          "F512_05421",
          "F512_05444",
          "F512_05273",
          "F512_05419",
          "F512_05334",
          "F512_05440",
          "F512_05435",
          "F512_05387",
        ],
      },
    },
    // 공통처리 코드 변수
    code: [],
    // 공통처리 가격 변수
    price: "",
    // 공통처리 개수 변수
    idx: 0,
    // 공통처리 분류명
    sort: "",
    // 공통처리 이름
    name: "",
    cnt:0,
    optview:1,
    inum:2,
    bnum:1,
    tname:"",
  }, ////// state 구역 //////

  // (2) 데이터 변경 메서드 구역 :
  // 호출시 commit() 사용!!!
  mutations: {
    // 데이터 변경 셋업 메서드
    chgData(dt, pm) {
      // dt-state데이터, pm-전달값
      console.log("데이터변경:", pm);
      // console.log(dt)
      // pm에 객체데이터 속성명이 전달됨
      // 1. 해당 카테고리 가격 업데이트
      // dt.price = dt[pm].F45_LOIS.price;
      // 2. 해당 카테고리 개수 업데이트
      // dt.idx = dt.bagD[pm].idx;
      // 3. 해당 카테고리 상품코드 업데이트
      // dt.code = dt.bagD[pm].code;
      
      // 1. 해당 분류명 업데이트
      dt.sort = pm;
      console.log(dt.sort);
      // console.log(dt[pm]);

      // 2. 해당 갯수 업데이트
      console.log(Object.keys(dt[pm]).length);
      dt.cnt = Object.keys(dt[pm]).length;
      console.log("cnt??",dt.cnt)

      // 3. 해당 이름 업데이트
      // console.log(Object.keys(dt[pm]));
      dt.name = Object.keys(dt[pm]);
      // console.log("이름:",dt.name[1]);

      // 4. 해당 가격 업데이트
      // console.log("금액은얼마?",Object.values(dt[pm])[store.state.inum]["price"]);
      dt.price = Object.values(dt[pm]);
      // console.log(dt.price);
      // console.log("아이넘:",store.state.inum);
      // dt.price = Object.keys(dt[pm]);
      // console.log(Object.values(dt[pm][]))

      // 5. 해당 코드 업데이트

      

      // console.log(Object.keys(dt[pm])[2])
      // console.log("가격:",dt[pm]["F155_CLAPTON"]["price"]);
      // console.log("아이템수:",dt[pm]["F155_CLAPTON"]["idx"]);
      // console.log("코드:",dt[pm]["F155_CLAPTON"]["code"]);
      
      // console.log(dt[pm]["F512_VOYAGER"]["idx"])

    }, ///////// chgData 메서드 /////////
    updateBig(st,pm){
      st.bnum = pm;
      console.log("st.bnum",st.bnum)
    },
  }, /////// mutations 구역 /////////
}); ////////// 뷰엑스 인스턴스 ///////////

// 내보내기
export default store;
