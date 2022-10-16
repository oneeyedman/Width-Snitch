(function(){
	this.widthSnitch = function() {
		const defaults = {
			className: 'snitch',
			style: {
				border: '1px solid #222',
				borderRadius: '5px',
				color: '#222',
				fontSize: '1.5em',
				left: '10px',
				padding: '.5em 1em',
				position: 'fixed',
				top: '10px',
				zIndex: '666',
			}
		};
		this.version = 'v2.0.0';
		this.settings = (arguments[0] && typeof arguments[0] === 'object') ? extendDefaults(defaults, arguments[0]) : defaults;
		this.init();
	};

	widthSnitch.prototype.init = function() {
		const {settings, version} = this;
		console.log(`Width Snitch ${version} | https://github.com/oneeyedman/width-snitch`);
		const body = document.querySelector('body');
		const previousSnitch = body.querySelector(`.${settings.className}`);
		previousSnitch && previousSnitch.remove();
		createSnitch(body, settings);

		window.addEventListener('resize',function () {
			update(settings.className);
		});
	};

	function update(className) {
		document.querySelector(`.${className}`).textContent = getSnitchData();
	}

	function getSnitchData() {
		const {body} = document;
		const {clientWidth, scrollWidth} = body;

		return clientWidth !== scrollWidth ? `😱 ${innerWidth} / ${scrollWidth} px` : `😎 ${innerWidth} px`
	}

	function extendDefaults(defaults, properties) {
		for (const prop in defaults) {
			if(properties.hasOwnProperty(prop)) {
				defaults[prop] = properties[prop]
			}
		}
		return defaults;
	}

	function createSnitch(el, settings) {
		const snitch = document.createElement('DIV');
		snitch.setAttribute('class', settings.className);
		snitch.textContent = getSnitchData();
		for (const prop in settings.style) {
			snitch.style[prop] = settings.style[prop]
		}
		el.append(snitch);
	}
}());




