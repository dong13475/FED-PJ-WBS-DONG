// 에어비앤비 메인 페이지 컴포넌트
import Items from './modules/Items';
import item_data from './data/items';
import Airplane from './modules/Airplane';

const Main = (props) => {
  return (
    <>
      <Items cat={props.sub} />
      <Airplane />
    </>
  );
}; ////////////// Main 컴포넌트 //////////////

// 내보내기
export default Main;