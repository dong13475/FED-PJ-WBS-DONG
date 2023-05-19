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
        <li> {{$store.state.sort}}>></li>
        <li> {{$store.state.name[$store.state.inum]}} </li>
      </ol>
    </div>
    <!-- 아이템제목 -->
    <div class="itemName">
      <div class="iName">{{$store.state.name[$store.state.inum]}}</div>
      <ol>
        <li>{{$store.state.sort}}</li>
        <li> {{$store.state.price[$store.state.inum]["price"]}} </li>
      </ol>
    </div>
    <!-- 상품 그리드영역 -->
    <div class="grid">
      <div class="item" v-for="v in 10">
        <a href="">
          <img :src="
          './images/bags/'+
          $store.state.sort.toLowerCase()+
          '/'+
          $store.state.name[$store.state.inum].toLowerCase()+
          '/'+v+'.jpg' 
          " alt="아이템" @click.prevent="goData(v)" />
        </a>
      </div>
    </div>
    
  </main>
  `,
  // 컨텐츠영역2
  contentsSub:`
  <main class="cont ibx">
    <!-- 메인네비 -->
    <div class="itemNav">
      <ol>
        <li><a href="">HOME>></a></li>
        <li><a href="">BAGS>></a></li>
        <li>{{$store.state.sort}}>></li>
        <li>{{$store.state.name[$store.state.inum]}}</li>
      </ol>
    </div>
    <!-- 아이템제목 -->
    <div class="itemName">
      <div class="iName">{{$store.state.name[$store.state.inum]}}</div>
      <ol>
        <li>{{$store.state.sort}}</li>
        <li> {{$store.state.price[$store.state.inum]["price"]}} </li>
      </ol>
    </div>
    <!-- 상품 뷰영역 -->
    <div id="vItem">
      <!-- 슬라이드 -->
      <div class="vSlidebx">
        <div class="vSlide">
          <div class="islide">
            <div class="sitem" v-for="v in 10">
              <a href="">
                <img :src="
                './images/bags/'+
                $store.state.sort.toLowerCase()+'/'+$store.state.name[$store.state.inum].toLowerCase()+'/'+v+'.jpg'" @click.prevent="goData(v)"
                alt="아이템" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 플렉스 -->
      <div class="vFlex">
        <ul class="igrid">
          <li v-for="v in 4">
            <img :src="
            './images/bags/'+$store.state.sort.toLowerCase()+'/'+$store.state.name[$store.state.inum].toLowerCase()+'/'+$store.state.bnum+'/'+v+'.jpg'
            " alt="">
          </li>
        </ul>
        <!-- 닫기버튼 -->
        <div class="closebtn">
          <li></li>
          <li></li>
        </div>
        <div class="tflex">
          <!-- 제목 -->
          <h2> {{$store.state.price[$store.state.inum]["code"][$store.state.bnum-1]}} </h2>
          <!-- 종류 -->
          <div class="sort">{{$store.state.sort}}</div>
          <!-- 가격 -->
          <div class="cost">{{$store.state.price[$store.state.inum]["price"]}}</div>
          <!-- 장바구니버튼 -->
          <div class="shopp">
            <span>
              ADD TO CART
            </span>
          </div>
        </div>
      </div>
    </div>
    
  </main>
  `,
  // 설명영역
  intro:`
  <!-- 아이템 설명 -->
    <div class="iteminfo">
      <!-- 네비영역 -->
      <ul class="infoList">
        <li class="dimention on">
          <h3>DIMENTION</h3>
        </li>
        <li class="materials">
          <h3>MATERIALS</h3>
        </li>
        <li class="itemVideo">
          <h3>FEATURES</h3>
        </li>
      </ul>
      <div class="infoText">
        <div class="iInfo">

        <!-- dimention 구역 -->
          <div class="dimen" v-html="$store.state.price[$store.state.inum]['dimen']">
          </div>

        <!-- material 구역 -->
          <div class="materi" v-html="$store.state.price[$store.state.inum]['material']">
          </div>

        <!-- video 구역 -->
          <video class="vid" 
          :src=" 
          'video/' + 
          $store.state.price[$store.state.inum]['video'] + 
          '.mp4' " autoplay loop muted>
          </video>

          
        </div>
      </div>
    </div>
  `,
} //////// subData /////////

// 서브데이터 내보내기
export default subData;