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


  

}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////