(function($){
  // Mobile menu
  jQuery('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "991"
  });

  $(document).ready(function() {
    $('#view-projects').niceSelect();
  });




})(jQuery);