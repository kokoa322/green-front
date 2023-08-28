$.ajax({
  type: "GET",
  url: "./json/test.json",
  dataType: "json",
  success(response) {
    let specialInfo = response.special;

    $("body").append(`
      
      <div id="wrap">
  <header class="index_header"></header>
  <section id="section">
    <article class="specialtheater_title row">
      <div class="contents">
        <br />
        <br />
        <strong>CGV만의 특별함이 있는 영화관을 소개합니다.</strong>
        <ul class="specialtheater_hash_list">
          <li>#TECHNOLOGY</li>
          <li>#PRESTIGE</li>
          <li>#CONCEPT</li>
        </ul>
      </div>
    </article>
    <article class="specialtheater_category row">
      <div class="contents">
        <h4 class="specialtheater_category_title_wrap">
          <strong class="specialtheater_category_title">TECHNOLOGY</strong>
          <span class="specialtheater_category_comment"
            >진화된 3S(Screen, Sound, Seat) 기술로 컨텐츠 몰입도를
            극대화하여 영화 관람에 최적화된 환경을 제공합니다.</span
          >
        </h4>
        <ul class="specialtheater_category_list">
          <li class="wide">
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/궁극의 몰입감.jpg"
                  alt="궁극의 몰입감"
                />
              </div>
              <strong>${specialInfo[0].title}</strong>
              <span>궁극의 몰입감</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/특별한 오감체험.jpg"
                  alt="특별한 오감체험"
                />
              </div>
              <strong>4DX</strong> <span>특별한 오감체험</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/최대치의 공감각.jpg"
                  alt="최대치의 공감각"
                />
              </div>
              <strong>4DX SCREEN</strong>
              <span>최대치의 공감각</span>
            </a>
          </li>
          <li class="wide">
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/3면 확장 스크린.jpg"
                  alt="3면 확장 스크린"
                />
              </div>
              <strong>SCREENX</strong>
              <span>3면 확장 스크린</span>
            </a>
          </li>
          <li class="wide">
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/진화된 스크린.jpg"
                  alt="진화된 스크린"
                />
              </div>
              <strong>SPHEREX</strong>
              <span>진화된 스크린</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img src="./img/특별관/3D 입체음향.jpg" alt="3D 입체음향" />
              </div>
              <strong>SOUNDX</strong> <span>3D 입체음향</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/초대형 스크린.jpg"
                  alt="초대형 스크린"
                />
              </div>
              <strong>STARIUM</strong>
              <span>초대형 스크린</span>
            </a>
          </li>
          <li class="wide">
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/차세대 몰입형 사운드.jpg"
                  alt="차세대 몰입형 사운드"
                />
              </div>
              <strong>DOLBY ATMOS</strong>
              <span>차세대 몰입형 사운드</span>
            </a>
          </li>
        </ul>
      </div>
    </article>
    <article class="specialtheater_category row">
      <div class="contents">
        <h4 class="specialtheater_category_title_wrap">
          <strong class="specialtheater_category_title">PRESTIGE</strong>
          <span class="specialtheater_category_comment"
            >세련된 인테리어와 프리미엄 서비스로 진정한 품격을 느낄 수 있는
            최고급 영화 관람 환경을 선사합니다.</span
          >
        </h4>
        <ul class="specialtheater_category_list">
          <li class="wide">
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/박스형 프리미엄 상영관.jpg"
                  alt="박스형 프리미엄 상영관"
                />
              </div>
              <strong>PRIVATE BOX</strong>
              <span>박스형 프리미엄 상영관</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/호텔형 프리미엄 상영관.jpg"
                  alt="호텔형 프리미엄 상영관"
                />
              </div>
              <strong>SUITE CINEMA</strong>
              <span>호텔형 프리미엄 상영관</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/쉐프가 있는 영화관.jpg"
                  alt="쉐프가 있는 영화관"
                />
              </div>
              <strong>CINE de CHEF</strong>
              <span>쉐프가 있는 영화관</span>
            </a>
          </li>
          <li class="wide">
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/리클라이닝 침대 상영관.jpg"
                  alt="리클라이닝 침대 상영관"
                />
              </div>
              <strong>TEMPUR CINEMA</strong>
              <span>리클라이닝 침대 상영관</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/프리미엄 소파 상영관.jpg"
                  alt="프리미엄 소파 상영관"
                />
              </div>
              <strong>GOLD CLASS</strong>
              <span>프리미엄 소파 상영관</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/대관형 프리미엄 상영관.jpg"
                  alt="대관형 프리미엄 상영관"
                />
              </div>
              <strong>THE PRIVATE CINEMA</strong>
              <span>대관형 프리미엄 상영관</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/리클라이너 상영관.jpg"
                  alt="리클라이너 상영관"
                />
              </div>
              <strong>PREMIUM</strong>
              <span>리클라이너 상영관</span>
            </a>
          </li>
        </ul>
      </div>
    </article>
    <article class="specialtheater_category row">
      <div class="contents">
        <h4 class="specialtheater_category_title_wrap">
          <strong class="specialtheater_category_title">CONCEPT</strong>
          <span class="specialtheater_category_comment"
            >유니크한 테마로 구성된 컨셉 상영관으로 특별한 추억을 만들 수
            있는 다양한 영화 관람 경험을 선물합니다.
          </span>
        </h4>
        <ul class="specialtheater_category_list">
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/자연 컨셉의 힐링 상영관.jpg"
                  alt="자연 컨셉의 힐링 상영관"
                />
              </div>
              <strong>CINE & FORET</strong>
              <span>자연 컨셉의 힐링 상영관</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/신개념 소셜 상영관.jpg"
                  alt="신개념 소셜 상영관"
                />
              </div>
              <strong>CINE & LIVING ROOM</strong>
              <span>신개념 소셜 상영관</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img_wrap">
                <img
                  src="./img/특별관/키즈 전용 상영관.jpg"
                  alt="키즈 전용 상영관"
                />
              </div>
              <strong>CINE KIDS</strong>
              <span>키즈 전용 상영관</span>
            </a>
          </li>
        </ul>
      </div>
    </article>
  </section>
</div>
<footer id="footer"></footer>
<script>
  $("header").load("header.html");
  $("footer").load("footer.html");
</script>
`);
  },
  error(xhr) {
    alert(xhr.status + "/" + xhr.errorText);
  },
});
