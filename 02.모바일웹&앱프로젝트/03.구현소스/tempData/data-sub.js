// 서브 data 객체 셋팅 JS - data-sub.js

const subData = {
  // 컨텐츠영역
  contents:`
  <main class="cont ibx">
    <!-- 메인네비 -->
    <div class="itemNav">
      <ol>
        <li><a href="./index.html">HOME>></a></li>
        <li><a href="#">BAGS>></a></li>
        <li>{{$store.state.items[0].sort}} >></li>
        <li>{{$store.state.items[0].name}}</li>
      </ol>
    </div>
    <!-- 아이템제목 -->
    <div class="itemName">
      <div class="iName">{{$store.state.items[0].name}}</div>
      <ol>
        <li>{{$store.state.items[0].sort}}</li>
        <li>{{$store.state.items[0].price}}</li>
      </ol>
    </div>
    <!-- 상품 그리드영역 -->
    <div class="grid">
      <div class="item" v-for="v in $store.state.items[0].idx" v-bind:key="v">
        <a href="">
          <img 
          v-bind:src="
          './images/bags/' +
          $store.state.items[3].sort + '/' +
          $store.state.items[3].name + '/' +
          v + '.jpg'" alt="아이템" />
        </a>
      </div>
    </div>
    <!-- 아이템 설명 -->
    <div class="iteminfo">
      <!-- 네비영역 -->
      <ul class="infoList">
        <li class="dimention">
          <h3>DIMENTION</h3>
        </li>
        <li class="materials">
          <h3>MATERIALS</h3>
        </li>
        <li class="itemVideo">
          <h3>FEATURES</h3>
        </li>
      </ul>
    </div>
  </main>
  `,
  // 설명영역
  intro:`
  <div class="infoText">
    <div class="iInfo">
      <!-- <video autoplay loop muted>
        <source src="./video/FREITAG - F306 HAZZARD.mp4" />
      </video> -->
      This unique article is made of approx. 76%* recycled materials: 
      <br>- car seat belt (polyester), 100% B-stock
      <br>- distance fabric (polyester) - piping (polyester) 
      <br>- lining (post-consumer PET bottles), 100% recycled 
      <br>- used truck tarpaulin (polyester/PVC), 100% recycled 
      <br>- webbing (polyester) - Velcro fastener (polyamide) 
      <br>- label (PVC), 25% recycled 
      <br>- sewing thread (polyamide) 
      <br>- zipper (polyester/zinc) 
      <br>- laminated foam 
      <br>- tension buckle (polyamide) 
      <br>- woven label (polyester)
    </div>
  </div>
  `,
} //////// subData /////////

// 서브데이터 내보내기
export default subData;