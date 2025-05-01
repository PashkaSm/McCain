$ = jQuery;
$(document).ready(function () {
    "use strict";

    $('.header .search').on('click focus', function () {
        $("body").addClass('search-active');
        return false;
    });
    $('#searchform').clickOff(function () {
        $("body").removeClass('search-active');
        return false;
    });
    new Swiper(".inspired-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        navigation: {
            nextEl: ".swiper-navigation-custom .swiper-button-next",
            prevEl: ".swiper-navigation-custom .swiper-button-prev",
        },
        pagination: {
            el: ".swiper-navigation-custom .swiper-pagination",
            clickable: true,
        },
    });
    new Swiper(".our-campaigns-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true, 
        loop:true,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            }
        },
        navigation: {
            nextEl: ".swiper-navigation-custom .swiper-button-next",
            prevEl: ".swiper-navigation-custom .swiper-button-prev",
        },
        pagination: {
            el: ".swiper-navigation-custom .swiper-pagination",
            clickable: true,
        },
    });
    new Swiper(".product-photo", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true, 
        loop:true,
     
        navigation: {
            nextEl: ".slider-text .swiper-navigation-custom .swiper-button-next",
            prevEl: ".slider-text .swiper-navigation-custom .swiper-button-prev",
        },
        pagination: {
            el: ".slider-text .swiper-navigation-custom .swiper-pagination",
            clickable: true,
        },
    });
    new Swiper(".product-photo-left", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true, 
        loop:true,
     
        navigation: {
            nextEl: ".two-swiper .left .swiper-navigation-custom .swiper-button-next",
            prevEl: ".two-swiper .left .swiper-navigation-custom .swiper-button-prev",
        },
        pagination: {
            el: ".two-swiper .left .swiper-navigation-custom .swiper-pagination",
            clickable: true,
        },
    });
    new Swiper(".product-photo-right", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true, 
        loop:true,
     
        navigation: {
            nextEl: ".two-swiper .right .swiper-navigation-custom .swiper-button-next",
            prevEl: ".two-swiper .right .swiper-navigation-custom .swiper-button-prev",
        },
        pagination: {
            el: ".two-swiper .right .swiper-navigation-custom .swiper-pagination",
            clickable: true,
        },
    });
    $(".filter-items ul").hide();

    $(".filter a").click(function () {
        let index = $(this).parent().index();
        $(".filter-items ul").slideUp('slow');
        let list = $("#list-" + index);
        if (!list.is(":visible")) {
            list.slideDown('slow'); 
        }
        $(".filter a").removeClass("active");
        $(this).toggleClass("active");
    },
    );
    //==== End promotions Slider ====
    function checkScreenWidth() {
        var windowWidth = $(window).width();
        if (windowWidth >= 900 && $("#pop-up-home").length > 0 && $('.home').length > 0) {
            $.fancybox.open({
                src: '#pop-up-home',
                type: 'inline',
                autoFocus: false,
                autoClose: true,
                autoCloseTime: 5000
            });
        }
        $(window).off('resize', checkScreenWidth);
    }
    checkScreenWidth();
});
/* end ready*/
