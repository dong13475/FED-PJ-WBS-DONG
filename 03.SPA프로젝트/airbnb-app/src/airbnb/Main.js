// 에어비앤비 메인 페이지 컴포넌트
import Items from './modules/Items';
import item_data from './data/items';
import Airplane from './modules/Airplane';
import { Link } from 'react-router-dom';

import './css/main.css';

const Main = (props) => {
  return (
    <>
      <Items cat={props.sub} />
      {/* <Airplane /> */}
      <section className='mainbx'>
        {/* 메인박스영역 */}
        <div className='mbx'>
          {/* 자연 */}
          <div className='nature'>
            <Link to='/료칸'>
              {/* <Items cat={props.sub} /> */}
              자연
            </Link>
          </div>
          {/* 건축 */}
          <div className='build'>
            <Link to='/'>
              {/* <Items cat={props.sub} /> */}
              건축
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}; ////////////// Main 컴포넌트 //////////////

// 내보내기
export default Main;