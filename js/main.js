$(document).ready(function () {
  $(".navbar_bar").click(function () {
    $(".navbar-nav").toggle();
  });

  $(".top_menu_bar").click(function () {
    $(".exta_btn").toggleClass("d-block", 300);
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
