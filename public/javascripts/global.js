(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 400) {
          $("header").addClass("is-scrolled");
      }
      else if (scroll <= 200) {
        $("header").removeClass("is-scrolled");
      }
      opacityVal = (scroll / 250.0);
      $('.home-hero.is-scrolled').css('opacity', opacityVal);
  });
})();