// 폴리테루 링크시스템 JS - linksys.js

////////// 로딩구역 ///////////
window.addEventListener("DOMContentLoaded",linkFn);

////// 링크시스템 로드함수 ////////
function linkFn(){
  console.log("링크완료!")

  // 링크 대상 선정 :
  // (1) sli : .smenu a
  const sli = document.querySelectorAll(".smenu a");
  console.log(sli)
  // (2) 로고 : .logo a
  const logo = document.querySelector(".logo a");

  // 클릭이벤트 설정하기
  // (1) sli 클릭설정 ///////
  for(let x of sli){
    x.onclick = (e) => {
      // 클릭이동막기
      e.preventDefault();

      // 클릭된 a요소 텍스트 읽기
      let atxt = x.innerText.toLowerCase().trim();

      // 서브페이지 이동하기
      if(atxt !== ""){
        location.href = "item.html?cat="
        +encodeURIComponent(atxt);
      }
    }; ////////// click ///////////
  } ////////// for of ////////////

  // (2) 로고 클릭설정
  logo.onclick = (e) => {
    e.preventDefault();

    // 홈으로 이동하기
    location.href = "./index.html";
  }; ///////// click /////////
  
} /////////// linkFn 함수 //////////////