// 小圖換大圖
// var sImag = document.querySelectorAll('.s_img');
// var bImags = document.querySelectorAll('.b_img');
// var bImag = document.querySelectorAll('.b_img')[0];

// for(let i=0;i<sImag.length;i++){
//   sImag[i].addEventListener("click",(e) => {

//       var img = e.target;
//       bImag.src = img.src;

//   })
// }

// 下拉換圖
let mallColor = document.querySelector('#mall_color');

mallColor.addEventListener('change', function () {
  let bImag = document.querySelector('.b_img');
  let val = this.value;
  bImag.src = `img/mall_img/${val}.png`;
})

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
  // $('#mall_color').niceSelect();
  // $('#mall_amount').niceSelect();

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
    // nav: true,

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


let mallBtn01 = document.querySelector('#mall_btn01');
let mall_data, mall_type, mall_num;

async function getProduct() {
  // fetch('./mall_data.php?product_type=1').then(res=>res.json()).then(json=>console.log(json))
  // mall_data = await fetch('./mall_data_test.php?product_type=1&product_num=101')
  mall_data = await fetch('./mall_data_test.php?product_type=1')
    .then(res => res.json())
    .then(json => json)
  // console.log(mall_data);
  mall_content();
}







function mall_content() {
  var product_name = document.querySelector('#product_name');
  var product_features = document.getElementsByClassName('product_features')[0];
  var product_price = document.querySelector("#product_price");
  // var mall_bBtn_all = document.querySelector("#mall_bBtn_all");





  var mall_color_option = document.createElement("option");
  var mall_color = document.querySelector("#mall_color");
  var mall_color_sql = mall_data[0].product_color;

  // 顏色
  var mall_new_option = mall_color.appendChild(mall_color_option);
  var mall_option_value_first = mall_data[0].product_src.lastIndexOf("/") + 1;
  var mall_option_value_last = mall_data[0].product_src.lastIndexOf("png") - 1;
  var mall_new_option_value = mall_data[0].product_src.substring(mall_option_value_first, mall_option_value_last);
  mall_new_option.innerHTML = mall_color_sql;
  mall_new_option.setAttribute("value", mall_new_option_value);




  product_features.innerHTML = mall_data[0].product_desc;
  product_name.textContent = mall_data[0].product_name;
  product_price.textContent = mall_data[0].product_price;
  product_name


  // var sbg_arr = [];
  // // var sbg_str = [];
  // var product_num = mall_data[0]["product_num"];
  // sbg_arr.push(mall_data[0]["product_slide_img"]);
  // for (var i in mall_data) {
  //   if (product_num !== mall_data[i]["product_num"] ) {
  //     sbg_arr.push(mall_data[i]["product_slide_img"]);
  //     product_num = mall_data[i]["product_num"];
  //   };
  // }









  // console.log(sbg_arr);
  var owl_img_list = document.querySelectorAll(".owl_img");
  for (i = 0; i < owl_img_list.length; i++) {
      document.querySelectorAll(".owl_img")[i].setAttribute("src", sbg_arr[(i+3)%3]);
  }
}


window.addEventListener("load", getProduct);
mallBtn01.addEventListener("click", getProduct);

