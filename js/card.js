// 產生卡片編輯畫面
//  let button=document.getElementById("light_button");
//  let light_box=document.getElementById("card_light_box");
//  button.addEventListener("click",()=>{
//   mask.style.opacity="1";
//   mask.style.visibility=" visible";
//   mask.style.display="block";
//   mask.style.zIndex="10000";
//   light_box.style.display="block";
//   light_box.style.zIndex="10001";
//  }
//  )
//  mask.addEventListener("click", () =>{
//   mask.style.opacity="0";
//   mask.style.visibility="hidden";
//   mask.style.display="none";
//   mask.style.zIndex="0";
//    light_box.style.display="none";
//  });

var vm = new Vue({
  el: "#content",
  data: {
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
      let index=this.todo_list_content_detail.findIndex(item => item.title == this.todo_lightbox_input_title);
      console.log(item);
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
  openmember() {
    this.card_meber_switch = true;
    this.calandar_switch = false;
    this.todo_lightbox_switch = false;
    this.file_switch = false;
  },
  opendate() {
    this.card_meber_switch = false;
    this.calandar_switch = true;
    this.todo_lightbox_switch = false;
    this.file_switch = false;
  },
  opentodo() {
    this.card_meber_switch = false;
    this.calandar_switch = false;
    this.todo_lightbox_switch = true;
    this.file_switch = false;
  },
  openfile() {
    this.card_meber_switch = false;
    this.calandar_switch = false;
    this.todo_lightbox_switch = false;
    this.file_switch = true;
  },
  del_file(index){
  this.filebox.splice(index,1);
  },
  },
  mounted() {
    document.addEventListener('click', () => {
      this.calandar_switch = false;
      this.todo_lightbox_switch = false;
      this.file_switch=false;
      this.card_meber_switch=false;
    });
  },
  computed:{
    progress_bar_length(index){
    
    }
  },
});


//創建日立
(function () {
  const datee = new Date();
  const allMonthh = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
  ];
  const allWeekk = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

  const calendarr = document.querySelector('.calender_body');
  const monthh = document.getElementById('card_month');
  const prevv = document.getElementById('prevv');
  const nextt = document.getElementById('nextt');

  prevv.addEventListener('click', () => {
    changeMonth(nowMonth - 1);
  })
  nextt.addEventListener('click', () => {
    changeMonth(nowMonth + 1);
  })

  function changeMonth(index) {
    let direction = nowMonth - index;
    if (direction < 0) {
      nowMonth === 11 ? nowYear += 1 : nowYear;
    } else {
      nowMonth === 0 ? nowYear -= 1 : nowYear;
    }
    nowMonth = (index + 12) % 12;
    resetDate();
  }

  function isLeap(nowYear) {
    if (!(nowYear % 4) && nowYear % 100 || !(nowYear % 400)) {
      return 29;
    } else {
      return 28;
    };
  };

  let fullDate, day;
  let nowYear = datee.getFullYear();
  let nowMonth = datee.getMonth();
  let nowDate = datee.getDate();

  function getDate() {
    let firstDay = new Date(`${allMonthh[nowMonth]} ${1} ${nowYear}`).getDay();

    if (nowMonth < 7) {
      nowMonth % 2 ? fullDate = 30 : fullDate = 31;
    } else {
      nowMonth % 2 ? fullDate = 31 : fullDate = 30;
    };
    if (nowMonth === 1) fullDate = isLeap(nowYear);
    monthh.innerText = `${allMonthh[nowMonth]} ${nowYear}`;

    day = 1;
    createDay(day, firstDay);
  }

  function createDay(days, firstDay = 0) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      let td = document.createElement('td');
      let week = document.createElement('p');
      let day = document.createElement('p');
      if (i >= firstDay && days <= fullDate) {
        day.innerText = days;
        if (
          nowDate === days &&
          nowMonth === datee.getMonth() &&
          nowYear === datee.getFullYear()
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
    calendarr.appendChild(tr);
    if (days <= fullDate) createDay(days);
  }

  function resetDate() {
    while (calendarr.hasChildNodes()) {
      calendarr.removeChild(calendarr.lastChild);
    }
    getDate();
  }

  getDate()
})();






