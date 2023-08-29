let cartList = JSON.parse(localStorage.getItem("allItem"));

//console.log(cartList.length);
function listing() {
  $("#cartHeader").append(`
  <header></header>
  <h1>장바구니</h1>
  <div class="shopping-cart">
    <div class="column-labels">
      <label class="product-image product-name">상품이미지</label>
      <label class="product-details">상품</label>
      <label class="product-price">가격</label>
      <label class="product-quantity">개수</label>
      <label class="product-removal">삭제</label>
      <label class="product-line-price">합계</label>
    </div>
  `);

  if (cartList.length) {
    let grandTotal=0;
  
  cartList.forEach(productInfo  => {
    $("#cartFor").append(`
    <div class="product">
      <div class="product-image">
        <img src="${productInfo.image}">
      </div>
      <div class="product-details">
        <div class="product-title">${productInfo.productName}</div>
        <p class="product-description">${productInfo.productName}</p>
      </div>
      <div class="product-price">${productInfo.price}</div>

      <div class="product-quantity">
      <a href="#none" class="com_btn_minus qty__minus">-</a>
      <span class="com_form_count com_form_count0">${productInfo.count}</span>
      <a href="#none" class="com_btn_plus qty__plus">+</a>
      </div>

      <div class="product-removal">
        <button class="remove-product">
          삭제
        </button>
      </div>
      <div class="product-line-price">${(productInfo.price.toString().replace(",","") * productInfo.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</div>
    </div>
    `);
    grandTotal = (productInfo.price.toString().replace(",","") * productInfo.count) + grandTotal; 
  });
  
}
$("#cartTotal").append(`
     
  <div class="totals">
    <div class="totals-item totals-item-total">
      <label>합계</label>
      <div class="totals-value" id="cart-total">${grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}</div>
    </div>
  </div>
      <button class="checkout">결제</button>
<script>
$("header").load("./header.html");
$("footer").load("./footer.html");
</script>
`)
}

listing();

$("body").on("click", ".qty__plus", function () {
  
  // $(".qty__input").val() = input 상자에 입력된 값 문자로 추출(parseInt로 묶으면 문자는 무시하고 숫자로 변환해줌)
  let count = $(this).prev().text(); // 지역변수quantity에 this(클릭한qty__plus)의 next(다음요소의 값(input))을 추출해서 대입
  let myprice = $(this).parent().prev().text();
  let total = 0;
  if (count) {  
    count = count;
    $(this).prev().text(++count); // select, input에 값을 넣어줄때 val(값)(val() 빈칸일 때는 현재값을 추출해줌)
    total = count * parseInt(myprice.toString().replace(",", ""));
  } else {
    count = 1;
    $(this).prev().text(count)
    total = count * parseInt(myprice.toString().replace(",", ""));
  }
  $(this)
    .parent()
    .next().next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  getTotal();
});

// - 누르면
$("body").on("click", ".qty__minus", function () {
  count = parseInt($(this).next().text()); // prev = 이전요소 // 지역변수quantity에 this(클릭한qty__minus)의 prev(이전요소의 값(input))을 추출해서 대입
  let myprice = $(this).parent().prev().text();
  let total = 0;
  if (count > 1) {
    $(this).next().text(--count);
    total = count * parseInt(myprice.toString().replace(",", ""));
  } else {
    count = 1;
    $(this).next().text(count);
    total = count * parseInt(myprice.toString().replace(",", ""));
  }
  $(this)
    .parent()
    .next().next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  getTotal();
});

// 한 제품 total 금액 구하는 함수
function getTotal() {
  let total = 0;
  $("tbody .myTotal").each(function () {
    $(this).text().toString().replace(",", "");
    total += parseInt($(this).text().toString().replace(",", ""));
  });
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  $("tfoot span").text(total);
}

$("body").on("click", ".remove-product", function () {
  let tRnum = $(this).parent().parent().parent().parent().index();
  console.log(tRnum);
  cartList.splice(tRnum, 1);
  
  localStorage.setItem("allItem", JSON.stringify(cartList));
  listing();
});

$("body").on("click", ".order button", function () {
  let myid = sessionStorage.getItem("userid");
  if (!myid) {
    alert("로그인 후 구매 가능");
    location.href = "./login.html";
  } else {
    location.href = "./buy.html";
    localStorage.clear();
  }
});

/*
$("body").append(`

<header></header>
<section id="section">
  <article class="article4 rows">
    <div class="noticeClient_content">
      <div class="notice_wrap">
        <strong><img src="${image}" style = "width: 80px" /></strong>
      </div>
    </div>
    <div class="qr_wrap">
      <strong>총 금액</strong>
      <div class="img_wrap" data-scale="false">
       <span>${total}</span>
      </div>
    </div>
  </article>
</section>
<footer></footer>
<script>
  $("header").load("./header.html");
  $("footer").load("./footer.html");
</script>

`);
*/
