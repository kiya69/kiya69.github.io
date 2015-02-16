/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Floating label headings for the contact form
$(function() {
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});
$('.portfolio-link').click(function() {
  $('section').addClass('blur');
  $('.navbar').addClass('blur');
  $('.index').css('overflow-y', 'hidden');
});

function removeBlur() {
  setTimeout(function() {
    $('section').removeClass('blur');
    $('.navbar').removeClass('blur');
  }, 500);

  $('.index').css('overflow-y', 'auto');
}

function stopVimeo() {
  var $frame = [$('iframe#vimeo1'), $('iframe#vimeo2'), $('iframe#vimeo3')];

  // saves the current iframe source
  var vidsrc = [$frame[0].attr('src'), $frame[1].attr('src'), $frame[2].attr('src')];

  // sets the source to nothing, stopping the video

  for (var i = 0; i < 3; i++) {
    $frame[i].attr('src', '');
    $frame[i].attr('src', vidsrc[i]);
  }
  // sets it back to the correct link so that it reloads immediately on the next window open

}
$('.close-modal').click(function() {
  removeBlur();
  stopVimeo();
});
$(document.body).on('click', "#close", function() {
  removeBlur();
  stopVimeo();
});
$('body').on("keydown", function(e) {
  if (e.keyCode == 27) {
    $('.close-modal').click();
  }
});
$('.arrow-left').click(function() {
  $('body').css('overflow-y', 'hidden');
  stopVimeo();
});
$('.arrow-right').click(function() {
  $('body').css('overflow-y', 'hidden');
  stopVimeo();
});
$('.timeline-body').readmore({
  maxHeight: 66
});