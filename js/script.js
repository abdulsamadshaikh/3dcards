
//Example #2 Sliding Cards
(function() {
  
  var slideContainer = $('.body_content_slider_wrp');
  
  slideContainer.slick();
  
  $('.slick-slide img').hide();
  $('.slick-active').find('.card_thumbnail_div img').fadeIn(200);
  
  // On before slide change
  slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.card_thumbnail_div img').fadeOut(1000);
  });
  
  // On after slide change
  slideContainer.on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('.card_thumbnail_div figure img').fadeIn(200);
  });
  
})();

//Example #3 Content Toggle
$(document).ready(function(){
  $("#content_toggle").hide();
  $("#click_me").click(function(){
    $("#content_toggle").slideToggle("slow");
  });

  $("#content_toggle_1").hide();
  $("#click_me_1").click(function(){
    $("#content_toggle_1").slideToggle("slow");
  });

  $("#content_toggle_2").hide();
  $("#click_me_2").click(function(){
    $("#content_toggle_2").slideToggle("slow");
  });

  $("#content_toggle_3").hide();
  $("#click_me_3").click(function(){
    $("#content_toggle_3").slideToggle("slow");
  });

  $("#content_toggle_4").hide();
  $("#click_me_4").click(function(){
    $("#content_toggle_4").slideToggle("slow");
  });
});


//Developed by Abdul
$(document).ready(function(){
    //Developer credit text
    $("#d-by").append(' <a href="https://getabdulsamad.com/">Developed by Abdul</a>');
    $("#d-by a").attr("target", "_blank");
});
