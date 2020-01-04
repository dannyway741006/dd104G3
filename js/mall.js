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