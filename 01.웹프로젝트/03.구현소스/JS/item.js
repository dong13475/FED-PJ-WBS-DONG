//  POLYTERU item JS - item.js

//////////// 로드구역 /////////////
window.addEventListener('DOMContentLoaded', () => {
  // console.log("로딩완료!");

  // 드래그 방지 함수 //
  document.addEventListener('dragstart', (event) => {
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
  const move_top = document.querySelector('.move_top');
  // console.log(move_top);
  window.addEventListener('scroll', () => {
    let scrl = window.scrollY;
    if (scrl > 600) {
      move_top.classList.add('on');
    } // 상단 이동버튼 클래스 on 넣기/빼기 if
    else {
      move_top.classList.remove('on');
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
  const ham = document.querySelector('.ham');
  const gnb_bx = document.querySelector('.gnb_bx');
  // console.log(ham,gnb_bx);

  // 대상 배열에 담아 클릭시 한번에 "on"주기
  let click_ham = [ham, gnb_bx, document.body, document.querySelector('html')];
  // console.log(click_ham);
  // 2. 이벤트설정
  ham.onclick = () => {
    for (let x of click_ham) {
      x.classList.toggle('on');
    }
  }; /////////// 햄버거버튼 클릭 함수 /////////

  /*************************************** 
    GNB 마우스 오버시 li 밑줄효과 (on,on2)
  ***************************************/

  // GNB 마우스 오버시 서브메뉴 등장 변수 //
  // gnb밑의 li
  let li = document.querySelectorAll('.gnb>ul>li');
  // console.log(li);
  // .smenu
  const smenu = document.querySelector('.smenu');
  // .smenu ol 의 높이변수
  let shv = smenu.querySelector('.smenu ol').clientHeight;
  // console.log(shv);

  li.forEach((ele, idx) => {
    ele.onmouseenter = () => {
      // 마우스오버시 클래스 on주고 on2지우기
      ele.classList.add('on');
      ele.classList.remove('on2');
      // 두번째 li에 오버시 smenu보이기
      if (idx == 1) {
        smenu.style.opacity = 1;
        smenu.style.height = shv + 'px';
      } //////// if /////////
    }; /////// mouseenter ////////
    ele.onmouseleave = () => {
      // 마우스아웃시 클래스 on2주기
      ele.classList.add('on2');
      ele.classList.remove('on');
      // 두번째 li에 아웃시 smenu 안보이기
      if (idx == 1) {
        smenu.style.opacity = 0;
        smenu.style.height = 0;
      } //////// if ////////
    }; ////// mouseleave ///////
  }); /////// forEach ////////

  /********************************************* 
    [그리드 아이템 순서대로 등장시키기 함수]

    소문자로 전환한 아이템박스 a의 텍스트를 
    파라미터로 받아 텍스트가 all일경우 
    forEach로 아이템박스를 돌려 처음에 css를
    지우고 타임아웃함수로 클래스를 다시 추가한다
    이때 디스플레이는 트랜지션이 먹히지 않기때문에
    "none"을 주고 트랜지션을 없앤다음 다시 "block"을
    줘서 타임아웃함수로 css와 클래스 , 트랜지션을
    다시준다
    그리고 텍스트가 all이 아닌경우 아이템박스에
    똑같이 css효과를 없앤다음 만약에 아이템박스의
    클래스가 atxt를 포함하고 있으면 .item.atxt를
    forEach메서드로 돌려 css효과를 준다

  *********************************************/
  // 그리드 등장대상: .item
  const grid_item = document.querySelectorAll('.item');
  // console.log(grid_item)
  // 아이템 페이지 메뉴: .location
  const loca = document.querySelectorAll(".subNavi");
  // console.log(loca)

  

  function changeList(atxt){
    if(atxt === 'all'){
      loca.forEach((ele)=>{
        ele.style.display = 'block';
      }); ///// forEach
    } //// if
    else{
      loca.forEach((ele)=>{
        ele.style.display = "none";
        if(ele.classList.contains(atxt)){
          const newtit = document.querySelectorAll('.subNavi.' + atxt);
          console.log(newtit)
            newtit.forEach((ele) => {
              ele.style.display = 'block';
            }); ////// new_item forEach /////
          } ///// if
      }); ///// forEach
    } //// else
  } ////// changeList
  
  
  

  //////
  function changeItem(atxt) {

    // atxt - 선택메뉴
    if (atxt === 'all') {
      grid_item.forEach((ele, idx) => {
        // 처음에 css지우기
        ele.classList.remove('on');
        ele.style.cssText = '';
        ele.style.display = 'none';
        ele.style.transition = 'none';
        ele.style.display = 'block';
        // 지운 css 다시넣기
        setTimeout(() => {
          ele.style.cssText = '';
          ele.classList.add('on');
          ele.style.transitionDelay = `${idx * 0.1}s`;
        },1); ///// Timeout /////////
      }); /////// forEach /////////
    } ///////// if //////////////
    else {
      grid_item.forEach((ele) => {
        ele.classList.remove('on');
        ele.style.cssText = '';
        ele.style.display = 'none';
        ele.style.transition = 'none';

        if (ele.classList.contains(atxt)) {
          const new_item = document.querySelectorAll('.item.' + atxt);
          console.log("뉴아이템이뭐야",new_item);
          new_item.forEach((ele, idx) => {
            ele.style.display = 'block';
            setTimeout(() => {
              ele.style.cssText = '';
              ele.classList.add('on');
              ele.style.transitionDelay = `${idx * 0.1}s`;
            },1); /////// Timeout ///////
          }); ////// new_item forEach /////
        } /////// if ///////
      }); /////// forEach //////////
    } ////////////// else ///////////////
  } ///////// changeItem 함수 ///////////////////

  // 서브메뉴 밑의 a변수
  const itemA = smenu.querySelectorAll('a');
  console.log(itemA);
  
  
  /******************************************** 
    서브메뉴 a텍스트 forEach메서드로 돌려
    클릭시 소문자로 바꾼후 changeItem함수에
    파라미터로 보내기 
  ********************************************/
  itemA.forEach((ele) => {
    ele.onclick = () => {
      let atxt = ele.innerText.toLowerCase();
      console.log(atxt);
      changeItem(atxt);
      changeList(atxt);
      
    }; ////// click ///////////
  }); ////// forEach ///////////

  // 아이템박스 로딩시 "on"주고 트랜지션 따로주기
  setTimeout(() => {
    grid_item.forEach((ele, idx) => {
      ele.classList.add('on');
      ele.style.transitionDelay = `${idx * 0.1}s`;
    }); //////// 그리드아이템 분기 forEach //////////
  }, 200); //////////// 그리드 아이템 0.2초후에 등장 ///////////

  

  ///////////////////// grid구역 태그넣기 //////////////////////////
  function gridbxTags() {
    // 상품넣을 박스
    const gridbx = document.querySelector('.gridbx');
    // 서브네비 넣을 박스
    const subNavi = document.querySelector('.sub_title');
    // console.log(subNavi);

    // 상품객체만큼 화면에 태그 데이터바인딩하기
    let subcode = '';

    let hcode = '';

    // const titleList = ["all","outer","top","bottom","acc"];
    // for(let x of titleList){
    //   subcode += `
    // //   <div class="subNavi ${x[1]}">
    // //       <ul class="location">
    // //         <a href="">
    // //           <li>HOME&nbsp;/ </li>
    // //         </a>
    // //         <li>&nbsp;${x[1]}</li>
    // //         <div class="item_tit">${x[1]}</div>
    // //       </ul>
    // //   </div>
    // //   `;
    // }


    for(let x in allObj){
      subcode += `
      <div class="subNavi ${allObj[x]['구분']}">
          <ul class="location">
            <a href="">
              <li>HOME&nbsp;/ </li>
            </a>
            <li>&nbsp;${allObj[x]['구분']}</li>
            <div class="item_tit">${allObj[x]['구분']}</div>
          </ul>
      </div>
      `;
    }

    // 서브네비 태그넣기
    // subNavi.innerHTML = subcode;


    for (let x in allObj) {
      
      // x는 속성명
      hcode += `
      <div class="item ${allObj[x]['구분']}">
        <a href="#">
            <div class="iimg">
              <img src="./images/item_imgs/ALL/${allObj[x]['이미지1']}.jpg">
              <img src="./images/item_imgs/ALL/${allObj[x]['이미지2']}.jpg">
            </div>
        </a>
        <div class="itxt">
          <div class="iname1">
            <a href="#">${allObj[x]['상품명']}</a>
          </div>
          <div class="ssn">
            ${allObj[x]['구분']}
          </div>
          <span>${allObj[x]['가격']}</span>
        </div>
      </div>
      `;
    } ////////// for in /////////

    // grid구역 태그넣기
    gridbx.innerHTML = hcode;
    
  } /////////////// gridbx_Tags함수 ////////////////////////

  // // 넘어온 url 받기! pm -> 전달값변수
  // let pm = location.href;
  // // location.href 가 이퀄 오른쪽에 있으면 url주소 읽어옴!

  // if (pm.indexOf('?') !== -1) {
  //   // 문자열 잘라서 값 읽어오기
  //   // -> 물음표로 잘라서 두번째값, 이퀄로 잘라서 두번째값
  //   pm = pm.split('?')[1].split('=')[1];

  //   // pm값 특수문자 복원하기
  //   pm = decodeURIComponent(pm);

  //   console.log("pm이뭐야:",pm);

  //   changeItem(pm);
  // } ///////////// 파라미터가 있으면 ///////////
}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////
