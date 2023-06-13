/* 아이템 모듈 - Items.js */
import $ from "jquery";
import "../css/items.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import SwiperItem from "../plugin/SwiperItem";
// import item_data from "../data/items";

function jqFn() {
  $(() => {}); ////////////////// JQB ///////////////////
} /////////////// jqFn ////////////////

function Items(props) {
  const item_D = item_data[props.cat];
  // item_D에 담긴값은 data/item.js의 객체의 배열값
  return (
    <section className="itemList">
      {/* 각각아이템 */}
      {item_D.map((v, i) => (
        <div className="item" key={i}>
          {/* 아이템 이미지 */}
          <div className="itemImg">
            <img src="./images/료칸/1/1.jpeg" alt={props.cat + "이미지"} />
            {/* "./images/료칸/1/1.jpeg" */}
            {/* {"./images/"+props.cat+"/"+i+"/"+i+".jpg"} */}
          </div>
          {/* 아이템 타이틀 */}
          <div className="itemTit">
            <ul>
              {/* 아이템 이름 */}
              <li className="iname">{v.iname}</li>
              {/* 아이템 위치 */}
              <li className="iloca">{v.iloca}</li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
} ///////////// Items 컴포넌트 //////////////

// 내보내기
export default Items;
