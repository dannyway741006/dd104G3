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
    colors: ["#5395DF", "#ff6e6e", "#89d9b2", "#ffb62e", "#c182ff", "#61cdff"],
    selectColor: null,
    new_program_choose_color_item: [],

    program_setting_choose_selectColor: null,
    program_setting_choose_color_item: [],

    program_text_btn: false,

    now_text: "查看已完成專案",

    page: 0,


    opened: false,
    isactive: true,
    onactive: false,
    classObject: {
      active: false
      // error:true,
    },
    text: "未完成",

    showselect: true,

    deleteline: false,

    todo_lightbox_switch: false,

    todo_list_content_detail: [],
    todo_lightbox_input_title: "",

    card_detail_lightbox: false,

    calandar_switch: false,

    file_switch: false,

    filebox: [],
    sourced: "",

    card_meber_switch: false
  },
  methods: {
    calen(){
      calender(this.$refs.outCalender);
      calender(this.$refs.inCalender);
    },
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

    change_watched_text() {
      if (this.now_text === "查看已完成專案") {
        this.now_text = "已完成專案";
      } else {
        this.now_text = "查看已完成專案";
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
      } else {}
    },
    changeimg() {
      this.isactive = false;
      this.onactive = true;
      this.classObject.active = true;
      this.text = "完成";
    },
    onchangeimg() {
      this.isactive = true;
      this.onactive = false;
      this.classObject.active = false;
      this.text = "未完成";
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
          test: "",
          // 將卡片細節塞入該陣列裡面
          lists: []
        });

        this.todo_lightbox_input_title = "";
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
          text: false
        });
        this.todo_list_content_detail[index].test = "";
        this.card_detail_lightbox = false;
      }
    },

    deletecard_todo(detailIndex) {
      this.todo_list_content_detail.splice(detailIndex, 1);
    },
    //為啥抓不到標題在陣列的索引直
    delete_todo_title() {
      let index = this.todo_list_content_detail.findIndex(
        item => item.title == this.todo_lightbox_input_title
      );
      console.log(index);
    },

    fileSelected(e) {
      let file = e.target.files[0];
      // let file = e.target.files.item(0);
      // console.log(file);
      this.file_switch = false;
      let readFile = new FileReader();

      // console.log(readFile);

      readFile.readAsDataURL(file);
      readFile.addEventListener("load", function file(e) {
        this.sourced = e.target.result;
      });

      this.filebox.push({
        name: file.name,
        source: this.sourced
      });
    },
    del_file(index) {
      this.filebox.splice(index, 1);
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
    // calender(this.$refs.outCalender);
    // calender(this.$refs.inCalender);
    document.addEventListener("click", () => {
      this.open = false;
      this.cards_list_card_input_box = false;
      this.invite_btn = false;
      this.setting_btn = false;

      this.calandar_switch = false;
      this.todo_lightbox_switch = false;
      this.file_switch = false;
      this.card_meber_switch = false;
    });
    // var _this = this;
    // window.onresize = function() {
    //   // 定义窗口大小变更通知事件
    //   _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
    // };
    // calender(this.$refs.outCalender);
    // calender(this.$refs.inCalender);
  },
  watch: {
    page(){
      setTimeout(()=>{
        this.calen();
      },0)
    }
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
$("div:cards_list_card_input_box").removeClass("ui-sortable-handle");

//創建日立