// 팀프로젝트 스타워즈 PJ - sub01.js

window.addEventListener("DOMContentLoaded", () => {
  console.log("로딩완료!");

  const tsecI = document.querySelector(".tsecI");
  const tsecT = document.querySelector(".tsecT");
  const mytxt = 
  `*Star Wars: The Phantom Menace (Episode I)*Rating: PG*Runtime: 2 hr 16min*Release Date: May 19, 1999*Genre:*Action, Adventure, Fantasy, Science Fiction
  `;


  const showIt = ()=>{
    autoI = setTimeout(() => {
      tsecI.style.opacity = "1";
      tsecI.style.transition = ".5s ease-in-out";
    }, 2000);
  
    let hcode = "";
    let idx = 0;

    for (let x of mytxt) {
      if (x === " ") hcode += "&nbsp";
      else if (x === "*") hcode += `<div></div>`;
      else hcode += `<span style="transition-delay:${idx * 0.03}s">${x}</span>`;
      idx++;
    } ////// for of //////
    tsecT.innerHTML = hcode;
    setTimeout(() => {
      tsecT.classList.add("on");
    },500);

  }; /////////// showIt 함수 ///////////
  showIt();

  /////////// 스크롤 함수 ////////////
  window.addEventListener("scroll",()=>{

  }) ////////// scroll //////////
}); ///////// 로드구역 /////////////////////////////
