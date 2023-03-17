// 웹프로젝트 POLYTERU JS - main.js

//////////// 로드구역 /////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("로딩완료!");
  
  document.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  // GNB 마우스 오버시 서브메뉴 등장 변수 //

  // gnb밑의 li
  let li = document.querySelectorAll(".gnb>ul>li");
  // console.log(li);
  // .smenu
  const smenu = document.querySelector(".smenu");
  // .smenu ol 의 높이변수
  let shv = smenu.querySelector(".smenu ol").clientHeight;
  // console.log(shv);


  // 페이드박스 li 변수 //
  const fadeBx = document.querySelectorAll(".fade_bx li");
  // console.log(fadeBx);
  // 슬라이드번호 변수 : 
  // 배너 이미지와 블릿을 통일시켜주는 중요한변수
  let snum = 0;
  // 페이드개수 변수
  let scnt = fadeBx.length;
  // console.log("페이드개수",scnt);

  
  

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
  


  /************************************** 
    [ 메인페이지 페이드 배너 넣기 함수 ]
    함수명 : go_fade
  **************************************/
  const go_fade = (dir,seq) => { // dir-방향,seq-순번
    // console.log("페이드번호",dir,seq);
    if(dir){
      snum++;
      if (snum === scnt) snum = 0;
    } ///// if /////
    else{ // dir이 0일경우(즉, 블릿클릭일때)
      snum = seq;
    } ///// else /////

    // 페이드 블릿 변경 함수호출
    chgBanner(fadeBx);
    chgBanner(bulit); 

  }; ///////// go_fade 함수 //////////


  let autoI;
  /************************************** 
    [ 인터발함수 설정하기 ]
    함수명 : autoFade
  **************************************/
  function autoFade(){
    autoI = setInterval(() => go_fade(1,0),4000);
  }; //////// autoFade함수 /////////

  autoFade();
  
  let autoT;
  /****************************************** 
    [ 블릿 클릭시 인터발함수 지우고 다시셋팅 ]
    함수명 : clearAuto
  ******************************************/
  function clearAuto(){
    clearInterval(autoI);
    clearTimeout(autoT);
    autoT = setTimeout(autoFade,5000);
  } /////// clearAuto함수 /////////
  

  /***************************************** 
    [ 클릭이벤트 함수 설정하기 ]
  *****************************************/

  // 이벤트 대상 : .bulit 
  const bulit = document.querySelectorAll(".bulit");
  // console.log(bulit);

  bulit.forEach((ele,idx)=>{
    // 클릭이벤트는 부모인 li에 걸어줌!
    // (클릭영역이 너무 작아서...)
    ele.parentElement.onclick = () => {
      clearAuto();
      go_fade(0,idx);
    }; ///// click /////
    
  }); ///////// forEach ////////////


  /*********************************** 
    페이드 / 블릿 변경기능 공통함수
    함수명 : chgBanner
  ***********************************/

  function chgBanner(obj){
    // 전체 리스트 초기화
    obj.forEach(ele => ele.classList.remove("on"));
    // 해당순번 li에 클래스 "on" 넣기
    obj[snum].classList.add("on");
  } ////////// chgBanner 함수 /////////////


// 페이드 블릿 변경 함수호출
chgBanner(fadeBx);
chgBanner(bulit); 

// 태그넣기
insTags();

  /**************************** 
    스크롤 등장액션 구현하기
  ****************************/
  // 스크롤 등장대상: .item
  const grid_item = document.querySelectorAll(".item");
  console.log(grid_item);
  // 화면높이값의 2/3구하기
  const whv = (window.innerHeight / 3) * 2;
  // console.log("2/3높이:",whv);
  // 등장액션 대상 위치값 리턴함수 
  const retVal = (ele) => ele.getBoundingClientRect().top;

  ////// 클래스 넣기 함수 //////
  const classIt = (ele) => {
    // ele - 등장요소
    // 대상요소의 현재 스크롤 위치
    let gi_Val = retVal(ele);

    // 0보다 크고 화면의 2/3보다 작은 구간!
    if(gi_Val < whv && gi_Val > 0){
      ele.classList.add("on");
    } ////// 구간에 들어올시 "on"적용 if문 //////
  }; ///////// classIt 함수 /////////


  // 스크롤 이벤트 셋팅 /////////
  window.addEventListener("scroll",()=>{
    for(let x of grid_item) classIt(x);
  }); ///////// scroll //////////////
  
  
  /* 
    [ 질문할것 ]
    - 폰트 전체에 줄수있는지 (영문,한글따로)
    - 블릿요소 크기가 제각각 (따로 영역을 넓히는 방법)
      (common.css - 220)
    - 상단영역 max-width : 1300px 로 주고 부모박스에 
      배경색 흰색으로 해서 구분하는법 (common.css - 17)
    - 그리드 영역 스크롤액션 적용안됨 (common.css - 177)
    - 그리드영역 아이템박스 마우스 오버시 다음 이미지 나타내기
      (객체에서 "이미지1"을 "이미지2"로 변경) (main.js - 190)
  */

      // 오버시 상품 뒤면 이미지 변경하기
      // 대상: .iimg img
      // const iimg = document.querySelectorAll(".iimg img");
      // iimg.forEach(ele=>{
      //   ele.onmouseenter=()=>ele.setAttribute("src",ele.getAttribute("src").replace("1","2"));
      //   ele.onmouseleave=()=>ele.setAttribute("src",ele.getAttribute("src").replace("2","1"));
      //   // ele.onmouseleave=()=>ele.setAttribute(속성명,값);
      //   // ele.getAttribute("src").replace("2","1")
      //   // ele.getAttribute(속성명).replace(바뀔값,바꿀값)
      // });





  ///////////////////// grid구역 태그넣기 //////////////////////////
  function insTags(){

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
      

      // console.log(gdsObj[x]["이미지1"]);

      // if(x[""]==x["이미지1"]){
      //   x.onmouseenter = () => {
      //     x = x["이미지2"]
      //     console.log(x);
      //   };
      // }

  } ////////// for in /////////

  gridbx.innerHTML = hcode;

  ////////////// grid구역 태그넣기 ///////
  
} /////////////// insTags함수 ////////////////////////

  // 
  // const iimg = document.querySelector(".iimg");
  // console.log(iimg);
  
  // iimg.addEventListener('mouseenter', () => {
  //   for (let i in gdsObj) {
      
  //       const product = gdsObj[i];
  //       if (product[i] == product["이미지1"]) {
          
  //         product[i] == product["이미지2"];
          
  //       }
  //     }
    
  // });
  

}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////