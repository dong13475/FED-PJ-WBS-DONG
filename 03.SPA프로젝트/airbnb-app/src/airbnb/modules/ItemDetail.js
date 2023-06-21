// 아이템 디테일 모듈 - ItemDetail.js

import { Link, useLocation } from "react-router-dom";
import "../css/itemdetail.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 라우터 파라미터값 받아서 데이터 처리!
function ItemDetail(props) {
  // 라우터 전달값을 받기위한 useLocation 생성
  const useL = useLocation();
  // 보낸 속성명 변수에 할당
  // state.속성명 : 내가 라우터를 통해 보낸 속성값 받기
  // 1. 경로
  let src = useL.state.src;
  // 2. 숙소이름
  let iname = useL.state.iname;
  // 3. 주소
  let iloca = useL.state.iloca;
  // 4. 호스트
  let ihost = useL.state.ihost;
  // 5. 기타사항
  let ietc = useL.state.ietc;
  // 6. 이미지 갯수
  let inum = useL.state.inum;
  // 7. 구글맵 주소
  let gmap = useL.state.gmap;

  return (
    <>
      {/* <img src="./images/group2.png" alt="비행기" /> */}
      <section className="itemdetailbx">
        {/* 1.아이템 이름 */}
        <div className="itemtit">
          <h2>{iname}</h2>
        </div>
        <div className="etclocabx">
          {/* 2.아이템 주소 */}
          <div className="iLoca">
            <h3>{iloca}</h3>
          </div>
          {/* 2-1.기타사항 */}
          <div className="ietc">
            <h3>{ietc}</h3>
          </div>
        </div>
        {/* 3.아이템 이미지 */}
        <Link to="/">
          <div className="imgBx">
            {inum.map((v, i) => (
              <div className="gridImg" key={i} style={{ display: v > 5 ? "none" : "block" }}>
                <img src={src + v + ".jpg"} alt="여행은 살아보는 거야" />
              </div>
            ))}
          </div>
        </Link>
        {/* 하단박스 */}
        <div className="btflex">
          {/* 플렉스 왼쪽구역 */}
          <section className="flexl">
            {/* 4.호스트설명 */}
            <div className="host">
              <h2>{ihost}</h2>
            </div>
            {/* 숙소 편의시설 */}
            <div className="convi">
              <h3>숙소 편의시설</h3>
            </div>
            {/* 시설 종류 */}
            <div className="sortList">
              {/* 플렉스 왼쪽 */}
              <section className="leftF">
                <div className="ki">
                  <li>
                    <FontAwesomeIcon icon={faSearch} />
                  </li>
                  <h3>주방</h3>
                </div>
                <div className="pa">
                  <h3>건물 내 무료 주차</h3>
                </div>
                <div className="tv">
                  <h3>TV + 일반 케이블 TV</h3>
                </div>
                <div className="ha">
                  <h3>헤어드라이어</h3>
                </div>
              </section>
              {/* 플렉스 오른쪽 */}
              <section className="rightF">
                <div className="wi">
                  <h3>무선 인터넷</h3>
                </div>
                <div className="pe">
                  <h3>반려동물 입실 가능</h3>
                </div>
                <div className="br">
                  <h3>아침식사</h3>
                </div>
                <div className="ai">
                  <h3>에어컨</h3>
                </div>
              </section>
            </div>
          </section>

          {/* 플렉스 오른쪽구역 */}
          <section className="flexr">
            {/* 맵설명 */}
            <div className="mapinfo">
              <h3>호스팅 지역</h3>
            </div>
            {/* 구글맵 */}
            <div className="gmap">
              <iframe src={gmap} style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </section>
        </div>
      </section>
    </>
  );
} //////////////// ItemDetail 컴포넌트 /////////////////

export default ItemDetail;
