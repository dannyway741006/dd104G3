function $id(id) {
  return document.getElementById(id);
}
//--------------------全域變數
let member = {};


// -------------------------取得登入資訊
function getLoginInfo() {
  let xhr = new XMLHttpRequest();

  xhr.onload = function() {
    member = JSON.parse(xhr.responseText);
    console.log(member);
    if (member.status === 'success') {

      //登入bar面版上 spanLogin 的字改成登出
      $id("memName1").value = member.data.mem_id;
      $id("memName2").value = member.data.mem_name;
      $id("memName3").value = member.data.mem_email;
      $id("memName4").value = member.data.mem_tel;
      $id("memName5").value = member.data.mem_addr;

    }
  };
  xhr.open("post", "./php/member/isLogin.php", true);
  xhr.send(null);
}

function test2() {
  let xhr = new XMLHttpRequest();
  // let divLogin = document.getElementById("divLogin");
  console.log(member);
  xhr.onload = function () {
    member = JSON.parse(xhr.responseText);
    console.log("a");
    let str = "";
    for (i = 0; i < member.length; i++) {
      str = order_temp(member[i].cret_date, member[i].order_no, str, i);
    }

    str =
      `
<tr class="table_oder_top">
                      <th>購買日期</th>
                      <th>訂單編號</th>
                      <th>
                        <div class="th3_box">
                          <span class="allcheck">
                            <input type="checkbox" id="allcheck" onChange="selectAll.call(this, event);">
                            <label for="allcheck" class="delete_pointer">
                              <span id="change_word1">全選/</span>
                            </label>
                            <label id="delet_btn1" class="delete_all_oder">
                              <input type="botton" name="botton" style="display: none;">
                          </span>
                          <span class="delete_oder" id="delet_btn">
                            <img src="./img/member_img/trash-alt-regular1.svg" alt="" width="14">
                            <img src="./img/member_img/trash-alt-regular.svg" alt="" width="14">
                          </span>
                          </label>
                        </div>
                      </th>
                    </tr>` + str;
    document.getElementsByClassName("table_oder")[0].innerHTML = str;

    let delet_btn = document.getElementById("delet_btn");
    let mem_mask = document.getElementById("mem_mask");
    let liclose = document.getElementById("liclose");
    let memlibox = document.getElementById("memlibox");
    let imgClose = document.getElementById("light_box_title");
    let memberbtn = document.getElementById("memberbtn");
    delet_btn.addEventListener("click", function() {
      mem_mask.classList.add("active_for_mask");
      memlibox.classList.add("active_for_memlibox");
      memlibox.classList.remove("closeani");
    });

    memberbtn.addEventListener("click", function() {
      mem_mask.classList.add("active_for_mask");
      memlibox.classList.add("active_for_memlibox");
      memlibox.classList.remove("closeani");
    });

    liclose.addEventListener("click", function() {
      mem_mask.classList.remove("active_for_mask");
      memlibox.classList.add("closeani");
    });

    mem_mask.addEventListener("click", function() {
      mem_mask.classList.remove("active_for_mask");
      memlibox.classList.add("closeani");
    });

    imgClose.addEventListener("click", function() {
      mem_mask.classList.remove("active_for_mask");
      memlibox.classList.add("closeani");
    });

    // ===================================================================

    let allcheck = document.getElementById("allcheck");
    let change_word1 = document.getElementById("change_word1");

    function selectAll(event) {
      const allCheckBox = document.getElementsByClassName("checks");

      for (var i = 0; i < allCheckBox.length; i++) {
        allCheckBox[i].checked = event.target.checked;
      }
    }
    allcheck.addEventListener("click", function() {
      if (change_word1.innerHTML.match("全選/")) {
        change_word1.innerHTML = "取消/";
      } else {
        change_word1.innerHTML = "全選/";
      }
    });
  };
  xhr.open("get", "./php/member/order_mem.php", true);
  xhr.send(null);
}
// function order_temp(cret_date, order_no, str, i) {
//   str += ` 
//   <tr>
//   <td > <label for="order_box${i + 1}" id="memName5">${cret_date}</label></td>
//   <td><label for="order_box${i + 1}">${order_no}</label></td>
//   <td>
//     <div class="th3_box">
//       <span class="checkall">
//         <input type="checkbox" class="checks" id="checkall${(i = 0 ? "" : i)}">
//         <label for="checkall${(i = 0 ? "" : i)}"></label>
//         <label for="${i == 0 ? "" : i}" class="delete_pointer">
//           <span>/</span>
//         </label>
//       </span>
//       <span class="delete_oder id="delet_btn">
//         <img src="./img/member_img/trash-alt-regular1.svg" alt="" width="14">
//         <img src="./img/member_img/trash-alt-regular.svg" alt="" width="14">
//       </span>
//     </div>
//   </td>
// </tr>
// <tr>
//   `;
//   return str;
// }

