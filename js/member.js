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
let upbox = document.getElementById("upbox");
let member_input = document.getElementById("member_input");
let input_mask = document.getElementById("input_mask");
member_input.addEventListener("click", function () {
  upbox.classList.add('active');
  upbox.classList.remove('active1');
});
input_mask.addEventListener("click", function () {
  upbox.classList.add('active1');
})

