//新增專案
var main_content = new Vue({
  el: "#content",
  data: {
    open: false,

    programs: [],
    program_name: '',

    cards_list_card_input_box: false,
    cards: [],
    card_name: '',

    invite_btn: false,

  },
  methods: {
    //新增專案
    add_program(program_name) {
      if (this.program_name !== '') {
        this.programs.push(program_name);
        this.program_name = '';
        this.open = false;
      } else {
        // this.open = false;
      }
    },

    //新增卡片
    show_cards_list_card_input_box() {
      this.cards_list_card_input_box = true;
    },
    add_card(card_name) {
      if (this.card_name !== '') {
        this.cards.push(card_name);
        this.card_name = '';
        this.cards_list_card_input_box = false;
      } else {}
    },

    // show_invite_add_member_box() {
    //   this.open = true;
    // },

  },
  mounted() {
    document.addEventListener('click', () => {
      this.open = false;
      this.cards_list_card_input_box = false;
      this.invite_btn = false;
    });
  },
});