// 팀프로젝트 스타워즈 PJ - sub01.js

window.addEventListener("DOMContentLoaded", () => {
  console.log("로딩완료!");

  // 메인 상단 변수
  const tsec = document.querySelector(".tsec");
  const tsecI = document.querySelector(".tsecI");
  const tsecT = document.querySelector(".tsecT");
  const mytxt = 
  `*Star Wars: The Phantom Menace (Episode I)*Rating: PG*Runtime: 2 hr 16min*Release Date: May 19, 1999*Genre:*Action, Adventure, Fantasy, Science Fiction
  `;
  // 메인 중반 변수
  const msecL = document.querySelector(".msecL");
  const msect = document.querySelector(".msecT ul");
  const msecT = document.querySelectorAll(".msecT li");
  // console.log(msecT);

  // 화면 높이값의 2/3 구하기
  const hv = (window.innerHeight / 3) * 2;
  const retVal = (ele) => ele.getBoundingClientRect().top;
  const tt = window.innerHeight;

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
    const scrl = window.scrollY;
    // console.log(scrl);
    if (scrl > 200) {
      tsec.style.opacity = "0";
    } else if (scrl < 200) {
      tsec.style.opacity = "1";
    } else {
      tsec.classList.remove("on");
      tsec.style.transition = "1s"
      // scrl.remove();
    }
    
    if(scrl < hv && scrl > 0 ){
      msecL.classList.add("on");
    }
    
  }); /////////// 스크롤 함수 ////////////
  // scrl = window.onscroll = () => {
  //   if(scrl < hv && scrl > 0 ){
  //     msecL.classList.add("on");
  //   }
  //   if(scrl == 100){
  //     msecL.style.position = "fixed";
  //   }
  // }

  // let mshowIt = (ele) => {
  //   let xval = retVal(ele);
  //   if(xval < hv && xval > 0){
  //     msecL.classList.add("on");
  //   }
  // };
  // mshowIt();

  
  

}); ///////// 로드구역 /////////////////////////////
