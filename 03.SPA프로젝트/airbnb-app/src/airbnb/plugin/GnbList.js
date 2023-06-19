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
      navigation={true} 
      modules={[Navigation]} 
      breakpoints={{
        200: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 5,
        },
        700: {
          slidesPerView: 7,
        },
        900: {
          slidesPerView: 8,
        },
        1250: {
          slidesPerView: 10,
        },
      }}
      className="mySwiper">
        {gnb_data.map((v, i) => (
          <SwiperSlide key={i}>
            {/* GNB메뉴 */}
            <li>
              <Link to={v.link}>
                <img src={v.src} alt={v.txt} />
                <div className="navtit">{v.txt}</div>
              </Link>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
