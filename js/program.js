var vm = new Vue({
  el: "#content",
  data: {
    tables: [],
    lists: [],
    open: false,

    programs: [],
    program_name: '',

  },
  methods: {
<<<<<<< HEAD
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
=======
    add: function () {
      // let cope = {
      //   name: this.name
      // }
      // this.name = '';
      // this.lists.push(cope);
      // console.log(this.name)
      // console.log(this.lists)
      
    }
  }
>>>>>>> practice
});