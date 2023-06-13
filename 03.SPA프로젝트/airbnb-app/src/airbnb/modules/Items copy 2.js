/* 아이템 모듈 - Items.js */
import $ from "jquery";
import "../css/items.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import SwiperItem from "../plugin/SwiperItem";
import item_data from "../data/items";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import "../plugin/swiperitem.css";

function jqFn() {
  $(() => {}); ////////////////// JQB ///////////////////
} /////////////// jqFn ////////////////

function Items(props) {
  const item_D = item_data[props.cat];

  return (
    <>
      <section className="itemList">
        {/* 각각아이템 */}
        {item_D.map((v, i) => (
          <div className="item" key={i}>
            {/* 아이템 이미지 */}
            {/* 스와이퍼 컴포넌트 */}
            {/* <SwiperItem cat={"료칸"} /> */}

            
              {/* 반복이미지 */}
                {/* <SwiperSlide key={i} className="itemImg"> */}
                  {/* 아이템 이미지 */}
                  {/* <img src={v.src + i + ".jpg"} alt={props.cat + "이미지"} /> */}
                  {/* "./images/료칸/1/1.jpeg" */}
                  {/* {"./images/"+props.cat+"/"+i+"/"+i+".jpg"} */}
                {/* </SwiperSlide> */}
                <SwiperItem cat={props.cat} />
            

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
      {/* {jqFn()} */}
    </>
  );
} ///////////// Items 컴포넌트 //////////////

// 내보내기
export default Items;
