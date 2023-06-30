// 이미지 디테일 모듈 - ImgDetail.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/imgdetail.css';



// 라우터 파라미터값 받아서 데이터 처리
function ImgDetail(props) {

  // x버튼 클릭시 페이지 뒤로가기
  function goBack(){
    window.history.back();
  }
  
  const reuseL = useLocation();
  // 1. 경로
  let src = reuseL.state.src;
  // 6. 이미지 갯수
  let inum = reuseL.state.inum;
  return (
    <>
      <section className='detailbx'>
        {/* <Link to='/여행은살아보는거야'> */}
          {/* 닫기버튼 */}
          <div className='closebt' onClick={goBack}>
            <div className='closeL'></div>
            <div className='closeR'></div>
          </div>
        {/* </Link> */}
          </section>
        {/* 그리드 영역 */}
        <div className='detailgrid'>
          {inum.map((v, i) => (
            <div className='detailImg' key={i}>
              <img src={src + v + '.jpg'} alt='여행은 살아보는 거야' />
            </div>
          ))}
        </div>
    </>
  );
}

// 내보내기
export default ImgDetail;
