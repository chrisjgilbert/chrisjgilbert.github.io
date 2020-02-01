$(document).ready(function() {
  $('section').fadeIn(1000);
  $('.nav-item a').click(function() {
      $('body').animate({
          scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
      }, 750);
  });
});
