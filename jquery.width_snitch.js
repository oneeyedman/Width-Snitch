;(function ($){

	$.fn.width_snitch = function( options ){

		// let's establish our default options
		var settings = $.extend({
			className: 'snitch',
			style: {
			'border':'1px solid #222',
			'border-radius': '5px',
			'color': '#222',
			'font-size': '1.5em',
			'left':'10px',
			'padding': '.5em 1em',
			'position': 'fixed',
			'top': '10px',
			'z-index': '666'
			}
		}, options);

		var element_checker = function() {
			var
				checker_status = true,
				body_width = $( window ).width();
			$( 'body' ).find( '*' ).each(function(index, el) {
				if ( $(this).width() > body_width ) {
					$(this).addClass( 'snitch_bad_boy' );
					checker_status = false;
				} else {
					$(this).removeClass( 'snitch_bad_boy' );
				}
			});
			if ( checker_status ) {
				return 'OK';
			} else {
				return 'KO';
			}

		};

		this.each(function() {

				$(this).prepend('<div class="' + settings.className + '"></div>');
				$('.' + settings.className).text($(window).width() + ' px | ' + element_checker() );

				if ( settings.style ) {
					$('.' + settings.className).css( settings.style );
				}

				$(window).resize(function() {
					$('.' + settings.className).text($(window).width() + ' px | ' + element_checker() );
				});

		});

		return this;

	};

}(jQuery));
