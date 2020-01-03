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

  },
  methods: {
    //新增專案
    add_program() {
      if (this.program_name !== "" && this.selectColor) {
        this.programs.push({
          program_names: this.program_name,
          changeimage: false, //uncheck
          color: this.selectColor,

          cards: [],
          card_name: "",


        });
        this.program_name = "";
        this.selectColor = null;
        this.click_complete_btn = false;
        // console.log(this.page);
        // console.log(this.programs.length-1);
        this.page = this.programs.length - 1;

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
      this.cards_list_card_input_box = true;
      add_cards_btn = true;
    },
    add_card(card_name, index) {
      //  console.log(index);
      if (this.card_name !== "") {
        this.programs[index].cards.push(card_name);
        this.card_name = "";
        this.cards_list_card_input_box = false;
        this.add_cards_btn = false;
        this.add_cards_btn_div = true;
      } else {}
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
    },
    //刪除專案
    delete_program(index) {
      this.history_programs.splice(index, 1)
    },

    // 日曆部分
    setToday() {
      // console.log("123");
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
  watch: {

  },
});






//拖曳
// $(drag);

// function drag() {
//   $(".cards_list_todo,.cards_list_doing,.cards_list_done")
//     .sortable({
//       connectWith: ".cards_list",
//       stack: ".cards_column_body .cards_list"
//       // revert:true,
//     })
//     .disableSelection();
// }