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



  

/* jQuery Ajax */

// $(document).ready(function(){
// 	$(".item[0]").click(function(){
// 		$.ajax({url:"mall_c1_p2.html",success:function(result){
// 			$("#mall_content").html(result);
// 		}});
// 	});
// });




/* jq Ajax撈html 失敗 */
// $('#mall_btn01').click(function(){
//   $.ajax({
//       url: 'mall_test.html', 
//       type: 'GET',
//       dataType: 'html',
//       success: function(data){
//         console.log(data)
//           $('main').html(data);
//       },    
//   });
// });




// js撈php資料
function showProduct(data){
  // let html = data;
  // document.querySelector("main").innerHTML = html;
  console.log(data)
}

let mallBtn01 = document.querySelector('#mall_btn01');

function getProduct(){
  // var xhr = new XMLHttpRequest();
  // xhr.onload = function(){
  //   if(xhr.status == 200){
  //     showProduct(xhr.response);
  //   }else{
  //     alert(xhr.status);
  //   }
  // }
  // var url = "../mall_data.php?product_type=1";
  // xhr.open("Get",url,true);
  // xhr.send(null);
  fetch('../mall_data.php?product_type=1').then(res=>res.text()).then(json=>console.log(json))
}

mallBtn01.addEventListener("click",getProduct)











console.log(mallBtn01)

