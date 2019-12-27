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
    delete_todo_title_detail(index) {
      let indexx = this.todo_list_content_detail.findIndex(
        item => {return item.title == this.todo_lightbox_input_title
        });
   console.log(indexx);
      this.todo_list_content_detail[indexx].lists.splice(index, 1);
      // return indexx;
   
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
    del_file(index) {
      this.filebox.splice(index, 1);
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      this.calandar_switch = false;
      this.todo_lightbox_switch = false;
      this.file_switch = false;
      this.card_meber_switch = false;
    });
    calender(this.$refs.inCalender);
  },
  computed: {
    progress_bar_length(index) {

    },
    //   delete_todo_title(){
    //     let indexx=this.todo_list_content_detail.findIndex(
    //       item => {
    //          console.log(item.title);
    //       return  item.title == this.todo_lightbox_input_title} );;
    //  return  indexx;
    // },
  },
});


