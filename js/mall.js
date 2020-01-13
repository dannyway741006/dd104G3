// 購物車數字
let cartCount = document.querySelector('.mall_cart_cir');
let mallBtn = document.querySelector('.mall_bBtn');
let count = 0;

if (cartCount.textContent === 0) {
  cartCount.style.display = "none";
} else {
  mallBtn.addEventListener('click', function () {
    cartCount.style.display = "block";
    count++;
    cartCount.textContent = count;
  })
}


/* jQuery*/
/* 啟用貓頭鷹/niceSelect下拉 */
$(document).ready(function ($) {
  $('.custom1').owlCarousel({
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInY',
    items: 3,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    loop: true,
    autoplay: true, //自動輪播
    autoplayTimeout: 4500, // 輪播速度
    dots: true,
    // nav: true, //小箭頭

    responsive: {
      768: {
        items: 3
      },

      480: {
        items: 2
      },

      0: {
        items: 2
      }

    }

  });
});


// js撈php資料
// $sql = "select * from `mall_product` where product_type=:product_type and product_num=:product_num";

var mallBtn01 = document.querySelector('#mall_btn01'); //主按鈕類別1
var mallBtn02 = document.querySelector('#mall_btn02'); //主按鈕類別2
var mallBtn03 = document.querySelector('#mall_btn03'); //主按鈕類別3





let mall_data, mall_type, mall_num;

async function getProduct() {
  mall_color.innerHTML = ''; //下拉選單按鈕預設
  let mallType = this.dataset ? this.dataset.type : 1;
  mall_data = await fetch('./mall_data_test.php?product_type=' + mallType)
    .then(res => res.json())
    .then(json => json)
  // console.log(mall_data);

  mall_content();
}




