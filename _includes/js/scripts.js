$(document).ready(function() {
    
    if (document.location.pathname == "/films/") {
        $.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=30&playlistId=PLpaj2LoHcuo_-Y1J4DTaAvZkVmbiMTT6j&fields=items&key= AIzaSyB2HO01isWou5I5pnKhh_KhgNZngowo27g ", function(result) {
            $.each(result.items, function(i, item) {
                $("#videos").append('<div class="teaser-wrapper"><div class="teaser">' + '<a data-id="' + item.contentDetails.videoId + '" class="modal-trigger" href="javascript:void(0);"><img src="https://img.youtube.com/vi/' + item.contentDetails.videoId + '/0.jpg"></a><a data-id="' + item.contentDetails.videoId + '" class="modal-trigger" href="javascript:void(0);"><h4>'+ item.snippet.title + '</a></h4><p>' + item.snippet.description.split(' ', 15).join(' ') + '…</p></div></div>');
            });
        
        
            $('.modal-trigger').click(function() {
                var id = $(this).data("id");
                $('.modal-content').append('<div class="video"><div class="video-wrapper"><iframe id="#youtube" src="https://www.youtube.com/embed/' + id + '?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" frameborder="0" allowfullscreen="true" allowscriptaccess="always"></iframe></div></div>');
                $('.modal').toggleClass('is-active');
            });

            $(".modal-fade-screen, .modal-close").on("click", function() {
                $('.modal').removeClass('is-active');
                $('.modal-content').empty();
            });

            $(".modal-inner").on("click", function(e) {
                e.stopPropagation();
                $('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            });
        
        });
    }

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
            $("#id_7").show();
            $("#id_6").show();
            $("#id_9").show();
            $("#id_11").show();
            $("#id_12").show();
            $("#id_13").show();
            $("#id_15").text("Does the family have any access requirements?");
            $("#id_15").show( "slow" );
            $("#eligibility").show( "slow" );
            $("#label_14").text("Please provide a brief description of the case, including any time constraints.");
        } 
        else if ($(this).val() == "Support for my family") {
            $("#id_7").show();
            $("#id_6").hide();
            $("#id_9").show();
            $("#id_11").show();
            $("#id_12").show();
            $("#id_13").show();
            $("#label_15").text("Do you have any access requirements?");
            $("#id_15").show();
            $("#eligibility").show( "slow" );
            $("#label_14").text("How can we help?");
        } 
        else {
            $("#id_7").hide();
            $("#id_6").hide();
            $("#id_15").hide();
            $("#eligibility").hide( "slow" );
            $("#label_14").text("Your message");
        }
			
    });
		
		
});


$(function() {
    $('.modal-trigger').click(function() {
        $('.modal').toggleClass('is-active');
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
        $('.modal').removeClass('is-active');
    });

    $(".modal-inner").on("click", function(e) {
        e.stopPropagation();
        $('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
});

$('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyB2HO01isWou5I5pnKhh_KhgNZngowo27g',
    events: {
        googleCalendarId: 'lvk6jirf8kpavevdm68c92e9k4@group.calendar.google.com'
    },
    timeFormat: 'h(:mm)a',
    eventRender: function(event, element) {
        element.attr("href", event.description)
    }
});

$('#calendarmini').fullCalendar({
    header: false,
    footer: false,
    views: {
        listAll: {
            type: 'list',
            duration: {
                days: 365
            },
            buttonText: '365 day'
        }
    },
    defaultView: 'listAll',
    height: 280,
    googleCalendarApiKey: 'AIzaSyB2HO01isWou5I5pnKhh_KhgNZngowo27g',
    events: {
        googleCalendarId: 'lvk6jirf8kpavevdm68c92e9k4@group.calendar.google.com'
    },
    timeFormat: 'h(:mm)a',
    displayEventEnd: false,
    eventRender: function(event, element) {
        element.find('a').attr("href", event.description);
    }
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