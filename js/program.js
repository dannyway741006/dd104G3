//新增專案
var main_content = new Vue({
  el: "#program_all",
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
    cards: [],
    card_name: "",

    invite_btn: false,

    colors: ["#5395DF", "#ff6e6e", "#89d9b2", "#ffb62e", "#c182ff", "#61cdff", "#a6c1ee", "#f8c3cd", "#f9bf45", "#eb7a77", "#86c166"],
    selectColor: null,
    new_program_choose_color_item: [],

    program_setting_choose_selectColor: null,
    program_setting_choose_color_item: [],

    program_text_btn: false,

    add_cards_btn: false,

  },

  methods: {
    //新增專案
    add_program() {
      if (this.program_name !== "" && this.selectColor) {
        this.programs.push({
          program_names: this.program_name,
          changeimage: false, //uncheck
          color: this.selectColor
        });
        this.program_name = "";
        this.selectColor = null;
        this.click_complete_btn = false;
      }

    },

    change_watched_text() {
      if (this.click_complete_btn == false) { //已完成專案畫面
        this.click_complete_btn = true
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
    add_card(card_name) {
      if (this.card_name !== "") {
        this.cards.push(card_name);
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
      this.programs.splice(index, 1);
    },
    //刪除專案
    delete_program(index) {
      this.history_programs.splice(index, 1)
    },
//打開專案
open_program(){

},

  },

  mounted() {

    document.addEventListener("click", () => {
      this.open = false;
      this.add_cards_btn_div = true,
        this.cards_list_card_input_box = false;
      this.card_name = "",
        this.invite_btn = false;
      this.setting_btn = false;
      this.add_cards_btn = false;


    });



    // calender(this.$refs.outCalender);
    // calender(this.$refs.inCalender);
  },

});

//拖曳
$(drag);

function drag() {
  $(".cards_list_todo,.cards_list_doing,.cards_list_done")
    .sortable({
      connectWith: ".cards_list",
      stack: ".cards_column_body .cards_list"
      // revert:true,
    })
    .disableSelection();
}

//消除建立專案box的拖曳屬性--失敗
// $("div:cards_list_card_input_box").removeClass("ui-sortable-handle");