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

export default function SwiperItem(props) {
  // 데이터셋팅
  // const idata = item_data[props.cat];
  // console.log(idata);

  return (
    <>
      <Swiper
        spaceBetween={20}
        cssMode={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{}}
        className="mySwiper"
      >
        {/* 반복이미지 */}
        {[props.seq].map((v, i) => (
          <div className="itemImg" key={i}>
            {/* 아이템 이미지 */}
            {console.log(v)}
            {v.map((v, i) => (
              <SwiperSlide key={i}>
                <img src={[props.src] + v + ".jpg"} alt={[props.cat] + "이미지"} key={i} />
              </SwiperSlide>
            ))}
            {/* "./images/료칸/1/1.jpg" */}
            {/* {"./images/"+props.cat+"/"+i+"/"+i+".jpg"} */}
          </div>
        ))}
      </Swiper>
    </>
  );
}
