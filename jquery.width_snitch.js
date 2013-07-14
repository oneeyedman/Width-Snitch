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

		this.each(function() {

			if (settings.className){
				$(this).prepend('<div class="' + settings.className + '"></div>');
				$('.' + settings.className).text($(window).width() + ' px');

				if ( settings.color ) {
					$('.' + settings.className).css('color', settings.color );
				}

				if ( settings.style ) {
					$('.' + settings.className).css( settings.style );
				}

				$(window).resize(function() {
					$('.' + settings.className).text($(window).width() + ' px');
				});
			}

		});

		return this;

	};

}(jQuery));