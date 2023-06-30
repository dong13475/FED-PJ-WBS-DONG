// 에어비앤비 메인 페이지 컴포넌트
import Items from "./modules/Items";
import item_data from "./data/items";
import Airplane from "./modules/Airplane";
import { Link, useNavigate } from "react-router-dom";

import "./css/main.css";
import { useEffect, useState } from "react";

const Main = (props) => {

  return (
    <>
      <Items cat={props.sub} />
    </>
  );
}; ////////////// Main 컴포넌트 //////////////

// 내보내기
export default Main;
