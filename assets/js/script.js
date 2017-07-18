//Places Images in the Cycler depending on screen width
function placeImages(){
  var current_width = $(window).width();

  if(current_width > 700){
    $("#cycle-img-1").attr("src", "assets/img/ed-extra-pin-on-shirt.jpg");
    $("#cycle-img-2").attr("src", "assets/img/ed-extra-bookstairs-h.jpg");
    $("#cycle-img-3").attr("src", "assets/img/ed-reading-outside.jpg");
    $("#cycle-img-4").attr("src", "assets/img/ed-extra-coffee-book.jpg");
  }

  if(current_width < 700){
    $("#cycle-img-1").attr("src", "assets/img/ed-reading-headshot.jpg");
    $("#cycle-img-2").attr("src", "assets/img/ed-extra-book-picture.jpg");
    $("#cycle-img-3").attr("src", "assets/img/ed-headshot-v1.jpg");
    $("#cycle-img-4").attr("src", "assets/img/ed-extra-bookstairs-v.jpg");
  }
}
//Cycling Function found on: http://www.simonbattersby.com/blog/cycling-a-src-with-jquery/
function cycleImages(){
      var $active = $('#home .active');
      var $next = ($('#home .active').next().length > 0) ? $('#home .active').next() : $('#home img:first');

      $next.css('z-index', 2);//move the next image up the pile
	    $active.fadeOut(1400,function(){//fade out the top image
	       $active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the image
         $next.css('z-index', 3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function() {
  placeImages();

  $(window).resize(function() {
    placeImages();
  });

  //Cycles between background images
  $('#home').fadeIn(1400);//fade the background back in once all the images are loaded
  // run every 7s
  setInterval('cycleImages()', 6000);

  //The orange hovers on nav options
  /*
  $('.navlink').click(function(){
    $(this).addClass('here').delay(2000).queue(function(){
      $('.navlink').removeClass('here');
    });
  });
  */


  //Smooth scrolling between ""#anchor" links.
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  //Toggles the size of the Bio boxes
  $(".read-more").click(function(){
    var height = $(".q-explain").css("height");

    $(".q-box").css("height", height);
    $(".read-more").css("display", "none");
  });
  $(".q-box").click(function(){
    $(".q-box").css("height", "0");
    $(".read-more").css("display", "inline-block");
  });

  //"Swellbox" Blog Grid
  var bg = 70; //Just set how big you want the zoom to be
  var sm = 100 - bg; //Sets the amount remaining
  var bp = bg + "%"; //Adds percentage to big one
  var sp = sm + "%"; //Adds percentage to small one

  //Top Left
  $(".top-left").mouseover(function(){
    $(this).css({"height": bp, "width": bp});
    $(".top-right").css({"height": bp, "width": sp});
    $(".bottom-left").css({"height": sp, "width": bp});
    $(".bottom-right").css({"height": sp, "width": sp});
    $(".hidden-text", this).css("display", "inline-block").delay(1000);
    $(".slide-button", this).css("right", "0");
  });
    //Top Right
  $(".top-right").mouseover(function(){
    $(".top-left").css({"height": bp, "width": sp});
    $(this).css({"height": bp, "width": bp});
    $(".bottom-left").css({"height": sp, "width": sp});
    $(".bottom-right").css({"height": sp, "width": bp});
    $(".hidden-text", this).css("display", "inline-block").delay(1000);
    $(".slide-button", this).css("right", "0");
  });
    //Bottom Left
  $(".bottom-left").mouseover(function(){
    $(".top-left").css({"height": sp, "width": bp});
    $(".top-right").css({"height": sp, "width": sp});
    $(this).css({"height": bp, "width": bp});
    $(".bottom-right").css({"height": bp, "width": sp});
    $(".hidden-text", this).css("display", "inline-block").delay(1000);
    $(".slide-button", this).css("right", "0");
  });
    //Bottom Right
  $(".bottom-right").mouseover(function(){
    $(".top-left").css({"height": sp, "width": sp});
    $(".top-right").css({"height": sp, "width": bp});
    $(".bottom-left").css({"height": bp, "width": sp});
    $(this).css({"height": bp, "width": bp});
    $(".hidden-text", this).css("display", "inline-block").delay(1000);
    $(".slide-button", this).css("right", "0");
  });
  $(".box").mouseout(function(){
    $(".box").css({"height": "50%", "width": "50%"});
    $(".hidden-text").css("display", "none");
    $(".slide-button").css("right", "-100%");
  });

  //Vidroll Scroll
  $(window).scroll(function() {
    vidScroll();
  });

  function vidScroll() {

    var wScroll = $(window).scrollTop();

    $('.vidroll').css('background-position-y','-'+ wScroll +'px');
  }

  //Bouncing Contact Icons
  $(".bounce").addClass("animated infinite pulse");
});
