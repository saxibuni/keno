(function () {
	function IMOverlay (opt) {
		this.opt = opt;
		this.el = '<div class="im-overlay"></div>';

		opt.position.append(this.el);
		this.zone = opt.position.children('.im-overlay');
	}

	IMOverlay.prototype.show = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.css('height', height);
		//$('body').find('.keno').removeClass('pageHide');
		this.zone.show();
	};
	IMOverlay.prototype.showImg = function () {
		$('body').find('.keno').addClass('pageHide');
		var str = '<div class="overlay-loading"></div>';
		$('body').append(str);
		$('body').css('background-color','')
	};
	IMOverlay.prototype.hideImg = function () {
		$('.overlay-loading').remove();
		$('body').find('.keno').removeClass('pageHide');
		$('body').css('background-color','#2E3656')
	};
	IMOverlay.prototype.hide = function () {
		this.zone.hide();
		//$('body').find('.keno').addClass('pageHide');
	};

	window.IMOverlay = IMOverlay;
}());

