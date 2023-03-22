// 웹프로젝트 POLYTERU JS - main.js

//////////// 로드구역 /////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("로딩완료!");
  
  // 드래그 방지 함수 //
  document.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  // 새로고침시 스크롤 맨위로 //
  setTimeout(()=>{
    window.scrollTo(0,0);
  },100); // 0.1초정도는 줘야효과있음!

  // GNB 마우스 오버시 서브메뉴 등장 변수 //

  // gnb밑의 li
  let li = document.querySelectorAll(".gnb>ul>li");
  // console.log(li);
  // .smenu
  const smenu = document.querySelector(".smenu");
  // .smenu ol 의 높이변수
  let shv = smenu.querySelector(".smenu ol").clientHeight;
  // console.log(shv);
  const move_top = document.querySelector(".move_top");
  // console.log(move_top);

  
  

  
  /********************************************** 
    상단 탑메뉴 햄버거 버튼 클릭시 토글기능구현
  **********************************************/
  // 1. 대상 : .ham(이벤트/변경), .gnb_bx(변경)
  const ham = document.querySelector(".ham");
  const gnb_bx = document.querySelector(".gnb_bx");
  // console.log(ham,gnb_bx);
  
  // 2. 이벤트설정
  ham.onclick = () => {
    ham.classList.toggle("on");
    gnb_bx.classList.toggle("on");
    document.body.classList.toggle("on");
    document.querySelector("html").classList.toggle("on");
    // if(document.querySelector("html").style.overflow = 'hidden'){
    //   document.querySelector("html").style.overflow = 'auto';
    // }
    // if(ham.classList.toggle("on")){
    //   document.body.style.backgroundColor = "rgba(0, 0, 0, 0.459)"
    // }
  }; /////////// 햄버거버튼 클릭 함수 /////////
  
  
  
  
  /*************************************** 
    GNB 마우스 오버시 li 밑줄효과 (on,on2)
  ***************************************/
    li.forEach((ele,idx)=>{
      ele.onmouseenter = () => {
        // 마우스오버시 클래스 on주고 on2지우기
        ele.classList.add("on");
        ele.classList.remove("on2");
        // 두번째 li에 오버시 smenu보이기
        if(idx == 1){
          smenu.style.opacity = 1;
          smenu.style.height = shv + "px";
        } //////// if /////////
      }; /////// mouseenter ////////
      ele.onmouseleave = () => {
        // 마우스아웃시 클래스 on2주기
        ele.classList.add("on2");
        ele.classList.remove("on");
        // 두번째 li에 아웃시 smenu 안보이기
        if(idx == 1){
          smenu.style.opacity = 0;
          smenu.style.height = 0;
        } //////// if ////////
      }; ////// mouseleave ///////
    }); /////// forEach ////////
  


  // 그리드 구역 태그넣기
  // 그리드태그 hcode를 함수로 만들어 위쪽에 호출한다!
  // * 스크롤이벤트 / 함수 아래쪽에 써서 인식안되었음! *
  gridbxTags();
  
  /**************************** 
    스크롤 등장액션 구현하기
  ****************************/
  // 스크롤 그리드 등장대상: .item
  const grid_item = document.querySelectorAll(".item");
  // console.log(grid_item);
  // 스크롤 스타일 등장대상: .sitem
  const s_item = document.querySelectorAll(".sitem");
  // 화면높이값의 2/3구하기
  const whv = (window.innerHeight / 3) * 2;
  // console.log("2/3높이:",whv);
  // 등장액션 대상 위치값 리턴함수 
  const retVal = (ele) => ele.getBoundingClientRect().top;

  const classIt = (ele, idx) => {
    // ele - 등장요소, idx - 요소순번
    // 대상요소의 현재 스크롤 위치
    let grid_Val = retVal(ele);

    // 0보다 크고 화면의 2/3보다  작은 구간!
    if (grid_Val < whv && grid_Val > 0) {
      ele.classList.add("on");
      ele.style.transitionDelay = `${idx * 0.1}s`; 
      
    } ////// 구간에 들어올시 "on"적용 if문 //////

    // 상단 이동버튼 클래스 on 넣기/빼기
    let scrl = window.scrollY;
    if(scrl > 600){
      move_top.classList.add("on");
    } // 상단 이동버튼 클래스 on 넣기/빼기 if
    else{
      move_top.classList.remove("on");
    } // 상단 이동버튼 클래스 on 넣기/빼기 else

  }; ///////// classIt 함수 /////////
  
  // 스크롤 이벤트 셋팅 /////////
  window.addEventListener("scroll", () => {
    // for (let i = 0; i < grid_item.length; i++) {
    //   classIt(grid_item[i], i);
    // }
    grid_item.forEach((ele,idx)=>{
      classIt(ele,idx);
    }); //////// 그리드아이템 분기 forEach //////////
  }); ///////// scroll //////////////
  


  ///////////////////// grid구역 태그넣기 //////////////////////////
  function gridbxTags(){

  // 상품넣을 박스
  const gridbx = document.querySelector(".gridbx");

  // 상품객체만큼 화면에 태그 데이터바인딩하기
  let hcode = "";

  for(let x in gdsObj){
    // x는 속성명
      hcode += `
      <div class="item itbx1">
        <a href="#">
            <div class="iimg">
              <img src="./images/item_imgs/ALL/${gdsObj[x]["이미지1"]}.jpg">
              <img src="./images/item_imgs/ALL/${gdsObj[x]["이미지2"]}.jpg">
            </div>
        </a>
        <div class="itxt">
          <div class="iname1">
            <a href="#">${gdsObj[x]["상품명"]}</a>
          </div>
          <div class="ssn">
            ${gdsObj[x]["구분"]}
          </div>
          <span>${gdsObj[x]["가격"]}</span>
        </div>
      </div>
      `;
  } ////////// for in /////////

  // grid구역 태그넣기
  gridbx.innerHTML = hcode;
  
} /////////////// gridbx_Tags함수 ////////////////////////



}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////