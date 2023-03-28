//  POLYTERU item JS - item.js

/////////////////// 로드구역 ///////////////////////////
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

  // 메인영역 태그넣기함수 호출
  subPageMain();

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




  /***************************** 
  서브페이지 페이드함수 만들기
  *****************************/
  // 페이드 li 변수
  let fadeList = document.querySelectorAll(".fade li");
  console.log(fadeList);
  // 페이드 번호 변수
  let snum = 0;

    const fade = () => {
      setInterval(() => {
        fadeList.forEach((ele) => {
          // 분기한 li에 on을 지우고
          ele.classList.remove("on");
        }); ////// forEach ////////

        // li에 snum숫자대로 on을 넣기 
        fadeList[snum].classList.add("on");
        // 이때 snum은 1씩 증가한다
        snum++;
        // snum의 수가 li갯수보다 같거나 많이지면 
        // snum은 다시 0으로 돌아감
        if(snum >= fadeList.length) snum = 0;
      }, 1000); // 페이드 타임아웃 함수
    }; //////////// fade함수 ////////////////
    // fade함수 호출
    fade();
    

    ////////////////// 메인영역 태그넣기 ////////////////
    function subPageMain(){
      // 태그 넣을 영역
      const item_list = document.querySelector(".item_list ul");

      // 태그담을 변수
      let main_code = "";
      
        main_code += `
        <!---------- 플렉스 섹션 1 ---------->
        <li class="sec1">
          <div class="stk_bx">
            <ul class="fade">
              <li class="on">
                <img src="./images/item_imgs/OUTER/light_puffer_jacket/light_pufferFull/light_pufferF1.jpg" alt="이미지">
              </li>
              <li>
                <img src="./images/item_imgs/OUTER/light_puffer_jacket/light_pufferFull/light_pufferF2.jpg" alt="이미지">
              </li>
              <li>
                <img src="./images/item_imgs/OUTER/light_puffer_jacket/light_pufferFull/light_pufferF3.jpg" alt="이미지">
              </li>
              <li>
                <img src="./images/item_imgs/OUTER/light_puffer_jacket/light_pufferFull/light_pufferF4.jpg" alt="이미지">
              </li>
              <li>
                <img src="./images/item_imgs/OUTER/light_puffer_jacket/light_pufferFull/light_pufferF5.jpg" alt="이미지">
              </li>
            </ul>
          </div>
        </li>
        <!---------- 플렉스 섹션 2 ---------->
        <li class="sec2">
          <!-- 섹션 속박스 -->
          <div class="sec2_detail">
            <h2>aasdasdsa</h2>
            <h3>aasdasdsa</h3>
            <!-- 적립금 -->
            <ol class="point">
              <li>적립금</li>
              <li>3％ ⓘ</li>
            </ol>
            <!-- 배송비 -->
            <ol class="shipping">
              <li>배송비</li>
              <li>
                무료 <br />
                제주 3,000원, 제주 외 도서 산간 <br />
                4,500원 추가
              </li>
            </ol>
            <!-- 수량조건 -->
            <ol class="count">
              <li>수량 조건</li>
              <li>
                주문당 최대 1개
                <br />
                회원당 최대 1개
              </li>
            </ol>
            <div class="sizetit">
              <h2>SIZE</h2>
            </div>
            <div class="size_bx">선택하세요</div>
            <!-- 주문 수량 -->
            <ol class="scount">
              <li>주문 수량</li>
              <li>0개</li>
            </ol>
            <!-- 총상품 금액 -->
            <ol class="total">
              <li>총 상품 금액</li>
              <li>0원</li>
            </ol>
            <!-- 구매 / 장바구니 버튼 -->
            <ol class="buy">
              <div class="buying">
                구매하기
              </div>
              <div class="cart">
                장바구니
              </div>
            </ol>
            <!-- 상품 설명 텍스트 -->
            <!-- 상품 상세 이미지 -->
          </div>
            <section class="main_dimg">
              <div class="mimg">
                <img src="./images/item_imgs/OUTER/light_puffer_jacket/light_puffer1.jpg" alt="이미지">
              </div>
            </section>
        </li>
        `;
      // } //////////// for in ///////////
      // 메인영역 태그넣기
      item_list.innerHTML = main_code;
    } /////////// subPageMain 함수 ////////////////////
    
    

  

  // 넘어온 url 받기! pm -> 전달값변수
  let pm = location.href;
  // location.href 가 이퀄 오른쪽에 있으면 url주소 읽어옴!

  if (pm.indexOf('?') !== -1) {
    // 문자열 잘라서 값 읽어오기
    // -> 물음표로 잘라서 두번째값, 이퀄로 잘라서 두번째값
    pm = pm.split('?')[1].split('=')[1];

    // pm값 특수문자 복원하기
    pm = decodeURIComponent(pm);

    console.log("pm이뭐야:",pm);

  } ///////////// 파라미터가 있으면 ///////////
}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////
