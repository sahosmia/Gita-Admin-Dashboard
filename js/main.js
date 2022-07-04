$(document).ready(function () {
  // use for responsive navbar click bar and show all menu
  $(".navbar_bar").click(function () {
    $(".navbar-nav").toggle();
  });

  // use for responsive topbar click bar and show create, import, export btn
  $(".top_menu_bar").click(function () {
    $(".exta_btn").toggleClass("d-block", 300);
  });

  // use for sidebar hover then show sidebar full
  $(".sidebar").mouseout(function () {
    $(".tb_title").addClass("tb_title_hide", 300);
    $(".sidebar_text").addClass("sidebar_text_hide", 300);
  });

  // use for sidebar hover out then hide sidebar text
  $(".sidebar").mouseover(function () {
    $(".tb_title").removeClass("tb_title_hide", 300);
    $(".sidebar_text").removeClass("sidebar_text_hide", 300);
  });

  // use for topbar serch icon click and show search input
  $(".search-btn").click(function () {
    $(".search-input").toggle();
  });

  // use for profile image clcik and profile card
  $(".profile-image").click(function () {
    $(".profile_card").toggleClass("d-block", 300);
  });
});
