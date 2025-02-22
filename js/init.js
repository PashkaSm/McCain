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
