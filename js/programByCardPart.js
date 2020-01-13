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
        delete_info_box: false,

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
        history_page: -1,

        card_no: null,
        history_card_no: null,


        // detailIndex:null,
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

        i: '',
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



        time2: null,

        progress_mount: [],
        todoListTitle: null,



        //member的去向





        addmemberswitch: false,
        add_card_meber_switch: false,


        //file
        file: '',

        //todo_list_content_detail_index
        todo_list_content_detail_no: null,
        cd_no: null,
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
                    show_delete_info_box: false,
                    //專案成員
                    hideMember_sum: false,
                    program_memeber: [{
                            member_name: '王曉明',
                            userId: 'user3456',
                            src: './img/program_img/program_member_1.png',
                        },
                        {
                            member_name: '楊小梅',
                            userId: 'user4756',
                            src: "./img/program_img/program_member_2.png",
                        },
                        {
                            member_name: '張大千',
                            userId: 'user1234',
                            src: './img/program_img/program_member_3.png',
                        },
                        {
                            member_name: '陳小羽',
                            userId: 'user456',
                            src: './img/card_img/878378-XXL.jpg',
                        },
                    ],


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

                    card_member: [{
                            member_name: '王曉明',
                            userId: 'user3456',
                            src: './img/program_img/program_member_1.png',
                            check: '',
                            uncolor: false,
                        },
                        {
                            member_name: '楊小梅',
                            userId: 'user4756',
                            src: "./img/program_img/program_member_2.png",
                            check: '',
                            uncolor: false,
                        },
                        {
                            member_name: '張大千',
                            userId: 'user1234',
                            src: './img/program_img/program_member_3.png',
                            check: '',
                            uncolor: false,
                        },
                        {
                            member_name: '陳小羽',
                            userId: 'user456',
                            src: './img/card_img/878378-XXL.jpg',
                            check: '',
                            uncolor: false,
                        },
                    ],


                    //卡片內會員顯示
                    showhideMember: false,
                    member_input: "",

                    member_inout: [],


                    todo_list_content_detail: [],

                    //calendar
                    dateline: false,
                    dateline_text: "未完成",

                    //上傳檔案
                    filebox: [],
                    file_switch: false,
                    file_result: '',
                    // sourced:'',
                    // //增加項目focus變長
                    // card_length:false,
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
        //刪除專案跳窗提醒
        delete_info_func(index) {
            this.delete_info_box = !this.delete_info_box;
            this.history_programs[index].show_delete_info_box = true;
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
        open_card_func() {
            this.opened = !this.opened;



            // if(!this.$refs.calendarBody.hasChildNodes()){
            //   calender(this.$refs.inCalender);
            // }

        },
        //抓卡片位置
        catch_card_position() {
            // console.log(this.programs[index].cards[cardIndex].card_name.parent('.cards_list').attr('id'));
            // console.log($(this));
            // console.log(this);
            // console.log($(this).parent('.cards_list').attr('id'));
            // console.log($('.cards_list_card').parent('.cards_list').attr('id'));

            // console.log(this.parentNode)

        },

        //刪除卡片
        delete_card(index) {
            // console.log(this.programs[this.page])
            this.programs[this.page].cards.splice(index, 1);
            this.opened = !this.opened;
            this.card_no = null;
        },

        //卡片背面


        //勾選未完成->已完成
        check_dateline() {
            // console.log(this.programs[this.page].cards[this.card_no].dateline);
            if (this.programs[this.page].cards[this.card_no].dateline == false) { //未完成框框
                this.programs[this.page].cards[this.card_no].dateline = true;
                this.programs[this.page].cards[this.card_no].dateline_text = '完成';

            } else {
                this.programs[this.page].cards[this.card_no].dateline = false;
                this.programs[this.page].cards[this.card_no].dateline_text = '未完成';

            }

        },


        // 增加待辦清單項目
        todo_list_add(index) {
            if (this.todoListTitle !== null) {
                this.programs[this.page].cards[index].todo_list_content_detail.push({
                    title: this.todoListTitle,
                    //增加項目focus變長
                    card_length: false,
                    lists: [],
                    status: false,

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
            this.programs[this.page].cards[this.card_no].todo_list_content_detail.splice(detailIndex, 1);
        },
        // 增加最小子項目
        add_card_detail(detailIndex) {
            if (this.programs[this.page].cards[this.card_no].todo_list_content_detail[detailIndex].test !== "") {
                // console.log(this.programs[this.page].cards[this.card_no].todo_list_content_detail[detailIndex].lists);
                this.programs[this.page].cards[this.card_no].todo_list_content_detail[detailIndex].lists.push({

                    content: this.programs[this.page].cards[this.card_no].todo_list_content_detail[detailIndex].test,
                    status: false,
                    text: false,
                });
                this.programs[this.page].cards[this.card_no].todo_list_content_detail[detailIndex].test = '';
                this.card_detail_lightbox = false;
            } else {}

        },
        // 刪除最小子項目
        delete_todo_title(detailIndex, index) {
            this.programs[this.page].cards[this.card_no].todo_list_content_detail[detailIndex].lists.splice(index, 1, );

        },
        //卡片內上傳檔案
        filesearch(e) {


            this.file = e.target.files[0];
            // console.log(this.file);
            let readFile = new FileReader();
            readFile.readAsDataURL(this.file);
            this.file_switch = false;
            readFile.addEventListener('loadend', this.fileSelected);


        },
        fileSelected(e) {
            // console.log(e.target.result);
            // let file = e.target.files[1];
            // console.log(this.file);
            this.programs[this.page].cards[this.card_no].file_result = e.target.result;
            this.programs[this.page].cards[this.card_no].filebox.push({
                name: this.file.name,
                source: this.programs[this.page].cards[this.card_no].file_result,
            });

        },




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

        delete_file(index) {
            this.programs[this.page].cards[this.card_no].filebox.splice(index, 1);
        },
        //成員進入
        member_outin(index) {
            let pro_page = this.programs[this.page];
            if (this.showmember_select[index].check == '') {
                // console.log(index);
                this.showmember_select[index].uncolor = true;
                this.showmember_select[index].check = "./img/checked_member.svg";

                // console.log(this.member_inout);
                if (pro_page.cards[this.card_no].member_inout.map(x => x.source).indexOf(this.showmember_select[index].src) === -1) {
                    pro_page.cards[this.card_no].member_inout.push({
                        source: this.showmember_select[index].src,
                    })
                }
            } else {
                this.showmember_select[index].check = '';
                this.showmember_select[index].uncolor = false;
                let findIndex = pro_page.cards[this.card_no].member_inout.findIndex(item => item.source === this.showmember_select[index].src);
                pro_page.cards[this.card_no].member_inout.splice(findIndex, 1);

            }
        },

        calltomato(detailIndex, index) {
            alert("已加入蕃茄鐘");
        },
        //最小子項目勾選 卡片顯示進度
        //  card_progress() {

        //     let card_progress_return=0;
        //     if (this.detail_no != null && this.card_no != -1) {
        //       for (i = 0; i <= this.detail_no; i++) {//this.detail_no有問題

        //         card_progress_return=this.programs[this.page].cards[this.card_no].todo_list_content_detail[this.detail_no].lists.filter(item => {
        //           return item.status;
        //         });
        //         return card_progress_return
        //       }
        //     } else {
        //       return card_progress_return
        //     }
        //   },
        capro() {
            let total_length = 0;
            // console.log(this.card_no);
            //   console.log(cardIndex);
            //再產生一組卡片編號
            if (this.card_no == null) {
                return 0;
            } else {
                for (i = 0; i < this.programs[this.page].cards[this.cd_no].todo_list_content_detail.length; i++) {
                    total_length = total_length + this.programs[this.page].cards[this.cd_no].todo_list_content_detail[i].lists.length;
                }
                return total_length;
            }
        },
        checkpro() {
            // console.log(this.card_no);
            if (this.card_no == null) {
                return 0;
            } else {
                for (i = 0; i < this.programs[this.page].cards[this.cd_no].todo_list_content_detail.length; i++) {
                   console.log(i);
                    return this.programs[this.page].cards[this.cd_no].todo_list_content_detail[i].lists.filter(item => {
                        return item.status;
                    })
                }
            }
        },

        //   abc(){
        //     if(this.card_no==null){
        //         return 0;
        //     }else if(this.cd_no != null){
        //         return  this.checkpro().length;
        //     }

        //   },
        //   card_progress_checked() {

        //     let list_sum = 0;
        //     if (this.detail_no != null) {
        //       for (i = 0; i <= this.detail_no; i++) {
        //         list_sum = list_sum + this.card_progress(i).length;

        //       }
        //     } else {}

        //     return list_sum;

        //   },
        //         //最小子項目進度條
        inner_progress(detailIndex) {
            return this.programs[this.page].cards[this.card_no].todo_list_content_detail[detailIndex].lists.filter(item => {
                return item.status;
            });
        },
        inner_progress_bar(detailIndex) {
            // console.log(detailIndex)
            // console.log(this.inner_progress(detailIndex))
            let length = this.programs[this.page].cards[this.card_no].todo_list_content_detail[detailIndex].lists.length;
            if (length == 0) {
                return 0;
            } else {
                return Math.round((100 / length) * this.inner_progress(detailIndex).length);
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
        },

        //專案成員
        program_member_show() {
            return this.programs[this.page].program_memeber;
        },
        history_program_member_show() {
            return this.history_programs[this.history_page].program_memeber;
        },
        programs_member_hidenum() {
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
            if (this.programs[this.page].cards[this.card_no].member_input.length) {
                return this.programs[this.page].cards[this.card_no].card_member.filter(item => {
                    let content = item.userId.toLowerCase();
                    let name = item.member_name;
                    let realcontent = content.concat(name);
                    let keyword = this.programs[this.page].cards[this.card_no].member_input.toLowerCase();
                    return realcontent.indexOf(keyword) != -1;
                })
            } else {
                return this.programs[this.page].cards[this.card_no].card_member;
            }
        },

        hidemembers() {
            let pro_page = this.programs[this.page];
            if (pro_page.cards[this.card_no].member_inout.length > 3) {
                pro_page.cards[this.card_no].showhideMember = true;
                let member_length = pro_page.cards[this.card_no].member_inout.length;
                return member_length - 3;
            } else {
                pro_page.cards[this.card_no].showhideMember = false;
            }
        },
        history_hidemembers() {
            let pro_page = this.history_programs[this.history_page];
            if (pro_page.cards[this.history_card_no].member_inout.length > 3) {
                pro_page.cards[this.history_card_no].showhideMember = true;
                let member_length = pro_page.cards[this.history_card_no].member_inout.length;
                return member_length - 3;
            } else {
                pro_page.cards[this.history_card_no].showhideMember = false;
            }
        },
        nowProgram() {
            return this.programs[this.page]
            // if (this.click_complete_btn == true) { //已完成專案畫面
            //   return this.programs[this.page]

            // } else {
            //   return this.history_programs[this.page]
            //   // return this.history_programs[this.history_page]
            // }
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
            // if (this.page >=0 && this.card_no >=0){
            //     this.programs[this.page].cards[this.card_no].member_input = "";
            // }

            this.todo_lightbox_switch = false;
            this.file_switch = false;
            this.card_meber_switch = false;
            this.add_card_meber_switch = false;
            this.member_switch = false;
            this.todo_switch = false;
            this.todoListTitle = '';

            //  this.addmemberswitch=false;
            //  this.fileder_switch = false;



            this.fileder_switch = false;
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
    components: {
        DatePicker
    },
});