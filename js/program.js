var main_content = new Vue({
  el: "#content",
  data: {
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
      } else {
        // this.open = false;
      }

    },

  },
  mounted() {
    document.addEventListener('click', () => {
      this.open = false;
    });
  },
});

var cards_column_all = new Vue({
  el: "#cards_column_all",
  data: {
    open: false,

    programs: [],
    program_name: '',

  },
  methods: {
    add_card(card_name) {
      if (this.card_name !== '') {
        this.programs.push(card_name);
        this.card_name = '';
        this.open = false;
      } else {
        // this.open = false;
      }

    },

  },
  // mounted() {
  //   document.addEventListener('click', () => {
  //     this.open = false;
  //   });
  // },

});


