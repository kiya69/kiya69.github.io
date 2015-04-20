window.onload = function() {

  var arrow = document.getElementById('arrow');
  setTimeout(function() {
    arrow.classList.remove('zoomInTopLeft');
    arrow.classList.remove('animated');
    arrow.style.width = "79px";
    arrow.style.height = "67px";
    arrow.className += " arrowHover";
  }, 1200)
}

$('.overlay').click(function() {
  arrow.style.width = "100%";
  arrow.style.height = "100%";

  $('.dialog-img').removeClass('slideInLeft').addClass('slideOutLeft');

  $('#arrow').removeClass('arrowHover').addClass('animated zoomOutBottomRight');
  setTimeout(function() {
    $('#cat').removeClass('zoomIn').addClass(' zoomOut')
    $('#circle').removeClass('zoomIn').addClass('zoomOut');
  }, 500)
})