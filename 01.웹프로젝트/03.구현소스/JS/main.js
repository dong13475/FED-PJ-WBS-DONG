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
  console.log(hv);

  // 페이드박스 li 변수
  const fadeBx = document.querySelectorAll(".fade_bx li");
  console.log(fadeBx);

  // 슬라이드번호 변수
  let snum = 0;

  let scnt = fadeBx.length;
  console.log("페이드개수",scnt);


  /******************** 
    GNB 마우스 오버시 
  ********************/
  // GNB 두번째 li에 마우스엔터시 smenu등장
  sub.onmouseenter = () => {
    smenu.style.opacity = 1;
    smenu.style.height = hv + "px";
  }
  sub.onmouseleave = () => {
    smenu.style.opacity = 0;
    smenu.style.height = 0;
  }

  /************************************** 
    [ 메인페이지 페이드 배너 넣기 함수 ]
  **************************************/

  
  const go_fade = (seq) => {
    console.log("페이드번호",seq);
    if(seq++){
      snum++;
    }
    else{
      snum--;
    }
    if (snum === -1) snum = scnt - 1;
    else if (snum === scnt) snum = 0;

    chgBanner(fadeBx);
    chgBanner(bulit); 

  } ///////// go_fade 함수 //////////


  let autoI;
  /************************************** 
    [ 인터발함수 설정하기 ]
    함수명 : autoFade
  **************************************/
  function autoFade(){
    autoI = setInterval(() => go_fade(),2000);
  }

  autoFade();
  
  

  /***************************************** 
    [ 클릭이벤트 함수 설정하기 ]
  *****************************************/

  // 이벤트 대상 : .bulit 
  const bulit = document.querySelectorAll(".bulit");
  // console.log(bulit);

  bulit.forEach((ele,idx)=>{
    ele.onclick = () => {
      go_fade(idx);
      // snum = idx;
      /* 블릿변경 */
      // chgBanner(bulit);
      // chgBanner(fadeBx);
    }
    
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