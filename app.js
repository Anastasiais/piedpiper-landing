var stickyOffset = $('#header').offset().top;

$(window).scroll(function(){
  var sticky = $('#header'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$(".nav_link").click(function(e) {
    e.preventDefault();
    var elementId = $(this).data('scroll')
    $([document.documentElement, document.body]).animate({
        scrollTop: $(elementId).offset().top - $('#header').height()
    }, 500);
});

$('#burgerMenu').click(function(e) {
    let navBar = $('#navBar')
    if (navBar.hasClass("_show")) {
        navBar.removeClass('_show')
    } else {
        navBar.addClass('_show')
    }
})