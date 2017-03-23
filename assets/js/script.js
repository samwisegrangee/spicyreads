$(document).ready(function() {

  //Toggles the size of the Bio boxes
  $(".read-more").click(function(){
    $(".q-box").addClass("big", 1000);
    $(".read-more").addClass("hide-me", 1000);
  });
  $(".q-box").click(function(){
    $(".q-box").removeClass("big", 1000);
    $(".read-more").removeClass("hide-me", 1000);
  });

  //"Swellbox" Blog Grid
  var bg = 75; //Just set how big you want the zoom to be
  var sm = 100 - bg; //Sets the amount remaining
  var bp = bg + "%"; //Adds percentage to big one
  var sp = sm + "%"; //Adds percentage to small one
  //Top Left
  $(".top-left").mouseover(function(){
    $(this).css({"height": bp, "width": bp});
    $(".top-right").css({"height": bp, "width": sp});
    $(".bottom-left").css({"height": sp, "width": bp});
    $(".bottom-right").css({"height": sp, "width": sp});
  });
    //Top Right
  $(".top-right").mouseover(function(){
    $(".top-left").css({"height": bp, "width": sp});
    $(this).css({"height": bp, "width": bp});
    $(".bottom-left").css({"height": sp, "width": sp});
    $(".bottom-right").css({"height": sp, "width": bp});
  });
    //Bottom Left
  $(".bottom-left").mouseover(function(){
    $(".top-left").css({"height": sp, "width": bp});
    $(".top-right").css({"height": sp, "width": sp});
    $(this).css({"height": bp, "width": bp});
    $(".bottom-right").css({"height": bp, "width": sp});
  });
    //Bottom Right
  $(".bottom-right").mouseover(function(){
    $(".top-left").css({"height": sp, "width": sp});
    $(".top-right").css({"height": sp, "width": bp});
    $(".bottom-left").css({"height": bp, "width": sp});
    $(this).css({"height": bp, "width": bp});
  });
  $(".box").mouseout(function(){
    $(".box").css({"height": "50%", "width": "50%"})
  });

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

});
