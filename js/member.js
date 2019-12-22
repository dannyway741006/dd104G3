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
    files.onloadend = function(e) {
      showimg.src = e.target.result;
    };
    files.readAsDataURL(file);
    acceptImg.style.display = "block";
  }
}
