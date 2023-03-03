// 팀프로젝트 스타워즈 PJ - sub01.js

window.addEventListener("DOMContentLoaded", () => {
  console.log("로딩완료!");

  // 메인 상단 변수 ///////////
  const tsec = document.querySelector(".tsec");
  const tsecI = document.querySelector(".tsecI");
  const tsecT = document.querySelector(".tsecT");
  const mytxt = 
  `*Star Wars: The Phantom Menace (Episode I)*Rating: PG*Runtime: 2 hr 16min*Release Date: May 19, 1999*Genre:*Action, Adventure, Fantasy, Science Fiction
  `;
  // 메인 중반 변수 //////////
  const msecL = document.querySelector(".msecL");
  const msect = document.querySelector(".msecT");
  const msecT = document.querySelectorAll(".msecT li");
  console.log(msecT);

  // 메인 하단 변수 /////////
  // 슬라이드 박스
  const slide = document.querySelector(".slide");

  // 화면 높이값의 2/3 구하기
  const hv = (window.innerHeight / 3) * 2;
  const winH = window.innerHeight;
  console.log(winH);
  const docH = document.body.clientHeight;
  const retVal = (ele) => ele.getBoundingClientRect().top;

  // 메인 상단 타임아웃함수
  const showIt = ()=>{
    
    setTimeout(() => {
      tsecI.style.opacity = "1";
      tsecI.style.transition = ".5s ease-in-out";
    }, 1000); ////////// 이미지 타임아웃
  
    let hcode = "";
    let idx = 0;

    for (let x of mytxt) {
      if (x === " ") hcode += "&nbsp";
      else if (x === "*") hcode += `<div></div>`;
      else hcode += `<span style="transition-delay:${idx * 0.03}s">${x}</span>`;
      idx++;

      setTimeout(() => {
        tsecT.classList.add("on");
      },1000); /// 텍스트 타임아웃
      tsecT.innerHTML = hcode;
    } ////// for of //////


  }; /////////// showIt 함수 ///////////
  showIt();
  
  window.addEventListener("scroll", () => {

    // 스크롤시 스크롤 위치값 찍기
    let scrl = window.scrollY;

    // console.log(scrl);

    if (scrl > 200) {
      tsec.style.opacity = "0";
    } else if (scrl < 200) {
      tsec.style.opacity = "1";
    } else {
      tsec.style.transition = "1s"
      // scrl.remove();
    } /////// 상단이미지 보이기 if문 ////////
    if(scrl < hv && scrl > 0 ){
      msecL.classList.add("on");
    } ///// 중간 로고 보이기 if문 ////////

    for(let i = 0; i < msecT.length; i++){
      const li = msecT[i];
      const liTop = retVal(li);

      if(liTop < (winH/5)*4){
        li.style.opacity = "1";
      }
      else{
        li.style.opacity ="0";
      }

      if (liTop <= 350) {
        li.style.opacity = "0";
      }
    } /////// 중간 텍스트 보이기 for문 /////////

    function goSlide(){
      let slide_img ="<ul>";
      for(let x=1; x<4; x++){
        slide_img += `
          <li>
            <img src="img/slide0${x}.jpeg" alt="슬라이드 이미지">
          </li>
        `;
      } //////// for문 ///////
      slide_img += "</ul>";
      slide.innerHTML = slide_img;
    } //////// goSlide 함수 /////////

    goSlide();
  }); /////////// 스크롤 함수 ////////////
  


  
}); ///////// 로드구역 /////////////////////////////
