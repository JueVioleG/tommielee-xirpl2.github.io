(function($) {
    "use strict";
    
    // Sticky nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });
    
    // One page navigation
    $('main-navigation').onePageNav({
        currentClass: 'active'
    });
    
    $(window).on('load', function() {
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });
    });
    
    // Slick nav
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'span',
        allowParentLinks: true,
        duplicate: false,
        label: '',
    });
    
    // CounterUp
    $('.counter').counterUp({
        time: 1000
    });
    
    // MixItUp
    $('#portfolio').mixItUp({});
    
    // Touch Owl Carousel
    var owl = $(".touch-slider");
    owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [1024, 2],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
    });
    
    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');
    
    // Sticky nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });
    
    // Smooth scroll
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').on('click', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });
    
    // Back to top link
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset ) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
    // Nivo Lightbox
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true
    });
    
    // Stellar JS
    $.stellar({
        horizontalScrolling: true,
        verticalOffset: 40,
        responsive: true
    });
    
    // Page loader
    $('#loader').fadeOut();
}(jQuery));
