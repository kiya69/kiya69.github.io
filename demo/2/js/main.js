window.onload = function() {

  setTimeout(function() {
    $('.btn-arrow').removeClass('zoomInTopLeft');
    //remove the default effect, so it won't be triggered again after hovering on the button
  }, 999);
  $('.button').click(function() {
    $('.btn-dialog-img').removeClass('slideInLeft').addClass('slideOutLeft');
    $('.btn-arrow').removeClass('arrowHover zoomInTopLeft').addClass('zoomOut');
    //remove zoomInTopLeft again here in case the user click before all the animation loaded
    setTimeout(function() {
      $('.btn-cat').removeClass('zoomIn').addClass(' zoomOut')
      $('.btn-circle').removeClass('zoomIn').addClass('zoomOut');
      $('.button').addClass('hidden'); //hide it completely so the cursor won't show as pointer
    }, 500);
  });
}