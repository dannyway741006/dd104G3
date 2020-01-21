// =================member_change_paper==============================
const memberContent = document.querySelector(".member_all_box");
const memcon1 = document.getElementById("memcon1");
const memcon2 = document.getElementById("memcon2");
const member_ani1 = document.getElementById("member_ani1");
const member_ani2 = document.getElementById("member_ani2");
const testh2 = document.getElementById("testh2");
const testh3 = document.getElementById("testh3");
const test = document.getElementById("test");

function member_page1() {
  memberContent.classList.remove("active");
  member_ani1.classList.add("for_member_ani1");
  member_ani2.classList.remove("for_member_ani2");
  testh2.classList.add("colorchangeForH2");
  testh3.classList.remove("colorchangeForH3");
}
function member_page2() {
  memberContent.classList.add("active");
  member_ani1.classList.remove("for_member_ani1");
  member_ani2.classList.add("for_member_ani2");
  testh2.classList.remove("colorchangeForH2");
  testh3.classList.add("colorchangeForH3");
  test.classList.remove("active");
}

// ===================member_change_img====================================
function showImg(thisimg) {
  let file = thisimg.files[0];
  if (window.FileReader) {
    let files = new FileReader();

    let showimg = document.getElementById("acceptImg");
    files.onloadend = function(e) {
      showimg.src = e.target.result;
    };
    files.readAsDataURL(file);
    acceptImg.style.display = "block";
  }
}
// ======================light box=================


let mem_mask1 = document.getElementById("mem_mask1");
let liclose1 = document.getElementById("liclose1");
let memlibox1 = document.getElementById("memlibox1");
let imgClose1 = document.getElementById("light_box_title1");
let enter_delete1 = document.getElementById("enter_delete1");
let memberbtn = document.getElementById("memberbtn");


enter_delete1.addEventListener("click", function() {
  mem_mask1.classList.add("active_for_mask1");
  memlibox1.classList.add("active_for_memlibox1");
  memlibox1.classList.remove("closeani1");
});

liclose1.addEventListener("click", function() {
  mem_mask1.classList.remove("active_for_mask1");
  memlibox1.classList.add("closeani1");
});

mem_mask1.addEventListener("click", function() {
  mem_mask1.classList.remove("active_for_mask1");
  memlibox1.classList.add("closeani1");
});

imgClose1.addEventListener("click", function() {
  mem_mask1.classList.remove("active_for_mask1");
  memlibox1.classList.add("closeani1");
});

memberbtn.addEventListener("click",function(){
  mem_mask1.classList.remove("active_for_mask1");
  memlibox1.classList.add("closeani1");
});

// ==================================================
let allcheck = document.getElementById("allcheck");
let change_word1 = document.getElementById("change_word1");
let change_word2 = document.getElementById("change_word2");

function selectAll(event) {
  const allCheckBox = document.getElementsByClassName("checks");

  for (var i = 0; i < allCheckBox.length; i++) {
    allCheckBox[i].checked = event.target.checked;
  }
}
allcheck.addEventListener("click", function() {
  if (change_word1.innerHTML.match("全選/")) {
    change_word1.innerHTML = "取消/";
  } else {
    change_word1.innerHTML = "全選/";
  }
});

// =========================================================
let terms1 = document.getElementById("terms1");
let terms2 = document.getElementById("terms2");
let terms3 = document.getElementById("terms3");
let terms_close = document.getElementById("terms_close");
let for_terms_box0 = document.getElementById("for_terms_box0");
let for_terms_box1 = document.getElementById("for_terms_box1");
let for_terms_box2 = document.getElementById("for_terms_box2");
let for_terms_box3 = document.getElementById("for_terms_box3");
let terms_all = document.getElementById("terms_all");
let terms_word = document.getElementById("terms_word");
for_terms_box0.addEventListener("click", function() {
  terms_all.style.cssText = "left:0%";
  terms1.classList.add("terms_change");
  terms_word.classList.add("terms_word");
});
for_terms_box1.addEventListener("click", function() {
  terms_all.style.cssText = "left:0%";
  terms1.classList.add("terms_change");
  terms_word.classList.add("terms_word");
});
for_terms_box2.addEventListener("click", function() {
  terms1.classList.remove("terms_change");
  terms2.classList.add("terms_change");
  terms_all.style.cssText = "left:-100%";
  terms_word.classList.add("terms_word");
});
for_terms_box3.addEventListener("click", function() {
  terms_all.style.cssText = "left:-200%";
  terms1.classList.remove("terms_change");
  terms_word.classList.add("terms_word");
});
terms_close.addEventListener("click", function() {
  terms_word.classList.remove("terms_word");
});

// ===============================================================
let terms_content1 = document.querySelector(".terms_box1_content");
let term_box1_title = document.querySelector(".terms_box1_title");
let terms_title_member = document.getElementById("terms_title_member");
let terms_title_privacy = document.getElementById("terms_title_privacy");
let for_terms_content1 = document.getElementById("for_terms_content1");
let for_terms_content2 = document.getElementById("for_terms_content2");

terms_title_member.addEventListener("click", function() {
  terms_content1.classList.add("active");
  term_box1_title.classList.add("active");
});
terms_title_privacy.addEventListener("click", function() {
  terms_content1.classList.remove("active");
  term_box1_title.classList.remove("active");
});

for_terms_content1.addEventListener("click", function() {
  terms_content1.classList.add("active");
  term_box1_title.classList.add("active");
});

for_terms_content2.addEventListener("click", function() {
  terms_content1.classList.remove("active");
  term_box1_title.classList.remove("active");
});
