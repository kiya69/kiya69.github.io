// $(document).click(function() {
//   $("logo").toggle("slide");
// });
$(document).ready(function() {
  setTimeout(function() {
    $('#left_col').animate({
      "margin-left": '+=100%'
    });
    $('#right_col').animate({
      "margin-right": '+=100%'
    });
    setTimeout(function() {
      $('logo').animate({
        "margin-left": '+=480'
      });
    }, 300)
  }, 1000)
  $('#close').click(function() {
    $('#left_col').animate({
      "margin-left": '-=100%'
    });
    $('#right_col').animate({
      "margin-right": '-=100%'
    });
  });
  $('.buy').click(function() {
    window.open('http://www.toast.co.uk/product/womens+coats+and+jackets/C0BAC/OVERSIZED+COTTON+R AINCOAT.htm?categoryref=%2fcategory.aspx%3fcategoryid%3dwomens%2520coats%2520an d%2520jackets%26seoterm%3dcoats%2520and%2520jackets%26nav%3dwomen%26menu&p cat=womens+coats+and+jackets&adimage=&clr=C0BAC_black', '_blank')
  })
});