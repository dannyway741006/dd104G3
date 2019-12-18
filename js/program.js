$(function () {

  $('button.program_add_btn a').click(function (e) {
    e.preventDefault();

    if (!$(this).hasClass('active')) {
      $(this).addClass('active');

      $('ul.program_add_list').prepend('<li><input type="text"></li>');
      $('input').focus();

      $('input').bind('keypress', function (e) {
        if (e.keyCode === 13) {
          var text = $('input').val();

          if (text !== '') {
            $('input').hide(0, function () {
              $(this).parent().html(text + '<span>x</span>');
              $(this).remove();
              $('button.program_add_btn a').removeClass('active');
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