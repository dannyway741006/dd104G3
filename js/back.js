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


var lightBoxContent = document.getElementById("lightBox_content");

var back_product_input = document.getElementById("back_product_input");

function mall_alert() {
  var trStrS;
  console.log(this.id.substr(3))
  lightBoxContent.style.display = "block";
  backTable[3].style.display = "none";


  back_product_input.innerHTML = "";
  for (var i = 0; i < mallProductObj.length; i++) {
    if (mallProductObj[i].product_no == this.id.substr(3)) {
      // console.log(mallProductObj[i].product_no)
    
      trStrS += `<th>商品編號</th>`
      trStrS += `<td>${mallProductObj[i].product_no}</td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品價格</th>`
      trStrS += `<td><input type="text" value="${mallProductObj[i].product_price}"></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品圖片路徑</th>`
      trStrS += `<td><input type="file" name="productSrc"></input></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品顏色</th>`
      trStrS += `<td><input type="text" style='width:100%' value="${mallProductObj[i].product_color}"></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品說明</th>`
      trStrS += `<td><input type="text" style='width:100%' value="${mallProductObj[i].product_desc}"></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品類別</th>`
      trStrS += `<td>${mallProductObj[i].product_type}</td>`
      trStrS += `</tr>`
      trStrS += `<th>商品背景</th>`
      trStrS += `<td><input type="file" name="productSrc"></input></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th>商品輪播圖</th>`
      trStrS += `<td><input type="file" name="productSrc"></input></td>`
      trStrS += `</tr>`
      trStrS += `<tr>`
      trStrS += `<th colspan="2" style="text-align: center;background-color: #fff;border-bottom: none;border-color:#c8ced3;"><input type="submit" name="submit">送出</th>`
      trStrS += `</tr>`
    
  
      trStrS = trStrS.substring(9);
      back_product_input.innerHTML = trStrS;
    }


  }



}


// for (i = 0; i < mallProductObj.length; i++) {
//   console.log(this.mallProductObj[i])
// }




// function mall_modify() {


// }



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
        trStr += `<td data-th="商品圖片路徑" style='word-break:break-all'">${mallProductObj[i].product_src}</td>`;
        trStr += `<td data-th="商品顏色">${mallProductObj[i].product_color}</td>`;
        trStr += `<td data-th="商品說明" style='word-break:break-all'>${mallProductObj[i].product_desc}</td>`;
        trStr += `<td data-th="商品類別" style='word-break:break-all'>${mallProductObj[i].product_type}</td>`;
        trStr += `<td data-th="商品背景" style='word-break:break-all'">${mallProductObj[i].product_bg_src}</td>`;
        trStr += `<td data-th="商品輪播圖" style='word-break:break-all'">${mallProductObj[i].product_slide_img}</td>`;
        trStr += `<td data-th="設定"><p class="mall_modify" id="pdu${mallProductObj[i].product_no}">編輯</p>/<p class="mall_edit">下架</p>`;
        /*經典之處，要將主鍵對應的值以json的形式進行傳遞，才能在後臺使用*/
        // trStr  = "<td><a href='#'style='text-decoration:none' onclick='Delete(\"" 123"\")'>刪除</a><td>";
        trStr += '</tr>';

      }
      document.getElementById("back_product").innerHTML = trStr;
      // console.log(trStr);
      // console.log(mallProductObj[0]["product_price"]);

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

  //送出資料
  // xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhr.send(null);
}








window.addEventListener("load", mallList, false);



















//跳窗


// let mem_mask = document.getElementById("mem_mask");
// let liclose = document.getElementById("liclose");
// let memlibox = document.getElementById("memlibox");
// let imgClose = document.getElementById("light_box_title");
// let memberbtn = document.getElementById("memberbtn");


// memberbtn.addEventListener("click", function () {
//   mem_mask.classList.add('c');
//   memlibox.classList.add('active_for_memlibox');
//   memlibox.classList.remove('closeani');
// });

// liclose.addEventListener('click', function () {
//   mem_mask.classList.remove('active_for_mask');
//   memlibox.classList.add('closeani');
// });

// mem_mask.addEventListener('click', function () {
//   mem_mask.classList.remove('active_for_mask');
//   memlibox.classList.add('closeani');
// });

// imgClose.addEventListener('click', function () {
//   mem_mask.classList.remove('active_for_mask');
//   memlibox.classList.add('closeani');
// });