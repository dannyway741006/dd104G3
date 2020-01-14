// function checkId() {
//   let xhr = new XMLHttpRequest();

//   xhr.addEventListener("load" = function () {
//     if (xhr.status == 200) {
//       document.getElementById("back_product").innerHTML = xhr.responseText;
//     } else {
//       alert(xhr.status);
//     }
//   })

//   //設定好所要連結的程式
//   let url = "../php/mall/back_product.php";
//   xhr.open("post",url, true);
  
//   //送出資料
//   xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//   xhr.send();
// }