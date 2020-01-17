const container = document.getElementById("app");
const hamburger = document.querySelector(".nav_hamburger");
let MEMBER_INFO = {};
(function() {
  const userStatus = document.querySelector(".status");
  const userName = document.getElementById("mem_id");
  const userLogout = document.getElementById("mem_logout");
  let nowPage = null;
  hamburger.addEventListener("click", () =>
    container.classList.toggle("nav_open")
  );
  userLogout.addEventListener("click", logOut);
  function checkLogin() {
    fetch("./php/member/isLogin.php")
      .then(res => res.json())
      .then(json => {
        if (json.status === "success") {
          MEMBER_INFO = json.data;
          userStatus.classList.add("logout");
          userName.innerText = json.data.mem_name || json.data.mem_id;
        }
      })
      .catch(err => console.log(err));
  }
  function logOut() {
    fetch("./php/member/logout.php")
      .then(res => res.json())
      .then(json => location.replace("./member_login.html"))
      .catch(err => console.log(err));
  }
  window.addEventListener("load", checkLogin);
})();
