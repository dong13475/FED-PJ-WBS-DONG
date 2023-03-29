//  POLYTERU item JS - item.js

//////////// 로드구역 /////////////
window.addEventListener("DOMContentLoaded", () => {
  // console.log("로딩완료!");

  // 드래그 방지 함수 //
  document.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  // 새로고침시 스크롤 맨위로 //
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100); // 0.1초정도는 줘야효과있음!


  /****************************************** 
    상단 이동버튼 스크롤시 클래스 on 넣기/빼기
  ******************************************/
  // 버튼박스 변수지정
  const move_top = document.querySelector(".move_top");
  // console.log(move_top);
  window.addEventListener("scroll", () => {
    let scrl = window.scrollY;
    if (scrl > 600) {
      move_top.classList.add("on");
    } // 상단 이동버튼 클래스 on 넣기/빼기 if
    else {
      move_top.classList.remove("on");
    } // 상단 이동버튼 클래스 on 넣기/빼기 else
  }); ////////// scroll ///////////////

  // move_top 클릭시 상단이동함수
  move_top.onclick = () => {
    window.scrollTo(0, 0);
  }; /////// click //////////

  /********************************************** 
    상단 탑메뉴 햄버거 버튼 클릭시 토글기능구현
  **********************************************/
  // 1. 대상 : .ham(이벤트/변경), .gnb_bx(변경), body, html
  const ham = document.querySelector(".ham");
  const gnb_bx = document.querySelector(".gnb_bx");
  // console.log(ham,gnb_bx);

  // 대상 배열에 담아 클릭시 한번에 "on"주기
  let click_ham = [ham, gnb_bx, document.body, document.querySelector("html")];
  // console.log(click_ham);
  // 2. 이벤트설정
  ham.onclick = () => {
    for (let x of click_ham) {
      x.classList.toggle("on");
    }
  }; /////////// 햄버거버튼 클릭 함수 /////////

  /*************************************** 
    GNB 마우스 오버시 li 밑줄효과 (on,on2)
  ***************************************/

  // GNB 마우스 오버시 서브메뉴 등장 변수 //
  // gnb밑의 li
  let li = document.querySelectorAll(".gnb>ul>li");
  // console.log(li);
  // .smenu
  const smenu = document.querySelector(".smenu");
  // .smenu ol 의 높이변수
  let shv = smenu.querySelector(".smenu ol").clientHeight;
  // console.log(shv);

  li.forEach((ele, idx) => {
    ele.onmouseenter = () => {
      // 마우스오버시 클래스 on주고 on2지우기
      ele.classList.add("on");
      ele.classList.remove("on2");
      // 두번째 li에 오버시 smenu보이기
      if (idx == 1) {
        smenu.style.opacity = 1;
        smenu.style.height = shv + "px";
      } //////// if /////////
    }; /////// mouseenter ////////
    ele.onmouseleave = () => {
      // 마우스아웃시 클래스 on2주기
      ele.classList.add("on2");
      ele.classList.remove("on");
      // 두번째 li에 아웃시 smenu 안보이기
      if (idx == 1) {
        smenu.style.opacity = 0;
        smenu.style.height = 0;
      } //////// if ////////
    }; ////// mouseleave ///////
  }); /////// forEach ////////

  
  /*************************************** 
    서브메뉴 a텍스트 forEach메서드로 돌려
    클릭시 소문자로 바꾼후 함수에
    파라미터로 보내기 
  ***************************************/
  // 서브메뉴 밑의 a변수
  const itemA = smenu.querySelectorAll("a");
  console.log(itemA);

  // .smenu a 분기후 텍스트 소문자로 변경하여 함수에 보내기
  itemA.forEach((ele) => {
    ele.onclick = () => {
      let atxt = ele.innerText.toLowerCase();
      // 그리드 등장 함수에 파라미터 넣기
      // changeItem(atxt);
      // 타이틀 등장 함수에 파라미터 넣기
      // changeTit(atxt);
    }; //////// click /////////
  }); ////////// forEach //////////


  /*********************************************** 
    linksys.js에서 넘어온 url 받기
  ***********************************************/
  // 넘어온 url 받기! pm -> 전달값변수
  let pm = location.href;
  console.log("pm:", pm);
  // location.href 가 이퀄 오른쪽에 있으면 url주소 읽어옴!

  // 문자열 잘라서 값 읽어오기
  // -> 물음표로 잘라서 두번째값, 이퀄로 잘라서 두번째값
  // pm = pm.split("?")[1].split("=")[1];

  // pm값 특수문자 복원하기
  pm = decodeURIComponent(pm);

  console.log("그래서 pm은?", pm);

  // 그리드 / 타이틀 등장 함수에 파리미터로 pm값 보내기
  // changeItem(pm);
  // changeTit(pm);
}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////
