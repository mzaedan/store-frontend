$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleclass("scrolled", $this.scrollTop() > $nav.height());
  });
});
