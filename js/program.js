//新增專案
var main_content = new Vue({
  el: "#app",
  data: {
    open: false,

    programs: [],
    program_name: "",

    history_programs: [],
    history_program_name: "",

    // program_status_src: './../img/uncheck.svg',
    program_complete: false,

    click_complete_btn: false,

    add_cards_btn_div: true,

    cards_list_card_input_box: false,

    invite_add_member_box: false,

    colors: ["#B6BE9C", "#48A9A6", "#437C90", "#6CA6C1", "#3581B8", "#C38D94", "#C1666B", "#A09CB0", "#9E768F", "#B2967D", "#7C6C77"],
    selectColor: null,
    new_program_choose_color_item: [],

    program_setting_choose_selectColor: null,
    program_setting_choose_color_item: [],

    complete_info_box: false,
    // complete_info_btn:false,

    program_text_btn: false,

    add_cards_btn: false,

    // calendar_btn:false,
    // 日曆部分
    today: {
      year: 0,
      month: 0,
      date: 0,
      day: 0
    },
    calendar: {
      year: 0,
      month: 0,
      date: 0,
      day: 0,
      week: ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"][new Date().getMonth()],

    },
    // 日曆部分--結束

    calendar_btn: false,

    page: -1,
    history_page: null,


    targetCardInfo: null,
    //卡片背面
    opened: false,
    open_history_card:false,
   
    // isactive: true,
    // onactive: false,
    // classObject: {
    //   active: false,
      // },
    // text: '未完成',

    // showselect: true,

    // deleteline: false,

    // todo_lightbox_switch: false,

    // todo_list_content_detail: [],
    // todo_lightbox_input_title: '',

    // card_detail_lightbox: false,



    // calandar_switch: false,

    // file_switch: false,

    // filebox: [],
    // sourced: '',

    // card_meber_switch: false,

    // i: '',
    // showCalender: false,

    // calandar_switch: false,
    // member_switch: false,
    // todo_switch: false,
    // fileder_switch: false,

    // //一開始就出現的todolist
    // show_test: true,
    // todo_test: [],
    // test_message: '',

    // text_card_length: false,

    // test_length: '',



    // time2: null,

    // progress_mount: [],

    


    // //顯示成員
    // memebergo: [{
    //     member_name: '王曉明',
    //     userId: 'user3456',
    //     src: './img/program_img/program_member_1.png',
    //     check: '',
    //     uncolor: false,
    //   },
    //   {
    //     member_name: '楊小梅',
    //     userId: 'user4756',
    //     src: "./img/program_img/program_member_2.png",
    //     check: '',
    //     uncolor: false,
    //   },
    //   {
    //     member_name: '張大千',
    //     userId: 'user1234',
    //     src: './img/program_img/program_member_3.png',
    //     check: '',
    //     uncolor: false,
    //   },
    //   {
    //     member_name: '陳小羽',
    //     userId: 'user456',
    //     src: './img/card_img/878378-XXL.jpg',
    //     check: '',
    //     uncolor: false,
    //   },
    // ],

    // //member的去向
    // member_in: [],

    // showcheck: false,

    // member_inout: [],


  },
  methods: {
    //新增專案
    add_program() {
      if (this.program_name !== "" && this.selectColor) {
        this.programs.push({
          program_names: this.program_name,
          changeimage: false, //uncheck
          color: this.selectColor,
          show_complete_info_box: false,
          // cards: [],
          // card_name: "",

          cards: [],


        });
        this.program_name = "";
        this.selectColor = null;
        this.click_complete_btn = false;
        // console.log(this.page);
        // console.log(this.programs.length-1);
        this.page = this.programs.length - 1;
      } else {
        alert('請填寫專案名稱及選擇專案專屬色')
      }

    },
    //切換現有-已完成專案
    change_watched_text() {
      if (this.click_complete_btn == false) { //已完成專案畫面
        this.click_complete_btn = true;

        // document.querySelector(".having_program").style.border = '1px solid red';
      } else { //現有專案畫面
        this.click_complete_btn = false;
        // document.querySelector(".history li").style.transform = 'translateX(-50px);';

      }
    },

    //新增卡片
    show_cards_list_card_input_box() {
      this.add_cards_btn_div = !this.add_cards_btn_div;
      this.cards_list_card_input_box = true;
      add_cards_btn = true;
    },
    add_card(index) {
      //  console.log(index);
      if (this.card_name !== "") {
        this.programs[index].cards.push({
          card_name: this.card_name,
          // dateline: "",
          // complete_list: "",
        });
        this.card_name = "";
        this.cards_list_card_input_box = false;
        this.add_cards_btn = false;
        this.add_cards_btn_div = true;
      } else {}
      // console.log(this.$refs)
    },
    //完成專案跳窗提醒
    complete_info_func(index) {
      this.complete_info_box = !this.complete_info_box;
      this.programs[index].show_complete_info_box = true;
    },


    //完成專案
    program_complete_func(index) {
      this.programs[index].changeimage = !this.programs[index].changeimage

      this.history_programs.push(this.programs[index])

      this.page = index - 1;
      this.programs.splice(index, 1);

      if (this.programs.length != 0 && this.page == -1) {
        this.page = 0;
      }
      // console.log(this.history_page=this.history_programs.length);
      this.history_page = this.history_programs.length - 1;

      // this.show_complete_info_box =true;
    },
    //刪除專案
    delete_program(index) {
      this.history_programs.splice(index, 1)
    },

    // 日曆部分
    setToday() {
      const date = new Date()
      this.today.year = this.calendar.year = date.getFullYear()
      this.today.month = this.calendar.month = date.getMonth() // 0~11
      this.today.date = this.calendar.date = date.getDate()
      this.today.day = this.calendar.day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]
      this.calendar.week = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"][new Date().getMonth()]
    },
    adjustYear(fix) {
      this.calendar.year += fix
    },
    adjustMonth(fix) {
      // this.calendar.month += fix 範圍
      let month = this.calendar.month + fix
      // let engeng_month
      if (month > 11) {
        this.adjustYear(1)
        this.calendar.month = 0
        this.calendar.week = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"][0]
      } else if (month < 0) {
        this.adjustYear(-1)
        this.calendar.month = 11
        this.calendar.week = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"][11]
        // this.calendar.eng_month=11
      } else {
        this.calendar.month = month
        this.calendar.week = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemper", "October", "November", "December"][month]
      }

    },
    //打開卡片本人
    open_card_func(programIndex, cardIndex) {
      this.targetCardInfo = {
        programIndex,
        cardIndex
      }
      this.opened = !this.opened;
   
      // if(!this.$refs.calendarBody.hasChildNodes()){
      //   calender(this.$refs.inCalender);
      // }
      
    },
    //抓卡片位置
    catch_card_position() {

      // console.log($(this).parents('.cards_list').attr('id'));
    },
    //卡片背面
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
          lists: [],
          card_length: false,
        });

        this.todo_lightbox_input_title = '';
        this.todo_lightbox_switch = false;
        this.todo_switch = false;
      }
    },

    add_card_detail(index) {
      if (this.todo_list_content_detail[index].test.length) {
        //將卡片狀態、名字設為陣列
        this.todo_list_content_detail[index].lists.push({
          content: this.todo_list_content_detail[index].test,
          status: true,
          text: false,
        });
        this.todo_list_content_detail[index].test = '';
        this.card_detail_lightbox = false;
      }

    },
    add_test_card() {
      if (this.test_message.length) {
        this.todo_test.push({
          test_title: this.test_message,
          test_status: true,
          test_text: false,

        });

        this.test_message = '';
      }

    },
    delte_test_detail(index) {
      this.todo_test.splice(index, 1);
    },
    deletecard_todo(detailIndex) {
      this.todo_list_content_detail.splice(detailIndex, 1);
    },

    fileSelected(e) {
      let file = e.target.files[0];
      // let file = e.target.files.item(0);
      // console.log(file);
      this.file_switch = false;
      let readFile = new FileReader();

      // console.log(readFile);

      readFile.readAsDataURL(file);
      readFile.addEventListener('load',
        function file(e) {
          this.sourced = e.target.result;
        }
      );

      this.filebox.push({
        name: file.name,
        source: this.sourced,
      });

    },

    delete_todo_title(detailIndex, index) {
      this.todo_list_content_detail[detailIndex].lists.splice(index, 1, );

      // this.todo_list_content_detail[detailIndex].lists.splice(index, 1);
    },

    openmember() {
      this.card_meber_switch = true;
      this.calandar_switch = false;
      this.todo_lightbox_switch = false;
      this.file_switch = false;
    },
    opendate() {
      this.card_meber_switch = false;
      this.showCalender = true;
      this.todo_lightbox_switch = false;
      this.file_switch = false;
      // calender(this.$refs.inCalender);
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
    del_file(index) {
      this.filebox.splice(index, 1);
    },

    //成員進入
    member_outin(index) {
      if (this.memebergo[index].check == '') {
        this.memebergo[index].uncolor = true;
        this.memebergo[index].check = "./img/checked_member.svg";
        if (this.member_inout.indexOf(this.memebergo[index].src) == -1)
          this.member_inout.push({
            source: this.memebergo[index].src,
          })
      } else {
        this.memebergo[index].check = '';
        this.memebergo[index].uncolor = false;
        if (this.member_inout.indexOf(this.memebergo[index].src) != -1)
          this.member_inout.splice(this.memebergo[index], 1)
        // this.member_inout.slice(memebergo[index],1);
      }

    },


  },

  computed: {
    // 日曆部分
    calendarFirstDay() {
      const mDate = new Date(this.calendar.year, this.calendar.month, 1)
      const date = new Date(this.calendar.year, this.calendar.month, 1 - mDate.getDay())
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()],
      }
    },
    calendarMonth() {
      const data = []
      let date
      for (let i = 0; i < 42; i++) {
        date = new Date(this.calendarFirstDay.year, this.calendarFirstDay.month, this.calendarFirstDay.date + i)
        data.push({
          year: date.getFullYear(),
          month: date.getMonth(),
          date: date.getDate(),
          day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()],

        })
      }
      return data
    }

  },

  mounted() {
    document.addEventListener("click", () => {
      this.open = false;
      this.add_cards_btn_div = true;
      this.cards_list_card_input_box = false;
      this.card_name = "";
      this.invite_add_member_box = false;
      this.setting_btn = false;
      this.add_cards_btn = false;
      this.calendar_btn = false;

      //卡片背面
      // this.calandar_switch = false;
      // this.todo_lightbox_switch = false;
      // this.file_switch = false;
      // this.card_meber_switch = false;

      // this.showCalender = false;
      // this.member_switch = false;
      // this.todo_switch = false;
      // this.fileder_switch = false;


      // console.log(this.programs.length - 1)
      if (this.programs.length == 0) {
        // console.log(this.programs.length-1)
        this.page = -1
      };
      //拖曳
      $(".cards_list_todo,.cards_list_doing,.cards_list_done")
        .sortable({
          connectWith: ".cards_list",
          stack: ".cards_column_body .cards_list"
          // revert:true,
        })
        .disableSelection();



    });

    // 日曆部分
    this.setToday()




  },

});




