(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 300) {
          $("header").addClass("is-scrolled");
      }
      else if (scroll <= 200) {
        $("header").removeClass("is-scrolled");
      }
  });
})();