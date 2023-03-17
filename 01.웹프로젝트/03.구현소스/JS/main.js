// 웹프로젝트 POLYTERU JS - main.js

//////////// 로드구역 /////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("로딩완료!");
  

  // GNB 마우스 오버시 서브메뉴 등장 변수
  // .gnb li 리스트
  const gnb_li = document.querySelectorAll(".gnb>ul>li");
  // .gnb li 두번째요소
  let sub = gnb_li[1];
  // .smenu
  const smenu = document.querySelector(".smenu");
  // .smenu ol 의 높이변수
  let hv = smenu.querySelector(".smenu ol").clientHeight;
  // console.log(hv);


  // 페이드박스 li 변수
  const fadeBx = document.querySelectorAll(".fade_bx li");
  // console.log(fadeBx);
  // 슬라이드번호 변수 : 
  // 배너 이미지와 블릿을 통일시켜주는 중요한변수
  let snum = 0;
  // 페이드개수 변수
  let scnt = fadeBx.length;
  // console.log("페이드개수",scnt);

  // ////////////////////////////////////////////
  let li = document.querySelectorAll(".gnb>ul>li");
  console.log(li);
  

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
        smenu.style.height = hv + "px";
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
    ele.onclick = () => {
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

  
  ///////////////////// grid구역 태그넣기 //////////////////////////
  // 상품넣을 박스
  const gridbx = document.querySelector(".gridbx");


  // 상품객체만큼 화면에 태그 데이터바인딩하기
  // let hcode = "";

  // for(let x in gdsObj){
  //   // x는 속성명
  //     hcode += `
  //     <div class="item itbx1">
  //       <div class="iimg mg1" 
  //         style="background-image: 
  //         url(./CSS/images/${gdsObj[x]["이미지"]}.jpg)">
  //       </div>
  //       <div class="itxt">
  //         <div class="iname1">
  //           <a href="#">${gdsObj[x]["상품명"]}</a>
  //         </div>
  //         <div class="ssn">
  //           <a href="#">${gdsObj[x]["구분"]}</a>
  //         </div>
  //         <span>${gdsObj[x]["가격"]}</span>
  //       </div>
  //     </div>
  //     `;
  // } ////////// for in /////////

  // gridbx.innerHTML = hcode;
  /////////////////// grid구역 태그넣기 //////////////////////////

  

}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////