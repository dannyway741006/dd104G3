// =================member_change_paper==============================
const memberContent = document.querySelector(".memberContent");
const memcon1 = document.getElementById("memcon1");
const memcon2 = document.getElementById("memcon2");
function member_page1() {
  memberContent.classList.remove("active");
}
function member_page2() {
  memberContent.classList.add("active");
}
// ===================member_change_img====================================
function showImg(thisimg) {
  let file = thisimg.files[0];
  if (window.FileReader) {
    let files = new FileReader();

    let showimg = document.getElementById("acceptImg");
    files.onloadend = function (e) {
      showimg.src = e.target.result;
    };
    files.readAsDataURL(file);
    acceptImg.style.display = "block";
  }
}
// ======================member_all_order=================

let delet_btn = document.getElementById("delet_btn");
let mem_mask = document.getElementById("mem_mask");
let liclose = document.getElementById("liclose");
let memlibox = document.getElementById("memlibox");
let imgClose = document.getElementById("light_box_title");
let memberbtn = document.getElementById("memberbtn");
delet_btn.addEventListener('click', function () {
  mem_mask.classList.add('active_for_mask');
  memlibox.classList.add('active_for_memlibox');
  memlibox.classList.remove('closeani');
});

memberbtn.addEventListener("click", function () {
  mem_mask.classList.add('active_for_mask');
  memlibox.classList.add('active_for_memlibox');
  memlibox.classList.remove('closeani');
});

liclose.addEventListener('click', function () {
  mem_mask.classList.remove('active_for_mask');
  memlibox.classList.add('closeani');
});

mem_mask.addEventListener('click', function () {
  mem_mask.classList.remove('active_for_mask');
  memlibox.classList.add('closeani');
});

imgClose.addEventListener('click', function () {
  mem_mask.classList.remove('active_for_mask');
  memlibox.classList.add('closeani');
});

// =================input_animatinon=================================
// let upbox = document.getElementById("upbox");
// let upbox1 = document.getElementById("upbox1");
// let text_word = document.getElementById("text_word");
// let text_word1 = document.getElementById("text_word1");

// let input_mask = document.getElementById("input_mask");
// text_word.addEventListener("click", function () {
//   upbox.classList.add('active_mem1');
//   input_mask.classList.add('activeForInput');
//   upbox.classList.remove('active_mem2');
// });

// input_mask.addEventListener("click", function () {
//   upbox.classList.add('active_mem2');
//   input_mask.classList.remove('activeForInput');
// });

// text_word1.addEventListener("click", function () {
//   upbox1.classList.add('active_mem1');
//   input_mask.classList.add('activeForInput');
//   upbox1.classList.remove('active_mem2');
// });

// input_mask.addEventListener("click", function () {
//   upbox1.classList.add('active_mem2');
//   input_mask.classList.remove('activeForInput');
// });


