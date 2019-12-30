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

// ==================================================
let allcheck = document.getElementById("allcheck");
let change_word1 = document.getElementById("change_word1");
let change_word2 = document.getElementById("change_word2");

function selectAll(event) {
  const allCheckBox = document.getElementsByClassName('checks');
  
  for (var i = 0; i < allCheckBox.length; i++) {
    allCheckBox[i].checked = event.target.checked;
  }
}
allcheck.addEventListener('click',function(){
if(change_word1.innerHTML.match("全選/")){
  change_word1.innerHTML.style = "color:red";
  change_word1.innerHTML = "取消/";
}else{
  change_word1.innerHTML = "全選/";
}
});



