(function () {
	function BeanLoader (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = this.init();
	}

	BeanLoader.prototype.init = function () {
		var temp = 	'<div class="bean-overlay" id="' + this.id + '">' +
						'<div class="img">' +
							'<img class="pacman-img" src="../img/pacman.gif" />' +
						'</div>' +
						'<div class="announcement" data-i18n="announcement1"></div>' +
						'<div class="announcement" data-i18n="announcement2"></div>' +
					'</div>';

		return temp;
	};

	BeanLoader.prototype.getDom = function () {
		return this.el;
	};

	BeanLoader.prototype.show = function () {
		this.zone.show();
	};

	BeanLoader.prototype.hide = function () {
		this.zone.hide();
	};

	BeanLoader.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);
	};

	window.BeanLoader = BeanLoader;
}());

