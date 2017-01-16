//Dialog的基类

(function () {
	function IMDialog (opt) {
		this.opt = opt;
	}

	IMDialog.prototype.showOverlay = function () {
		var height1 = parseInt($('.keno .main').css('height'));
		var height2 = parseInt($('.keno .left-nav').css('height') || 0);
		var height  = Math.max(height1, height2) + 'px';

		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('modal-dialog-deactive');
		this.zone.addClass('modal-dialog-active');
		this.zone.find('.dialog-wrapper').css({'opacity':'1'});
	};

	IMDialog.prototype.hideOverlay = function () {
		this.zone.removeClass('modal-dialog-active');
		this.zone.addClass('modal-dialog-deactive');
		this.zone.find(".money input").val(0);
		this.zone.find('.chips ul').find('li.selected').removeClass('selected');
	};
	IMDialog.prototype.hideFlyinto = function () {
		var that = this;
		var RecordLeft = $('.bet-record').position().left;
		this.zone.find('.dialog-wrapper').animate({
			top:'0px',
			left:RecordLeft+350+'px',
			width:'0',
			height:'0',
			opacity: '0'
		},500);
		setTimeout(function(){
			that.zone.find('.dialog-wrapper').css({'top':'50%','left':'50%','width':'395px','height':'auto'});
			that.zone.removeClass('modal-dialog-active');
			that.zone.addClass('modal-dialog-deactive');
		},'600')
	};
	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.showContentOverlay = function () {
		var height1 = parseInt($('.keno .main').css('height'));
		var height2 = parseInt($('.keno .left-nav').css('height') || 0);
		var height  = Math.max(height1, height2) + 'px';

		$('body').css('overflow-y', 'hidden');
		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('content-dialog-deactive');
		this.zone.addClass('content-dialog-active');
	};

	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.hideContentOverlay = function () {
		$('body').css('overflow-y', 'auto');
		this.zone.removeClass('content-dialog-active');
		this.zone.addClass('content-dialog-deactive');
	};

	IMDialog.prototype.bindOverlayEvents = function () {
		var that = this;

		this.isPC = !Util.isMobile.any();

		if (this.isPC) {
			this.zone.find('.dialog').css('transition', 'all .5s');
		}

		this.zone.next('.overlay').click(function () {
			that.hide();
		});
	};

	window.IMDialog = IMDialog;
}());