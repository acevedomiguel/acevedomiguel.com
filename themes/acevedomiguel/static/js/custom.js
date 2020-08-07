$(window).on("load",function(){
    "use strict";
    /*=========================================================================
        Preloader
    =========================================================================*/
    $("#preloader").delay(350).fadeOut('slow');

});

$(function(){
    "use strict";

    $('.menu-icon').on( 'click', function() {
        $('header.left').toggleClass('open');
        $('.mobile-header, main.content').toggleClass('push');
    });

    $('main.content, header.left button.close').on( 'click', function() {
        $('header.left').removeClass('open');
        $('.mobile-header, main.content').removeClass('push');
    });

    // /*=========================================================================
    //  Counterup JS for facts
    //  =========================================================================*/
    // $('.count').counterUp({
    //   delay: 10,
    //   time: 2000
    // });

    // /*=========================================================================
    //  Progress bar animation with Waypoint JS
    //  =========================================================================*/
    // if ($('.skill-item').length > 0) { 
    //   var waypoint = new Waypoint({
    //     element: document.getElementsByClassName('skill-item'),
    //     handler: function(direction) {
          
    //       $('.progress-bar').each(function() {
    //         var bar_value = $(this).attr('aria-valuenow') + '%';                
    //         $(this).animate({ width: bar_value }, { easing: 'linear' });
    //       });

    //       this.destroy()
    //     },
    //     offset: '50%'
    //   });
    // }

    /*=========================================================================
     One Page Scroll with jQuery
     =========================================================================*/
    $('.vertical-menu li a[href^="#"]:not([href="#"])').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top-50
      }, 800, 'easeInOutQuad');
      event.preventDefault();
    });

    /*=========================================================================
     Add (nav-link) class to main menu.
     =========================================================================*/
    $('.vertical-menu li a').addClass('nav-link');

    /*=========================================================================
     Bootstrap Scrollspy
     =========================================================================*/
    $("body").scrollspy({ target: ".scrollspy", offset: 50});

    /*=========================================================================
     Background Image with Data Attribute
     =========================================================================*/
    // var bg_img = document.getElementsByClassName('background');

    // for (var i = 0; i < bg_img.length; i++) {
    //   var src = bg_img[i].getAttribute('data-image-src');
    //   bg_img[i].style.backgroundImage="url('" + src + "')";
    // }

    /*=========================================================================
     Spacer with Data Attribute
     =========================================================================*/
    var list = document.getElementsByClassName('spacer');

    for (var i = 0; i < list.length; i++) {
      var size = list[i].getAttribute('data-height');
      list[i].style.height = "" + size + "px";
    }

    /*=========================================================================
            Scroll to Top
    =========================================================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').on('click', function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 400);
    });

});