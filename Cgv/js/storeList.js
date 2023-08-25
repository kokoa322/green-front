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
    <div id="cgvwrap">
      <div id="contaniner" class="">
        <div id="contents" class="">
          <div id="divAction"></div>
          <div class="tit-heading-wrap tit-evt">
            <h3>스토어</h3>
          </div>
          <script language="javascript" type="text/javascript">
            var cname = "";

            history.navigationMode = "compatible";
            $(document).ready(function () {
              $.giftstore_fixObj(
                this,
                $(".category_contents_wrap"),
                $(".category_content"),
                $(".giftstore_logo")
              );
              if (cname != "") {
                $(".sect-linemap .sect-bcrumb .last").html("");
              }
            });

            function fnCategoryData(cno) {
              location.href =
                "/culture-event/popcorn-store/store-category.aspx?CategoryIdx=" +
                cno;
            }
          </script>

          <div class="category_wrap" style="left: 0px">
            <div class="category_contents_wrap">
              <ul class="category_content">
                <li id="cm1" name="categorymenu" class="">
                  <a href="#" onclick="javascript:fnCategoryData('1');"
                    >패키지</a
                  >
                </li>
                <li id="cm5" name="categorymenu" class="">
                  <a href="#" onclick="javascript:fnCategoryData('5');">팝콘</a>
                </li>
                <li id="cm6" name="categorymenu" class="">
                  <a href="#" onclick="javascript:fnCategoryData('6');">음료</a>
                </li>
                <li id="cm7" name="categorymenu" class="">
                  <a href="#" onclick="javascript:fnCategoryData('7');">스낵</a>
                </li>
              </ul>
              <ul class="cart_content">
                <li>
                  <a href="#" onclick="javascript:app.goLogin();return false;"
                    >내 기프트콘</a
                  ><span id="giftconcnt">0</span>
                </li>
                <li>
                  <a href="#" onclick="javascript:app.goLogin();return false;"
                    >장바구니</a
                  ><span id="cartviewcnt">0</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="category_product_wrap">
            <ul class="category_product_list">
              <li>
                <strong class="category_product_title"
                  >패키지<a
                    href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=1"
                    class="btn_category_product"
                    >더보기</a
                  ></strong
                >
                <ul class="category_product_inner_list">
                  
                <li class="storeDetail">
                <a href="./storeDetail.html" class="btn_category_product">
                  <span class="best_product_img_wrap"
                    ><img
                      src="${storeInfo[0].image}"
                      alt="${storeInfo[0].name}"
                  /></span>
                  <span class="best_product_text_wrap">
                    <span class="best_product_text_title"
                      >${storeInfo[0].productComposition}</span
                    >
                    <span class="best_product_text_name"></span>
                    <span class="best_product_sale_price_wrap">
                      <span class="store_deatail_source_price">${storeInfo[0].price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </span>
                  </span>
                </a>
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('1', '100364', '0', ''); return false;"
                  class="btn_category_product_cart"
                  >1</a
                >
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('2', '100364', '0', '1'); return false;"
                  class="btn_category_product_gift"
                  >2</a
                >
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('3', '100364', '0', '1'); return false;"
                  class="btn_category_product_buy"
                  >3</a
                >
                </li>
                <li class="storeDetail">
                <a href="./storeDetail.html" class="btn_category_product">
                  <span class="best_product_img_wrap"
                    ><img
                      src="${storeInfo[1].image}"
                      alt="${storeInfo[1].name}"
                  /></span>
                  <span class="best_product_text_wrap">
                    <span class="best_product_text_title"
                      >${storeInfo[1].productComposition}</span
                    >
                    <span class="best_product_text_name"></span>
                    <span class="best_product_sale_price_wrap">
                      <span class="store_deatail_source_price">${storeInfo[1].price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </span>
                  </span>
                </a>
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('1', '100364', '0', ''); return false;"
                  class="btn_category_product_cart"
                  >1</a
                >
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('2', '100364', '0', '1'); return false;"
                  class="btn_category_product_gift"
                  >2</a
                >
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('3', '100364', '0', '1'); return false;"
                  class="btn_category_product_buy"
                  >3</a
                >
                </li>
                <li class="storeDetail">
                <a href="./storeDetail.html" class="btn_category_product">
                  <span class="best_product_img_wrap"
                    ><img
                      src="${storeInfo[2].image}"
                      alt="${storeInfo[2].name}"
                  /></span>
                  <span class="best_product_text_wrap">
                    <span class="best_product_text_title"
                      >${storeInfo[2].productComposition}</span
                    >
                    <span class="best_product_text_name"></span>
                    <span class="best_product_sale_price_wrap">
                      <span class="store_deatail_source_price">${storeInfo[2].price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </span>
                  </span>
                </a>
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('1', '100364', '0', ''); return false;"
                  class="btn_category_product_cart"
                  >1</a
                >
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('2', '100364', '0', '1'); return false;"
                  class="btn_category_product_gift"
                  >2</a
                >
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('3', '100364', '0', '1'); return false;"
                  class="btn_category_product_buy"
                  >3</a
                >
                </li>
                <li class="storeDetail">
                <a href="./storeDetail.html" class="btn_category_product">
                  <span class="best_product_img_wrap"
                    ><img
                      src="${storeInfo[3].image}"
                      alt="${storeInfo[3].name}"
                  /></span>
                  <span class="best_product_text_wrap">
                    <span class="best_product_text_title"
                      >${storeInfo[3].productComposition}</span
                    >
                    <span class="best_product_text_name"></span>
                    <span class="best_product_sale_price_wrap">
                      <span class="store_deatail_source_price">${storeInfo[3].price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </span>
                  </span>
                </a>
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('1', '100364', '0', ''); return false;"
                  class="btn_category_product_cart"
                  >1</a
                >
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('2', '100364', '0', '1'); return false;"
                  class="btn_category_product_gift"
                  >2</a
                >
                <a
                  href="#none"
                  onclick="javascript:fnMoveLink('3', '100364', '0', '1'); return false;"
                  class="btn_category_product_buy"
                  >3</a
                >
                </li>

                  
                </ul>
              </li>

              <li>
                <strong class="category_product_title"
                  >음료<a
                    href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=6"
                    class="btn_category_product"
                    >더보기</a
                  ></strong
                >
                <ul class="category_product_inner_list">
                  <li class=" ">
                    <a
                      href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100083"
                      class="btn_category_product"
                    >
                      <span class="best_product_img_wrap"
                        ><img
                          src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16680718728370.jpg"
                          alt="탄산음료(M)"
                      /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">탄산음료(M)</span>
                        <span class="best_product_text_name"
                          >시원한 탄산음료와 함께 스트레스도 날리세요</span
                        >
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">2,500</span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('1', '100083', '0', ''); return false;"
                      class="btn_category_product_cart"
                      >1</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('2', '100083', '0', '1'); return false;"
                      class="btn_category_product_gift"
                      >2</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('3', '100083', '0', '1'); return false;"
                      class="btn_category_product_buy"
                      >3</a
                    >
                  </li>
                  <li class="">
                    <a
                      href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100089"
                      class="btn_category_product"
                    >
                      <span class="best_product_img_wrap"
                        ><img
                          src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16784337938330.jpg"
                          alt="아메리카노(HOT)"
                      /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title"
                          >아메리카노(HOT)</span
                        >
                        <span class="best_product_text_name"
                          >현대인의 필수품</span
                        >
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">3,500</span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('1', '100089', '0', ''); return false;"
                      class="btn_category_product_cart"
                      >1</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('2', '100089', '0', '1'); return false;"
                      class="btn_category_product_gift"
                      >2</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('3', '100089', '0', '1'); return false;"
                      class="btn_category_product_buy"
                      >3</a
                    >
                  </li>
                  <li class=" ">
                    <a
                      href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100090"
                      class="btn_category_product"
                    >
                      <span class="best_product_img_wrap"
                        ><img
                          src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16784335517690.jpg"
                          alt="아메리카노(ICE)"
                      /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title"
                          >아메리카노(ICE)</span
                        >
                        <span class="best_product_text_name"
                          >현대인의 필수품</span
                        >
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">4,000</span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('1', '100090', '0', ''); return false;"
                      class="btn_category_product_cart"
                      >1</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('2', '100090', '0', '1'); return false;"
                      class="btn_category_product_gift"
                      >2</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('3', '100090', '0', '1'); return false;"
                      class="btn_category_product_buy"
                      >3</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <strong class="category_product_title"
                  >스낵<a
                    href="/culture-event/popcorn-store/store-category.aspx?CategoryIdx=7"
                    class="btn_category_product"
                    >더보기</a
                  ></strong
                >
                <ul class="category_product_inner_list">
                  <li class="">
                    <a
                      href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100017"
                      class="btn_category_product"
                    >
                      <span class="best_product_img_wrap"
                        ><img
                          src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16751302789660.jpg"
                          alt="칠리치즈나쵸"
                      /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title"
                          >칠리치즈나쵸</span
                        >
                        <span class="best_product_text_name"
                          >바삭바삭 나쵸, 얼마나 맛있게요?</span
                        >
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">4,900</span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('1', '100017', '0', ''); return false;"
                      class="btn_category_product_cart"
                      >1</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('2', '100017', '0', '1'); return false;"
                      class="btn_category_product_gift"
                      >2</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('3', '100017', '0', '1'); return false;"
                      class="btn_category_product_buy"
                      >3</a
                    >
                  </li>
                  <li class="">
                    <a
                      href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100092"
                      class="btn_category_product"
                    >
                      <span class="best_product_img_wrap"
                        ><img
                          src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/15464120856450.jpg"
                          alt="플레인핫도그"
                      /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title"
                          >플레인핫도그</span
                        >
                        <span class="best_product_text_name">플레인핫도그</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">4,500</span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('1', '100092', '0', ''); return false;"
                      class="btn_category_product_cart"
                      >1</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('2', '100092', '0', '1'); return false;"
                      class="btn_category_product_gift"
                      >2</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('3', '100092', '0', '1'); return false;"
                      class="btn_category_product_buy"
                      >3</a
                    >
                  </li>
                  <li class=" ">
                    <a
                      href="/culture-event/popcorn-store/product-detail.aspx?GG_NO=100015"
                      class="btn_category_product"
                    >
                      <span class="best_product_img_wrap"
                        ><img
                          src="http://img.cgv.co.kr/GiftStore/Product/Pc/List/16757490557660.jpg"
                          alt="오징어(완제품)"
                      /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title"
                          >오징어(완제품)</span
                        >
                        <span class="best_product_text_name"
                          >한봉지로는 모자라요</span
                        >
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">3,500</span>
                        </span>
                      </span>
                    </a>
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('1', '100015', '0', ''); return false;"
                      class="btn_category_product_cart"
                      >1</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('2', '100015', '0', '1'); return false;"
                      class="btn_category_product_gift"
                      >2</a
                    >
                    <a
                      href="#none"
                      onclick="javascript:fnMoveLink('3', '100015', '0', '1'); return false;"
                      class="btn_category_product_buy"
                      >3</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="info_use_wrap">
            <a
              href="/culture-event/popcorn-store/store-guide.aspx"
              class="btn_info_use"
            >
              <span class="btn_info_use_title">CGV 기프트샵 이용안내</span>
              <span class="btn_info_use_subtitle"
                >새롭게 리뉴얼한 CGV 기프트샵와 함께<br />CGV에서 또 다른
                즐거움을 누려보세요.</span
              >
            </a>
            <div class="info_use">
              <strong>CGV 고객센터</strong>
              <span class="info_use_telnum">1544-1122</span>
              <span>상담가능 시간 : 월~금 09:00~18:00</span>
              <span>*이 외 시간은 자동 응답 안내 가능</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      $("header").load("header.html");
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
