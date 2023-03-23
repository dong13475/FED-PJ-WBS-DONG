//  POLYTERU item JS - item.js

// 넘어온 url 받기! pm -> 전달값변수
// let pm = location.href;
// location.href 가 이퀄 오른쪽에 있으면 url주소 읽어옴!

// 문자열 잘라서 값 읽어오기
// -> 물음표로 잘라서 두번째값, 이퀄로 잘라서 두번째값
// pm = pm.split("?")[1].split("=")[1];

// pm값 특수문자 복원하기
// pm = decodeURIComponent(pm);

// console.log(pm);

itemList();

// 함수로 묶기
function itemList() {
  //////////// 로드구역 /////////////
  window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩완료!");

    // 드래그 방지 함수 //
    document.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    // 새로고침시 스크롤 맨위로 //
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // 0.1초정도는 줘야효과있음!

    // 그리드 구역 태그넣기
    // 그리드태그 hcode를 함수로 만들어 위쪽에 호출한다!
    gridbxTags();

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
    window.scrollTo(0,0);
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
    그리드 아이템 순서대로 등장시키기 함수
  ***************************************/
    // 그리드 등장대상: .item
    const grid_item = document.querySelectorAll(".item");

    setTimeout(() => {
      grid_item.forEach((ele, idx) => {
        ele.classList.add("on");
        ele.style.transitionDelay = `${idx * 0.1}s`;

        // console.log(ele)
        // console.log("asd:",ele.classList[1])
        // if (ele.classList[1] == "outer") {
        //   ele.style.display = "block";
        // } else {
        //   ele.style.display = "none";
        // }
        // console.log("구분:",`${gdsObj[idx]["구분"]}`)

        // if(ele.classList[1] == `${gdsObj[ele]["구분"]}`){
        //   ele.style.display = "block";
        // }
        // else{
        //   ele.style.display = "none";
        // }
      }); //////// 그리드아이템 분기 forEach //////////
    }, 200); //////////// 그리드 아이템 0.2초후에 등장 ///////////

    ///////////////////// grid구역 태그넣기 //////////////////////////
    function gridbxTags() {
      // 상품넣을 박스
      const gridbx = document.querySelector(".gridbx");
      // 서브네비 넣을 박스
      const subNavi = document.querySelector(".subNavi");
      console.log(subNavi);

      // 상품객체만큼 화면에 태그 데이터바인딩하기
      let hcode = "";

      let subcode = "";

      for (let x in gdsObj) {
        subcode += `
      <ul class="location">
        <a href="">
          <li>HOME&nbsp;/ </li>
        </a>
        <li>&nbsp;${gdsObj[x]["구분"]}</li>
      </ul>
      <div class="item_tit">${gdsObj[x]["구분"]}</div>
      `;
        // x는 속성명
        hcode += `
      <div class="item ${gdsObj[x]["구분"]}">
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
      } ////////// for in /////////

      // grid구역 태그넣기
      gridbx.innerHTML = hcode;
      // 서브네비 태그넣기
      // subNavi.innerHTML = subcode;
    } /////////////// gridbx_Tags함수 ////////////////////////
  }); ////////////////// 로드구역 ///////////////////
  //////////////////////////////////////////////////
}
