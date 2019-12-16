$(document).ready(function () {
  $('#fullpage').fullpage({
    navigation: true,
    // responsiveWidth: 500,
    scrollHorizontally: false,
    loopHorizontal: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    fadingEffect: true,
    anchors: ['main', '2nd', '3th', '4th', '5th'],
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});

$(".2nd-items .col.s6").hover(
  function () {
    $(this).addClass('hover');
  }, function () {
    $(this).removeClass('hover');
  }
);

$('.2nd-items .first').click(function () {
  $(this).css("width", "90%").removeClass('hidden').addClass('open');
  $('.2nd-items .second').css("width", "10%").addClass('hidden').removeClass('open');
})

$('.2nd-items .second').click(function () {
  $(this).css("width", "90%").removeClass('hidden').addClass('open');
  $('.2nd-items .first').css("width", "10%").addClass('hidden').removeClass('open')
})