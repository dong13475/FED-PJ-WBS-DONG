// 팀프로젝트 스타워즈 PJ - sub01.js

window.addEventListener("DOMContentLoaded", () => {
  console.log("로딩완료!");

  const tsecI = document.querySelector(".tsecI");
  const tsecT = document.querySelector(".tsecT");
  const mytxt = `
          안녕하세요
  `;
  autoI = setTimeout(() => {
    tsecI.style.opacity = "1";
    tsecI.style.transition = ".4s ease-in-out";
  }, 2000);

  let hcode = "";
  let idx = 0;
  for (let x of mytxt) {
    if (x === " ") x = "&nbsp;&nbsp;&nbsp";
    hcode += 
          `<span style="transition-delay:${idx*0.1}s">${x}</span>`;

    idx++;
  } ////// for of //////
  tsecT.innerHTML = hcode;
}); ///////// 로드구역 /////////////////////////////
