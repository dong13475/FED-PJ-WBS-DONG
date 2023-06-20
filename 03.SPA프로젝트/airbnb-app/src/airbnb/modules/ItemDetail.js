// 아이템 디테일 모듈 - ItemDetail.js

import { useLocation } from "react-router-dom";
import "../css/itemdetail.css";

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

  return (
    <>
      <section className="itemdetailbx">
        {/* 1.아이템 이름 */}
        <div className="itemtit">
          <h2>{iname}</h2>
        </div>
        {/* 2.아이템 주소 */}
        <div className="iLoca">
          <h3>{iloca}</h3>
        </div>
        {/* 2-1.기타사항 */}
        <div className="ietc">
          <h3>{ietc}</h3>
        </div>
        {/* 3.아이템 이미지 */}
        <div className="imgBx">
          {inum.map((v, i) => (
            <div className="gridImg" key={i}>
              <img src={src + v + ".jpg"} alt="여행은 살아보는 거야" />
            </div>
          ))}
        </div>
        {/* 4.호스트설명 */}
        <div className="host">
          <h3>{ihost}</h3>
        </div>
      </section>
    </>
  );
} //////////////// ItemDetail 컴포넌트 /////////////////

export default ItemDetail;
