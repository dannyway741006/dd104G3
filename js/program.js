//新增專案
var main_content = new Vue({
  el: "#content",
  data: {
    open: false,

    programs: [],
    program_name: "",

    cards_list_card_input_box: false,
    cards: [],
    card_name: "",

    invite_btn: false,

    setting_btn: false,

    calendar_btn: false,

    chatroom_btn: false,

    screenWidth: document.documentElement.clientWidth //屏幕宽度
  },
  methods: {
    //新增專案
    add_program(program_name) {
      if (this.program_name !== "") {
        this.programs.push(program_name);
        this.program_name = "";
        this.open = false;
      } else {
        // this.open = false;
      }
    },

    //新增卡片
    show_cards_list_card_input_box() {
      this.cards_list_card_input_box = true;
    },
    add_card(card_name) {
      if (this.card_name !== "") {
        this.cards.push(card_name);
        this.card_name = "";
        this.cards_list_card_input_box = false;
      } else {
      }
    },
    // resize_func() {
    //   console.log("1");
    // }
  },
  // watch: {
  //   screenWidth: function(val) {
  //     //监听屏幕宽度变化
  //     var oIframe = document.getElementById("content");
  //     oIframe.style.width = Number(val) - 120; //'120'是页面布局调整，可去除

  //     if (oIframe.style.width < 1600) {
  //       console.log("2");
  //     }
  //   }
  // },

  mounted() {
    document.addEventListener("click", () => {
      this.open = false;
      this.cards_list_card_input_box = false;
      this.invite_btn = false;
      this.setting_btn = false;
    });
    // var _this = this;
    // window.onresize = function() {
    //   // 定义窗口大小变更通知事件
    //   _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
    // };
  }
});

// $(document).ready(function(){
//   $('#slideButton').click(function(){
//     $('img').slideToggle(2000,'easeInOutElastic')
//   })
// });		jQ第14題

//行事曆
(function() {
  const date = new Date();
  const allMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const allWeek = ["Su", "Mo", "Tu", "We", "Thur", "Fri", "Sat"];

  const calendar = document.querySelector(".calendar_body");
  const month = document.getElementById("month");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  prev.addEventListener("click", () => {
    changeMonth(nowMonth - 1);
  });
  next.addEventListener("click", () => {
    changeMonth(nowMonth + 1);
  });

  function changeMonth(index) {
    let direction = nowMonth - index;
    if (direction < 0) {
      nowMonth === 11 ? (nowYear += 1) : nowYear;
    } else {
      nowMonth === 0 ? (nowYear -= 1) : nowYear;
    }
    nowMonth = (index + 12) % 12;
    resetDate();
  }

  function isLeap(nowYear) {
    if ((!(nowYear % 4) && nowYear % 100) || !(nowYear % 400)) {
      return 29;
    } else {
      return 28;
    }
  }

  let fullDate, day;
  let nowYear = date.getFullYear();
  let nowMonth = date.getMonth();
  let nowDate = date.getDate();

  function getDate() {
    let firstDay = new Date(`${allMonth[nowMonth]} ${1} ${nowYear}`).getDay();

    if (nowMonth < 7) {
      nowMonth % 2 ? (fullDate = 30) : (fullDate = 31);
    } else {
      nowMonth % 2 ? (fullDate = 31) : (fullDate = 30);
    }
    if (nowMonth === 1) fullDate = isLeap(nowYear);
    month.innerText = `${allMonth[nowMonth]} ${nowYear}`;

    day = 1;
    createDay(day, firstDay);
  }

  function createDay(days, firstDay = 0) {
    let tr = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      let td = document.createElement("td");
      let week = document.createElement("p");
      let day = document.createElement("p");
      if (i >= firstDay && days <= fullDate) {
        day.innerText = days;
        if (
          nowDate === days &&
          nowMonth === date.getMonth() &&
          nowYear === date.getFullYear()
        ) {
          td.classList.add("now");
        }
        days++;
      }
      // week.innerText = allWeek[i];
      td.appendChild(week);
      td.appendChild(day);
      tr.appendChild(td);
    }
    calendar.appendChild(tr);
    if (days <= fullDate) createDay(days);
  }

  function resetDate() {
    while (calendar.hasChildNodes()) {
      calendar.removeChild(calendar.lastChild);
    }
    getDate();
  }

  getDate();
})();
