/*======== Window Load Function ========*/
$(window).on('load', function() {

    /*======== Preloader ========*/
    $(".loader").fadeOut();
    $(".preloader").delay(1000).fadeOut();


    /*======== Isotope Portfolio Setup ========*/
    if( $('.portfolio-items').length ) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();

        $filters.on('click', function(){
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }

    /*======== Blogs Masonry Setup ========*/
    $('.blogs-masonry').isotope({ layoutMode: 'moduloColumns' });

    $('#video-container video').attr('playsinline', '');
    $('#video-container video').attr('controls', '');

});


/*======== Document Ready Function ========*/
$(document).ready(function() {

    "use strict";


    /*======== SimpleBar Setup ========*/
    $('.pt-page').each(function() {
        var $id = '#' + $(this).attr('id');
        new SimpleBar($($id)[0]);
    });

    /*======== Fitty Setup ========*/
    fitty('.header-name', {
        multiLine: false,
        maxSize: 20,
        minSize: 10
    });

    /*======== Active Current Link ========*/
    $('.nav-menu a').on('click',function() {
        if($('.header-content.on').length) {
            $('.header-content').removeClass('on');
        }
    });

    /*======== Mobile Toggle Click Setup ========*/
    $('.header-toggle').on('click', function() {
        $('header .header-content').toggleClass('on');
    });

    /*========Clients OwlCarousel Setup========*/
    $(".clients .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            700: {
                items: 4,
            },
            1000: {
                items: 6,
            },
        },
    });

    /*========Testimonials OwlCarousel Setup========*/
    $(".testimonials .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });

    /*======== Skills Progress Animation ========*/
    if($('.skills').length > 0) {
        var el = new SimpleBar($('#resume')[0]).getScrollElement();

        $(el).on('scroll', function() {

            $('.progress .progress-bar').each(function() {
                var bottom_object = $(this).offset().top + $(this).outerHeight();
                var bottom_window = $(window).scrollTop() + $(window).height();
                var progressWidth = $(this).data('progress-value') + '%';
                if (bottom_window > bottom_object) {
                    $(this).css({
                        width: progressWidth
                    });
                    $(this).find('.progress-value').animate({
                        countNum: parseInt(progressWidth, 10)
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $(this).text(Math.floor(this.countNum) + '%');
                        },
                        complete: function() {
                            $(this).text(this.countNum + '%');
                        }
                    });
                }
            });

        });
    }

    /*======== Portfolio Image Link Setup ========*/
    $('.portfolio-items .image-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*======== Portfolio Video Link Setup ========*/
    $('.portfolio-items .video-link').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });

    /*======== Portfolio Ajax Link Setup ========*/
    ajaxPortfolioSetup($('.portfolio-items .ajax-link'), $('.ajax-portfolio-popup'));

    /*======== Portfolio Tilt Setup ========*/
    $('#portfolio .item figure').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    });

    /*======== Contact Form Setup ========*/
    contactFormSetup();

    console.log("Loading particles.js");

  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );
});


/*********** Function Ajax Portfolio Setup **********/
function ajaxPortfolioSetup($ajaxLink, $ajaxContainer) {
    $ajaxLink.on('click', function(e) {
        var link = $(this).attr('href');

        if(link === "#") {
            e.preventDefault();
            return;
        }

        $ajaxContainer.find('.content-wrap .popup-content').empty();

        $ajaxContainer.addClass('on');
        $.ajax({
            cache: false,
            headers: {"cache-control": "no-cache"},
            url: link,
            beforeSend: function() {
                $ajaxContainer.find('.ajax-loader').show();
            },
            success: function(result) {
                $ajaxContainer.find('.content-wrap .popup-content').html(result);
            },
            complete: function() {
                $ajaxContainer.find('.ajax-loader').hide();
            },
            error: function(e) {
                $ajaxContainer.find('.ajax-loader').hide();
                $ajaxContainer.find('.content-wrap .popup-content').html('<h1 class="text-center">Something went wrong! Retry or refresh the page.</h1>')
            }
        });
        e.preventDefault();
    });

    $ajaxContainer.find('.popup-close').on('click', function() {
        $ajaxContainer.removeClass('on');
    });


}

/********** Function Contact Form Setup **********/
function contactFormSetup() {

    /*======== Check Field Have Value When Page Load ========*/
    $('.input__field').each(function() {
        if($(this).val()) {
            $(this).parent('.input').addClass('input--filled');
        } else {
            $(this).parent('.input').removeClass('input--filled');
        }
    });

    /*======== Check Field Have Value When Keyup ========*/
    $('.input__field').on('keyup', function() {
        if($(this).val()) {
            $(this).parent('.input').addClass('input--filled');
        } else {
            $(this).parent('.input').removeClass('input--filled');
        }
    });
}


/********** Function Show Alert Box **********/
function showAlertBox(response, message) {
    var $alertBox = $('<div class="alert"></div>'),
        $alContainer = $('#contact-form .alert-container');
    if( response == 200 ) {
        $alertBox.addClass('alert-success').html(message);
        $alContainer.html($alertBox);
    } else {
        $alertBox.addClass('alert-danger').html(message);
        $alContainer.html($alertBox);
    }
    $alContainer.fadeIn(300).delay(2000).fadeOut(400);
}
