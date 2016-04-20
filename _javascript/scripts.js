$(document).ready(function() {

  // Menu Bar

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

	// Search Bar

	$('.search-tools').removeClass("show");
	$('#js-search-toggle').attr({
		href: "javascript:void(0)"	});
	$('#js-search-toggle').addClass("show");
	$('#js-search-toggle').click(function() {
		$(".search-tools").toggle();
		$('#js-search-toggle').toggleClass('active');
	});
	
	// Google Form
	
	var googleForm = $('form').jqGoogleForms({"formKey": "1xnRdbuaw7-fpO_qdRCN0LPoHwVfJpR5C7EcoP5QM_3E"});
	$( "#contact-form").submit(function(event) {
		event.preventDefault();
		googleForm.sendFormData({
			"entry.993658079": $("input[name=name]").val(),
			"entry.1139272614": $("input[name=email]").val(),
			"entry.415731429": $("textarea[name=message]").val()
		});
		$( ".flash-success").fadeIn("fast");
		$( "#contact-form").fadeOut("fast");
	});
	
});

(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function(){  
  jQuery.mark.jump();
});