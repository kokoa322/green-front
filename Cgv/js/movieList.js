$.ajax({
  type: "GET",
  url: "./json/storeData.json",
  dataType: "json",
  success(response) {
    //해당하는 store의 정보들
    let storeInfo = response.store;
    //const [img1, img2, img3, img4] = movieInfo.movie[0].image;
    $("body").append(
      `<header></header>
      <div class="skipnaiv">
        <a href="#contents" id="skipHeader">메인 컨텐츠 바로가기</a>
      </div>
      <div id="cgvwrap">
        <!-- E Header -->
        <!-- Contaniner -->
        <div id="contaniner" class="">
          <div id="contents" class="">
            <div class="wrap-movie-chart">
              <div class="tit-heading-wrap">
                <h3>무비차트</h3>
                <div class="submenu">
                  <ul>
                    <li><a href="/movies/">무비차트</a></li>
                    <li class="on"><a href="pre-movies.aspx">상영예정작</a></li>
                    <!--비노출처리 : 20211013 //-->
                    <!--<li><a href="/movies/?lt=3">아트하우스</a></li>//-->
                  </ul>
                </div>
              </div>
  
              <div class="sect-movie-chart">
                <h4 class="hidden">상영예정작</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <strong class="rank">이달의 추천영화 1</strong>
                      <a href="/movies/detail-view/?midx=87237">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87237/87237_320.jpg"
                            alt="타겟 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87237">
                        <strong class="title">타겟</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>4.5%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033458&amp;MOVIE_CD_GROUP=20033434"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <strong class="rank">이달의 추천영화 2</strong>
                      <a href="/movies/detail-view/?midx=87228">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87228/87228_320.jpg"
                            alt="강다니엘: 마이 퍼레이드 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87228">
                        <strong class="title">강다니엘: 마이 퍼레이드</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>2.9%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">97%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033408&amp;MOVIE_CD_GROUP=20033408"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <strong class="rank">이달의 추천영화 3</strong>
                      <a href="/movies/detail-view/?midx=87183">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87183/87183_320.jpg"
                            alt="마야 3-숲속 왕국의 위기 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87183">
                        <strong class="title">마야 3-숲속 왕국의 위기</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>2.7%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.24
                          <span>개봉</span>
                          <em class="dday">D-2</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033203&amp;MOVIE_CD_GROUP=20033203"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.08.23(수)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87212">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87212/87212_320.jpg"
                            alt="강변의 무코리타 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                      <span class="screentype">
                        <a
                          class="arthouse"
                          href="#"
                          data-regioncode="MovieCollage"
                          >아트하우스</a
                        >
                      </span>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87212">
                        <strong class="title">강변의 무코리타</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>2.1%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.23
                          <span>개봉</span>
                          <em class="dday">D-1</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033346&amp;MOVIE_CD_GROUP=20033346"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87219">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87219/87219_320.jpg"
                            alt="볼코노고프 대위 탈출하다 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87219">
                        <strong class="title">볼코노고프 대위 탈출하다</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.4%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.23
                          <span>개봉</span>
                          <em class="dday">D-1</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033354&amp;MOVIE_CD_GROUP=20033354"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87231">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87231/87231_320.jpg"
                            alt="에릭 클랩튼: 어크로스 24 나이츠 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87231">
                        <strong class="title"
                          >에릭 클랩튼: 어크로스 24 나이츠</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.1%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.23
                          <span>개봉</span>
                          <em class="dday">D-1</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033414&amp;MOVIE_CD_GROUP=20033414"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87217">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87217/87217_320.jpg"
                            alt="아만다 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87217">
                        <strong class="title">아만다</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.1%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.23
                          <span>개봉</span>
                          <em class="dday">D-1</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033352&amp;MOVIE_CD_GROUP=20033352"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87253">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87253/87253_320.jpg"
                            alt="더 버닝 씨 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87253">
                        <strong class="title">더 버닝 씨</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.23
                          <span>개봉</span>
                          <em class="dday">D-1</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033543&amp;MOVIE_CD_GROUP=20033543"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.08.24(목)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87183">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87183/87183_320.jpg"
                            alt="마야 3-숲속 왕국의 위기 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87183">
                        <strong class="title">마야 3-숲속 왕국의 위기</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>2.7%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.24
                          <span>개봉</span>
                          <em class="dday">D-2</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033203&amp;MOVIE_CD_GROUP=20033203"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.08.25(금)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87191">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87191/87191_320.jpg"
                            alt="[씨네뮤지엄 Season2.] 달리 미술관 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age18">18</i>
                          <!-- <span class="ico-grade 18">18</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87191">
                        <strong class="title"
                          >[씨네뮤지엄 Season2.] 달리 미술관</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.1%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.25
                          <span>개봉</span>
                          <em class="dday">D-3</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033217&amp;MOVIE_CD_GROUP=20033217"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87240">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87240/87240_320.jpg"
                            alt="[인사이터 X CGV] 실전으로 배우는 CX기획 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87240">
                        <strong class="title"
                          >[인사이터 X CGV] 실전으로 배우는 CX기획</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.25
                          <span>개봉</span>
                          <em class="dday">D-3</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033449&amp;MOVIE_CD_GROUP=20033449"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.08.30(수)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87235">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87235/87235_320.jpg"
                            alt="신체모음.zip 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87235">
                        <strong class="title">신체모음.zip</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>1.6%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">97%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033431&amp;MOVIE_CD_GROUP=20033431"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87237">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87237/87237_320.jpg"
                            alt="타겟 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87237">
                        <strong class="title">타겟</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>4.5%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033458&amp;MOVIE_CD_GROUP=20033434"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87228">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87228/87228_320.jpg"
                            alt="강다니엘: 마이 퍼레이드 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87228">
                        <strong class="title">강다니엘: 마이 퍼레이드</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>2.9%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">97%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033408&amp;MOVIE_CD_GROUP=20033408"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87249">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87249/87249_320.jpg"
                            alt="그녀의 취미생활 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                      <span class="screentype">
                        <a
                          class="arthouse"
                          href="#"
                          data-regioncode="MovieCollage"
                          >아트하우스</a
                        >
                      </span>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87249">
                        <strong class="title">그녀의 취미생활</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.1%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033588&amp;MOVIE_CD_GROUP=20033533"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87196">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87196/87196_320.jpg"
                            alt="스파이 코드명 포춘 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87196">
                        <strong class="title">스파이 코드명 포춘</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033250&amp;MOVIE_CD_GROUP=20033250"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87296">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87296/87296_320.jpg"
                            alt="거룩한 술꾼의 전설 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87296">
                        <strong class="title">거룩한 술꾼의 전설</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87184">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87184/87184_320.jpg"
                            alt="물꽃의 전설 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87184">
                        <strong class="title">물꽃의 전설</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87259">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87259/87259_320.jpg"
                            alt="조이 라이드 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age18">18</i>
                          <!-- <span class="ico-grade 18">18</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87259">
                        <strong class="title">조이 라이드</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87202">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87202/87202_320.jpg"
                            alt="쿠렌치스 인 델포이 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageNotyet">미정</i>
                          <!-- <span class="ico-grade Notyet">미정</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87202">
                        <strong class="title">쿠렌치스 인 델포이</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87252">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87252/87252_320.jpg"
                            alt="피아노 프리즘 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87252">
                        <strong class="title">피아노 프리즘</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08.30
                          <span>개봉</span>
                          <em class="dday">D-8</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.08</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87216">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87216/87216_320.jpg"
                            alt="안경 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                      <span class="screentype">
                        <a
                          class="arthouse"
                          href="#"
                          data-regioncode="MovieCollage"
                          >아트하우스</a
                        >
                      </span>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87216">
                        <strong class="title">안경</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.08
                          <span>개봉예정</span>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033421&amp;MOVIE_CD_GROUP=20033351"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.09.05(화)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87303">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87303/87303_320.jpg"
                            alt="[사이다경제] 블로그를 시작하고 월 천으로 퇴사했다(블로그 차트 1위의 운영 비법) 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87303">
                        <strong class="title"
                          >[사이다경제] 블로그를 시작하고 월 천으로
                          퇴사했다(블로그 차트 1위의 운영 비법)</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.05
                          <span>개봉</span>
                          <em class="dday">D-14</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.09.06(수)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87295">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87295/87295_320.jpg"
                            alt="해리 포터와 혼혈 왕자 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87295">
                        <strong class="title">해리 포터와 혼혈 왕자</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.06
                          <span>재개봉</span>
                          <em class="dday">D-15</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87261">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87261/87261_320.jpg"
                            alt="극장판 사사키와 미야노 - 졸업편 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87261">
                        <strong class="title"
                          >극장판 사사키와 미야노 - 졸업편</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.06
                          <span>개봉</span>
                          <em class="dday">D-15</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87257">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87257/87257_320.jpg"
                            alt="듣보인간의 생존신고 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87257">
                        <strong class="title">듣보인간의 생존신고</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.06
                          <span>개봉</span>
                          <em class="dday">D-15</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87250">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87250/87250_320.jpg"
                            alt="서태지 25주년 라이브 타임: 트래블러 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87250">
                        <strong class="title"
                          >서태지 25주년 라이브 타임: 트래블러</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.06
                          <span>개봉</span>
                          <em class="dday">D-15</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87243">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87243/87243_320.jpg"
                            alt="어느 멋진 아침 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87243">
                        <strong class="title">어느 멋진 아침</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.06
                          <span>개봉</span>
                          <em class="dday">D-15</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87255">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87255/87255_320.jpg"
                            alt="이노센트 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87255">
                        <strong class="title">이노센트</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.06
                          <span>개봉</span>
                          <em class="dday">D-15</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87238">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87238/87238_320.jpg"
                            alt="잠 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87238">
                        <strong class="title">잠</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.06
                          <span>개봉</span>
                          <em class="dday">D-15</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033435&amp;MOVIE_CD_GROUP=20033435"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.09.13(수)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87251">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87251/87251_320.jpg"
                            alt="뮤직 샤펠 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87251">
                        <strong class="title">뮤직 샤펠</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.13
                          <span>개봉</span>
                          <em class="dday">D-22</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87256">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87256/87256_320.jpg"
                            alt="안녕, 내일 또 만나 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87256">
                        <strong class="title">안녕, 내일 또 만나</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.13
                          <span>개봉</span>
                          <em class="dday">D-22</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87254">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87254/87254_320.jpg"
                            alt="어파이어 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87254">
                        <strong class="title">어파이어</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.13
                          <span>개봉</span>
                          <em class="dday">D-22</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87218">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87218/87218_320.jpg"
                            alt="차박- 살인과 낭만의 밤 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87218">
                        <strong class="title">차박- 살인과 낭만의 밤</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.13
                          <span>개봉</span>
                          <em class="dday">D-22</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87288">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87288/87288_320.jpg"
                            alt="책 종이 가위 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87288">
                        <strong class="title">책 종이 가위</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.13
                          <span>개봉</span>
                          <em class="dday">D-22</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87203">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87203/87203_320.jpg"
                            alt="쿠렌치스 인 잘츠부르크 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageNotyet">미정</i>
                          <!-- <span class="ico-grade Notyet">미정</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87203">
                        <strong class="title">쿠렌치스 인 잘츠부르크</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.13
                          <span>개봉</span>
                          <em class="dday">D-22</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87197">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87197/87197_320.jpg"
                            alt="프리 철수 리 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87197">
                        <strong class="title">프리 철수 리</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.13
                          <span>개봉</span>
                          <em class="dday">D-22</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.09.14(목)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87262">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87262/87262_320.jpg"
                            alt="닌자터틀-뮤턴트 대소동 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87262">
                        <strong class="title">닌자터틀-뮤턴트 대소동</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.14
                          <span>개봉</span>
                          <em class="dday">D-23</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87297">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87297/87297_320.jpg"
                            alt="여름을 향한 터널, 이별의 출구 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87297">
                        <strong class="title"
                          >여름을 향한 터널, 이별의 출구</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.14
                          <span>개봉</span>
                          <em class="dday">D-23</em>
                        </strong>
                      </span>
                      <span class="like">
                        <a
                          class="link-reservation"
                          href="/ticket/?MOVIE_CD=20033609&amp;MOVIE_CD_GROUP=20033608"
                          >예매</a
                        >
                      </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.09.20(수)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87232">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87232/87232_320.jpg"
                            alt="그란 투리스모 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87232">
                        <strong class="title">그란 투리스모</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.20
                          <span>개봉</span>
                          <em class="dday">D-29</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87287">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87287/87287_320.jpg"
                            alt="더 리프-언더 워터 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87287">
                        <strong class="title">더 리프-언더 워터</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.20
                          <span>개봉</span>
                          <em class="dday">D-29</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87211">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87211/87211_320.jpg"
                            alt="여덟 개의 산 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87211">
                        <strong class="title">여덟 개의 산</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.20
                          <span>개봉</span>
                          <em class="dday">D-29</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.09.21(목)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87260">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87260/87260_320.jpg"
                            alt="아르고 원정대-꼬마 영웅 패티의 대모험 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87260">
                        <strong class="title"
                          >아르고 원정대-꼬마 영웅 패티의 대모험</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.21
                          <span>개봉</span>
                          <em class="dday">D-30</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.09.22(금)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87301">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87301/87301_320.jpg"
                            alt="[인사이터 X CGV] 마케터의 AI 이해하기 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87301">
                        <strong class="title"
                          >[인사이터 X CGV] 마케터의 AI 이해하기</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.22
                          <span>개봉</span>
                          <em class="dday">D-31</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.09.27(수)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87290">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87290/87290_320.jpg"
                            alt="절해고도 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87290">
                        <strong class="title">절해고도</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09.27
                          <span>개봉</span>
                          <em class="dday">D-36</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.09</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87258">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87258/87258_320.jpg"
                            alt="극장판 엉덩이 탐정-미스터리 가면 ~최강의 대결 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageNotyet">미정</i>
                          <!-- <span class="ico-grade Notyet">미정</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87258">
                        <strong class="title"
                          >극장판 엉덩이 탐정-미스터리 가면 ~최강의 대결</strong
                        >
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09
                          <span>개봉예정</span>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87050">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87050/87050_320.jpg"
                            alt="베니스 유령 살인사건 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageNotyet">미정</i>
                          <!-- <span class="ico-grade Notyet">미정</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87050">
                        <strong class="title">베니스 유령 살인사건</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">99%</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09
                          <span>개봉예정</span>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87220">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87220/87220_320.jpg"
                            alt="생츄어리-마법의 소원나무 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87220">
                        <strong class="title">생츄어리-마법의 소원나무</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09
                          <span>개봉예정</span>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87289">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87289/87289_320.jpg"
                            alt="잔고-분노의 적자 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageNotyet">미정</i>
                          <!-- <span class="ico-grade Notyet">미정</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87289">
                        <strong class="title">잔고-분노의 적자</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.09
                          <span>개봉예정</span>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.10.03(화)</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87300">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87300/87300_320.jpg"
                            alt="드림쏭2 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87300">
                        <strong class="title">드림쏭2</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.10.03
                          <span>개봉</span>
                          <em class="dday">D-42</em>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
  
                <h4><span class="hidden">상영예정작</span>2023.10</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87263">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87263/87263_320.jpg"
                            alt="마브카-숲의 노래 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc ageAll">All</i>
                          <!-- <span class="ico-grade All">All</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87263">
                        <strong class="title">마브카-숲의 노래</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.10
                          <span>개봉예정</span>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87298">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87298/87298_320.jpg"
                            alt="블루 자이언트 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age12">12</i>
                          <!-- <span class="ico-grade 12">12</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87298">
                        <strong class="title">블루 자이언트</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.10
                          <span>개봉예정</span>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
  
                  <li>
                    <div class="box-image">
                      <a href="/movies/detail-view/?midx=87299">
                        <span class="thumb-image">
                          <img
                            src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87299/87299_320.jpg"
                            alt="시뮬런트 포스터"
                            onerror="errorImage(this)"
                          />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
  
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87299">
                        <strong class="title">시뮬런트</strong>
                      </a>
  
                      <div class="score">
                        <strong class="percent">예매율<span>0.0%</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 -->
                        <div class="egg-gage small">
                          <span class="sprite_preegg default"></span>
                          <span class="percent">?</span>
                        </div>
                      </div>
  
                      <span class="txt-info">
                        <strong>
                          2023.10
                          <span>개봉예정</span>
                        </strong>
                      </span>
                      <span class="like"> </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer"></footer>
      
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

$("body").on(
  "click",
  ".storeDetail .btn_category_product .best_product_img_wrap ",
  function () {
    let target = $(this).find("img").attr("alt");
    let info = "";
    $.ajax({
      type: "GET",
      url: "./json/storeData.json",
      dataType: "json",
      success: function (response) {
        info = response.store;
        $(location).attr("href", `./storeDetail.html?target=${target}`);
      },
      error: function (xhr) {
        alert(xhr.status + "/" + xhr.errorText);
      },
    });
  }
);