function mall_content() {
  //預設

  var product_name = document.querySelector('#product_name');
  var product_features = document.getElementsByClassName('product_features')[0];
  var product_price = document.querySelector("#product_price");
  product_name.textContent = mall_data[0].product_name; //商品名字
  product_features.innerHTML = mall_data[0].product_desc; //商品描述
  product_price.textContent = mall_data[0].product_price; //商品價格


  var mall_color = document.querySelector('#mall_color');

  function owlBtn() {
    mall_color.innerHTML = '';
    var thisJpg = this.src.substring(this.src.lastIndexOf("/") + 1);
    // console.log(thisJpg);
    // console.log(thisJpg.substring(0, 3));


    // console.log(mallBg.style.backgroundImage);













    for (var i in mall_data) {

      if (thisJpg.substring(0, 3) == mall_data[i].product_num) {
        // console.log(mall_data[i].product_name)

        //商品背景圖
        var mallBg = document.querySelector('.mall_content');
        // mallBg.style.backgroundImage = `url(./img/mall_img/${thisJpg.substring(0,3)}_bg.jpg)`;
        //  console.log( thisJpg.substring(0,3))
        mallBg.style.backgroundImage = `url(./img/mall_img/${thisJpg.substring(0,3)}_bg.jpg)`;
        // console.log(mallBg.style.backgroundImage)














        // //商品基本資料
        product_name = document.querySelector('#product_name');
        product_features = document.getElementsByClassName('product_features')[0];
        product_price = document.querySelector("#product_price");

        product_name.textContent = mall_data[i].product_name; //商品名字
        product_features.innerHTML = mall_data[i].product_desc; //商品描述
        product_price.textContent = mall_data[i].product_price; //商品價格 



        var sbgColorArr = [];
        sbgColorArr.push(mall_data[i]["product_color"]);
        // 下拉選單 選項
        var mall_color_option = document.createElement("option");
        var mall_color_optionSingle = mall_color.appendChild(mall_color_option);

        mall_color_optionSingle.textContent = `${sbgColorArr}`;

        // 下拉選單 Value
        var mall_option_value_first = mall_data[i].product_src.lastIndexOf("/") + 1;
        var mall_option_value_last = mall_data[i].product_src.lastIndexOf("png") - 1;

        mall_color_optionSingle.value = mall_data[i]["product_src"].substring(mall_option_value_first, mall_option_value_last);


        // // 下拉換圖
        var bImag = document.querySelector('.b_img');
        bImag.src = `img/mall_img/${document.querySelectorAll('#mall_color option')[0].value}.png`;
        mall_color.addEventListener('change', function () {
          let val = this.value;
          bImag.src = `img/mall_img/${val}.png`;
        })


      }

    }


    // var dataThisNum = mall_data[thisJpg.charAt(2)];
    // console.log(dataThisNum)
    // //商品基本資料
    // var product_name = document.querySelector('#product_name');
    // var product_features = document.getElementsByClassName('product_features')[0];
    // var product_price = document.querySelector("#product_price");
    // product_name.textContent = mall_data[0].product_name; //商品名字
    // product_features.innerHTML = mall_data[0].product_desc; //商品描述
    // product_price.textContent = mall_data[0].product_price; //商品價格

    // console.log( product_name.textContent)



  }



 




  // 預設背景圖
  var mallBg = document.querySelector('.mall_content');
  for (var i in mall_data) {
    if (mall_data[i]["product_num"] == mall_data[0]["product_num"]) {
      mallBg.style.backgroundImage = "url(./"+ mall_data[0]["product_bg_src"];
      console.log(mallBg.style.backgroundImage)
    }

  }



  // 預設第0個商品
  var sbgColorArr = [];
  for (var i in mall_data) {
    if (mall_data[i]["product_num"] == mall_data[0]["product_num"]) {
      sbgColorArr.push(mall_data[i]["product_color"]);

      // 下拉選單 選項
      var mall_color_option = document.createElement("option");
      mall_color.appendChild(mall_color_option).textContent = `${sbgColorArr[i]}`;

      // 下拉選單 Value
      var mall_option_value_first = mall_data[i].product_src.lastIndexOf("/") + 1;
      var mall_option_value_last = mall_data[i].product_src.lastIndexOf("png") - 1;
      document.querySelectorAll("#mall_color option")[i].setAttribute("value", mall_data[i]["product_src"].substring(mall_option_value_first, mall_option_value_last));
    }

  }


  // // 下拉換圖預設
  var bImag = document.querySelector('.b_img');
  bImag.src = `img/mall_img/${document.querySelectorAll('#mall_color option')[0].value}.png`;
  mall_color.addEventListener('change', function () {
    let val = this.value;
    bImag.src = `img/mall_img/${val}.png`;
  })













  // //商品基本資料
  // var product_name = document.querySelector('#product_name');
  // var product_features = document.getElementsByClassName('product_features')[0];
  // var product_price = document.querySelector("#product_price");
  // product_name.textContent = mall_data[0].product_name; //商品名字
  // product_features.innerHTML = mall_data[0].product_desc; //商品描述
  // product_price.textContent = mall_data[0].product_price; //商品價格


  // 預設下拉資料庫資料
  // var sbgColorArr = [];

  // for (var i in mall_data) {
  //   if (mall_data[i]["product_num"] == mall_data[0]["product_num"]) {
  //     sbgColorArr.push(mall_data[i]["product_color"]);

  //     // 下拉選單 選項
  //     var mall_color_option = document.createElement("option");
  //     mall_color.appendChild(mall_color_option).textContent = `${sbgColorArr[i]}`;

  //     // 下拉選單 Value
  //     var mall_option_value_first = mall_data[i].product_src.lastIndexOf("/") + 1;
  //     var mall_option_value_last = mall_data[i].product_src.lastIndexOf("png") - 1;
  //     document.querySelectorAll("#mall_color option")[i].setAttribute("value", mall_data[i]["product_src"].substring(mall_option_value_first, mall_option_value_last));
  //   }

  // }

  // 預設輪播資料庫資料
  var sbg_arr = [];
  var sbg_str = [];

  var product_num = mall_data[0]["product_num"];
  sbg_arr.push(mall_data[0]["product_slide_img"]);
  sbg_str.push(mall_data[0]["product_name"]);
  for (var i in mall_data) {
    if (product_num !== mall_data[i]["product_num"]) {
      sbg_arr.push(mall_data[i]["product_slide_img"]);
      sbg_str.push(mall_data[i]["product_name"]);
      product_num = mall_data[i]["product_num"];
    };
  }

  var owl_img_list = document.querySelectorAll(".owl_img");
  var owl_str_list = document.querySelectorAll(".item_list p");
  for (i = 0; i < owl_img_list.length; i++) {
    owl_img_list[i].setAttribute("src", sbg_arr[(i + sbg_arr.length) % sbg_arr.length]);
    owl_str_list[i].textContent = sbg_str[(i + sbg_str.length) % sbg_str.length];

    owl_img_list[i].addEventListener("click", owlBtn, false);

  }















}


window.addEventListener("load", getProduct);
mallBtn01.addEventListener("click", getProduct);
mallBtn02.addEventListener("click", getProduct);





// var mall_bBtn_all = document.querySelector("#mall_bBtn_all");
// var mall_color_option = document.createElement("option");
// var mall_color = document.querySelector("#mall_color");
// var mall_color_sql = mall_data[0].product_color;

// 顏色
// var mall_new_option = mall_color.appendChild(mall_color_option);
// var mall_option_value_first = mall_data[0].product_src.lastIndexOf("/") + 1;
// var mall_option_value_last = mall_data[0].product_src.lastIndexOf("png") - 1;
// var mall_new_option_value = mall_data[0].product_src.substring(mall_option_value_first, mall_option_value_last);
// mall_new_option.innerHTML = mall_color_sql;
// mall_new_option.setAttribute("value", mall_new_option_value);