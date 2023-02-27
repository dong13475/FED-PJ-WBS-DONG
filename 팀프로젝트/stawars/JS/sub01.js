// 팀프로젝트 스타워즈 PJ - sub01.js

window.addEventListener("DOMContentLoaded", () => {
  console.log("로딩완료!");

  const tsecI = document.querySelector(".tsecI");
  const tsecT = document.querySelector(".tsecT");
  const mytxt = 
  `
  Star Wars: The Phantom Menace (Episode I) \n
  Rating: PG \n
  Runtime: 2 hr 16min \n
  Release Date: May 19, 1999 \n
  Genre: \n
  Action, Adventure, Fantasy, Live Action, Science Fiction
  `;

  autoI = setTimeout(() => {
    tsecI.style.opacity = "1";
    tsecI.style.transition = ".4s ease-in-out";
  }, 2000);

  let hcode = "";
  let idx = 0;
  for (let x of mytxt) {
    if (x === " ") x = "&nbsp;&nbsp;&nbsp";
    if (x === "\n") x = "<br>";
    // else if (x === "br") x = "<br>";
    hcode += `<span style="transition-delay:${idx * 0.05}s">${x}</span>`;
    idx++;
  } ////// for of //////
  tsecT.innerHTML = hcode;
  setTimeout(() => {
    tsecT.classList.add("on");
  },500);
}); ///////// 로드구역 /////////////////////////////