// ================member update===============================
// function mem_update() {
//   let memname = $id("memName2").value;
//   let mememail = $id("memName3").value;
//   let memtel = $id("memName4").value;
//   let memaddr = $id("memName5").value;

//   let xhr = new XMLHttpRequest();
//   xhr.onload = function() {
//     console.log(xhr.responseText);
//     // showMemInfo(xhr.responseText); //顯示登入者資訊
//     console.log(member)
//   }
//   xhr.open("post", "./php/member/member_update.php", true);
//   xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//   let data_info = `mem_no=${member[0].mem_no}&mem_name=${memname}&mem_addr=${memaddr}&mem_tel=${memtel}
//   &mem_email=${mememail}`;
//   xhr.send(data_info);
// }

window.addEventListener("load", function() {
  //-------------------------檢查是否已登入
  // mem_update();
  getLoginInfo();
  test2();
  // test3();

  //===設定spanLogin.onclick 事件處理程序是 showLoginForm
  // $id("divLogin").onclick = logout;
  //===設定btnLogin.onclick 事件處理程序是 sendForm

  $id("update_member").onclick = mem_update;
  //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
  // $id("liclose").onclick = cancelLogin;  
});










// //--------------------logout
// function logout() {
//   let xhr = new XMLHttpRequest();

//   xhr.onload = function () {
//     member = JSON.parse(xhr.responseText);
//     // console.log(member)
//     if (member.status === 'success') {
//       divLogin.innerHTML = "登入";
//       // $id("memName").innerHTML = "&nbsp;";
//       $id("memId").value = "";
//       $id("memPsw").value = "";
//     }

//   }
//   xhr.open("post", "./php/member/logout.php", true);
//   xhr.send(null)
// }

//--------------------顯示登入者資訊
// function showMemInfo(jsonStr) {

//   member = JSON.parse(jsonStr);
//   // console.log(member)
//   if (member.status === 'success') {
//     // $id("memName").innerText = member.data.mem_id;
//     // $id("divLogin").innerHTML = "登出";//登入bar面版上 spanLogin 的字改成登出

//   } else {
//     alert("帳密錯誤");
//   }
// }

// // --------------------到server端做登入
// function sendForm() {
//   var memId = $id("memId").value;
//   var memPsw = $id("memPsw").value;
//   //-------------使用ajax方法到Server端資料
//   let xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     // console.log(xhr.responseText);
//     showMemInfo(xhr.responseText); //顯示登入者資訊
//   }
//   xhr.open("post", "./php/member/login.php", true);
//   xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//   let data_info = `mem_id=${memId}&mem_psw=${memPsw}`;
//   xhr.send(data_info);
// }

// function test3() {
//   let xhr = new XMLHttpRequest();
//   // let divLogin = document.getElementById("divLogin");
//   console.log('a');
//   xhr.onload = function () {
//     member = JSON.parse(xhr.responseText);
//     // console.log(member);
//     let str = "";
//     for (i = 0; i < member.length; i++) {
//       str = order_temp(member[i].product_no, member[i].product_amout,member[i].product_price, str, i)
//     }
// str =`
// <input type="radio" id=""order_box${i + 1}"" name="gallery" hidden="" checked="checked" />
// <div class="order_infomation">
//   <div class="order_group1">
//     <table class="table_order">
//       <tr class="table_order_top1">
//         <th>商品</th>
//         <th>數量</th>
//         <th>價格</th>
//       </tr>
//       <tr>
//         <th>${product_no}</th>
//         <th>${product_amout}</th>
//         <th>${product_price}</th>
//       </tr>
//     </table>
//   </div>
// </div>
// `
// ======================input 全選/取消===========================
// let change_word1 = document.getElementById("change_word1");

// function order_delete() {
//   if (change_word1.innerHTML.match("取消/")) {
//     let test_delete = document.getElementById("test_delete");
//     test_delete.addEventListener("click", function () {
//       let memName5 = getElementById("memName5");
//       memName5.remove(memName5.innerHTML);
//     });
//   }
// };
// ========================input 全選/取消 end===========================================
