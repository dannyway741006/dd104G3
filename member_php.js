function $id(id) {
  return document.getElementById(id);
}
//--------------------全域變數
let member = {};

//--------------------logout
function logout() {
  let xhr = new XMLHttpRequest();

  xhr.onload = function() {
    member = JSON.parse(xhr.responseText);
    // console.log(member)
    if (member.status === "success") {
      divLogin.innerHTML = "登入";
      $id("memName").innerHTML = "&nbsp;";
      $id("memId").value = "";
      $id("memPsw").value = "";
    }
  };
  xhr.open("post", "./php/member/logout.php", true);
  xhr.send(null);
}

//--------------------顯示登入者資訊
function showMemInfo(jsonStr) {
  const userStatus = document.querySelector(".status");
  const userName = document.getElementById("mem_id");
  member = JSON.parse(jsonStr);
  if (member.status === "success") {
    MEMBER_INFO = member.data;
    userStatus.classList.add("logout");
    userName.innerText = member.data.mem_name || member.data.mem_id;
    location.href = "./member.html";
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

// -------------------------取得登入資訊
// function getLoginInfo() {
//   let xhr = new XMLHttpRequest();

//   xhr.onload = function() {
//     member = JSON.parse(xhr.responseText);
//     if (member.status === "success") {
//       $id("memName").innerText = member.data.mem_id;
//       $id("divLogin").innerHTML = "登出"; //登入bar面版上 spanLogin 的字改成登出
//       $id("memName1").value = member.data.mem_id;
//       $id("memName2").value = member.data.mem_name;
//       $id("memName3").value = member.data.mem_email;
//       $id("memName4").value = member.data.mem_tel;
//       $id("memName6").value = member.data.mem_addr;
//     }
//   };
//   xhr.open("post", "./php/member/login.php", true);
//   xhr.send(null);
// }

// ================member update===============================
// function mem_update() {
//   let memid = $id("memName1").value;
//   let memname = $id("memName2").value;
//   let mememail = $id("memName3").value;
//   let memtel = $id("memName4").value;
//   let memaddr = $id("memName6").value;

//   let xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     console.log(xhr.responseText);
//     showMemInfo(xhr.responseText); //顯示登入者資訊
//   }
//   xhr.open("post", "member_update", true);
//   xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//   let data_info = `mem_name=${memname}&mem_id=${memid}&mem_addr=${memaddr}&mem_tel=${memtel}
//   &mem_email=${mememail}`;
//   xhr.send(data_info);
// }

window.addEventListener("load", function() {
  //-------------------------檢查是否已登入
  // mem_update();
  // getLoginInfo();
  // test2();

  //===設定spanLogin.onclick 事件處理程序是 showLoginForm
  $id("divLogin").onclick = logout;
  //===設定btnLogin.onclick 事件處理程序是 sendForm
  $id("btnLogin").onclick = sendForm;
  // $id("update_member").onclick = mem_update;
  //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
  // $id("liclose").onclick = cancelLogin;
});
console.log($id("btnLogin"));
$id("btnLogin").onclick = sendForm;
