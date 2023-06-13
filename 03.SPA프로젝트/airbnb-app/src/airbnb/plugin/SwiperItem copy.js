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
  const idata = item_data[props.cat];

  return (
    <Swiper
      spaceBetween={20}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      // 스와이퍼 사이즈별 슬라이드수 변경!
      breakpoints={{}}
      className="mySwiper"
    >
      {
        idata.map((v,i)=>{
          console.log(i)
        })
      }
      <SwiperSlide className="itemImg">
        <img src="./images/료칸/1/1.jpg" alt={props.cat + "이미지"} />
      </SwiperSlide>
    </Swiper>
  );
}
{
  /* 아이템 이미지 */
}
{
  /* "./images/료칸/1/1.jpeg" */
}
{
  /* {"./images/"+props.cat+"/"+i+"/"+i+".jpg"} */
}
