$(function () {

  $('button.program_add_btn').click(function (e) {
    e.preventDefault();

    if (!$(this).hasClass('active')) {
      $(this).addClass('active');

      $('ul.program_add_list').prepend('<li><input type="text" class="todolist_input"></li>');
      $('input.todolist_input').focus();

      $('input.todolist_input').bind('keypress', function (e) {
        if (e.keyCode === 13) {
          var text = $('input.todolist_input').val();

          if (text !== '') {
            $('input.todolist_input').hide(0, function () {
              $(this).parent().html(text + '<span>x</span>');
              $(this).remove();
              $('button.program_add_btn').removeClass('active');
            });
          }
        }
      });
    }
  });

  $(document).on('click', 'li span', function () {
    $(this).parent().hide(0, function () {
      $(this).remove();
    });
  });

});