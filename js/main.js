$(document).ready(function () {

  $('.modal').modal();
  $('.tabs').tabs();

  $('#fullpage').fullpage({
    navigation: true,
    // responsiveWidth: 500,
    scrollHorizontally: true,
    loopHorizontal: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    fadingEffect: true,
    anchors: ['main', '2nd', '3th', '4th', '5th'],
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});

$(".second-page-items .col.s6").hover(
  function () {
    $(this).addClass('hover');
  }, function () {
    $(this).removeClass('hover');
  }
);

$('.second-page-items .first').click(function () {
  $(this).css("width", "90%").removeClass('hidden').addClass('open');
  $('.second-page-items .second').css("width", "10%").addClass('hidden').removeClass('open');
})

$('.second-page-items .second').click(function () {
  $(this).css("width", "90%").removeClass('hidden').addClass('open');
  $('.second-page-items .first').css("width", "10%").addClass('hidden').removeClass('open')
})


$(".third-page-items .col.s6").hover(
  function () {
    $(this).addClass('hover');
  }, function () {
    $(this).removeClass('hover');
  }
);

$('.third-page-items .first').click(function () {
  $(this).css("width", "90%").removeClass('hidden').addClass('open');
  $('.third-page-items .second').css("width", "10%").addClass('hidden').removeClass('open');
})

$('.third-page-items .second').click(function () {
  $(this).css("width", "90%").removeClass('hidden').addClass('open');
  $('.third-page-items .first').css("width", "10%").addClass('hidden').removeClass('open')
})

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});
