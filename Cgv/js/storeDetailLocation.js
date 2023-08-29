$.ajax({
  type: "GET",
  url: "./json/storeData.json",
  dataType: "json",
  success(response) {
    let target = new URLSearchParams(location.search).get("target");
    let storeObj = response.store;

    let storeDetailInfo = storeObj.filter((value) => value.name == target);

    const { name, productComposition, expirationPeriod, price, origin, image } =
      storeDetailInfo[0];

    $("body").append(` 
    <header></header>
    <div class="skipnaiv">
    <a href="#contents" id="skipHeader">메인 컨텐츠 바로가기</a>
  </div>
  <div id="cgvwrap">
    <div id="contaniner" class="">
      <div id="contents" class="">
        
        <div class="category_product_detail_wrap">
          <strong class="category_product_detail_title">${name}</strong>
          <div class="category_product_detail_contents">
            <div class="category_product_detail_contents_img_wrap">
              <ul class="bxslider">
                <li>
                  <img
                    src="${image}"
                    alt="우리 패키지"
                  />
                </li>
              </ul>
            </div>
            <div class="category_product_detail_contents_wrap">
              <p class="category_product_detail_sale_price_wrap">
                <span class="store_deatail_sale_price" id="spnSalePrice"
                  >${price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span
                >
              </p>
              <dl class="category_product_detail_add_info">
                <dt>상품구성</dt>
                <dd>${productComposition}</dd>
                <dt>유효기간</dt>
                <dd>
                  ${expirationPeriod}<br />
                </dd>
                <dt>원산지</dt>
                <dd>${origin}<br /></dd>
                <dt>상품교환</dt>
                <dd>
                  <dl
                    class="com_custom_selectbox com_custom_selectbox_available_viewcgv"
                  >
                    <dt>
                      <a
                        href="#none"
                        class="btn_available_viewcgv btn_available_viewcgv1"
                        onclick="javascript:$.fn.comCloseSelectbox('com_custom_selectbox_btn');$.fn.comSelectbox(this, 'active')"
                        >사용가능 CGV 보기</a
                      >
                    </dt>
                    <dd style="display: none">
                      <a
                        href="#none"
                        class="btn_select0"
                        onclick="javascript:fnGetTheater(100341);"
                        >CGV 영화관람권</a
                      >
                    </dd>
                    <dd style="display: none">
                      <a
                        href="#none"
                        class="btn_select0"
                        onclick="javascript:fnGetTheater(100324);"
                        >더블콤보</a
                      >
                    </dd>
                  </dl>
                  <a
                    href="#none"
                    class="btn_nutritionFacts"
                    data-popup="popNutritionFacts"
                    >영양성분표시</a
                  >
                </dd>
              </dl>
              <div class="category_product_detail_price_wrap">
                <div class="com_form_number">
                  <a href="#none" class="com_btn_minus">-</a>
                  <span class="com_form_count com_form_count0">1</span>
                  <a href="#none" class="com_btn_plus">+</a>
                  <span class="com_total_price" id="spantotalprice"
                    >${price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span
                  >
                </div>
                <div class="category_product_detail_total_price">
                  <p class="com_form_total_price">
                    총 구매금액<span
                      class="com_total_price0 com_product_total_price"
                      >${price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                  </p>
                </div>
              </div>
              <div class="category_product_detail_btn_wrap">
               
                <a href="#" id="cart">
                장바구니
                </a>
                <a href="#" onclick="javascript:app.goLogin();return false;">
                구매하기
                </a>
              </div>
            </div>
          </div>
          <dl class="category_product_detail_dlist">
            <dt>이용안내</dt>
            <dd>
              • 영화관람권 기프트콘은 CGV모바일, 홈페이지, 오프라인 극장에서
              영화를 예매할 수 있는 온라인 상품권입니다.<br />
              • 구매 후 전송받으신 기프트콘은,<br />
              - 사용가능한 CGV에서 지정된 상영타입의 영화만 예매
              가능합니다.(ex. 3D 관람권으로는 3D 영화만 예매 가능합니다)<br />
              - 금액권이 아니므로 차액 환급이 불가합니다. (ex.조조영화/청소년
              관람 시 차액환급 불가)<br />
              - 영화 상영 후 환불 및 반품은 불가합니다.<br />
              • 관람권 기프트콘을 온라인에 등록하시는 경우,<br />
              - 모바일 : MY &gt; 관람권/카드 &gt; 기프트콘에서 '기프트콘 등록'
              버튼 선택하여 수신받은 쿠폰번호 입력<br />
              - 홈페이지(PC) : ‘MyCGV &gt; 스토어 &gt; 내 기프트콘'에서
              [기프트콘 등록]버튼 선택하여 수신받은 쿠폰번호 입력<br />
              .&nbsp;<br />
              • 매점상품 기프트콘은 오프라인 매점에서 실제 상품으로 교환할 수
              있는 온라인 상품권입니다.<br />
              • 구매 후 전송받으신 기프트콘은,<br />
              - 사용가능한 CGV의 매점에서 지정된 해당 상품으로만 교환이
              가능합니다.<br />
              - 해당 상품 내에서 팝콘 혹은 음료, 스낵 변경 시 추가 비용이
              발생합니다.<br />
              - 교환 완료한 상품의 환불 및 반품은 불가합니다.<br />
              • 유효기간 연장을 신청하는 경우,<br />
              - 유효기간은 발급일로부터 5년 이내 횟수 제한 없이 기간 연장
              가능하며, 1회 연장 시 3개월(92일) 단위로 유효기간이
              연장됩니다.&nbsp;<br />
              - 단, 이벤트 경품 및 프로모션 상품의 경우 유효기간 연장이 불가할
              수 있습니다.<br />
              - 유효기간 만료 이후에는 결제금액의 90% 환불이
              가능합니다.&nbsp;<br />
              • 매점상품 기프트콘은 극장 매점에서 상품 교환 후 수령한
              영수증으로 CJ ONE 적립이 가능합니다.<br />
              (모바일App,웹 &gt; MY &gt; 매점적립 or 홈페이지&gt; My CGV &gt;
              매점이용 포인트 적립)<br />
              • 상기 이미지는 실제와 다를 수 있습니다.
            </dd>
            <dt>취소/환불</dt>
            <dd>
              • 구매자는 최초 유효기간 이내에 결제금액의 100%에 대해
              결제취소/환불이 가능하며, 최초 유효기간 만료 후에는 수신자가
              결제금액의 90%에 대해 환불 요청 가능합니다.<br />
              • 단, 이미 사용된 기프트콘에 대해서는 결제취소/환불 신청이
              불가합니다.<br />
              <strong>• </strong><strong>결제취소/환불 방법</strong><br />
              결제취소는 모바일App,웹 &gt; MY &gt; 결제내역조회 &gt; 스토어 or
              홈페이지 &gt; My CGV &gt; 스토어 &gt; 결제내역의 해당 주문
              상세내역에서 가능합니다.<br />
              (기프트콘은 구매일로부터 60일 이내 결제취소 가능하며, 카드
              결제취소 가능 기간이 경과하였을 경우, 고객센터로 연락주시면
              됩니다)<br />
              환불은 모바일App,웹 &gt; MY &gt; 기프트콘 or 홈페이지 &gt; My
              CGV &gt; 스토어 &gt; 내 기프트콘에서 환불을 원하는 기프트콘 등록
              후 진행 가능하며, 비회원의 경우 고객센터로 신청 가능합니다.<br />
              단 이 때, 본인 확인 및 계좌 확인 절차가 진행됩니다.<br />
              • 수신자는 선물받은 기프트콘의 수신거절을 요청할 수 있으며, 이
              경우 구매자에게 취소 및 환불에 대한 안내가 이루어집니다.<br />
              • 결제취소 가능 기간이 경과한 후 수신자가 수신거절을 요청할 경우
              구매자에게 기프트콘이 재발송됩니다.<br />
              • CGV고객센터 1544-1122
            </dd>
            <dt>미성년자 권리보호 안내</dt>
            <dd>
              미성년자인 고객께서 계약을 체결하시는 경우 법정대리인이 그
              계약에 동의하지 아니하면 미성년자 본인 또는 법정대리인이 그
              계약을 취소할 수 있습니다.
            </dd>
            <dt>분쟁 해결</dt>
            <dd>
              1) 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그
              피해의 보상 등에 관한 처리를 위하여<br />
              &nbsp;&nbsp;CGV고객센터(1544-1122)를 설치 운영하고 있습니다.
              <br />2) 회사는 고객센터를 통하여 이용자로부터 제출되는 불만사항
              및 의견을 처리합니다. <br />
              &nbsp;&nbsp;다만, 신속한 처리가 곤란한 경우에는 이용자에게 그
              사유와 처리일정을 즉시 통보합니다. <br />3) 전자상거래
              분쟁(청약철회등)과 관련한 이용자의 피해구제는 이용약관 및
              전자상거래법 등 관련 법령에 따릅니다.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
  <footer id="footer"></footer>
  <script>
  $("header").load("header.html");
  $("footer").load("footer.html");

  
  </script>`);
  },
  error(xhr) {
    alert(xhr.status + "/" + xhr.errorText);
  },
});

