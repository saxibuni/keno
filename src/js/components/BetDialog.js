/*
** 继承自IMDialog
*/

(function () {
	function BetDialog (opt) {
		IMDialog.call(this, opt || {});
		this.id  = this.opt.id;
		this.opt = opt || {};
		this.data= {};
		this.el  = this.initDom();
	}

	BetDialog.prototype = new IMDialog();
	
	BetDialog.prototype.initDom = function (data) {
		var temp;

		this.sure = new IMButton({
			text: 'sure bet',
			className: 'sure',
			id: this.id + '-sure'
		});

		temp = 	'<div class="bet-dialog" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="header">' +
								'<div class="row1">' +
									'<span class="dialog-title" data-i18n="bet-dialog-title"></span>' +
									'<img class="close" src="../img/close.png"></img>' +
								'</div>' +

								'<div class="bet-content">' +
									'<div class="table">' +
										'<div class="thead">' +
											'<div class="tr">' +
												'<div class="td td1">' +
													'<span data-i18n="bet-issue"></span>' +
												'</div>' +
												'<div class="td td2">' +
													'<span data-i18n="bet-game"></span>' +
												'</div>' +
												'<div class="td td3">' +
													'<span data-i18n="bet content"></span>' +
												'</div>' +
												'<div class="td td4">' +
													'<span data-i18n="times"></span>' +
												'</div>' +
												'<div class="td td5">' +
												'</div>' +
											'</div>' +
										'</div>' +

										'<div class="tbody" style="height: 0px">' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +

							'<div class="money">' +
								'<div class="row1">' +
									'<span class="tzje" data-i18n="stake"></span>' +
									'<span class="tzxe-value">5-3000</span>' +
									'<span class="tzxe-title" data-i18n="bet-range"></span>' +
									'<div class="clear"></div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="input-outer">' +
										'<span class="money-icon">¥</span>' +
										'<input type="text" name="tzje-value">' +
									'</div>' +
  								'</div>' +
							'</div>' +

							'<div class="chips">' +
								'<ul>' +
									'<li>5</li>' +
									'<li>10</li>' +
									'<li>50</li>' +
									'<li>100</li>' +
									'<li>500</li>' +
								'</ul>' +
							'</div>' +

							'<div class="footer">' +
								'<div class="row1">' +
									'<span data-i18n="max payout"></span>' +
								'</div>' +

								'<div class="row2">' +
									'<span class="money-icon">¥</span>' +
									'<span class="kyje-value">3131242.13</span>' +
								'</div>' +

								'<div class="row3">' +
									this.sure.getDom() +
								'</div>' +
							'</div>' +
							'<div style="height: 1px;"></div>' +   //我也不知道为何要加这，反正不加就有问题
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	BetDialog.prototype.getDom = function () {
		return this.el;
	};
	BetDialog.prototype.getOddsOrOddsParlay = function(type,betType,betItem){
		var odds = '';
		if(betItem.length == 0) return '0';
		if(Global.betOdds.length == 0) return '';
		var betOdds = Global.betOdds.filter(function(item,index){
			return item.betType == betType;
		})[0];
		if(betType != 'Ball'){
			odds = betOdds.items.filter(function(item,index){
				return item.betItem == betItem;
			})[0][type];
		}else{
			var oddsList = betOdds.items.filter(function(item,index){
				return item.betItem == betItem.length.toString();
			})[0];
			odds = oddsList.odds;
			for(var i = 2;;i++){
				if(oddsList['odds'+i]){
					if( odds < oddsList['odds'+i]){
						odds = oddsList['odds'+i]
					}
				}else{
					break;
				}
			}
		}
		return odds;
	};
	//获得oddsParlay相乘的结果
	BetDialog.prototype.getMultiplyOddsParlay = function(){
		var oddsParlay =  Global.betZoneData[0].oddsParlay;
		for(var i = 1; i< Global.betZoneData.length;i++){
			if(Global.betZoneData[i].oddsParlay){
				oddsParlay = Global.betZoneData[i].oddsParlay * oddsParlay
			}
		}
		return oddsParlay;
	};
	BetDialog.prototype.cleanCoverDom = function(){
		for(var i = 0; i < app.gameHtmlArr.length; i++){
			if(!app[app.gameHtmlArr[i].market + "_KenoSocket"].drawData.marketClosed){
				var zone = app[app.gameHtmlArr[i].id].zone;
				zone.find('.market-close-overlay').hide();
				zone.find('.market-close-overlay').css('opacity','0');
				zone.find('.coverDom-tie').hide();
				zone.find('.coverDom-tie').parent().removeClass('coverDom');
				zone.find('.coverDom-5E').hide();
				zone.find('.coverDom-5E').parent().removeClass('coverDom');
				zone.find('.coverDom-UD').hide();
				zone.find('.coverDom-UD').parent().removeClass('coverDom');
				zone.find('.coverDom-UDH').hide();
				zone.find('.coverDom-UDH').parent().removeClass('coverDom');
				zone.find('.coverDom-OES').hide();
				zone.find('.coverDom-OES').parent().removeClass('coverDom')
			}
		}
	};
	//遮挡
	BetDialog.prototype.coverDom = function(){
		if(Global.betZoneData.length == 1){
			this.cleanCoverDom();
			if(Global.betZoneData[0].betType == 'Ball' || Global.betZoneData[0].betType == '5E' || Global.betZoneData[0].betType == 'UD' || Global.betZoneData[0].betType == 'OES' || Global.betZoneData[0].betType == 'BS' && Global.betZoneData[0].betItem[0] == 'Tie'){
				for(var i = 0; i < app.gameHtmlArr.length; i++){
					if(!app[app.gameHtmlArr[i].market + "_KenoSocket"].drawData.marketClosed && Global.betZoneData[0].market != app.gameHtmlArr[i].market){
						var zone = app[app.gameHtmlArr[i].id].zone;
						zone.find('.market-close-overlay').show();
						zone.find('.market-close-overlay').css('opacity','0.85');
					}
				}
			}else{
				for(var i = 0; i < app.gameHtmlArr.length; i++){
					if(!app[app.gameHtmlArr[i].market + "_KenoSocket"].drawData.marketClosed && Global.betZoneData[0].market != app.gameHtmlArr[i].market){
						var zone = app[app.gameHtmlArr[i].id].zone;
						zone.find('.coverDom-tie').show();
						zone.find('.coverDom-tie').parent().addClass('coverDom');
						zone.find('.coverDom-5E').show();
						zone.find('.coverDom-5E').parent().addClass('coverDom');
						zone.find('.coverDom-UD').show();
						zone.find('.coverDom-UD').parent().addClass('coverDom');
						zone.find('.coverDom-UDH').show();
						zone.find('.coverDom-UDH').parent().addClass('coverDom');
						zone.find('.coverDom-OES').show();
						zone.find('.coverDom-OES').parent().addClass('coverDom')
					}
				}
				for(var i = 0; i < app.gameHtmlArr.length; i++){
					if(!app[app.gameHtmlArr[i].market + "_KenoSocket"].drawData.marketClosed && Global.betZoneData[0].market != app.gameHtmlArr[i].market && app[app.gameHtmlArr[i].id].zone.find('.category').find('.selected').hasClass('rx')){
						var zone = app[app.gameHtmlArr[i].id].zone;
						zone.find('.market-close-overlay').show();
						zone.find('.market-close-overlay').css('opacity','0.85');
					}
				}
			}
		}else if(Global.betZoneData.length > 1){
			this.cleanCoverDom();
			for(var i = 0; i < app.gameHtmlArr.length; i++){
				if(!app[app.gameHtmlArr[i].market + "_KenoSocket"].drawData.marketClosed){
					var zone = app[app.gameHtmlArr[i].id].zone;
					zone.find('.coverDom-tie').show();
					zone.find('.coverDom-tie').parent().addClass('coverDom');
					zone.find('.coverDom-5E').show();
					zone.find('.coverDom-5E').parent().addClass('coverDom');
					zone.find('.coverDom-UD').show();
					zone.find('.coverDom-UD').parent().addClass('coverDom');
					zone.find('.coverDom-UDH').show();
					zone.find('.coverDom-UDH').parent().addClass('coverDom');
					zone.find('.coverDom-OES').show();
					zone.find('.coverDom-OES').parent().addClass('coverDom')
				}
			}
		}
	};
	BetDialog.prototype.parlayLimitOrder = function(odds){
		var list = [];
		for(var i = 0; i < Global.parlayLimit.length; i++){
			list.push(parseInt(Global.parlayLimit[i].betItem))
		}
		list = list.sort(function(a,b){
			return a>b ? 1:-1;
		});
		var num;
		for(var j = 0; j < list.length; j++){
			if(list[0] == odds){
				num = list[0];
				break;
			}
			if(list[j] < odds && odds <= list[j+1]){
				num = list[j +1];
				break;
			}
		}
		var text = Global.parlayLimit.filter(function(item,index){
			return item.betItem == num.toString();
		})[0]
		return text;
	}

	BetDialog.prototype.addRecord = function (plateId, data) {
		// data = {
		// 	issue: '2016010819',
		// 	nation: '加拿大',
		// 	betContent: '01,02,03,04,05',
		// 	betTimes: '1.5'
		// };

		var tbody  = this.zone.find('.bet-content .table .tbody');
		var table = this.zone.find('.bet-content .table');
		var tzxe = this.zone.find('.tzxe-value');
		this.data = data;
		var repeatInd = null;
		for(var i = 0; i< Global.betZoneData.length; i++){
			if(data.market == Global.betZoneData[i].market){
				repeatInd = i;
				break;
			}
		}
		if(repeatInd || repeatInd == 0){
			Global.betZoneData[repeatInd] ={
				"betType": data.betType,
				"issue":data.issue,
				"nation":data.nation,
				"betContent":data.betContent,
				"market": data.market,
				"gameCode": "KN",
				"betItem": [data.betItem],
				odds:this.getOddsOrOddsParlay('odds',data.betType,data.betItem),
				oddsParlay:this.getOddsOrOddsParlay('oddsParlay',data.betType,data.betItem)
			};
		}else{
			Global.betZoneData.push({
				"betType": data.betType,
				"issue":data.issue,
				"nation":data.nation,
				"betContent":data.betContent,
				"market": data.market,
				"gameCode": "KN",
				"betItem": [data.betItem],
				odds:this.getOddsOrOddsParlay('odds',data.betType,data.betItem),
				oddsParlay:this.getOddsOrOddsParlay('oddsParlay',data.betType,data.betItem)
			});
		}
		this.coverDom();
		tbody.remove();
		//tbody[0].style.height = 0;
		if(Global.betZoneData.length == 1){
			var tzxeTitle = Global.gameLimit.filter(function(item,index){
				return item.betType == data.betType && item.betItem == data.betItem
			})[0];
			if(tzxeTitle)tzxe.text(tzxeTitle.min + '-' +tzxeTitle.max);
		}else{
			var odds = this.getMultiplyOddsParlay();
			var text = this.parlayLimitOrder(odds);
			tzxe.text(text.min + '-' +text.max);
		}

		//var len    = tbody.children('.tr').length;
		//var top    = len*33.75;
		//var height = parseFloat(tbody[0].style.height);
		var betData = Global.betZoneData;
		var temp = '';
		for(var i = 0; i < betData.length; i++){
		 temp +=	'<div class="tbody" style="height: 34px">' +
					  '<div class="tr" data-value="' + plateId + '">' +
						'<div class="td td1">' +
							betData[i].issue +
						'</div>' +
						'<div class="td td2" data-i18n="'+betData[i].nation+'">' +
						'</div>' +
						'<div class="td td3" data-i18n="'+betData[i].betItem[0]+'">' +
							betData[i].betContent +
						'</div>' +
						'<div class="td td4">' +
							'x' + betData[i].odds +
						'</div>' +
						'<div class="td td5">' +
							'<img class="small-close" src="../img/small-close.png"></img>' +
						'</div>' +
					'</div>' +
			     '</div>';
		}
		table.append(temp);
		app.initI18next(table.find('.tbody'));
		//tbody[0].style.height =  height + 33.75 + 'px';
		//this.zone.find("[name=tzje-value]").val('0');
		this.zone.find(".chips ul li").removeClass('selected');
		this.setKyjeValue();
		this.data[plateId] = data;
	};

	BetDialog.prototype.deleteRecord = function (tr) {
		var i;
		var index;
		var height;
		var timeout;
		var rowheight    = 33.75;
		var tbody        = this.zone.find('.bet-content .table .tbody');
		var tbodyHeight  = parseFloat(tr.parents('.table').height());
		var trs          = tbody.children('.tr');
		var index        = tr.index();
		var that         = this;
		var plateId      = tr.attr('data-value');

		tr.animate({right: '100%'}, 350, function () {
			for (i = trs.length - 1; i > index; i--) {
				trs[i].style.top = trs[i-1].style.top;
			}

			timeout = setTimeout(function () {
				tbody.parents('.table').css('height', tbodyHeight - rowheight + 'px');
				clearTimeout(timeout);
				tr.parents('.tbody').remove();
				delete that.data[plateId];
				window.app.betDialogDeleteLock = false;
			}, 150);
		});
	};

	BetDialog.prototype.deleteAllRecord = function (tr) {
		var tbody = this.zone.find('.bet-content .table');
		
		tbody.find('.tbody').remove();
		//tbody[0].style.height = '0';

		this.data = {};
		this.removeSelected();
		this.cleanCoverDom();
		Global.betZoneData = [];
	};

	BetDialog.prototype.hasData = function (plateId) {
		return this.data[plateId];
	};

	BetDialog.prototype.show = function (data) {
		var that = this;
		this.showOverlay();
	};

	BetDialog.prototype.isHide = function () {
		return this.zone.css('visibility') === 'hidden';

	};

	BetDialog.prototype.hide = function () {
		this.deleteAllRecord();
		this.hideFlyinto();
	};
	BetDialog.prototype.closehide = function () {
		this.deleteAllRecord();
		this.hideOverlay();
	};
	BetDialog.prototype.removeSelected = function(){
		for(var x = 0; x < app.gameHtmlArr.length; x++){
			app['plate_'+app.gameHtmlArr[x].market].zone.find('.column ').removeClass('selected');
			app['plate_'+app.gameHtmlArr[x].market].zone.find('.ball ').removeClass('selected');
		}
		for(var i = 0; i < Global.betZoneData.length; i++){
			if(Global.betZoneData[i].betType != 'Ball'){
				app['plate_'+Global.betZoneData[i].market].zone.find('[bettype="'+Global.betZoneData[i].betType+'"][betitem="'+Global.betZoneData[i].betItem.toString()+'"]').parent().addClass('selected')
			}else{
				app['plate_'+Global.betZoneData[i].market].zone.find('.ball ').removeClass('selected')
			}
		}

	};

	BetDialog.prototype.setKyjeValue = function(){
		var that = this;
		var kyjeValue = that.zone.find('.kyje-value');
		if(Global.betZoneData.length == 0) return false;
		if(Global.betZoneData.length == 1){
			kyjeValue.text( Util.addDotToNumber(parseFloat(that.zone.find("[name=tzje-value]").val()) * Global.betZoneData[0].odds,2));
		}else{
			kyjeValue.text( Util.addDotToNumber(parseFloat(that.zone.find("[name=tzje-value]").val()) * that.getMultiplyOddsParlay(),2));
		}
	};

	BetDialog.prototype.cleanValue = function(){
		var that = this;
		var kyjeValue = that.zone.find('.kyje-value');
		var inpVal = that.zone.find('[name="tzje-value"]');
		kyjeValue.text('0');
		inpVal.val('0')
	};

	BetDialog.prototype.bindEvents = function () {
		var chipUl;
		var inpChange;
		var that = this;
		var lock = false;
		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';

		this.zone = $('#' + this.id);

		this.zone.find('.dialog-wrapper').draggabilly({
			containment: '.keno',
			handle: '.dialog-wrapper .header'
		});
		inpChange = this.zone.find('input');
		chipUl = this.zone.find('.chips ul');
		this.zone.find('.close').bind(clickOrtouch, function () {
			Global.betZoneData = [];
			that.removeSelected();
			that.closehide();
			that.sure.enabled();
		});

		var confirmSure = function () {
			var betAmount = that.zone.find("[name=tzje-value]").val();
			var fw = that.zone.find('.tzxe-value').text().split('-');
			if(betAmount == 0){
				app.noticeDialog.show({
					dataI18nText: 'noMoney',
					buttonName: "sure",
					autoHide: true,
					timeout: 3000
				});
				return false;
			}else if(parseInt(fw[0]) > parseInt(betAmount) || parseInt(betAmount) > parseInt(fw[1])){
				app.noticeDialog.show({
					dataI18nText: '11110',
					buttonName: "sure",
					autoHide: true,
					timeout: 3000
				});
				return false;
			}
			var betNowCallback = function(){
				if (typeof that.okCallback === 'function') {
					that.okCallback(betAmount);
				}
				that.sure.disabled();
			};
			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					okCallback: function () {
						betNowCallback.bind(that)();
					}
				});
				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}
			that.confirmDialog.showConfirm('', betAmount);
			//that.hide();

		};
		this.sure.bindEvents(confirmSure);
		inpChange.on('input',function(e){
			if(e.keyCode == 37 || e.keyCode == 38|| e.keyCode == 39 || e.keyCode == 40)return false;
			$(this).val($(this).val().replace(/\D/gi,""));
			that.setKyjeValue();
		});
		chipUl.delegate('li', clickOrtouch, function () {
			chipUl.find('li.selected').removeClass('selected');
			$(this).addClass('selected');
			//alert(22);
			var initialMoney = $('.money').find('input').val() || 0;
			var MoneyValue = parseInt($(this).text()) + parseInt(initialMoney);
			$('.money').find('input').animate({fontSize:'30px'},0).animate({fontSize:'15px'},300);
			$('.money').find('input').val(MoneyValue);
			that.setKyjeValue();
		});

		this.zone.delegate('.small-close', clickOrtouch, function () {
			if (!window.app.betDialogDeleteLock) {
				window.app.betDialogDeleteLock = true;
				Global.betZoneData.splice($(this).parents('.tbody').index() -1,1);
				that.deleteRecord( $(this).parents('.tr') );
				that.removeSelected($(this).parents('.tbody').index() -1);
				if(Global.betZoneData.length == 0){
					that.cleanCoverDom();
					that.closehide();
				}
				that.sure.enabled();
				that.coverDom();
				that.setKyjeValue();
			}
		});

		this.bindOverlayEvents();
	};

	window.BetDialog = BetDialog;
}());
