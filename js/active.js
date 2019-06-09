(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#pixelNav').classyNav();
    }

    // :: 3.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slideshow');
        var testiSlide = $('.testimonial-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            navText: ['السابق', 'التالي'],
            dots: true,
            autoplay: false,
            autoplayTimeout: 10000,
            smartSpeed: 200,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {

            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        testiSlide.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 500
        });
    }

    // :: 4.0 Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.pixel-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.pixel-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: 5.0 Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: 6.0 Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.zoom-img').magnificPopup({
            type: 'image'
        });
    }
    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i> Top'
        });
    }

    // :: 8.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 9.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#c1').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c2').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c3').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c4').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }

    // :: 10.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 11.0 Prevent Default a Click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 12.0 Jarallax Active Code
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: 13.0 Sticky Active Code
    if ($.fn.sticky) {
        $("#sticker").sticky({
            topSpacing: 0
        });
    }

    // :: 14.0 Wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }



    // global variable for the player
    var player;

    // this function gets called when API is ready to use
    function onYouTubePlayerAPIReady() {
        // create the global player from the specific iframe (#video)
        player = new YT.Player('video', {
            events: {
                // call this function when player is ready to use
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {

        // bind events
        var playButton = document.getElementById("play-button");
        playButton.addEventListener("click", function () {
            player.playVideo();
        });

        var pauseButton = document.getElementById("pause-button");
        pauseButton.addEventListener("click", function () {
            player.pauseVideo();
        });

        var stopButton = document.getElementById("stop-button");
        stopButton.addEventListener("click", function () {
            player.stopVideo();
        });

    }

    // Inject YouTube API script
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    /*----------------------------------------------------*/
	/*  Portfolio carousel js
    /*----------------------------------------------------*/

    $('.active-gallery-carousel').owlCarousel({
        items: 2,
        // autoplay: 2500,
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<img src='img/cprev.png'>", "<img src='img/cnext.png'>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 1
            },
            575: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 2
            },
            1680: {
                items: 2
            }
        }
    });

    // :: 1.0 Owl Carousel Active Code
    if ($.fn.owlCarousel) {
        $(".app_screenshots_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 200,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
        $(".clients-slider").owlCarousel({
            items: 2,
            loop: true,
            autoplay: true,
            smartSpeed: 200,
            margin: 15,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
        $(".blog-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 200,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });

        $(".records-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 200,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });

        $(".team-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 200,
            margin: 15,
            center: true,
            dots: true,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });
    }


    $('.testi-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        responsiveClass: true,
        navText: [
            "<i class='fas fa-arrow-circle-left'></i>",
            "<i class='fas fa-arrow-circle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                loop: false
            },
            1200: {
                items: 1,
                loop: false
            }
        }
    });

    // Initializes Magnific Popup
    $('.modal-video-popup').magnificPopup({
        //disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        // Changes iFrame to support Youtube state changes (so we can close the video when it ends)
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe id="player" class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
            // Converts Youtube links to embeded videos in Magnific popup.
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0&enablejsapi=1'
                }
            }
        },
        // Tracks Youtube video state changes (so we can close the video when it ends)
        callbacks: {
            open: function () {
                new YT.Player('player', {
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            }
        }
    });

    // Closes Magnific Popup when Video Ends
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            $.magnificPopup.close();
        }
    }

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        callbacks: {
            resize: changeImgSize,
            imageLoadComplete:changeImgSize,
            change:changeImgSize
        }
    });

    function changeImgSize(){
        var img = this.content.find('img');
        img.css('max-height', '100%');
        img.css('width', 'auto');
        img.css('max-width', 'auto');
    }

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        //disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });


    jQuery('.media-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        callbacks: {
            elementParse: function (item) {
                // Function will fire for each target element
                // "item.el" is a target DOM element (if present)
                // "item.src" is a source that you may modify
                console.log(item.el.context.className);
                if (item.el.context.className == 'video') {
                    item.type = 'iframe',
                        item.iframe = {
                            patterns: {
                                youtube: {
                                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                                    // Or null - full URL will be returned
                                    // Or a function that should return %id%, for example:
                                    // id: function(url) { return 'parsed id'; } 

                                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
                                },
                                vimeo: {
                                    index: 'vimeo.com/',
                                    id: '/',
                                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                                },
                                gmaps: {
                                    index: '//maps.google.',
                                    src: '%id%&output=embed'
                                }
                            }
                        }
                } else {
                    item.type = 'image',
                        item.tLoading = 'Loading image #%curr%...',
                        item.mainClass = 'mfp-img-mobile',
                        item.image = {
                            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                        }
                }

            }
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }

    });


    $('#portfoliowork').mixItUp({
        selectors: {
            target: '.mix',
            filter: '.filter',
            sort: '.sort-btn'
        },
        animation: {
            animateResizeContainer: false,
            //effects: 'fade scale',
            duration: 300
        }
    });


    $('#mixItUp').mixItUp({
        animation: {
            animateResizeContainer: false,
            //effects: 'fade scale',
            duration: 300
        },
        callbacks: {
            onMixLoad: function() {
            console.log('[callback] MixItUp Loaded');
            },
            onMixStart: function() {
            console.log('[callback] Animation Started');
            },
            onMixEnd: function() {
            console.log('[callback] Animation Ended');
            }
        }
    });





    $('.single_features_slide').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='fas fa-arrow-circle-left'></i>",
            "<i class='fas fa-arrow-circle-right'></i>"
        ],
        autoplayHoverPause: true

    });

    $('#mixup-section .filter').click(function (event) {
        $('#portfolio-items-desc .item-desc').removeClass('show');
        let filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('#portfolio-items-desc .' + filter).addClass('show');
        } else {
            $('#portfolio-items-desc ' + filter).addClass('show');
        }
    });

})(jQuery);



// Code goes here

// based on
// http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
// use href="#anchorID" in your hyperlinks 
// with smoothScroll('destinationAnchorID');return false; as the onclick event.
// <a href="#anchor-1" onclick="smoothScroll('anchor-1-id');">smooth scroll to Anchor 1<a/>


function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
    return false;
}



