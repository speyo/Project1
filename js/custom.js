
// ----- Tab Pane Activate ------ //
$('.img-afspraak').click(function() {
  $(this).css("opacity", "1");

});

// ----- Navigation Active ------ //
$(".nav a").on("click", function(){
   $(".nav a").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
