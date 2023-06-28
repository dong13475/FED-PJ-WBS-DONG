// 화면전환효과 - 비행기 모듈 - Airplane.js

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/airplane.css";
import $ from "jquery";
import Typed from "react-typed";

function Airplane(props) {
  return (
    <>
      <div className="bg">
        {/* 구름1 */}
        <div className="cloud1">
          <img src="./images/cd2.png" alt="구름1" />
        </div>
        {/* 구름2 */}
        <div className="cloud2">
          <img src="./images/cd3.png" alt="구름2" />
        </div>
        {/* 비행기 */}
        <div className="airplane">
          <img src="./images/airplane1.png" alt="비행기1" />
        </div>
        {/* 구름3 */}
        <div className="cloud3">
          <img src="./images/cd5.png" alt="구름3" />
        </div>
        {/* 구름4 */}
        <div className="cloud4">
          <img src="./images/cd4.png" alt="구름4" />
        </div>
      </div>
      <div className="ty">
        <span>
          <Typed strings={["여행은 살아보는 거야"]} 
          typeSpeed={72} 
          showCursor={false}
          startDelay={4700} />
        </span>
      </div>
    </>
  );
} //////////////// Airplane 컴포넌트 ///////////////

export default Airplane;
