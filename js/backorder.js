//---產生一個xhr物件---//
let xhrOrder = new XMLHttpRequest();

getOrder();

function getOrder() {
  xhrOrder.onload = function () {
    //---成功撈取資料的話執行showOrders函式---//
    if (xhrOrder.status == 200) {
      showOrders(xhrOrder.responseText);
      // console.log(xhrOrder.responseText);
    } else {
      alert(xhrOrder.status);
    }
  }

  //---設定撈取資料路徑---//
  let url = "./php/order/backorder.php";
  xhrOrder.open("Get", url, true);
  xhrOrder.send(null);
}

function showOrders(ordersArr) {
  //---將取出來的JSON資料轉換型別---//
  let orders = JSON.parse(ordersArr).data;
  let ordersList = "";
  for (let i = 0; i < orders.length; i++) {
    //---將取出來的資料動態生成結構---//
    ordersList += `
        <tr>
          <td class="orderNo">${orders[i].order_no}</td>
          <td>${orders[i].mem_no}</td>
          <td>還沒取資料喔！！</td>
          <td>${orders[i].product_price}</td>
          <td>${orders[i].cret_date}</td>
          <td>${orders[i].atr_date ? orders[i].atr_date : ''}</td>
          <td>${orders[i].cel_date ? orders[i].cel_date : ''}</td>
          <td>${orders[i].receiver_name}</td>
          <td>${orders[i].ship_addr}</td>
          <td>${orders[i].receiver_tel}</td>
          <td>
            <p class="orderStatusNum" style="display:none;">${orders[i].order_sta}</p>
            <select class="orderStatus">
            </select>
          </td>
          </tr>`;
  }
  document.querySelector('.back_orders_item').innerHTML = ordersList;


  orderSta();
  //---在每一筆訂單下面動態生成物品狀態---//
  function orderSta() {
    let orderStatusNum = document.querySelectorAll('.orderStatusNum');
    let orderStatus = document.querySelectorAll('.orderStatus');
    // console.log(orderStatusNum.length);
    for (let i = 0; i < orderStatusNum.length; i++) {
      // console.log(parseInt(orderStatusNum[i].textContent));
      switch (parseInt(orderStatusNum[i].textContent)) {
        case 1:
          orderStatus[i].innerHTML =
            `<option value="1" selected>1：訂單成立</option>
              <option value="2">2：商品撿貨中</option>
              <option value="3">3：商品已出貨</option>
              <option value="4">4：客戶取消訂單</option>`;
          break;
        case 2:
          orderStatus[i].innerHTML =
            `<option value="1" disabled>1：訂單成立</option>
              <option value="2" selected>2：商品撿貨中</option>
              <option value="3">3：商品已出貨</option>
              <option value="4">4：客戶取消訂單</option>`;
          break;
        case 3:
          orderStatus[i].innerHTML =
            `<option value="1" disabled>1：訂單成立</option>
              <option value="2" disabled>2：商品撿貨中</option>
              <option value="3" selected>3：商品已出貨</option>
              <option value="4">4：客戶取消訂單</option>`;
          break;
        case 4:
          orderStatus[i].innerHTML =
            `<option value="1" disabled>1：訂單成立</option>
              <option value="2" disabled>2：商品撿貨中</option>
              <option value="3" disabled>3：商品已出貨</option>
              <option value="4" selected>4：客戶取消訂單</option>`;
          break;
      }
    }
  }

  let xhrOrderStatus = new XMLHttpRequest();
  let orderStatus = document.querySelectorAll('.orderStatus');
  let orderNo = document.querySelectorAll('.orderNo');
  for (let i = 0; i < orderStatus.length; i++) {
    // console.log(orderStatus[i]);
    //---判定哪一個select上執行change事件---//
    orderStatus[i].addEventListener('change', function statusChange(){
      let orderStatusValue = orderStatus[i].options[orderStatus[i].selectedIndex].value;
      //---執行錯誤的話跳出錯誤訊息---//
      xhrOrderStatus.onload = function () {
        if (xhrOrderStatus.status == 200) {
          // console.log("----", xhrOrderStatus.responseText)
        } else {
          alert(xhrOrderStatus.statusText);
        }
      }
      //---判斷送出資料的order_no號碼---//
      console.log(orderNo[i].textContent);
     
      let url = "./php/order/orderstatusupdate.php";
      xhrOrderStatus.open("POST", url, true);
      //送出資料
      xhrOrderStatus.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      let updateOrderStatus = `order_no=${orderNo[i].textContent}&order_sta=${orderStatusValue}`;
      xhrOrderStatus.send(updateOrderStatus);
      //---查看送出的資料是什麼---//
      // console.log(updateOrderStatus);
    })
  }
}

//---設定每15秒執行一次ajax---//
setInterval(getOrder, 15000);