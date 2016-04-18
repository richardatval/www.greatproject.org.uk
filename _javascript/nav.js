$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      $('#js-mobile-menu').toggleClass('active');
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

	$('.search-tools').removeClass("show");
	$('#js-search-toggle').attr({
		href: "javascript:void(0)"	});
	$('#js-search-toggle').addClass("show");
	$('#js-search-toggle').click(function() {
		$(".search-tools").toggle();
		$('#js-search-toggle').toggleClass('active');
	});
	
});