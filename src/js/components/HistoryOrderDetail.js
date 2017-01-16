/*
** 继承自IMDialog
*/

(function () {
	function HistoryOrderDetail (opt) {
		IMDialog.call(this, (opt || {}));
		this.id = this.opt.id;
		this.el = this.initDom();
	}

	HistoryOrderDetail.prototype = new IMDialog();

	HistoryOrderDetail.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: 'bet cancel',
			className: 'cancel-order',
			imgSrc: '../img/cancel.png'
		});

		this.ok = new IMButton({
			text: 'ok',
			className: 'ok-button',
			imgSrc: '../img/dash.png'
		});

		temp = 	'<div class="history-order-detail" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="close-dialog">✕</div>' +
							'<div class="content">' +
								'<table cellspacing="0">' +
									'<tbody>' +
										'<tr class="even ticketId">' +
											'<td class="text" data-i18n="ticket no"></td>' +
											'<td class="value">160321077</td>' +
										'</tr>' +
										'<tr class="odd time">' +
											'<td class="text" data-i18n="bet time"></td>' +
											'<td class="value">08/08/2016 14:15:43</td>' +
										'</tr>' +
										'<tr class="even platform">' +
											'<td class="text" data-i18n="platform"></td>' +
											'<td class="value">WEB</td>' +
										'</tr>' +
										'<tr class="odd marketTypes">' +
											'<td class="text" data-i18n="market types"></td>' +
											'<td class="value"><span class="market">快乐彩</span>、<span class="types">单双</span></td>' +
										'</tr>' +
										'<tr class="even odds-pl">' +
											'<td class="text" data-i18n="odds-pl"></td>' +
											'<td class="value">1倍</td>' +
										'</tr>' +
										'<tr class="stake">' +
											'<td class="text" data-i18n="stake"></td>' +
											'<td class="value">3123131</td>' +
										'</tr>' +
										'<tr class="even winOrLoss">' +
											'<td class="text" data-i18n="win/loss"></td>' +
											'<td class="value">3123131</td>' +
										'</tr>' +
										'<tr class="odd result">' +
											'<td class="text" data-i18n="bet result"></td>' +
											'<td class="value">中奖</td>' +
										'</tr>' +
										'<tr class="even details">' +
											'<td class="text" data-i18n="bet details"></td>' +
											'<td class="value"></td>' +
										'</tr>' +
									'</tbody>' +
								'</table>' +

								'<div class="number-content" data-i18n="bet content"></div>' +

								'<div class="textarea">' +
									'<textarea></textarea>' +
								'</div>' +
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
				'<div class="overlay overlay2"></div>';

		return temp;
	};

	HistoryOrderDetail.prototype.getDom = function () {
		return this.el;
	};
	HistoryOrderDetail.prototype.show = function (data) {
		if (!data.canCancel) {
			this.zone.find('.cancel').addClass('can-not-cancel');
		} else {
			this.zone.find('.cancel').removeClass('can-not-cancel');
		}
		this.ticketId = data.ticketId;
		this.showOverlay();
	};

	HistoryOrderDetail.prototype.hide = function () {
		this.hideOverlay();
	};
	HistoryOrderDetail.prototype.setVal = function(index){
		var data = app.bettingRecords.betList[index];
		this.zone.find('.ticketId').find('.value').text(data.ticketId);
		this.zone.find('.time').find('.value').text(data.betTime);
		this.zone.find('.platform').find('.value').text('WEB');
		this.zone.find('.marketTypes').find('.market').attr('data-i18n',data.market);
		this.zone.find('.marketTypes').find('.types').attr('data-i18n',data.betType);
		this.zone.find('.odds-pl').find('.value').text(data.odds);
		this.zone.find('.stake').find('.value').text(Util.addDotToNumber(data.betAmount,2));
		this.zone.find('.winOrLoss').find('.value').text(Util.addDotToNumber(data.wlAmt,2));
		this.zone.find('.result').find('.value').text(data.win == true ? '中奖':"没中");
		this.zone.find('.details').find('.value').text(data.selection);
	};
	HistoryOrderDetail.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);
		this.zone.localize();

		this.zone.find('.close-dialog').click(function () {
			that.hide();
		});

		this.zone.find('.cancel-order').click(function () {
			if ($(this).parent('.cancel').hasClass('can-not-cancel')) {
				return;
			}

			var okCallback = function () {
				var req = {
					ticketId:that.ticketId
				};
				var obj = [];
				if(typeof(app) != 'undefined'){
					obj = app;
				}else{
					obj = recordsQuery
				}
				service.cancelBetHistory(req,function(res){
					if(res.code == 0){
						that.hide();
						obj.noticeDialog.show({
							subTitle : "取消成功",
							text: "取消成功",
							buttonName: "确定",
							autoHide: true,
							timeout: 3000
						});
						if(typeof(app) != 'undefined'){
							app.bettingRecords.getBetHistory();
						}else{
							recordsQuery.getBetHistory();
						}
						that.hide();
					}else{
						obj.noticeDialog.show({
							subTitle : "取消失败",
							text: Local[res.code],
							buttonName: "确定",
							autoHide: true,
							timeout: 3000
						});
					}
				})
			};

			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					text: '确定取消当前投注吗？',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定取消当前投注吗？');
		});

		this.zone.find('.ok-button').click(function () {
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.HistoryOrderDetail = HistoryOrderDetail;
}());
