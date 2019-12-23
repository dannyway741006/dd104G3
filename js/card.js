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
    open: false,
    isactive:true,
    onactive:false,
    classObject:{
        active:false,
        // error:true,
    },
    text:'未完成',

    showselect:true,
    
    deleteline:false,
    
    todo_lightbox_switch:false,

    todo_list_content_detail:[],
    todo_lightbox_input_title:'',

    card_detail_lightbox:false,

    card_check_item_detail:[],
    card_detail_lightbox_add:'',
  },
  methods: {
    changeimg(){
      this.isactive=false;
      this.onactive=true;
      this.classObject.active=true;
      this.text='完成';
    },
    onchangeimg(){
      this.isactive=true;
      this.onactive=false;
      this.classObject.active=false;
      this.text='未完成';
    },

    showSelect(){
      if(this.showselect){
        this.showselect=false;
        this.deleteline=true;
      }else{
        this.showselect=true;
        this.deleteline=false;
      }
    },

    // 增加待辦清單項目
    todo_list_add(todo_lightbox_input_title){
   if(this.todo_lightbox_input_title.length){
    this.todo_list_content_detail.push(todo_lightbox_input_title);
    this.todo_lightbox_input_title='';
    this.todo_lightbox_switch=false;
}
},
add_card_detail(card_detail_lightbox_add){
  if(this.card_detail_lightbox_add.length){
    this.card_check_item_detail.push(card_detail_lightbox_add);
    this.card_detail_lightbox_add='';
    this.card_detail_lightbox=false;
  }
  
  
},
},
mounted() {
  document.addEventListener('click', () => {
   
    this.todo_lightbox_switch=false;
    this.card_detail_lightbox=false;
  });
},
})
