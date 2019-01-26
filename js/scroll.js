$(document).ready(function() {
  $('.scroll').click(function() {
      $('body').animate({
          scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
      }, 1000);
  });
  $('#logo-container').hide().fadeIn(2000);
  $('#bottom-links').hide().fadeIn(1500);
});
