let cartList = JSON.parse(localStorage.getItem("allItem"));

console.log(cartList.length);
function listing() {
  if (cartList.length) {
    let priceTotal = 0;
    $(".cartInfo p").text("");
    let trList = `
    
    <table border="1">
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                <thead>
                  <tr>
                    <th>이미지</th>
                    <th>상품정보</th>
                    <th>수량</th>
                    <th>금액</th>
                    <th>선택</th>
                  </tr>
                </thead>`;
    trList += `<tbody>`;
    cartList.forEach((value, index) => {
      trList += `<tr>`;
      trList += `<td><img src="${value.image}" alt="${value.productName}" style="width:80px" /></td>`;
      trList += `<td>${value.productName} <br> <span class="price">${value.price}</span></td>`;
      trList += `<td style="display: inline">
                <button type="button" class="qty__plus">+</button>
                <input type="text" value="${value.count}" autocomplete="off" class="qty__input">
                <button type="button" class="qty__minus">-</button>
             </td>`;
      trList += `<td class="myTotal">${(
        parseInt(value.price.replace(",", "")) * parseInt(value.count)
      )
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>`;
      trList += `<td><button type="button" class="remove">삭제</button></td>`;
      trList += `</tr>`;
      priceTotal =
        parseInt(value.price.replace(",", "")) * parseInt(value.count) +
        priceTotal;
    });
    trList += `</tbody>`;
    trList += `<tfoot>`;
    trList += `<tr>`;
    trList += `<td colspan="5">합계 : <span>${priceTotal
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></td>`;
    trList += `</tr>`;
    trList += `</tfoot>`;
    trList += `</table>`;
    trList += `<div class="order"><button type=button>주문하기</button></div>
   
    `;

    $(".cartBox table").remove();
    $(".cartBox .order").remove();
    $(".cartBox").append(trList);
  } else {
    $(".cartInfo p").text("장바구니가 비어있습니다.");
    $(".cartBox table").remove();
  }
}

listing();

$("body").on("click", ".qty__plus", function () {
  // $(".qty__input").val() = input 상자에 입력된 값 문자로 추출(parseInt로 묶으면 문자는 무시하고 숫자로 변환해줌)
  let count = $(this).next().val(); // 지역변수quantity에 this(클릭한qty__plus)의 next(다음요소의 값(input))을 추출해서 대입
  let myprice = $(this).parent().prev().find(".price").text();
  let total = 0;
  if (count) {
    count = count;
    $(this).next().val(++count); // select, input에 값을 넣어줄때 val(값)(val() 빈칸일 때는 현재값을 추출해줌)
    total = count * parseInt(myprice.toString().replace(",", ""));
  } else {
    count = 1;
    $(this).next().val(count);
    total = count * parseInt(myprice.toString().replace(",", ""));
  }
  $(this)
    .parent()
    .next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  getTotal();
});

// - 누르면
$("body").on("click", ".qty__minus", function () {
  count = parseInt($(this).prev().val()); // prev = 이전요소 // 지역변수quantity에 this(클릭한qty__minus)의 prev(이전요소의 값(input))을 추출해서 대입
  let myprice = $(this).parent().prev().find(".price").text();
  let total = 0;
  if (count > 1) {
    $(this).prev().val(--count);
    total = count * parseInt(myprice.toString().replace(",", ""));
  } else {
    count = 1;
    $(this).prev().val(count);
    total = count * parseInt(myprice.toString().replace(",", ""));
  }
  $(this)
    .parent()
    .next()
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

$("body").on("click", "tbody .remove", function () {
  let tRnum = $(this).parent().parent().index();
  //console.log(tRnum);
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
