// 小圖換大圖
var sImag = document.querySelectorAll('.s_img');
var bImag = document.querySelectorAll('.b_img')[0];

for(let i=0;i<sImag.length;i++){
  sImag[i].addEventListener("click",(e) => {
      var img = e.target;
      bImag.src = img.src;
  })
}

