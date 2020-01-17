//新增專案
var main_content = new Vue({
  el: "#app",
  data: {
    open: false,

    programs: [],
    pro_title: "",

    history_programs: [],
    history_pro_title: "",

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
    delete_info_box: false,

    program_text_btn: false,

    add_cards_btn: false,

    card_name:"",

    // calendar_btn:false,
    // 日曆部分
    handcalendar_today: {
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
    history_page: -1,

    card_no: null,
    history_card_no: null,

    detail_no: null,


    //卡片背面
    opened: false,
    open_history_card: false,

    isactive: true,
    onactive: false,
    classObject: {
      active: false,
    },
    calendar_complite_text: '未完成',

    showselect: true,

    deleteline: false,

    todo_lightbox_switch: false,

    card_detail_lightbox: false,



    calandar_switch: false,

    // file_switch: false,

    card_meber_switch: false,

    // i: '',
    showCalender: false,

    calandar_switch: false,
    member_switch: false,
    todo_switch: false,
    fileder_switch: false,

    //一開始就出現的todolist
    show_test: true,
    todo_test: [],
    test_message: '',

    text_card_length: false,

    test_length: '',



    // time2: null,

    progress_mount: [],
    todoListTitle: null,



    //卡片背面member燈箱

    addmemberswitch: false,
    add_card_meber_switch: false,

    //file
    file: '',
    todo_type: null,


    window_width: 0,



  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    //新增專案
    add_program() {

      // axios
      //   .get('php_program/push_member.php')
      //   .then((res) => {
      //     var pro_mem_Arr = res.data;

// console.log(this.programs)
// console.log(main_content.programs)
      if (this.pro_title !== "" && this.selectColor) {
        this.programs.push({
          pro_title: this.pro_title,
          changeimage: false, //uncheck
          pro_col: this.selectColor,
          show_complete_info_box: false,
          show_delete_info_box: false,
          //專案成員
          invite_add_member_addr: '',

          hideMember_sum: false,

          program_memeber: [],
          // program_memeber: [{
          //     member_name: '詹小鴨',
          //     userId: 'user3456',
          //     src: './img/program_img/program_member_1.png',
          //   },
          //   {
          //     member_name: '王小憶',
          //     userId: 'user4756',
          //     src: "./img/program_img/program_member_2.png",
          //   },
          //   {
          //     member_name: '張彤彤+100',
          //     userId: 'user1234',
          //     src: './img/program_img/program_member_3.png',
          //   },
          //   {
          //     member_name: '陳小羽',
          //     userId: 'user456',
          //     src: './img/card_img/878378-XXL.jpg',
          //   },
          // ],

          card_list_todo: [{
            cards: [],
            type: 'card_list_todo'
          }],
          card_list_doing: [{
            cards: [],
            type: 'card_list_doing'
          }],
          card_list_done: [{
            cards: [],
            type: 'card_list_done'
          }],

        });
        this.pro_title = "";
        this.selectColor = null;
        this.click_complete_btn = false;
        // console.log(this.page);
        // console.log(this.programs.length-1);
        this.page = this.programs.length - 1;


        $.post('./php/pm/create_program.php', {
          pro_title: this.programs[this.page].pro_title,
          pro_col: this.programs[this.page].pro_col,
        }, function (res) {
          // console.log(res)
        })

      } else {
        alert('請填寫專案名稱及選擇專案專屬色')
      }

      // })
      // .catch((error) => {
      //   console.log(error)
      // })






    },

    //邀請專案成員
    invite_add_member() {
      // if(document.getElementById('invite_add_member_addr').value==pro_mem_Arr[0].mem_id){};
      for (i = 0; i < pro_mem_Arr.length; i++) {
        if (this.invite_add_member_addr == pro_mem_Arr[0].mem_id) {
          axios
            .get('php_program/push_member.php')
            .then((res) => {
              var pro_mem_Arr = res.data;
              // console.log(pro_mem_Arr[0].mem_name)
              this.programs[this.page].program_memeber.push({

                member_name: pro_mem_Arr[i].mem_name,
                userId: pro_mem_Arr[i].mem_id,
                src: pro_mem_Arr[i].headshot,
              })


            })
            .catch((error) => {
              console.log(error)
            })
        }

      }
    },


    //切換現有-已完成專案
    change_watched_text() {
      if (this.click_complete_btn == false) { //已完成專案畫面
        this.click_complete_btn = true;
      } else { //現有專案畫面
        this.click_complete_btn = false;
      }
    },
    //rwd時點選關閉漢堡
    close_humberger() {
      container.classList.remove("nav_open")
    },

    //新增卡片
    show_cards_list_card_input_box() {
      this.add_cards_btn_div = !this.add_cards_btn_div;
      this.cards_list_card_input_box = true;
      add_cards_btn = true;
    },
    add_card(index) {
      const vm = this;
      //  console.log(index);

      // axios
      //   .get('php_program/push_member.php')
      //   .then((res) => {
      //     var pro_mem_Arr = res.data;
      //     console.log(pro_mem_Arr[0].mem_name)
      console.log(this);
      // var obj = Object.keys(this.programs[index].card_list_todo).map(function(_) { return this.programs[index].card_list_todo[_]; });
      // this.programs[index].card_list_todo.cards.push({
          
      //   card_name: this.card_name,
      //   card_member: [],
      
      //   //卡片內會員顯示
      //   showhideMember: false,
      //   member_input: "",
      //   member_inout: [],


      //   todo_list_content_detail: [],

      //   //calendar
      //   dateline: false,
      //   dateline_text: "未完成",
      //   calendar_date: '未設定',

      //   //上傳檔案
      //   filebox: [],
      //   file_switch: false,
      //   // sourced:'',
      //   // //增加項目focus變長
      //   // card_length:false,


      // });
      // console.log(this.programs[index].card_list_todo);
      if (vm.card_name !== "") {
        $.ajax({
          "type": "POST",
          "dataType": "json",
          "url": "./php/pm/push_card.php",
          "data": {
            "type" : "add_card",
            "pro_no": this.programs[index].pro_no, 
            "card_name": this.card_name
          },  
          "cache": false,
          "success": function (data) { 
            // console.log(data);
              vm.show_cards(index);
          },
          "error":function(data){
          console.log(data);
          }
        });
      } else {}
      this.card_name = "";
      this.cards_list_card_input_box = false;
      this.add_cards_btn = false;
      this.add_cards_btn_div = true;
            



        // })
        // .catch((error) => {
        //   console.log(error)
        // })


    },
    show_cards(index) {
    // console.log('qqqqqqqqqqqqqqqqqqqqqqqqqq')
      const vm = this;
      $.ajax({
        "type": "POST",
        "dataType": "json",
        "url": "./php/pm/get_program.php",
        "data": {
          "pro_no": this.programs[index].pro_no
        },  
        "cache": false,
        "success": function (data) { 
          // console.log(data);
          // console.log(vm.programs[index].card_list_todo.cards);
          console.log(data);

            // let ary = new Array();
            // for(x in obj) ary[ary.length]=x;
            vm.programs[index].card_list_todo[0] = data[0];
            vm.programs[index].card_list_doing[0] = data[1];
            vm.programs[index].card_list_done[0] = data[2];
            console.log(vm.programs);
        },
        "error":function(data){
        console.log(data);
        }
      });
    },
    //完成專案跳窗提醒
    complete_info_func(index) {
      this.complete_info_box = !this.complete_info_box;
      this.programs[index].show_complete_info_box = true;

      container.classList.remove("nav_open")

    },
    //刪除專案跳窗提醒
    delete_info_func(index) {
      this.delete_info_box = !this.delete_info_box;
      this.history_programs[index].show_delete_info_box = true;

      container.classList.remove("nav_open")
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
      this.history_page = index - 1;
      if (this.history_programs.length != 0 && this.history_page == -1) {
        this.history_page = 0;
      }
    },

    // 日曆部分
    setToday() {
      const date = new Date()
      this.handcalendar_today.year = this.calendar.year = date.getFullYear()
      this.handcalendar_today.month = this.calendar.month = date.getMonth() // 0~11
      this.handcalendar_today.date = this.calendar.date = date.getDate()
      this.handcalendar_today.day = this.calendar.day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]
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
    open_card_func() {
      this.opened = !this.opened;
    },

    //刪除卡片
    delete_card(index) {
      // console.log(this.programs[this.page])
      this.programs[this.page][this.todo_type][0].cards.splice(index, 1);
      this.opened = !this.opened;
      this.card_no = null;
    },


    //卡片背面
    //勾選未完成->已完成
    check_dateline() {
      if (this.programs[this.page][this.todo_type][0].cards[this.card_no].dateline == false) { //未完成框框
        this.programs[this.page][this.todo_type][0].cards[this.card_no].dateline = true;
        this.programs[this.page][this.todo_type][0].cards[this.card_no].dateline_text = '完成';

      } else {
        this.programs[this.page][this.todo_type][0].cards[this.card_no].dateline = false;
        this.programs[this.page][this.todo_type][0].cards[this.card_no].dateline_text = '未完成';
      }

    },

    // 增加待辦清單項目
    todo_list_add(index) {
      $.ajax({
        "type": "POST",
        "dataType": "json",
        "url": "./php/pm/push_card.php",
        "data": {
          "type" : "add_todo",
        },  
        "cache": false,
        "success": function (data) { 
          console.log(data);
        //   if (vm.card_name !== "") {
        //     console.log(vm.programs[index].card_list_todo.cards);
        //     vm.programs[index].card_list_todo.cards.push({
         
        //       card_name: vm.card_name,
        //       card_member: [],
            
        //       //卡片內會員顯示
        //       showhideMember: false,
        //       member_input: "",
        //       member_inout: [],


        //       todo_list_content_detail: [],

        //       //calendar
        //       dateline: false,
        //       dateline_text: "未完成",
        //       calendar_date: '未設定',

        //       //上傳檔案
        //       filebox: [],
        //       file_switch: false,
        //       // sourced:'',
        //       // //增加項目focus變長
        //       // card_length:false,


        //     });
        //     vm.card_name = "";
        //     vm.cards_list_card_input_box = false;
        //     vm.add_cards_btn = false;
        //     vm.add_cards_btn_div = true;
        // } else {}
        },
        "error":function(data){
         console.log(data);
        }
       });
      if (this.todoListTitle.length) {
        this.programs[this.page][this.todo_type][0].cards[index].todo_list_content_detail.push({
          title: this.todoListTitle,
          //增加項目focus變長
          lists: [],

          //改變待辦事項標題 
          showname: false,
          test_title_name: true,

          //改變待辦事項標題
          test: '',
        })
        this.todoListTitle = null;
        this.todo_lightbox_switch = false;
        this.todo_switch = false;
      } else {};
    },

    // 刪除待辦清單項目
    deletecard_todo(detailIndex) {
      this.programs[this.page][this.todo_type][0].cards[this.card_no].todo_list_content_detail.splice(detailIndex, 1);
    },

    // 增加最小子項目
    add_card_detail(detailIndex) {
      if (this.programs[this.page][this.todo_type][0].cards[this.card_no].todo_list_content_detail[detailIndex].test !== "") {
        // console.log(this.programs[this.page].cards[this.card_no].todo_list_content_detail[detailIndex].lists);
        this.programs[this.page][this.todo_type][0].cards[this.card_no].todo_list_content_detail[detailIndex].lists.push({

          content: this.programs[this.page][this.todo_type][0].cards[this.card_no].todo_list_content_detail[detailIndex].test,
          status: false,
          text: false,
          tomato_color:false,
        });
        this.programs[this.page][this.todo_type][0].cards[this.card_no].todo_list_content_detail[detailIndex].test = '';
        this.card_detail_lightbox = false;
      } else {}
    },

    // 刪除最小子項目
    delete_todo_title(detailIndex, index) {
      this.programs[this.page][this.todo_type][0].cards[this.card_no].todo_list_content_detail[detailIndex].lists.splice(index, 1);
    },


    //卡片內上傳檔案
    filesearch(e) {
      if (e.target.files.length > 0) {
        this.file = e.target.files;
        this.file_switch = false;
        this.fileder_switch = false;
        for (let i = 0; i < this.file.length; i++) {
          //-------------取得檔名
          let readFile = new FileReader();
          let pro_card = this.programs[this.page][this.todo_type][0].cards[this.card_no];
          let file = this.file[i].name;
          readFile.addEventListener("loadend", function (e) {
            pro_card.file_result = readFile.result;
            pro_card.filebox.push({
              name: file,
              source: pro_card.file_result,
            });
          });
          readFile.readAsDataURL(this.file[i]);
        }
      }
    },

    //卡片檔案刪除
    delete_file(cardIndex) {
      this.programs[this.page][this.todo_type][0].cards[this.card_no].filebox.splice(cardIndex, 1);
    },

    //成員進入
    member_outin(index) {
      let pro_page = this.programs[this.page];
      if (this.showmember_select[index].check == '') {
        this.showmember_select[index].uncolor = true;
        this.showmember_select[index].check = "./img/checked_member.svg";

        if (pro_page[this.todo_type][0].cards[this.card_no].member_inout.map(x => x.source).indexOf(this.showmember_select[index].src) === -1) {
          pro_page[this.todo_type][0].cards[this.card_no].member_inout.push({
            source: this.showmember_select[index].src,
          })
        }
      } else {
        this.showmember_select[index].check = '';
        this.showmember_select[index].uncolor = false;
        let findIndex = pro_page[this.todo_type][0].cards[this.card_no].member_inout.findIndex(item => item.source === this.showmember_select[index].src);
        pro_page[this.todo_type][0].cards[this.card_no].member_inout.splice(findIndex, 1);
      }
    },

    calltomato(detailIndex, index) {
      alert("已加入蕃茄鐘");
    },
    //最小子項目勾選 卡片顯示進度 已勾項目
    todo_card_progress_checked(index) {
      if ([this.todo_type][0] != null) {
        return this.programs[this.page].card_list_todo[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.filter(list => list.status).length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },
    doing_card_progress_checked(index) {
      if ([this.todo_type][0] != null) {
        return this.programs[this.page].card_list_doing[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.filter(list => list.status).length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },
    done_card_progress_checked(index) {
      if ([this.todo_type][0] != null) {
        return this.programs[this.page].card_list_done[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.filter(list => list.status).length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },

    history_todo_card_progress_checked(index) {
      if ([this.todo_type][0] != null) {
        return this.history_programs[this.history_page].card_list_todo[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.filter(list => list.status).length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },
    history_doing_card_progress_checked(index) {
      if ([this.todo_type][0] != null) {
        return this.history_programs[this.history_page].card_list_doing[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.filter(list => list.status).length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },
    history_done_card_progress_checked(index) {
      if ([this.todo_type][0] != null) {
        return this.history_programs[this.history_page].card_list_done[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.filter(list => list.status).length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },

    //最小子項目勾選 卡片顯示進度 所有項目
    todo_card_progress_sum(index) {
      if ([this.todo_type][0] != null) {
        return this.programs[this.page].card_list_todo[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },
    doing_card_progress_sum(index) {
      if ([this.todo_type][0] != null) {
        return this.programs[this.page].card_list_doing[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },
    done_card_progress_sum(index) {
      if ([this.todo_type][0] != null) {
        return this.programs[this.page].card_list_done[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },
    history_todo_card_progress_sum(index) {
      if ([this.todo_type][0] != null) {
        return this.history_programs[this.history_page].card_list_todo[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },
    history_doing_card_progress_sum(index) {
      if ([this.todo_type][0] != null) {
        return this.history_programs[this.history_page].card_list_doing[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },
    history_done_card_progress_sum(index) {
      if ([this.todo_type][0] != null) {
        return this.history_programs[this.history_page].card_list_done[0].cards[index].todo_list_content_detail.reduce((prev, item) => {
          prev += item.lists.length
          return prev
        }, 0)
      } else {
        return 0;
      }
    },

    //最小子項目進度條
    inner_progress(detailIndex) {
      return this.programs[this.page][this.todo_type][0].cards[this.card_no].todo_list_content_detail[detailIndex].lists.filter(item => {
        return item.status;
      });
    },
    todo_inner_progress_bar(detailIndex) {
      let length = this.programs[this.page].card_list_todo[0].cards[this.card_no].todo_list_content_detail[detailIndex].lists.length;
      if (length == 0) {
        return 0;
      } else {
        return Math.round((100 / length) * this.inner_progress(detailIndex).length);
      }
    },
    doing_inner_progress_bar(detailIndex) {
      let length = this.programs[this.page].card_list_doing[0].cards[this.card_no].todo_list_content_detail[detailIndex].lists.length;
      if (length == 0) {
        return 0;
      } else {
        return Math.round((100 / length) * this.inner_progress(detailIndex).length);
      }
    },
    done_inner_progress_bar(detailIndex) {
      let length = this.programs[this.page].card_list_done[0].cards[this.card_no].todo_list_content_detail[detailIndex].lists.length;
      if (length == 0) {
        return 0;
      } else {
        return Math.round((100 / length) * this.inner_progress(detailIndex).length);
      }
    },

    history_inner_progress(detailIndex) {
      return this.history_programs[this.history_page][this.todo_type][0].cards[this.history_card_no].todo_list_content_detail[detailIndex].lists.filter(item => {
        return item.status;
      });
    },
    history_inner_progress_bar(detailIndex) {
      // console.log(detailIndex)
      // console.log(this.inner_progress(detailIndex))
      let length = this.history_programs[this.history_page][this.todo_type][0].cards[this.history_card_no].todo_list_content_detail[detailIndex].lists.length;
      if (length == 0) {
        return 0;
      } else {
        return Math.round((100 / length) * this.history_inner_progress(detailIndex).length);
      }
    },

    todo_showcalendarpanel(cardIndex) {
      console.log(this.programs[this.page].card_list_todo)
      if ([this.todo_type][0] != null && this.programs[this.page].card_list_todo[0].cards.length != 0) {
        // if ([this.todo_type][0] == this.programs[this.page].card_list_todo[0].type && this.programs[this.page].card_list_todo[0].cards.length != 0) {
        // console.log(this.programs[this.page][this.todo_type][0].cards)
        if (this.programs[this.page].card_list_todo[0].cards[cardIndex].calendar_date == null) {
          return '未設定';
        } else {
          return this.programs[this.page].card_list_todo[0].cards[cardIndex].calendar_date;
        }
      } else {
        return '未設定';
      }
    },
    doing_showcalendarpanel(cardIndex) {
      // console.log([this.doing_type][0])
      if ([this.todo_type][0] != null && this.programs[this.page].card_list_todo[0].cards.length != 0) {
        // if ([this.todo_type][0] == this.programs[this.page].card_list_doing[0].type && this.programs[this.page].card_list_doing[0].cards.length != 0) {
        // console.log(this.programs[this.page][this.doing_type][0].cards)
        if (this.programs[this.page].card_list_doing[0].cards[cardIndex].calendar_date == null) {
          return '未設定';
        } else {
          return this.programs[this.page].card_list_doing[0].cards[cardIndex].calendar_date;
        }
      } else {
        return '未設定';
      }
    },
    done_showcalendarpanel(cardIndex) {
      // console.log([this.done_type][0])
      if ([this.todo_type][0] != null && this.programs[this.page].card_list_todo[0].cards.length != 0) {
        // if ([this.todo_type][0] == this.programs[this.page].card_list_done[0].type && this.programs[this.page].card_list_done[0].cards.length != 0) {
        // console.log(this.programs[this.page][this.done_type][0].cards)
        if (this.programs[this.page].card_list_done[0].cards[cardIndex].calendar_date == null) {
          return '未設定';
        } else {
          return this.programs[this.page].card_list_done[0].cards[cardIndex].calendar_date;
        }
      } else {
        return '未設定';
      }
    },

    history_todo_showcalendarpanel(cardIndex) {
      if ([this.todo_type][0] != null) {
        if (this.history_programs[this.history_page].card_list_todo[0].cards[cardIndex].calendar_date == null) {
          return '未設定';
        } else {
          return this.history_programs[this.history_page].card_list_todo[0].cards[cardIndex].calendar_date;
        }
      } else {
        return '未設定';
      }
    },
    history_doing_showcalendarpanel(cardIndex) {
      if ([this.todo_type][0] != null) {
        if (this.history_programs[this.history_page].card_list_doing[0].cards[cardIndex].calendar_date == null) {
          return '未設定';
        } else {
          return this.history_programs[this.history_page].card_list_doing[0].cards[cardIndex].calendar_date;
        }
      } else {
        return '未設定';
      }
    },
    history_done_showcalendarpanel(cardIndex) {
      if ([this.todo_type][0] != null) {
        if (this.history_programs[this.history_page].card_list_done[0].cards[cardIndex].calendar_date == null) {
          return '未設定';
        } else {
          return this.history_programs[this.history_page].card_list_done[0].cards[cardIndex].calendar_date;
        }
      } else {
        return '未設定';
      }
    },

    //卡片內開關清空
    openmember() {
      this.card_meber_switch = true;
      // this.calandar_switch = false;
      this.todo_lightbox_switch = false;
      this.file_switch = false;
      this.fileder_switch = false;
      this.todo_switch = false;
      this.add_card_meber_switch = false;
    },
    opentodo() {
      this.card_meber_switch = false;
      // this.calandar_switch = false;
      this.todo_lightbox_switch = true;
      this.file_switch = false;
      this.fileder_switch = false;
      this.member_switch = false;
      this.add_card_meber_switch = false;
    },
    openfile() {
      this.card_meber_switch = false;
      // this.calandar_switch = false;
      this.todo_lightbox_switch = false;
      this.file_switch = true;
      this.todo_switch = false;
      this.member_switch = false;
      this.add_card_meber_switch = false;
    },
    openaddmember() {
      this.card_meber_switch = false;
      this.calandar_switch = false;
      this.todo_lightbox_switch = false;
      this.file_switch = false;
      this.add_card_meber_switch = true;
      this.member_switch = false;
      this.todo_switch = false;
      this.fileder_switch = false;
    },
    handleResize() {
      this.window_width = window.innerWidth;
      if (this.window_width >= 700) {
        return true;
      } else {
        return false;
      }
    }
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
    },
    //專案成員
    program_member_show() {
      return this.programs[this.page].program_memeber;
    },
    history_program_member_show() {
      return this.history_programs[this.history_page].program_memeber;
    },
    programs_member_hidenum() {
      // console.log(this.programs[this.page])
      let pro_page = this.programs[this.page];
      if (pro_page.program_memeber.length > 3) {
        pro_page.hideMember_sum = true;
        return pro_page.program_memeber.length - 3;
      } else {
        pro_page.hideMember_sum = false;
      }
    },
    history_programs_member_hidenum() {
      let pro_page = this.history_programs[this.history_page];
      if (pro_page.program_memeber.length > 3) {
        pro_page.hideMember_sum = true;
        return pro_page.program_memeber.length - 3;
      } else {
        pro_page.hideMember_sum = false;
      }
    },

    showmember_select() {
      if (this.programs[this.page][this.todo_type][0].cards[this.card_no].member_input.length) {
        return this.programs[this.page][this.todo_type][0].cards[this.card_no].card_member.filter(item => {
          let content = item.userId.toLowerCase();
          let name = item.member_name;
          let realcontent = content.concat(name);
          let keyword = this.programs[this.page][this.todo_type][0].cards[this.card_no].member_input.toLowerCase();
          return realcontent.indexOf(keyword) != -1;
        })
      } else {
        return this.programs[this.page][this.todo_type][0].cards[this.card_no].card_member;
      }
    },

    hidemembers() {
      let pro_page = this.programs[this.page];
      if (pro_page[this.todo_type][0].cards[this.card_no].member_inout.length > 3) {
        pro_page[this.todo_type][0].cards[this.card_no].showhideMember = true;
        let member_length = pro_page[this.todo_type][0].cards[this.card_no].member_inout.length;
        return member_length - 3;
      } else {
        pro_page[this.todo_type][0].cards[this.card_no].showhideMember = false;
      }
    },

    history_hidemembers() {
      let pro_page = this.history_programs[this.history_page];
      if (pro_page[this.todo_type][0].cards[this.history_card_no].member_inout.length > 3) {
        pro_page[this.todo_type][0].cards[this.history_card_no].showhideMember = true;
        let member_length = pro_page[this.todo_type][0].cards[this.history_card_no].member_inout.length;
        return member_length - 3;
      } else {
        pro_page[this.todo_type][0].cards[this.history_card_no].showhideMember = false;
      }
    },
    nowProgram() {
      return this.programs[this.page]
    },
    historyProgram() {
      if (this.history_page == -1) {
        return this.history_programs[0]
      } else {
        return this.history_programs[this.history_page]
      }
    },

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
      if (this.page >= 0 && this.card_no == 0 && this.card_no > 0) {
        this.programs[this.page].cards[this.card_no].member_input = "";
      }

      this.todo_lightbox_switch = false;
      this.file_switch = false;
      this.card_meber_switch = false;
      this.add_card_meber_switch = false;
      this.member_switch = false;
      this.todo_switch = false;
      this.todoListTitle = '';
      this.fileder_switch = false;

      // console.log(this.programs.length - 1)
      if (this.programs.length == 0) {
        // console.log(this.programs.length-1)
        this.page = -1
      };

    });
    // 日曆部分
    this.setToday();


    // $.ajax({
    //   url: './php/pm/get_program_list.php',
    //   data: {},
    //   dataType: "json",
    //   type: "post",
    //   success: function (data) {
    //   },
    // })



    // async function getPrograms() {
    //   console.log(this.programs)
    //   if (this.programs.length != 0) {
    //     console.log('2211')
    //     // let pro_title = this.dataset ? this.dataset.type : 1;
    //     let pro_title=this.programs[this.page].pro_title;
    //     let pro_col=this.programs[this.page].color;
    //     // let mem_no=
    //     pro_data = await fetch('./php/pm/get_program_list.php?pro_title=' + pro_title + 'pro_col='+pro_col)
    //       .then(res => res.json())
    //       .then(json => json)
    //     console.log(pro_data);
    //   }else{};
    // };

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      // console.log(xhr.responseText);
      result = JSON.parse(xhr.responseText);
      console.log(result)
      if (result.status == "success") {
        
        main_content.programs = result.data;
        // console.log(main_content.programs)
        
        // console.log(result.data[20]);
      }
    }
    xhr.open("post", './php/pm/get_program_list.php', true);
    //送出資料
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let data_info = "mem_no=1";
    xhr.send(data_info);


  },

  components: {
    DatePicker
  },
});

