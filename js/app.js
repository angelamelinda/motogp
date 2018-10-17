(function($){
    "use strict"
  
    var app = {
      init: function() {
        app.owlCarousel();
      },
      owlCarousel: function() {
          $('#hero').owlCarousel({
            autoplay: true,
            rewind: true,
            loop: true,
            dots: true,
            autoplayHoverPause: true,
            autoplayTimeout: 7500,
            autoplaySpeed: 3000,
            items: 1
          })
      },
      scrolledMenu: function() {
        if($(window).scrollTop() > 0) {
            $('html').addClass('scrolled');
        } else {
            $('html').removeClass('scrolled');
        }
      },
    }
    $(window).on('load resize', function() {
        app.init();
    });
    $(window).on('scroll', function() {
        app.scrolledMenu();
    })
  })(jQuery)
  