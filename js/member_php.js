function $id(id) {
  return document.getElementById(id);
}
const btnLogin = $id("btnLogin");
btnLogin.addEventListener("click", sendForm);

//--------------------顯示登入者資訊
function showMemInfo(json) {
  const userStatus = document.querySelector(".status");
  const userName = document.getElementById("mem_id");
  if (json.status === "success") {
    MEMBER_INFO = json.data;
    userStatus.classList.add("logout");
    userName.innerText = json.data.mem_name || json.data.mem_id;
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
  fetch('./php/member/login.php',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      mem_id: memId,
      mem_psw: memPsw
    })
  }).then(res=>res.json())
  .then(json=>showMemInfo(json))
  .catch(err=>console.log(err))
}
