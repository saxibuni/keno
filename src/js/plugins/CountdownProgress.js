(function () {

	function CountdownProgress (opt) {
		this.id        = opt.id;
		this.opt       = opt;
		this.totalTime = opt.totalTime;
		this.el        = this.initDom();
	}

	CountdownProgress.prototype.initDom = function () {
		var temp =	'<div class="countdown-progress" id="' + this.id + '">' +
						'<div class="filler"></div>' +
					'</div>';
		
		return temp;
	};

	CountdownProgress.prototype.getDom = function () {
		return this.el;
	};

	CountdownProgress.prototype.set = function (leftTime, totalTime) {
		var per = parseFloat(leftTime / totalTime) * 100 + '%';

		if (leftTime > 30) {
			this.zone.find('.filler').css({
				'background-color': '#58BE79',
				'width': per
			});
		} else {
			this.zone.find('.filler').css({
				'background-color': '#E77353',
				'width': per
			});
		}
	};

	CountdownProgress.prototype.startAnimation = function (callback) {
		var filler = this.zone.find('.filler');

		filler.animate({'width': '0%'}, 1000, function () {
			callback();
		});
	};

	CountdownProgress.prototype.bindEvents = function (callback) {
		this.zone = $('#' + this.id);
	};

	window.CountdownProgress = CountdownProgress;
}());

