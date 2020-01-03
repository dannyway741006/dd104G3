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

    file_switch: false,

    filebox: [],
    sourced: '',

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


    //顯示成員
    memebergo: [{
        member_name: '王曉明',
        userId: 'user3456',
        src: './img/program_img/program_member_1.png',
        check:'',
        uncolor:false,
      },
      {
        member_name: '楊小梅',
        userId: 'user4756',
        src: "./img/program_img/program_member_2.png",
        check:'',
        uncolor:false,
      },
      {
        member_name: '張大千',
        userId: 'user1234',
        src: './img/program_img/program_member_3.png',
        check:'',
        uncolor:false,
      },
      {
        member_name: '陳小羽',
        userId: 'user456',
        src: './img/card_img/878378-XXL.jpg',
        check:'',
        uncolor:false,
      },
    ],
     
    //member的去向
    member_in:[],

    showcheck:false,

    member_inout:[],
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
          lists: [],
          // progress_bar_length:'',
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
    //為啥抓不到標題在陣列的索引直
    // delete_todo_title(){
    //   let index=this.todo_list_content_detail.findIndex(item => item.title == this.todo_lightbox_input_title);
    //   console.log(item);
    // },


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

    changeprogressbar(bigindex, index) {
      // this.progress_mount.push(this.todo_list_content_detail[bigindex].lists[index]);
      //  let orign=this.todo_list_content_detail[bigindex].lists.length;
      //  let alter=this.progress_mount.length;

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
    member_outin(index){
      if( this.memebergo[index].check==''){
        this.memebergo[index].uncolor=true;
        this.memebergo[index].check="./img/checked_member.svg";
        if(this.member_inout.indexOf(this.memebergo[index].src)==-1)
        this.member_inout.push({
          source:this.memebergo[index].src,
        })
      }else{
        this.memebergo[index].check='';
        this.memebergo[index].uncolor=false;
        if(this.member_inout.indexOf(this.memebergo[index].src)!=-1)
        this.member_inout.splice(this.memebergo[index],1
        )
        // this.member_inout.slice(memebergo[index],1);
      }
       
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      this.calandar_switch = false;
      this.todo_lightbox_switch = false;
      this.file_switch = false;
      this.card_meber_switch = false;

      this.showCalender = false;
      this.member_switch = false;
      this.todo_switch = false;
      this.fileder_switch = false;
    });
    calender(this.$refs.inCalender);
  },
  computed: {
    // testt_length(){
    //   let length=this.todo_test.length;
    //    let array=[];
    //   if(this.todo_test.test_status==false){
    //     array.push();
    //     console.log(array);
    //   }
    // },
    // progress_bar_length(){

    //    console.log(alter);
    //    return (100/orign)*alter;
    // },
  },
  components: {
    DatePicker
  },
});