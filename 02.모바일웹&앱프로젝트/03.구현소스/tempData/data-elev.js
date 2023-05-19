// 엘레베이터 data 객체 셋팅 JS - data-elev.js


const elevData = {
  elev:`
  <!-- 엘레베이터 전체박스 -->
  <div id="ele">
    <div class="eleele">
      <span>SELECT AND MOVE!</span>
    </div>
    <div class="barea">
      <div class="ele">
        <!-- 뼈대 -->
        <div class="line tl"></div>
        <div class="line ll"></div>
        <div class="line rl"></div>
        <div class="line bl"></div>
        <div class="line itl"></div>
        <div class="line ill"></div>
        <div class="line irl"></div>
        <!-- 바닥구분선 -->
        <!-- <div class="floor1"></div>
        <div class="floor2"></div> -->
        <!-- 로고 -->
        <div class="eleimg">
          <img src="./images/logo/logo-small.svg" alt="작은로고">
        </div>
        <!-- 방향표시 -->
        <!-- 위쪽 -->
        <div class="dirT">
          <div class="dtl dirL"></div>
          <div class="dtr dirL"></div>
        </div>
        <!-- 불켜짐표시 -->
        <div class="light t1"></div>
        <div class="light t2"></div>
        <div class="light t3"></div>
        <!-- 아래쪽 -->
        <div class="dirD">
          <div class="ddl dirL"></div>
          <div class="ddr dirL"></div>
        </div>
        <!-- 버튼 -->
        <div class="btbtb btx"></div>
        <div class="btbbb btx"></div>
        <!-- 문 -->
        <div class="door">
          <div class="ldoor alldoor"></div>
          <div class="rdoor alldoor"></div>
        </div>
      </div>
      
      <!-- 가방 -->
      
      <div class="bags" v-for="v in $store.state.cnt">
        <img :src="
        './images/bags/'+$store.state.sort.toLowerCase()+'/'+$store.state.tname+'/'+v+'.png'
        " alt="가방" />
      </div>
    </div>
    
  </div>
  `
}

// 내보내기
export default elevData;