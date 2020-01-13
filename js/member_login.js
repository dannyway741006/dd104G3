let login_sw1 = document.getElementById("login_sw1");
let mem_login_btn = document.getElementById("mem_login_btn");
let mem_sign_btn = document.getElementById("mem_sign_btn");
let login_move_box = document.getElementById("login_move_box ");
let login_sw1_ani1 = document.getElementById("login_sw1_ani1");
let login_sw1_ani2 = document.getElementById("login_sw1_ani2");
let sw1_word1 = document.getElementById("sw1_word1");
let sw1_word2 = document.getElementById("sw1_word2");
let member_login_in_send = document.querySelector(".mem_login_in_send");
let sign_mem_up_input = document.querySelector('.sign_up_input');
let login_sw2 = document.getElementById("login_sw2");
// sign in
mem_login_btn.addEventListener('click', function () {
  login_move_box.classList.add("active1");
  login_move_box.classList.remove("active2");
  member_login_in_send.classList.add("active1");
  sign_mem_up_input.classList.add("active");
});
// sign up
mem_sign_btn.addEventListener('click', function () {
  login_move_box.classList.add("active2");
  login_move_box.classList.remove("active1");
  member_login_in_send.classList.remove("active1");
  sign_mem_up_input.classList.remove("active");
});
login_sw1.addEventListener('click', function () {
  login_sw1_ani1.classList.add("active3");
  sw1_word1.classList.add("active4");
  login_sw1_ani2.classList.remove("active5");
  sw1_word2.classList.remove("active6");
  member_login_in_send.classList.remove("active7");
  sign_mem_up_input.classList.remove("active");
});
login_sw2.addEventListener('click', function () {
  login_sw1_ani2.classList.add("active5");
  sw1_word2.classList.add("active6");
  login_sw1.classList.remove("active");
  login_sw1_ani1.classList.remove("active3");
  sw1_word1.classList.remove("active4");
  member_login_in_send.classList.add("active7");
  sign_mem_up_input.classList.add("active");
});

// ================light box================================
let open_sign_ligh1 = document.getElementById("open_sign_ligh1");
let mem_mask = document.getElementById("mem_mask");
let liclose = document.getElementById("liclose");
let memlibox = document.getElementById("memlibox");
let imgClose = document.getElementById("light_box_title");
let open_sign_ligh = document.getElementById("open_sign_ligh");
open_sign_ligh1.addEventListener('click', function () {
  mem_mask.classList.add('active_for_mask');
  memlibox.classList.add('active_for_memlibox');
  memlibox.classList.remove('closeani');
});

open_sign_ligh.addEventListener("click", function () {
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

// ===================member_change_img====================================
function showImg(thisimg) {
  let file = thisimg.files[0];
  if (window.FileReader) {
    let files = new FileReader();

    let showimg = document.getElementById("show_sign_img");
    files.onloadend = function (e) {
      showimg.src = e.target.result;
    };
    files.readAsDataURL(file);
    acceptImg.style.display = "block";
  }
}


