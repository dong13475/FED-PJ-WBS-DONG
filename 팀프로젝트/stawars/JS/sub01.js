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
  const msect = document.querySelector(".msecT");
  const msecT = document.querySelectorAll(".msecT li");
  console.log(msecT);

  // 화면 높이값의 2/3 구하기
  const hv = (window.innerHeight / 3) * 2;
  const winH = window.innerHeight;
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
    

    for(let x of msecT) {
      
      let li1 = retVal(msecT[0]);
      let li2 = retVal(msecT[1]);
      let li3 = retVal(msecT[2]);
      let li4 = retVal(msecT[3]);
      let li5 = retVal(msecT[4]);
      let li6 = retVal(msecT[5]);
      let li7 = retVal(msecT[6]);
      let li8 = retVal(msecT[7]);
      let li9 = retVal(msecT[8]);
      x.classList.add("on");
    if(li1 < winH/3 && li1 > 0){
      msecT[0].style.opacity = "1";
    }
    else if(li2 < hv && li2 > 0){
      msecT[1].style.opacity = "1";
    }
    else if(li3 < hv && li3 > 0){
      msecT[2].style.opacity = "1";
    }
    else if(li4 < hv && li4 > 0){
      msecT[3].style.opacity = "1";
    }
    else if(li5 < hv && li5 > 0){
      msecT[4].style.opacity = "1";
    }
    else if(li6 < hv && li6 > 0){
      msecT[5].style.opacity = "1";
    }
    else if(li7 < hv && li7 > 0){
      msecT[6].style.opacity = "1";
    }
    else if(li8 < hv && li8 > 0){
      msecT[7].style.opacity = "1";
    }
    else if(li9 < hv && li9 > 0){
      msecT[8].style.opacity = "1";
    }
  }
  }); /////////// 스크롤 함수 ////////////


  
}); ///////// 로드구역 /////////////////////////////
