/* 아이템 모듈 - Items.js */
import $ from 'jquery';
import '../css/items.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SwiperItem from '../plugin/SwiperItem';
import item_data from '../data/items';

function jqFn() {
  $(() => {}); ////////////////// JQB ///////////////////
} /////////////// jqFn ////////////////

// item_data.sort((x,y)=>{
//   return x.main===y.main?0:x.main>y.main?1:-1;
// });

function Items(props) {
  const idata = item_data[props.cat];
  console.log('idata:', idata);
  if (props.cat == '자연' || props.cat == '건축') {
    let temp = Object.keys(item_data);
    console.log('자연/건축 키배열:', temp);

    return temp.map((tv, ti) => (
      <section className='itemList' key={ti}>
        {/* 각각아이템 */}
        {item_data[tv].map(
          (v, i) =>
            v.main == props.cat && (
              <Link
                to='/여행은살아보는거야'
                state={{
                  src: v.src,
                  iname: v.iname,
                  iloca: v.iloca,
                  ihost: v.ihost,
                  ietc: v.ietc,
                  inum: v.inum,
                  gmap: v.gmap,
                  main: v.main,
                }}
                key={i}
              >
                <div className='item'>
                  <div className='itemImg'>
                    <SwiperItem seq={v.inum} cat={props.cat} src={v.src} />
                  </div>
                  {/* 아이템 타이틀 */}
                  <div className='itemTit'>
                    <ul>
                      {/* 아이템 이름 */}
                      <li className='iname'>{v.iname}</li>
                      {/* 아이템 위치 */}
                      <li className='iloca'>{v.iloca}</li>
                    </ul>
                  </div>
                </div>
              </Link>
            )
        )}
      </section>
    ));
  }

  let mdt = idata.main;
  console.log('mdt:', mdt);

  // item_D에 담긴값은 data/item.js의 객체의 배열값
  return (
    <section className='itemList'>
      {/* 각각아이템 */}
      {idata.map((v, i) => (
        <Link
          to='/여행은살아보는거야'
          state={{
            src: v.src,
            iname: v.iname,
            iloca: v.iloca,
            ihost: v.ihost,
            ietc: v.ietc,
            inum: v.inum,
            gmap: v.gmap,
            main: v.main,
          }}
          key={i}
        >
          <div className='item'>
            <div className='itemImg'>
              <SwiperItem seq={v.inum} cat={props.cat} src={v.src} />
            </div>
            {/* 아이템 타이틀 */}
            <div className='itemTit'>
              <ul>
                {/* 아이템 이름 */}
                <li className='iname'>{v.iname}</li>
                {/* 아이템 위치 */}
                <li className='iloca'>{v.iloca}</li>
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
} ///////////// Items 컴포넌트 //////////////

// 내보내기
export default Items;
