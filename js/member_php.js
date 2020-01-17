function $id(id) {
  return document.getElementById(id);
}
const btnLogin = $id("btnLogin");
btnLogin.addEventListener("click", sendForm);

//--------------------顯示登入者資訊
function showMemInfo(jsonStr) {
  const userStatus = document.querySelector(".status");
  const userName = document.getElementById("mem_id");
  member = JSON.parse(jsonStr);
  if (member.status === "success") {
    MEMBER_INFO = member.data;
    userStatus.classList.add("logout");
    userName.innerText = member.data.mem_name || member.data.mem_id;
    location.replace("./member.html");
  } else {
    alert("帳密錯誤");
  }
}

// --------------------到server端做登入
function sendForm() {
  var memId = $id("memId").value;
  var memPsw = $id("memPsw").value;
  //-------------使用ajax方法到Server端資料
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    console.log(xhr.responseText);
    showMemInfo(xhr.responseText); //顯示登入者資訊
  };
  xhr.open("post", "./php/member/login.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_info = `mem_id=${memId}&mem_psw=${memPsw}`;
  xhr.send(data_info);
}