function getTotal(quantity) {
  let total = 0;
  let price = parseInt($(".com_total_price").text().replace(",", ""));

  total = parseInt(quantity) * price;
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  $(".com_product_total_price").text(total);
}

$("body").on("click", ".com_btn_plus", function () {
  // $(".qty__input").val() = input 상자에 입력된 값 문자로 추출(parseInt로 묶으면 문자는 무시하고 숫자로 변환해줌)
  quantity = parseInt($(".com_form_count").text());
  if (quantity) {
    quantity = parseInt(quantity);
    $(".com_form_count").text(++quantity); // select, input에 값을 넣어줄때 val(값)(val()에 값이 없을때는 값을 추출해줌)
    getTotal(quantity);
  } else {
    quantity = 1;
    $(".com_form_count").text(quantity);
    getTotal(quantity);
  }
});

// - 누르면
$("body").on("click", ".com_btn_minus", function () {
  quantity = parseInt($(".com_form_count").text());
  if (quantity > 1) {
    $(".com_form_count").text(--quantity);
    getTotal(quantity);
  } else {
    quantity = 1;
    $(".com_form_count").text(quantity);
    getTotal(quantity);
  }
});

$("body").on("click", ".category_product_detail_btn_wrap #cart", function () {
  let price = $(".store_deatail_sale_price").text();
  let total = $(".com_product_total_price").text();
  let image = $(".bxslider li img").attr("src");
  let count = $(".com_form_count").text();
  let productName = $(".category_product_detail_title").text();

  $(location).attr(
    "href",
    `./cart.html?price=${price}&total=${total}&image=${image}&count=${count}&productName=${productName}`
  );
});
