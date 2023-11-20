$(function () {
  $(".menu").click(() => {
    $(".menu-list").toggleClass("expanded");
  });

  $(".fa-brands").on({
    mouseenter: function () {
      $(this).addClass("fa-beat");
      console.log(this);
    },
    mouseleave: function () {
      $(this).removeClass("fa-beat");
    },
  });

  $(window).scroll(() => {
    const srcollPos = $(window).scrollTop();
    const windowHeight = $(window).height();
    const feedbackPos = $(".feedback .container").offset().top;

    if (srcollPos + windowHeight / 1.5 >= feedbackPos) {
      $(".feedback-content").addClass("fadeIn");
      console.log(123);
    }
  });
});
