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

    // screenWidth: document.documentElement.clientWidth //屏幕宽度
    colors: ['#5395DF', '#ff6e6e','#89d9b2','#ffb62e','#c182ff','#61cdff'],
    selectColor: null,
    new_program_choose_color_item:[],

    program_setting_choose_selectColor:null,
    program_setting_choose_color_item:[],

    program_text_btn:false,

    now_text:"查看已完成專案",


    opened: false,
    isactive: true,
    onactive: false,
    classObject: {
      active: false,
      // error:true,
    },
    text: '未完成',

    showselect: true,

    deleteline: false,

    todo_lightbox_switch: false,

    todo_list_content_detail: [],
    todo_lightbox_input_title: '',

    card_detail_lightbox: false,



    calandar_switch: false,

    file_switch:false,

    filebox:[],
    sourced:'',

    card_meber_switch:false,
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

    change_watched_text(){
      if(this.now_text==="查看已完成專案"){
        this.now_text="已完成專案";
        
      }else{
        this.now_text="查看已完成專案";
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
    changeimg() {
      this.isactive = false;
      this.onactive = true;
      this.classObject.active = true;
      this.text = '完成';
    },
    onchangeimg() {
      this.isactive = true;
      this.onactive = false;
      this.classObject.active = false;
      this.text = '未完成';
    },

    showSelect() {
      if (this.showselect) {
        this.showselect = false;
        this.deleteline = true;
      } else {
        this.showselect = true;
        this.deleteline = false;
      }
    },

    // 增加待辦清單項目
    todo_list_add() {
      if (this.todo_lightbox_input_title.length) {
        this.todo_list_content_detail.push({
          title: this.todo_lightbox_input_title,
          test: '',
          // 將卡片細節塞入該陣列裡面
          lists: []
        });
       
        this.todo_lightbox_input_title = '';
        this.todo_lightbox_switch = false;
      }
    },

    add_card_detail(index) {
      if (this.todo_list_content_detail[index].test.length) {
        //將卡片狀態、名字設為陣列
        // console.log(index);
        this.todo_list_content_detail[index].lists.push({
          content: this.todo_list_content_detail[index].test,
          status: true,
          text: false,
        });
        this.todo_list_content_detail[index].test = '';
        this.card_detail_lightbox = false;
      }

    },

    deletecard_todo(detailIndex) {
      this.todo_list_content_detail.splice(detailIndex, 1);
    },
    //為啥抓不到標題在陣列的索引直
    delete_todo_title(){
      let index=this.todo_list_content_detail.findIndex(item=>item.title == this.todo_lightbox_input_title);
      console.log(index);
    },


    fileSelected(e){
      let file = e.target.files[0];
      // let file = e.target.files.item(0);
      // console.log(file);
      this.file_switch=false;
      let readFile = new FileReader();

      // console.log(readFile);

      readFile.readAsDataURL(file);
      readFile.addEventListener('load',
      function file(e){
        this.sourced=e.target.result;
      }
      );
    
      this.filebox.push({
        name:file.name,
        source:this.sourced,
      });
     
       
  },
  del_file(index){
  this.filebox.splice(index,1);
  },
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

      this.calandar_switch = false;
      this.todo_lightbox_switch = false;
      this.file_switch=false;
      this.card_meber_switch=false;
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


//拖曳
$(drag);

function drag() {
  $(".cards_list_todo,.cards_list_doing,.cards_list_done")
    .sortable({
      connectWith: ".cards_list",
      stack: ".cards_column_body .cards_list",
      // revert:true,
    }).disableSelection();
}

//消除建立專案box的拖曳屬性--失敗
$('div:cards_list_card_input_box').removeClass("ui-sortable-handle");












//創建日立

(function () {
  const card_datee = new Date();
  const allMonthh = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
  ];
  const allWeekk = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

  const card_calendarr = document.querySelector('.calender_body');
  const monthh = document.getElementById('card_month');
  const prevv = document.getElementById('prevv');
  const nextt = document.getElementById('nextt');
console.log(card_calendarr)
  prevv.addEventListener('click', () => {
     card_changeMonth(nowMonth - 1);
  })
  nextt.addEventListener('click', () => {
    card_changeMonth(nowMonth + 1);
  })

  function card_changeMonth(index) {
    let direction = nowMonth - index;
    if (direction < 0) {
      nowMonth === 11 ? nowYear += 1 : nowYear;
    } else {
      nowMonth === 0 ? nowYear -= 1 : nowYear;
    }
    nowMonth = (index + 12) % 12;
    card_resetDate();
  }

  function card_isLeap(nowYear) {
    if (!(nowYear % 4) && nowYear % 100 || !(nowYear % 400)) {
      return 29;
    } else {
      return 28;
    };
  };

  let fullDate, day;
  let nowYear = card_datee.getFullYear();
  let nowMonth = card_datee.getMonth();
  let nowDate = card_datee.getDate();

  function card_getDate() {
    let firstDay = new Date(`${allMonthh[nowMonth]} ${1} ${nowYear}`).getDay();

    if (nowMonth < 7) {
      nowMonth % 2 ? fullDate = 30 : fullDate = 31;
    } else {
      nowMonth % 2 ? fullDate = 31 : fullDate = 30;
    };
    if (nowMonth === 1) fullDate = card_isLeap(nowYear);
    monthh.innerText = `${allMonthh[nowMonth]} ${nowYear}`;

    day = 1;
    card_createDay(day, firstDay);
  }

  function card_createDay(days, firstDay = 0) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      let td = document.createElement('td');
      let week = document.createElement('p');
      let day = document.createElement('p');
      if (i >= firstDay && days <= fullDate) {
        day.innerText = days;
        if (
          nowDate === days &&
          nowMonth === card_datee.getMonth() &&
          nowYear === card_datee.getFullYear()
        ) {
          td.classList.add('now');
        }
        days++;
      }
      // week.innerText = allWeek[i];
      td.appendChild(week);
      td.appendChild(day);
      tr.appendChild(td);
    }
    card_calendarr.appendChild(tr);
    if (days <= fullDate) card_createDay(days);
  }

  function card_resetDate() {
    while (card_calendarr.hasChildNodes()) {
      card_calendarr.removeChild(card_calendarr.lastChild);
    }
    card_getDate();
  }

  card_getDate()
})();
