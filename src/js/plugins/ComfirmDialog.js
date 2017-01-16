/*
** 继承自IMDialog
*/

(function () {
	function ConfirmDialog (opt) {
		IMDialog.call(this, (opt || {}));

		this.text = this.opt.text;
		this.el   = this.initDom();
	}

	ConfirmDialog.prototype = new IMDialog();

	ConfirmDialog.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: 'cancel',
			className: 'cancel-button'
		});

		this.ok = new IMButton({
			text: 'ok',
			className: 'ok-button'
		});

		temp = 	'<div class="confirm-dialog">' +
					'<div class="dialog-wrapper" style="z-index: 199">' +
						'<div class="dialog">' +
							'<div class="title" data-i18n="reminder">温馨提示</div>'+
							'<div class="content">' +
								this.text +
							'</div>' +

							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay5"></div>';

		return temp;
	};

	ConfirmDialog.prototype.getDom = function () {
		return this.el;
	};

	ConfirmDialog.prototype.show = function (text) {
		this.zone.find('.content').text(text);
		this.zone.find('.content').text(text);
		this.showOverlay();
	};
	ConfirmDialog.prototype.showConfirm = function (text1,text2) {
		this.zone.find('.content').empty();
		var str = '';
		str +='<div class="totalMoney"><span data-i18n="allBetAmount"></span><span>'+Util.addDotToNumber(text2,2)+'</span></div>';
		this.zone.find('.content').append(str);
		app.initI18next(this.zone);
		this.showOverlay();
	};

	ConfirmDialog.prototype.hide = function () {
		this.hideOverlay();
	};

	ConfirmDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('.confirm-dialog');
		this.zone.localize();
		
		this.zone.find('.cancel-button').click(function () {
			if ((that.opt.cancelCallback) && (typeof that.opt.cancelCallback === 'function')) {
				that.opt.cancelCallback();
			}

			that.hide();
		});

		this.zone.find('.ok-button').click(function () {
			if ((that.opt.okCallback) && (typeof that.opt.okCallback === 'function')) {
				that.opt.okCallback();
			}

			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.ConfirmDialog = ConfirmDialog;
}());
