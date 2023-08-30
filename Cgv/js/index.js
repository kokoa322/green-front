$.ajax({
  type: "GET",
  url: "./json/storeData.json",
  dataType: "json",
  success(response) {
    //해당하는 store의 정보들
    let storeInfo = response.store;
    //const [img1, img2, img3, img4] = movieInfo.movie[0].image;
    $("body").append(
      `<div id="wrap">
      <header></header>
      <section id="section">
        <!-- <div id="test22"></div> -->
        <article class="article1 row">
          <div class="allView">
            <h2 class="moviechart">무비차트</h2>
            <a href="./movieList.html" class="btn_allView">전체보기</a>
          </div>
          <ul>
            <li>
              <i class="cgvIcon etc age15">15</i>
              <div>
                <h3>오펜하이머</h3>
                <p>예매율 63.4%</p>
                <a href="javascript:;" alt="오펜하이머" class ="target-movie">상세보기</a>
              </div>
            </li>
            <li>
              <i class="cgvIcon etc age15">15</i>
              <div>
                <h3>콘크리트 유토피아</h3>
                <p>예매율 63.4%</p>
                <a href="javascript:;" alt="콘크리트 유토피아" class ="target-movie">상세보기</a>
              </div>
            </li>
            <li>
              <i class="cgvIcon etc age12">12</i>
              <div>
                <h3>달짝지근해</h3>
                <p>예매율 63.4%</p>
                <a href="javascript:;" alt="달짝지근해" class ="target-movie">상세보기</a>
              </div>
            </li>
            <li>
              <i class="cgvIcon etc age15">15</i>
              <div>
                <h3>타겟</h3>
                <p>예매율 63.4%</p>
                <a href="javascript:;" alt="타겟" class ="target-movie">상세보기</a>
              </div>
            </li>
          </ul>
        </article>
        <article class="article2 row">
          <div class="allView">
            <h2 class="moviechart">EVENT</h2>
            <a href="./event.html" class="btn_allView">전체보기</a>
          </div>
          <ul>
            <li>
              <div>
                <img src="img/[밀수]N차 관람 이벤트.jpg" alt="" />
                <div class="zoom">
                  <p><a href="./event2.html">상세보기</a></p>
                </div>
              </div>
              <h4>[밀수]N차 관람 이벤트</h4>
              <p>2023.08.16~2023.08.22</p>
            </li>
            <li>
              <div>
                <img src="img/[오펜하이머] IMAX N차 관람 이벤트.jpg" alt="" />
                <div class="zoom">
                  <p><a href="./event1.html">상세보기</a></p>
                </div>
              </div>
              <h4>[오펜하이머] IMAX N차 관람 이벤트</h4>
              <p>2023.08.08~2023.08.29</p>
            </li>
            <li>
              <div>
                <img src="img/MOINTS 커뮤니티신규 론칭 이벤트!.jpg" alt="" />
                <div class="zoom">
                  <p><a href="./event3.html">상세보기</a></p>
                </div>
              </div>
              <h4>MOINTS 커뮤니티신규 론칭 이벤트!</h4>
              <p>2023.07.18~2023.08.22</p>
            </li>
          </ul>
        </article>
        <article class="article3 row">
          <h2 class="moviechart">특별관</h2>
          <div class="gallery">
            <div class="image">
              <ul>
                <li>
                  <a href="javascript:;"><img src="../CGV/img/SUITE CINEMA.png" alt="SUITE CINEMA" /></a>
                </li>
                <li>
                  <a href="javascript:;"><img src="../CGV/img/CINE & LIVINGROOM.png" alt="CINE & LIVINGROOM" /></a>
                </li>
                <li>
                  <a href="javascript:;"><img src="../CGV/img/4DX.png" alt="4DX" /></a>
                </li>
                <li>
                  <a href="javascript:;"><img src="../CGV/img/CINE & LIVINGROOM.png" alt="CINE de CHEF" /></a>
                </li>
              </ul>
            </div>
            <div class="text">
              <!-- <span class="unview">../CGV/img/SUITE CINEMA.png</span> -->
              <p>
                <a href="#"><strong>SUITE CINEMA</strong><span>#호텔 컨셉의 프리미엄관</span></a>
              </p>
              <p>
                <a href="#"><strong>CINE & LIVINGROOM</strong>
                  <span>#신개념 소셜 상영관</span></a>
              </p>
              <p>
                <a href="#"><strong>4DX</strong> <span>#모션시트 #오감체험</span></a>
              </p>
              <p>
                <a href="#"><strong>CINE de CHEF</strong>
                  <span>#쉐프가 있는 영화관</span></a>
              </p>
            </div>
          </div>
        </article>
        <article class="article4 row">
          <div class="allView">
            <h2 class="moviechart">스토어</h2>
            <a href="./store.html" class="btn_allView">전체보기</a>
          </div>
          <div class="giftcon_wrap">
            <div class="contents">
              <ul class="giftcon_list_wrap">
                <li>
                  <dl class='giftcon_list'>
                    <dd>
                      <a href='javascript:;'>
                        <div class='img_wrap' data-scale=false><img
                            src='../Cgv/img/16778218049340.jpg' alt='${
                              storeInfo[1].name
                            }'></div>
                        <div class='giftcon_info_wrap'>
                             <span>${storeInfo[1].name}</span>
                          <strong>${storeInfo[1].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strong>
                        </div>
                      </a>
                    </dd>
                    <dd>
                      <a href='javascript:;'>
                        <div class='img_wrap' data-scale=false><img
                            src='../Cgv/img/16778214176450.jpg' alt='${
                              storeInfo[2].name
                            }'></div>
                        <div class='giftcon_info_wrap'>
                          <span>${storeInfo[2].name}</span>
                          <strong>${storeInfo[2].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strong>
                        </div>
                      </a>
                    </dd>
                    <dd>
                      <a href='javascript:;'>
                        <div class='img_wrap' data-scale=false><img
                            src='../Cgv/img/16778206767040.jpg' alt='${
                              storeInfo[3].name
                            }'></div>
                        <div class='giftcon_info_wrap'>
                          <span>${storeInfo[3].name}</span>
                          <strong>${storeInfo[3].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strong>
                        </div>
                      </a>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
        </article>
        <article class="article5 row">
          <div class="noticeClient_content">
            <div class="notice_wrap">
              <strong>공지사항</strong>
              <a href="/support/news/detail-view.aspx?idx=7966" class="btn_link">[시스템 점검][즐거운 스마일콘] 시스템 점검 안내</a>
            </div>
            <div class="client_wrap">
              <dl class="client_list">
                <dt><strong>고객센터</strong></dt>
                <dd>
                  <strong>1544-1122</strong>
                  <p>고객센터 운영시간 (평일 09:00~18:00)</p>
                  <p>업무시간 외 자동응답 안내 가능합니다.</p>
                </dd>
              </dl>
            </div>
            <div class="client_btn_wrap">
              <a href="http://www.cgv.co.kr/support/faq/default.aspx">FAQ</a>
              <a href="http://www.cgv.co.kr/support/qna/default.aspx">1:1 문의</a>
              <a href="http://www.cgv.co.kr/support/lease/default.aspx">대관/단체 문의</a>
            </div>
          </div>
          <div class="qr_wrap">
            <strong>앱 다운로드</strong>
            <p>CGV앱에서 더 편리하게 이용하세요</p>
            <div class="img_wrap" data-scale="false">
              <img src="https://img.cgv.co.kr/R2014/images/common/img_qrcode.gif" alt="QR CODE" />
            </div>
            <p>QR코드를 스캔하고<br />앱설치 페이지로 바로 이동하세요</p>
          </div>
        </article>
      </section>
      <footer id="footer"></footer>
    </div>
    <script>
    $("header").load("header.html");
    $("footer").load("footer.html");
  </script>`
    );
  },
  error(xhr) {
    alert(xhr.status + "/" + xhr.errorText);
  },
});

$("body").on("click", ".img_wrap", function () {
  let productName = $(this).next().find("span").text();

  $(location).attr("href", `./storeDetail.html?target=${productName}`);
});

$("body").on("click", ".target-movie", function () {
  let productName = $(this).attr("alt");

  $(location).attr("href", `./movieDetail.html?target=${productName}`);
});
