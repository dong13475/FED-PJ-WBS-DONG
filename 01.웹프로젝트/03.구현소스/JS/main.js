// 웹프로젝트 POLYTERU JS - main.js

//////////// 로드구역 /////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("로딩완료!");

  const gdsObj={
    "상품코드1":{
      "상품명":"aaaa breasted coat",
      "구분":"22 winter",
      "가격":"58,000원",
      "이미지":"pddcoat1",
    },
    "상품코드2":{
      "상품명":"rrrr breasted coat",
      "구분":"22 winter",
      "가격":"54,000원",
      "이미지":"balaclava1",
    },
    "상품코드3":{
      "상품명":"double hhh coat",
      "구분":"22 winter",
      "가격":"6788,000원",
      "이미지":"coat1",
    },
    "상품코드4":{
      "상품명":"ggg breasted coat",
      "구분":"22 winter",
      "가격":"54,000원",
      "이미지":"boots1",
    },
    "상품코드5":{
      "상품명":"fggg breasted coat",
      "구분":"22 winter",
      "가격":"128,000원",
      "이미지":"lightpufferB1",
    },
    "상품코드6":{
      "상품명":"kkk dfd coat",
      "구분":"22 winter",
      "가격":"568,000원",
      "이미지":"lightpufferG1",
    },
    "상품코드7":{
      "상품명":"dfd breasted coat",
      "구분":"22 winter",
      "가격":"8988,000원",
      "이미지":"paddedvest1",
    },
    "상품코드8":{
      "상품명":"double breasted fd",
      "구분":"22 winter",
      "가격":"568,000원",
      "이미지":"gloves1",
    },
  }; ////////////// gdsObj 객체 /////////
  

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

  // 상품넣을 박스
  const gridbx = document.querySelector(".gridbx");


  // 상품객체만큼 화면에 태그 데이터바인딩하기
  let hcode = "";

  for(let x in gdsObj){
    // x는 속성명
      hcode += `
      <div class="item itbx1">
        <div class="iimg mg1" 
          style="background-image: 
          url(./CSS/images/${gdsObj[x]["이미지"]}.jpg)">
        </div>
        <div class="itxt">
          <div class="iname1">
            <a href="#">${gdsObj[x]["상품명"]}</a>
          </div>
          <div class="ssn">
            <a href="#">${gdsObj[x]["구분"]}</a>
          </div>
          <span>${gdsObj[x]["가격"]}</span>
        </div>
      </div>
      `;
  } ////////// for in /////////

  gridbx.innerHTML = hcode;


  

}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////