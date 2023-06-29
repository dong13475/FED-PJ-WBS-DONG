// 에어비앤비 메인 페이지 컴포넌트
import Items from "./modules/Items";
import item_data from "./data/items";
import Airplane from "./modules/Airplane";
import { Link, useNavigate } from "react-router-dom";

import "./css/main.css";
import { useEffect, useState } from "react";

const Main = (props) => {
  // 라우터 이동
  const goPage = useNavigate();

  const [mainSts, setMainSts] = useState(0);

  const chgIntro = (e) => {
    let txt = e.target["alt"];
    // console.log(e.target["alt"]);
    console.log(txt);
    setMainSts(2);
    setTimeout(() => {
      setMainSts(1);
      goPage("/" + txt, {});
    }, 7000);
  }; ////////////// chgIntro ///////////

  const chkFn = () => {
    // console.log("여기링크");
    let tg = document.querySelectorAll(".slider a");
    // console.log(tg);
    tg.forEach(
      (ele) =>
        (ele.onclick = () => {
          setMainSts(1);
          // console.log("링크!!!");
        })
    );
  }; ////////// chkFn /////////////////

  useEffect(chkFn, []);

  return (
    <>
      {mainSts == 1 && <Items cat={props.sub} />}
      {mainSts == 2 && <Airplane />}
      {mainSts == 0 && (
        <section className="mainbx">
          {/* 메인박스영역 */}
          <div className="mbx">
            {/* 자연 */}
            <div className="nature">
              <a href="#" onClick={chgIntro}>
                {/* <Items cat={props.sub} /> */}

                <div className="imgbx">
                  <img src="./images/자연.png" alt="자연" />
                </div>
                <div className="txtbx">자연</div>
              </a>
            </div>
            {/* 건축 */}
            <div className="build">
              <a href="#" onClick={chgIntro}>
                {/* <Items cat={props.sub} /> */}

                <div className="imgbx">
                  <img src="./images/건축.png" alt="건축" />
                </div>
                <div className="txtbx">건축</div>
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}; ////////////// Main 컴포넌트 //////////////

// 내보내기
export default Main;
