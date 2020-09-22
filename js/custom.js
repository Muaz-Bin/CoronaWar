$(document).ready(function(){
  $('html').smoothScroll();
  $('.counter').counterUp({
    time:1200,
    delay:100,
  });
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('open');
  });

  $("#back2top").on('click', function (e) {
    $('html , body').animate({
        scrollTop: 0
    }, 1400);
    e.preventDefault();
});

  $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        var stickytop = $(".header-top");
        if ($scrolling >= 160) {
            stickytop.addClass('sticky');
        } else {
            stickytop.removeClass('sticky');
        };
        
        if ($scrolling > 300) {
          $("#back2top").fadeIn(1000);
        } else {
          $("#back2top").fadeOut(500);
        };
    });
});
