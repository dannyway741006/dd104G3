function $id(id) {
  return document.getElementById(id);
}
const memId = document.getElementById('memId');
const memName = document.getElementById('memName');
const memEmail = document.getElementById('memEmail');
const memPhone = document.getElementById('memPhone');
const memAddr = document.getElementById('memAddr');
const headshot = document.getElementById('acceptImg');

function checkLogin() {
  fetch("./php/member/isLogin.php")
    .then(res => res.json())
    .then(json => {
      if (json.status === "success") {
        memId.value = json.data.mem_id
        memName.value = json.data.mem_name 
        memEmail.value = json.data.mem_email
        memPhone.value = json.data.mem_tel
        memAddr.value = json.data.mem_addr
        headshot.src = json.data.headshot
        getOrderList(json.data.mem_no)
      }
    })
    .catch(err => console.log(err));
}
//================member update=======================//
const updateBtn = document.getElementById('memberbtn');
updateBtn.addEventListener('click', memUpdate)
function memUpdate() {
  fetch('./php/member/member_update.php', {
    method: 'POST',
    body: new URLSearchParams(`mem_no=${MEMBER_INFO.mem_no}&mem_name=${memName.value}&mem_tel=${memPhone.value}&mem_addr=${memAddr.value}&headshot=${headshot.src}`)
  })
    .then(res=>res.json())
    .then(json=>{
      if(json.status === 'success')alert(json.content)
    })
    .catch(err=>console.log(err))
}
//=====================order list===============================//
const tableOrder = document.querySelector('.table_oder');
function getOrderList(memNo){
  fetch('./php/member/orderList.php',{
    method: 'POST',
    body: new URLSearchParams(`mem_no=${memNo}`)
  })
    .then(res=>res.json())
    .then(json=>order_temp(json.data))
    .catch(err=>console.log(err))
}


const tableProduct = document.querySelector('.table_order_special')
function getOrderProduct(){
  fetch('./php/member/orderProduct.php',{
    method: 'POST',
    body: new URLSearchParams(`order_no=${+this.innerText}`)
  })
    .then(res=>res.json())
    .then(json=>order_temp1(json.data))
    .catch(err=>console.log(err))
}
function deleteOrder(){
  let dom = document.querySelector(`#order_${this.dataset.index}`);
  tableOrder.removeChild(dom)
  fetch('./php/member/deleteItem.php',{
    method: 'POST',
    body: new URLSearchParams(`order_no=${this.dataset.order}`)
  })
    .then(res=>res.json())
    .then(json=>alert(json.content))
    .catch(err=>console.log(err))
}

function order_temp(data) {
  data.forEach((info, index)=>{
    let tr = document.createElement('tr');
    tr.id = `order_${index}`
    tr.innerHTML = `
    <td class='cretDate'>${info.cret_date}</td>
    <td class="order_no">0000${info.order_no}</td>
    <td>${info.atr_date}</td>
    <td>${info.cel_date}</td>
    <td>
      <div class="th3_box">
        <span class="delete_oder" data-index=${index} data-order=${info.order_no}>
          <img src="./img/member_img/trash-alt-regular1.svg" alt="" width="14">
          <img src="./img/member_img/trash-alt-regular.svg" alt="" width="14">
        </span>
      </div>
    </td>
    `
    tableOrder.appendChild(tr)
    const getOrder = document.querySelectorAll('.table_oder .order_no');
    getOrder.forEach(dom=>dom.addEventListener('click', getOrderProduct))
    const deleteBtn = document.querySelector(`#order_${index} .delete_oder`);
    deleteBtn.addEventListener('click', deleteOrder)
  })
}

function order_temp1(data) {
  let test = document.querySelector('.table_order_special')
  // console.log(test);
  
  // if(test)test.removeChild()
  
  data.forEach(info=>{

    const tr = document.createElement('tr')
    tr.innerHTML = `
    <tr>
      <td>${info.product_name}</td>
      <td>${info.product_amout}</td>
      <td>${info.product_price * info.product_amout}</td>
    </tr>
    `
    tableProduct.appendChild(tr)
  })
}
checkLogin()
// function test3() {
//   let xhr = new XMLHttpRequest();
//   // let divLogin = document.getElementById("divLogin");
//   let str = "";
//   xhr.onload = function () {
//     member = JSON.parse(xhr.responseText);
//     console.log("aaa");

