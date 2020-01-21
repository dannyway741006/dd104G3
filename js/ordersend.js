//產生XMLHttpRequest物件
let xhr = new XMLHttpRequest();
let cartSubmit = document.querySelector('.cart_submit');
cartSubmit.addEventListener('click', () => {
  //---判斷會員id---//
  // console.log(MEMBER_INFO);
  alert('訂單已送出');

  //註冊callback function 
  xhr.onload = function () {
    if (xhr.status == 200) {
      // document.querySelector("#idMsg").textContent = xhr.responseText;

      console.log("----", xhr.responseText)
    } else {
      alert(xhr.statusText);
    }
  }

  let cartNewTotal = document.querySelector('.cart_price_total');
  let shipAddr = document.querySelector('#ship_addr');
  let receiverTel = document.querySelector('#receiver_tel');
  let receiverName = document.querySelector('#receiver_name');

  let url = "./php/order/order.php";
  xhr.open("POST", url, true);
  //送出資料
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let sendProductPrice = `product_price=${cartNewTotal.textContent}&mem_no=${MEMBER_INFO.mem_no}&ship_addr=${shipAddr.value}&receiver_name=${receiverName.value}&receiver_tel=${receiverTel.value}`;
  xhr.send(sendProductPrice);
  console.log(sendProductPrice);

  //成功送出資料後清除填入的資訊
  shipAddr.value = "";
  receiverTel.value = "";
  receiverName.value = "";

  cartNewTotal.textContent = 0;
  //成功送出資料後清除頁面商品
  document.querySelector('.cart_list').innerHTML = "";
  //成功送出資料後清除storage裡的資料
  storage.clear();

});