var main_content = new Vue({
  el: "#content",
  data: {
    tables: [],
    lists: [],
    open: false,

    programs: [],
    program_name: '',

  },
  methods: {
    add_program(program_name) {
      if (this.program_name !== '') {
        this.programs.push(program_name);
        this.program_name = '';
        this.open = false;
      }else{
        // this.open = false;
      }

    },

  },
  mounted() {
    document.addEventListener('click',()=>{
      this.open = false;
    });
  },
});

var cards_column_all = new Vue({


});