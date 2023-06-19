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
      slidesPerView={3} 
      spaceBetween={30} 
      modules={[Navigation]} 
      className="mySwiper">
        <SwiperSlide>
          {/* GNB메뉴 */}
          {gnb_data.map((v, i) => (
            <li key={i}>
              <Link to="/">
                <img src={v.src} alt={v.txt} />
                <div className="navtit">{v.txt}</div>
              </Link>
            </li>
          ))}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
