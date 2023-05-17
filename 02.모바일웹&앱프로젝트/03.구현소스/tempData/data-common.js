// 공통 data 객체 셋팅 JS - datå-common.js

const comData = {
  // 상단영역 html code
  tarea:`
  <header class="top ibx">
  <!-- 로고 / 햄버거버튼 박스 -->
  <div class="topNav">
    <!-- 1-1. 로고 -->
    <h1 class="logo">
      <a href="./index.html"><img src="./images/logo/logo.svg" alt="로고" /></a>
    </h1>
    <!-- 1-2. 회원가입버튼 -->
    <div class="myInfo">
      <a href="#" class="fa-solid fa-user">
        <span class="ir">마이페이지</span>
      </a>
    </div>
    <!-- 1-3. 햄버거버튼 -->
    <div class="btbt">
      <div class="ham">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- 전체 네비영역 박스 -->
  <div class="gnbbx">
    <!-- GNB네비 -->
    <nav class="gnb">
      <ul>
        <!-- 검색버튼 -->
        <li class="sech">
          <div class="fa-solid fa-magnifying-glass">
            <span class="ir">search</span>
            <input type="text" />
          </div>
        </li>
        <li>
          <a href="#">BAGS</a>
          <!-- 클릭방향박스 -->
          <div class="arrow">
            <div class="ar1"></div>
            <div class="ar2"></div>
          </div>
          <div class="smenu">
            <ol>
              <li>
                <a href="item.html?cat=BACKPACKS">BACKPACKS</a>
              </li>
              <li>
                <a href="item.html?cat=LAPTOP_BAGS">LAPTOP BAGS</a>
              </li>
              <li>
                <a href="item.html?cat=MESSENGER_BAGS">MESSENGER BAGS</a>
              </li>
              <li>
                <a href="item.html?cat=SHOPPER_BAGS">SHOPPER BAGS</a>
              </li>
              <li>
                <a href="item.html?cat=SHOULDER_BAGS">SHOULDER BAGS</a>
              </li>
              <li>
                <a href="item.html?cat=SPORTS_BAGS">SPORTS BAGS</a>
              </li>
            </ol>
          </div>
        </li>
        <li>
          <a href="#">ACCESSORIES</a>
          <!-- 클릭방향박스 -->
          <div class="arrow">
            <div class="ar1"></div>
            <div class="ar2"></div>
          </div>
          <div class="smenu">
            <ol>
              <li>
                <a href="#">KEYHOLDERS</a>
              </li>
              <li>
                <a href="#">LAPTOP SLEEVES</a>
              </li>
              <li>
                <a href="#">PHONE CASES</a>
              </li>
              <li>
                <a href="#">POUCHES</a>
              </li>
            </ol>
          </div>
        </li>
        <li><a href="#">ABOUT FREITAG</a></li>
        <li><a href="#">CONTACT</a></li>
        <!-- SNS -->
        <div class="sName">
          <p>FREITAG NEWS</p>
        </div>
        <div class="sns">
          <li>
            <a href="#" class="fa-brands fa-instagram">
              <span class="ir">인스타그램</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/FREITAG/" target="_blank" class="fa-brands fa-square-facebook">
              <span class="ir">페이스북</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCHyhAHfoZOUw0zRCn1JSAMg"
              target="_blank"
              class="fa-brands fa-youtube"
            >
              <span class="ir">유튜브</span>
            </a>
          </li>
          <li><a href="https://www.freitag.ch/en" target="_blank">@ FREITAG 2023</a></li>
        </div>
      </ul>
    </nav>
  </div>
</header>
  `,
}; ////// comData ////////

// 내보내기 
export default comData;