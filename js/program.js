// $(function () {

//   $('button.program_add_btn').click(function (e) {
//     e.preventDefault();

//     if (!$(this).hasClass('active')) {
//       $(this).addClass('active');

//       $('ul.program_add_list').prepend('<li class="todolist_li"><input type="text" class="todolist_input"></li>');
//       $('input.todolist_input').focus();

//       $('input.todolist_input').bind('keypress', function (e) {
//         if (e.keyCode === 13) {
//           var text = $('input.todolist_input').val();

//           if (text !== '') {
//             $('input.todolist_input').hide(0, function () {
//               $(this).parent().html(text + '<span>x</span>');
//               $(this).remove();
//               $('button.program_add_btn').removeClass('active');
//             });
//           }
//         }
//       });
//     }
//   });

//   $(document).on('click', 'li span', function () {
//     $(this).parent().hide(0, function () {
//       $(this).remove();
//     });
//   });

// });

// let button = document.getElementById("program_add_btn");
// let light_box = document.getElementById("new_program_choose_box");
// button.addEventListener("click", () => {
//   mask.style.opacity = "1";
//   mask.style.visibility = " visible";
//   mask.style.display = "block";
//   mask.style.zIndex = "10000";
//   light_box.style.display = "block";
//   light_box.style.zIndex = "10001";
// })
// mask.addEventListener("click", () => {
//   mask.style.opacity = "0";
//   mask.style.visibility = "hidden";
//   mask.style.display = "none";
//   mask.style.zIndex = "0";
//   light_box.style.display = "none";
// });



var vm = new Vue({
  el: "#content",
  data: {
    tables: [],
    lists: [],
    open: false
  },
  methods: {
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
});