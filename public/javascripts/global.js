(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $("header").addClass("is-scrolled");
      }
      else if (scroll <= 200) {
        $("header").removeClass("is-scrolled");
      }
      opacityVal = (scroll / 250.0);
      $('.home-hero.is-scrolled').css('opacity', opacityVal);
  });
})();