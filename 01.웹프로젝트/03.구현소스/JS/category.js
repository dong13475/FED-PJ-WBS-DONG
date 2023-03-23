window.addEventListener("DOMContentLoaded",()=>{
  
  console.log("카테고리 로딩완료!");
  
  const gnb = document.querySelector(".smenu");
  console.log(gnb);
  
  const smenu = gnb.querySelectorAll("li");
  console.log(smenu);
  
  smenu.forEach((ele,idx)=>{
    ele.onclick = () => {
      console.log(ele)
      
      itemList();
    }; ///// click /////
  }); ////////// forEach /////////
  

}); ///////////// 로드구역 //////////////