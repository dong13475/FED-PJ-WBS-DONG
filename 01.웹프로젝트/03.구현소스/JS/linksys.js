// 폴리테루 링크시스템 JS - linksys.js

////////// 로딩구역 ///////////
window.addEventListener("DOMContentLoaded",linkFn);

////// 링크시스템 로드함수 ////////
function linkFn(){
  console.log("링크완료!")

  // 링크 대상 선정 :
  // (1) sli : .smenu a
  const sli = document.querySelectorAll(".smenu a");
  // console.log(sli);
  // (2) 로고 : .logo a
  const logo = document.querySelector(".logo a");
  // console.log(logo);
  // (3) more버튼 : more_bt
  const moreBt = document.querySelector(".more_bt>a");
  console.log(moreBt);

  // 클릭이벤트 설정하기
  // (1) sli 클릭설정 ///////
  for(let x of sli){
    x.onclick = (e) => {
      // 클릭이동막기
      e.preventDefault();

      // 클릭된 a요소 텍스트 읽기
      let atxt = x.innerText.toLowerCase().trim();

      console.log("넌뭐야",atxt)

      // 서브페이지 이동하기
      if(atxt !== ""){
        location.href = "item.html?item="
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


  /********************************************** 
    각각 아이템 클릭시 itemdetail 페이지로 이동
  **********************************************/
    // const allItem = document.querySelectorAll(".item a[href='#']");
    // console.log(allItem);
    // const itemName = document.querySelector(".item")
    // console.log(itemName);


    // allItem.forEach((ele)=>{
    //   ele.onclick = () => {
    //     location.href = "itemdetail.html";
    //   } ///// click //////
    // }); //////// forEach //////////

  //   itemName.onclick = (function(){
  //     for(let y in gdsObj){
  //     this.classList.add(gdsObj[y]["경로"]);
  //   }
  // })




  // // (3) more버튼 클릭설정
  // moreBt.onclick = (e) => {
  //   e.preventDefault();
  //   // .item으로 이동하기
  //   location.href = "./item.html?item=";
  // }; //////// click /////////
  
} /////////// linkFn 함수 //////////////


/*********************************************************** 
  현재 수정해야하는 기능

  1. get방식 이동 문제
  index.html 에서 .smenu a를 클릭시 item.html 페이지로 
  이동하는데 item.html 싱글페이지여서 첫로딩은 어떤 a요소를 
  클릭해도 처음페이지로 이동하고 그후에 각각요소 클릭시
  display:none/block 이 적용된다.
  따라서 index.html 에서 네비li 클릭시 바로 이동이되게해야함  


  현재 구현하고싶은 기능

  2. 두번째 서브페이지 코드 뿌리기
  아이템요소 클릭시 itemdetail.html로 이동하는데 현재 
  html태그를 자바스크립트로 뿌려 이미지 경로나 아이템 이름같이
  요소에 맞게 바뀌어야 할부분에 객체 subPage_item 에서 
  ${}로 아이템에 맞게 구분해서 뿌려주게하기

  * item.html에서도 linkFn()함수를 호출했는데 왜 적용이 안되는지
***********************************************************/