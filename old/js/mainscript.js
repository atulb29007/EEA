document.addEventListener("DOMContentLoaded", function(event) {

  $(function() {
    $('#nav-icon').click(function() {
      $(this).toggleClass('open');
      $(".desktop-nav").toggleClass("desktop-nav-open");
    });
  });

});
