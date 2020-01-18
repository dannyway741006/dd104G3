//漢堡選單微修
var navBtn = document.querySelector("#navBtn");
var navBar = document.querySelector(".sidebar");

navBtn.addEventListener("click", function () {
  if (navBar.style.marginLeft == "0px") {
    navBar.style.marginLeft = "-200px";

  } else {
    navBar.style.marginLeft = "0px";
  }

  window.addEventListener("resize", function () {
    if (document.body.offsetWidth > 991) {
      navBar.style.marginLeft = "0px";
    } else {
      navBar.style.marginLeft = "-200px";
    }
  })
})


//nav標籤
var navItem = document.querySelectorAll(".nav-item");
var backTable = document.querySelectorAll(".backTable");

backTable[0].style.display = "block";
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function () {
    for (var j = 0; j < backTable.length; j++) {
      backTable[j].style.display = "none";
      if (document.body.offsetWidth > 991) {
        navBar.style.marginLeft = "0px";

      } else {
        navBar.style.marginLeft = "-200px";
      }
    }
    var backNum = this.id.substr((this.id.length) - 1) - 1;
    backTable[`${backNum}`].style.display = "block";
    lightBoxContent.style.display = "none";

  })

}



//mall

var back_product_input = document.getElementById("back_product_input");
var mall_add = document.querySelector(".mall_add");



function mallAdd(){
  var lightBoxContentAdd = document.getElementById("lightBox_content_add");
  lightBoxContentAdd.style.display = "block";
  backTable[3].style.display = "none";
  var trStrAdd;























}


function mall_alert() {
  var lightBoxContent = document.getElementById("lightBox_content");
  var trStrS;
  // console.log(this.id.substr(3))
  lightBoxContent.style.display = "block";
  backTable[3].style.display = "none";


  back_product_input.innerHTML = "";
  for (var i = 0; i < mallProductObj.length; i++) {
    if (mallProductObj[i].product_no == this.id.substr(3)) {
      // console.log(mallProductObj[i].product_no)
      trStrS += `<th>商品編號</th>`
      trStrS += `<td>${mallProductObj[i].product_no}<input type="hidden" name="product_no" value="${mallProductObj[i].product_no}"></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品價格</th>`
      trStrS += `<td><input type="text" name="product_price" value="${mallProductObj[i].product_price}"></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品圖片</th>`
      trStrS += `<td><input type="file" name="product_src"></input>
      <input type="hidden" name="product_src_hidden" value="${mallProductObj[i].product_src}">
      </td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品顏色</th>`
      trStrS += `<td><input type="text" style='width:100%' name="product_color" value="${mallProductObj[i].product_color}"></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品說明</th>`
      trStrS += `<td><input type="text" style='width:100%' name="product_desc" value="${mallProductObj[i].product_desc}"></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品類別</th>`
      trStrS += `<td>${mallProductObj[i].product_type}</td>`
      trStrS += `</tr>`
      trStrS += `<th>商品背景</th>`
      trStrS += `<td><input type="file" name="product_bg_src"></input>
      <input type="hidden" name="product_bg_hidden" value="${mallProductObj[i].product_bg_src}">
      </td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品輪播圖</th>`
      trStrS += `<td><input type="file" name="product_slide_img"></input>
      <input type="hidden" name="product_slide_hidden" value="${mallProductObj[i].product_slide_img}">
      </td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th colspan="2" style="text-align: center;background-color: #fff;border-bottom: none;border-color:#c8ced3;"><input type="submit" name="submit">送出</th>`
      trStrS += `</tr>`

      trStrS = trStrS.substring(9);
      back_product_input.innerHTML = trStrS;
    }
  }
}


function mallList() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      mallProductObj = JSON.parse(xhr.responseText);
      // document.getElementById("back_product").innerHTML = xhr.responseText;
      var trStr = ''; //動態拼接table
      for (var i = 0; i < mallProductObj.length; i++) {

        trStr += '<tr">'; //拼接處規範的表格形式
        trStr += `<td data-th="商品編號">${mallProductObj[i].product_no}</td>`;

        trStr += `<td data-th="商品名稱" style='word-break:break-all'>${mallProductObj[i].product_name}</td>`;
        trStr += `<td data-th="商品價格">${mallProductObj[i].product_price}</td>`;
        trStr += `<td data-th="商品圖片" style='word-break:break-all'"><img width="100" src="${mallProductObj[i].product_src}"></td>`;
        trStr += `<td data-th="商品顏色">${mallProductObj[i].product_color}</td>`;
        trStr += `<td data-th="商品說明" style='word-break:break-all;width:25%'>${mallProductObj[i].product_desc}</td>`;
        trStr += `<td data-th="商品類別" style='word-break:break-all'>${mallProductObj[i].product_type}</td>`;
        trStr += `<td data-th="商品背景" style='word-break:break-all'"><img width="100" src="${mallProductObj[i].product_bg_src}"></td>`;
        trStr += `<td data-th="商品輪播圖" style='word-break:break-all'"><img width="100" src="${mallProductObj[i].product_slide_img}"></td>`;
        trStr += `<td data-th="設定"><span class="mall_modify" id="pdu${mallProductObj[i].product_no}">編輯</span> / <span class="mall_edit">下架</span>`;
        trStr += '</tr>';

      }
      document.getElementById("back_product").innerHTML = trStr;
    } else {
      alert(xhr.status);
    }
    for (var i = 0; i < mallProductObj.length; i++) {
      var mallModify = document.querySelectorAll('.mall_modify');
      mallModify[i].addEventListener('click', mall_alert);
    }
  }

  //設定好所要連結的程式
  let url = "./php/mall/back_product.php";
  xhr.open("get", url, true);
  xhr.send(null);
}


mall_add.addEventListener("click",mallAdd,false)
window.addEventListener("load", mallList, false);
