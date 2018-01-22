$(document).ready(function() {

		// Menu Bar

		var menuToggle = $('#js-mobile-menu').unbind();

		menuToggle.on('click', function(e) {
			e.preventDefault();
			$('#js-navigation-menu').slideToggle(function() {
				$('#js-mobile-menu').toggleClass('active');
				if ($('#js-navigation-menu').is(':hidden')) {
					$('#js-navigation-menu').removeAttr('style');
				}
			});
		});

		// Search Bar
		var searchToggle = $('#js-search-toggle').unbind();
		$('.search-tools').removeClass("show");
		$('#js-search-toggle').attr({
			href: "javascript:void(0)"
		});
		$('#js-search-toggle').addClass("show");
		searchToggle.on('click', function(e) {
			e.preventDefault();
			$(".search-tools").slideToggle(function() {
				if ($('.search-tools').attr('style')=="display:block") {
					$('#js-search-toggle').removeAttr('style');
				}
			});
			$('#js-search-toggle').toggleClass('active');
		});
		
		
		// Contact Form dependent fields
		
		$("#support").change(function () {
		   if( $("#support").val() != "request_for_information" )
		   {
			   $("#textfield-surname").show();
		   }
		   else {
		   	$("#textfield-surname").hide();
		   }
		});

		// Validate Forms

		$("#contact-form").validate({
				rules: {
					name: "required",
				},
				messages: {
					name: "We need your name to contact you.",
				},
				submitHandler: function(form) {
					form.submit();
				}
		});
		
		$("#textfield-surname").hide();
		$("#textfield-organisation").hide();
		$("#textfield-postcode").hide();
		$("#textfield-adults").hide();
		$("#textfield-children").hide();
		$("#textfield-belowschoolage").hide();
		$("#textarea-access").hide();
		$("#eligibility").hide();
		
		$("#support").change(function() {
			if ($(this).val() == "refer_family") {
				$("#textfield-surname").show();
				$("#textfield-organisation").show();
				$("#textfield-postcode").show();
				$("#textfield-adults").show();
				$("#textfield-children").show();
				$("#textfield-belowschoolage").show();
				$("#textarea-access label").text("Does the family have any access requirements?");
				$("#textarea-access").show( "slow" );
				$("#eligibility").show( "slow" );
				$("#textarea-message label").text("Please provide a brief description of the case, including any time constraints.");
			} 
			else if ($(this).val() == "my_family") {
				$("#textfield-surname").show();
				$("#textfield-organisation").hide();
				$("#textfield-postcode").show();
				$("#textfield-adults").show();
				$("#textfield-children").show();
				$("#textfield-belowschoolage").show();
				$("#textarea-access label").text("Do you have any access requirements?");
				$("#textarea-access").show();
				$("#eligibility").show( "slow" );
				$("#textarea-message label").text("How can we help?");
			} 
			else {
				$("#textfield-surname").hide();
				$("#textfield-organisation").hide();
				$("#textarea-access").hide();
				$("#eligibility").hide( "slow" );
				$("#textarea-message label").text("Your message");
			}
			
		});
		
		$("#input_16").change(function() {
			if ($(this).val() == "Support for a family I work with") {
				$("#input_7").show();
				$("#input_6").show();
				$("#input_9").show();
				$("#input_11").show();
				$("#input_12").show();
				$("#input_13").show();
				$("#label_15").text("Does the family have any access requirements?");
				$("#input_15").show( "slow" );
				$("#eligibility").show( "slow" );
				$("#label_14").text("Please provide a brief description of the case, including any time constraints.");
			} 
			else if ($(this).val() == "Support for my family") {
				$("#input_7").show();
				$("#input_6").hide();
				$("#input_9").show();
				$("#input_11").show();
				$("#input_12").show();
				$("#input_13").show();
				$("#label_15").text("Do you have any access requirements?");
				$("#input_15").show();
				$("#eligibility").show( "slow" );
				$("#label_14").text("How can we help?");
			} 
			else {
				$("#input_7").hide();
				$("input_6").hide();
				$("#input_15").hide();
				$("#eligibility").hide( "slow" );
				$("#label_14").text("Your message");
			}
			
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