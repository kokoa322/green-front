let price = new URLSearchParams(location.search).get("price");
let total = new URLSearchParams(location.search).get("total");
let image = new URLSearchParams(location.search).get("image");
let count = new URLSearchParams(location.search).get("count");
let productName = new URLSearchParams(location.search).get("productName");

localStorage.setItem("price");

$("body").append(`
<section class="cartBox row">
 <div class="cartInfo">
  <h2>장바구니</h2>
  <p></p>
 </div>
</section>
`);

function listing() {
  if (cartList.length) {
    $(".cartInfo p").text("");
    let trList = `<table border="1">
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
      trList += `<td><img src="./img/${value.photo}" alt="${value.name}" /></td>`;
      trList += `<td>${value.name} <br> <span class="price">${value.price}</span></td>`;
      trList += `<td>
                <button type="button" class="qty__plus">+</button>
                <input type="text" value="${value.quantity}" autocomplete="off" class="qty__input">
                <button type="button" class="qty__minus">-</button>
             </td>`;
      trList += `<td class="myTotal">${(value.quantity * value.price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>`;
      trList += `<td><button type="button" class="remove">삭제</button></td>`;
      trList += `</tr>`;
      total = total + value.quantity * value.price;
    });
    trList += `</tbody>`;
    trList += `<tfoot>`;
    trList += `<tr>`;
    trList += `<td colspan="5">합계 : <span>${total}</span></td>`;
    trList += `</tr>`;
    trList += `</tfoot>`;
    trList += `</table>`;
    trList += `<div class="order"><button type=button>주문하기</button></div>`;

    $(".cartBox table").remove();
    $(".cartBox .order").remove();
    $(".cartBox").append(trList);
  } else {
    $(".cartInfo p").text("장바구니가 비어있습니다.");
    $(".cartBox table").remove();
  }
}

listing();

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