//     for (i = 0; i < member.length; i++) {
//       str = order_temp1(member[i].product_no, member[i].product_amout, member[i].product_price, str, i);
//     }

//     str = `
//       <input type="radio" id="order_box${i + 1}" name="gallery" hidden="" checked="checked" />
//       <div class="order_infomation">
//         <div class="order_group1">
//           <table class="table_order table_order_special">
//             <tr class="table_order_top1">
//               <th>商品</th>
//               <th>數量</th>
//               <th>價格</th>
//             </tr>` + str;
//     document.getElementsByClassName("order_details")[0].innerHTML = str;
//   };
//   xhr.open("get", "./php/member/order_mem.php", true);
//   xhr.send(null);
// };


// function test2() {
//   let xhr = new XMLHttpRequest();
//   // let divLogin = document.getElementById("divLogin");

//   xhr.onload = function () {
//     member = JSON.parse(xhr.responseText);
//     // console.log(member);
//     let str = "";
//     for (i = 0; i < member.length; i++) {
//       str = order_temp(member[i].cret_date, member[i].order_no, str, i);
//     }

//     str =
//       `
// <tr class="table_oder_top">
//                       <th>購買日期</th>
//                       <th>訂單編號</th>
//                       <th>
//                         <div class="th3_box">
//                           <span class="allcheck">
//                             <input type="checkbox" id="allcheck" onChange="selectAll.call(this, event);">
//                             <label for="allcheck" class="delete_pointer">
//                               <span id="change_word1">全選/</span>
//                             </label>
//                             <label id="delet_btn1" class="delete_all_oder">
//                               <input type="botton" name="botton" style="display: none;">
//                           </span>
//                           <span class="delete_oder" id="delet_btn">
//                             <img src="./img/member_img/trash-alt-regular1.svg" alt="" width="14">
//                             <img src="./img/member_img/trash-alt-regular.svg" alt="" width="14">
//                           </span>
//                           </label>
//                         </div>
//                       </th>
//                     </tr>` + str;
//     document.getElementsByClassName("table_oder")[0].innerHTML = str;
//     let delet_btn = document.getElementById("delet_btn");
//     let mem_mask = document.getElementById("mem_mask");
//     let liclose = document.getElementById("liclose");
//     let memlibox = document.getElementById("memlibox");
//     let imgClose = document.getElementById("light_box_title");
//     delet_btn.addEventListener("click", function () {
//       mem_mask.classList.add("active_for_mask");
//       memlibox.classList.add("active_for_memlibox");
//       memlibox.classList.remove("closeani");
//     });
//     liclose.addEventListener("click", function () {
//       mem_mask.classList.remove("active_for_mask");
//       memlibox.classList.add("closeani");
//     });

//     mem_mask.addEventListener("click", function () {
//       mem_mask.classList.remove("active_for_mask");
//       memlibox.classList.add("closeani");
//     });

//     imgClose.addEventListener("click", function () {
//       mem_mask.classList.remove("active_for_mask");
//       memlibox.classList.add("closeani");
//     });

//     // ===================================================================

//     let allcheck = document.getElementById("allcheck");
//     let change_word1 = document.getElementById("change_word1");

//     function selectAll(event) {
//       const allCheckBox = document.getElementsByClassName("checks");

//       for (var i = 0; i < allCheckBox.length; i++) {
//         allCheckBox[i].checked = event.target.checked;
//       }
//     }
//     allcheck.addEventListener("click", function () {
//       if (change_word1.innerHTML.match("全選/")) {
//         change_word1.innerHTML = "取消/";
//       } else {
//         change_word1.innerHTML = "全選/";
//       }
//     });
//   };
//   xhr.open("get", "./php/member/order_mem.php", true);
//   xhr.send(null);
// };



