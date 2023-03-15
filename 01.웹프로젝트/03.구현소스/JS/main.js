// 웹프로젝트 POLYTERU JS - main.js

//////////// 로드구역 /////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("로딩완료!");
  
  const gnb = document.querySelectorAll(".gnb>ul>li");
  // console.log(gnb);
  
  // GNB 두번째 li에 마우스엔터시 smenu등장
  let smenu = gnb[1];
  let qq = 
  console.log(smenu);
  smenu.onmouseenter = () => {

    let hv = smenu.clientheight + "px";
    console.log(hv);
  }

    

}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////