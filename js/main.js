$(document).ready(function () {
  $(".navbar_bar").click(function () {
    $(".navbar-nav").toggle();
  });

  $(".sidebar").mouseout(function () {
    $(".tb_title").addClass("tb_title_hide", 300);
    $(".sidebar_text").addClass("sidebar_text_hide", 300);
  });

  $(".sidebar").mouseover(function () {
    $(".tb_title").removeClass("tb_title_hide", 300);
    $(".sidebar_text").removeClass("sidebar_text_hide", 300);
  });

  $(".search-btn").click(function () {
    $(".search-input").toggle();
  });
});
