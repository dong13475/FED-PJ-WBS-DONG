import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// 제이쿼리
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiperitem.css";

// import required modules
import { Navigation, Pagination } from "swiper";
// 데이터 가져오기
import item_data from "../data/items";

export default function SwiperItem(props) {
  // 데이터셋팅
  const idata = item_data[props.cat][props.inum];
// console.log(idata);
  // const pvdt = props.vdt;
  
  return (
    <>
      <Swiper
        spaceBetween={20}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{}}
        className="mySwiper"
      >
        {/* 반복이미지 */}
        {console.log(props.seq)}
        {idata.map((v, i) => (
          <SwiperSlide key={i}>
            {/* 아이템 이미지 */}
            <div className="itemImg">
              <img src={v.src + v.inum + ".jpg"} alt={props.cat + "이미지"} />
              {/* "./images/료칸/1/1.jpeg" */}
              {/* {"./images/"+props.cat+"/"+i+"/"+i+".jpg"} */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
