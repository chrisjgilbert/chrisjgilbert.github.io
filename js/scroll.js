$(document).ready(function() {
  $('#main').fadeIn(1000);
  $('.scroll').click(function() {
      $('body').animate({
          scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
      }, 500);
  });
});
