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
});
