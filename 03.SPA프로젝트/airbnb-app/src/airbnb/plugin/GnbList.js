import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./gnblist.css";

// 데이터
import gnb_data from "../data/gnbdata";

// import required modules
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function GnbList() {
  return (
    <>
      <Swiper 
      // slidesPerView={10}
      spaceBetween={20} 
      modules={[Navigation]} 
      className="mySwiper">
        {gnb_data.map((v, i) => (
          <SwiperSlide key={i}>
            <Link to="/">
            {/* GNB메뉴 */}
              <li>
                <img src={v.src} alt={v.txt} />
                <div className="navtit">{v.txt}</div>
              </li>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
