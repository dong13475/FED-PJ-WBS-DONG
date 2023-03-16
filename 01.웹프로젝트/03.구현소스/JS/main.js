// 웹프로젝트 POLYTERU JS - main.js

//////////// 로드구역 /////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("로딩완료!");
  

  const gnb_li = document.querySelectorAll(".gnb>ul>li");
  // console.log(gnb_li);
  let gg = gnb_li[1];
  // console.log(gg);
  const smenu = document.querySelector(".smenu");
  // console.log(smenu);
  let hv = smenu.querySelector(".smenu ol").clientHeight;
  console.log(hv);
  // GNB 두번째 li에 마우스엔터시 smenu등장
  gg.onmouseenter = () => {
    smenu.style.opacity = 1;
    smenu.style.height = hv + "px";
  }
  gg.onmouseleave = () => {
    smenu.style.opacity = 0;
    smenu.style.height = 0;
  }

  /************************************** 
    [ 메인페이지 페이드 배너 넣기 ]
  **************************************/

  // 이벤트 대상 : .fade_bx li
  const fadeBx = document.querySelectorAll(".fade_bx li");
  console.log(fadeBx);
  
  

  /***************************************** 
    [ 클릭이벤트 함수 설정하기 ]
  *****************************************/

  // 이벤트 대상 : .bulit 






  
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
  ///////////////////// grid구역 태그넣기 //////////////////////////

  

}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////