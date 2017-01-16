(function () {
	function IMTip (opt) {
		this.opt = opt;
		this.el = this.init();
	}

	IMTip.prototype.init = function () {
		var temp = 	'<div class="im-tip">' +
						'<div class="tip-content"></div>' +
						'<div class="arrow"></div>' +
					'</div>';
		return temp;
	};

	IMTip.prototype.getDom = function () {
		return this.el;
	};

	IMTip.prototype.show = function (left, top, text) {
		this.zone = $('.im-tip');
		this.zone.find('.tip-content').text(text);

		this.zone.css({
			'display': 'inline-block',
			'left': left,
			'top': top
		});
	};

	IMTip.prototype.hide = function () {
		this.zone.hide();
	};

	window.IMTip = IMTip;
}());

