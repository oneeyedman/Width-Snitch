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
			},
		}, options);

		var element_checker = function() {
			var
				checker_count = 0,
				checker_status = true,
				checker_class = 'snitch_check_status_',
				checker_text = 'ok',
				body_width = $( window ).width();
			$( 'body' ).find( '*' ).each(function(index, el) {
				if ( $(this).width() > body_width ) {
					$(this).addClass( 'snitch_bad_boy' );
					checker_status = false;
					checker_count++;
				} else {
					$(this).removeClass( 'snitch_bad_boy' );
				}
			});
			if ( checker_status ) {
				checker_text = 'ok';

			} else {
				checker_text = 'ko';
			}
			return '<span class="' + checker_class + checker_text + '"><i class="snitch_check_ico">' + checker_text + ':</i>' + checker_count + '</span>';
		};

		this.each(function() {

				$(this).prepend('<div class="' + settings.className + '"></div>');
				$('.' + settings.className).html($(window).width() + ' px ' + element_checker() );

				if ( settings.style ) {
					$('.' + settings.className).css( settings.style );
				}

				$(window).resize(function() {
					$('.' + settings.className).html($(window).width() + ' px ' + element_checker() );
				});

		});

		return this;

	};

}(jQuery));
