/*
 *  投注记录 下拉界面 BettingRecords.js
 *  继承自: IMDialog
 */

(function () {
	function BettingRecords (opt,num) {
		IMDialog.call(this, (opt || {}));

		this.data = {
			1: 	[
			    ],

		    2:  [
	    		]
	    };
		this.tabType = 1;
		this.el = this.initDom();
	}

	BettingRecords.prototype = new IMDialog();

	BettingRecords.prototype.initDom = function () {
		var temp;

		this.searchButton = new IMButton({
			text: 'search',
			className: 'search',
			id:'search'
		});

		this.exportButton = new IMButton({
			text: 'export',
			className: 'export',
			id:'export'
		});

		this.pager1 = new IMPager({id: 'betting-records-pager'});
		this.pager2 = new IMPager({id: 'chase-records-pager'});
		this.tip    = new IMTip();

		temp = 	'<div class="betting-records">' +
					'<div class="dialog-wrapper">' +
						'<div class="row">' +
							'<div class="head-height">' +
								'<ul class="tabs">' +
									'<li class="tab1 active"><span data-i18n="bettings"></span></li>' +
									'<li class="tab2"><span data-i18n="history"></span></li>' +
								'</ul>' +

								'<div class="stick"></div>' +
							'</div>' +
 
							'<div class="head-height" style="margin-left:5%">' +
								'<div class="zone2">' +
									this.createDatetimePicker() +
									this.searchButton.getDom() +
								'</div>' +
							'</div>' +

							'<div class="head-height" style="float:right;">' +
								'<div class="zone3">' +
									this.exportButton.getDom() +
									'<span class="close-icon">✕</span>' +
								'</div>' +
							'</div>' +

							'<div class="clear"></div>' +
						'</div>' +

						'<div class="cont content1">' +
							'<div class="table-zone">' +
								this.createTable('1') +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager1.getDom() +
							'</div>' +
						'</div>' +
						
						'<div class="cont content2">' +
							'<div class="table-zone">' +
								this.createTable('2') +
							'</div>' +

							'<div class="summary-zone">' +
								this.createSummary('0.00', '0.00', '0.00') +
							'</div>' +

							'<div class="pager-zone">' +
								this.pager2.getDom() +
							'</div>' +
						'</div>' +

						this.tip.getDom() +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay1" style="top: .7rem"></div>';

		return temp;
	};

	BettingRecords.prototype.createDatetimePicker = function () {
		this.startTime    = new IMDatetimepicker({className: 'starttime', text:'开始',i18n:'startTime'});
		this.endTime      = new IMDatetimepicker({className: 'endtime', text:'结束',i18n:'endTime'});

		return this.startTime.getDom() + this.endTime.getDom();
	};

	BettingRecords.prototype.createSummary = function (stake, validBet, winloss) {
		var temp =	'<span class="text" data-i18n="stake"></span>' +
					'<span>:</span>' +
					'<span class="value">' + stake + '</span>' +
					'<span class="text" data-i18n="valid bet"></span>' +
					'<span>:</span>' +
					'<span class="value">' + validBet + '</span>' +
					'<span class="text" data-i18n="win/loss"></span>' +
					'<span>:</span>' +
					'<span class="value">' + winloss + '</span>';

		return temp;
	};

	BettingRecords.prototype.getDom = function () {
		return this.el;
	};
	BettingRecords.prototype.getValue = function(){
		var that = this;
		//下注情况
		if(this.tabType == 1){
			var req = {
				"page":{
					"pageNo":this.pager1.currentPage,
					"pageSize":this.pager1.pageSize
				}
			};
			$('.keno').find('.content1').find('tbody').html('');
			service.betList(req,function(res){
				if(res.code == 0){
					that.betList = res.list;
					that.data[1] = [];

					for(var i = 0; i< res.list.length; i++){
						that.data[1].push([
							i < 9?'0'+(i + 1):(i+1),
							res.list[i].ticketId,
							res.list[i].betTime,
							res.list[i].betType == undefined ?'parlay':res.list[i].betType,
							res.list[i].betCount,
							Util.addDotToNumber(res.list[i].betAmount,4),
							Util.addDotToNumber(res.list[i].odds*res.list[i].betAmount/2,4),
							res.list[i].parlayItems == undefined?res.list[i].betItem:res.list[i].parlayItems
						])
					}
					if(that.pager1.totalPage != res.page.pageCount){
						that.pager1.totalPage = res.page.pageCount || 1;
						that.pager1.initDom();
						app.bettingRecords.zone.find('.content1 .pager-zone ').empty();
						app.bettingRecords.zone.find('.content1 .pager-zone ').append(that.pager1.getDom());
						that.pager1.bindEvents();
					}
				}else{
					app.noticeDialog.show({
						dataI18nText: res.code,
						buttonName: "sure",
						autoHide: true,
						timeout: 3000
					});
				};
				var html = that.createRows('1');
				$('.keno').find('.content1').find('tbody').html(html);
				app.initI18next($('.keno').find('.content1').find('tbody'));
			})
		}else{
			//历史记录
			var req = {
				"page": {
					"pageNo":this.pager2.currentPage,
					"pageSize":this.pager2.pageSize
				},
				"beginDate": $('.zone2').find('.starttime').find('input').val().split(' ')[0],
				"beginTime": $('.zone2').find('.starttime').find('input').val().split(' ')[1],
				"endDate": $('.zone2').find('.endtime').find('input').val().split(' ')[0],
				"endTime": $('.zone2').find('.endtime').find('input').val().split(' ')[1],
				"gameCode":"KN"
			}

			$('.keno').find('.content2').find('tbody').html('');
			service.betHistory(req,function(res){
				if(res.code == 0){
					that.betList = res.list;
					that.data[2] = [];
					that.pager2.totalPage = res.page.pageCount;
					$(that.zone.find('.content2').find('.summary-zone .value')[0]).text(Util.addDotToNumber(res.totalBetAmount || 0,2));
					$(that.zone.find('.content2').find('.summary-zone .value')[1]).text(Util.addDotToNumber(res.totalBetAmount || 0,2));
					$(that.zone.find('.content2').find('.summary-zone .value')[2]).text(Util.addDotToNumber(res.totalWlAmt || 0,2));
					for(var i = 0; i< res.list.length; i++){
						that.data[2].push([
							i < 10?'0'+(i + 1):(i+1),
							res.list[i].ticketId,
							res.list[i].betTime,
							'web',
							res.list[i].market+'_'+res.list[i].drawNumber+'_'+ res.list[i].betItem+'_'+res.list[i].odds,
							Util.addDotToNumber(res.list[i].betAmount,2),
							Util.addDotToNumber(res.list[i].betAmount,2),
							Util.addDotToNumber(res.list[i].wlAmt,2)
						])
					}
					if(that.pager2.totalPage != res.page.pageCount){
						that.pager2.totalPage = res.page.pageCount || 1;
						that.pager2.initDom();
						app.bettingRecords.zone.find('.content2 .pager-zone ').empty();
						app.bettingRecords.zone.find('.content2 .pager-zone ').append(that.pager2.getDom());
						that.pager2.bindEvents();
					}
				}else{
					app.noticeDialog.show({
						dataI18nText: res.code,
						buttonName: "sure",
						autoHide: true,
						timeout: 3000
					});
				};
				var html = that.createRows('2');
				$('.keno').find('.content2').find('tbody').html(html);
				app.initI18next($('.keno').find('.content2').find('tbody'));
			})
		}
	};

	BettingRecords.prototype.refreshHtml = function(){
		this.getValue();
	};

	BettingRecords.prototype.show = function () {
		this.showContentOverlay();
	};

	BettingRecords.prototype.hide = function (flag) {
		var that = this;

		this.hideContentOverlay();

		//flag用来标明是否是在是直接切换投注记录与用户反馈,
		//如果是就不用清除higher-z-index, 在bet.js中调用。
		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.bet-record').removeClass('highlight');
				$('.keno > .header').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;
			}, 300);
		} else {
			$('.bet-record').removeClass('highlight');
		}
	};

	BettingRecords.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}

		return false;
	};

	BettingRecords.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};

	BettingRecords.prototype.bindEvents = function (state) {
		var left;
		var content;
		var content1;
		var content2;
		var tabs;
		var zone2;
		var chaseTable;
		var temp;
		var that = this;
		var today = new Date();

		this.startTime.setDateFormat();
		this.endTime.setDateFormat();
		this.zone  = $('.betting-records');
		tabs       = this.zone.find('.tabs');
		stick      = this.zone.find('.stick');
		content    = this.zone.find('.cont');
		zone2      = this.zone.find('.zone2');
		content1   = this.zone.find('.content1');
		content2   = this.zone.find('.content2');
		historyTable = this.zone.find('.content2 table');

        today = today.formatDate();
        this.zone.find('.starttime input').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime input').datetimepicker({value: today + ' 23:59', lang: 'en'});

		this.zone.find('.close-icon').click(function () {
			that.hide();
		});

		tabs.delegate('li', 'click', function () {
			tabs.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();
			
			if ($(this).hasClass('tab1')) {
				left = 0;
				content1.show();
				zone2.hide();
				that.tabType = 1;
				that.getValue(1);
			} else if ($(this).hasClass('tab2')) {
				left = 120;
				content2.show();
				zone2.show();
				that.tabType = 2;
				that.getValue(2);
			}

			$(this).parents('.head-height').find('.stick').css('left', left + 'px');
		});

		historyTable.delegate('td', 'click', function () {
			temp = $(this).children('span');

			if (temp && temp.hasClass('order-detail')) {
				if (!that.chaseOrderDetail) {
					that.historyOrderDetail = new HistoryOrderDetail({id: 'history-order-detail'});
					$('body').append(that.historyOrderDetail.getDom());
					that.historyOrderDetail.bindEvents();
				}

				that.historyOrderDetail.show({'canCancel': 1});
				that.historyOrderDetail.setVal($(this).parent().index());
			} else if (temp && temp.hasClass('cancel-order')) {
				if (!that.confirmDialog) {
					that.confirmDialog = new ConfirmDialog({
						text: ''
					});

					$('body').append(that.confirmDialog.getDom());
					that.confirmDialog.bindEvents();
				}

				that.confirmDialog.show('确定撤单吗？');
			}
		});
		this.searchButton.bindEvents(that.refreshHtml.bind(that));
		this.pager1.bindEvents();
		this.pager2.bindEvents();
		this.bindOverlayEvents();
		this.zone.localize();
	};

	BettingRecords.prototype.createTable = function (type) {
		var i;
		var temp = '';
		var header = {
			'1': [
				'no', 'ticket no', 'bet time', 'market types', 'odds-pl', 'stake', 'max payout', 'bet details'
			],
			'2': [
				'no','ticket no', 'bet time', 'platform','bettings', 'stake', 'valid bet', 'win/loss'
			]
		};

		var columns = header[type];
		var width;
		if(Util.isMobile.ios() && type == '1'){
			width = '100% !important'
		}
		temp =	'<table class="overflowTable">' +
					'<thead style="width: '+width+'">' +
						'<tr>';

		for (i = 0; i < columns.length; i++) {
			temp +=			'<td data-i18n="' + columns[i] + '"></td>';
		}

		temp +=				'</tr>' +
					'</thead>' +

					'<tbody>' +
						this.createRows(type) +
					'</tbody>' +
				'</table>';

		return temp;
	};

	BettingRecords.prototype.createRows = function (type) {
		var i,j;
		var temp = '';
		var data = this.data[type];

		for (i = 0; i < data.length; i++) {
			if(i%2 == 0){
				temp +=	'<tr>';
			}else{
				temp +=	'<tr>';
			}
			for (j = 0; j < data[i].length; j++) {
				//if (type === '1' && j === 7) {
				//	temp += '<td class="bet-content" ><span data-i18n="' + this.betList[i].betType + '"></span> ： <span data-i18n="' + data[i][j] + '">' + data[i][j] + '</span></td>';
				//} else
				if (type === '2' && j === 4) {
					var list = data[i][j].split('_');
					temp += '<td>' +
								'<span data-i18n="'+list[0]+'"></span>&numsp;' +
								'<span>'+list[1]+'</span>&numsp;' +
								'<span data-i18n="'+list[2]+'">'+list[2]+'</span>&numsp;@' +
								'<span>'+list[3]+'</span>&numsp;' +
							'</td>';
				} else if(type == '1' && j === 3){
					temp += '<td><span data-i18n = "'+this.betList[i].gameCode+'"></span><span data-i18n = "'+data[i][j]+'"></span></td>';
				}else if(type == '1' && j === 7){
					if(this.betList[i].betItem){
						temp += '<td style ="text-align: left"><span data-i18n = "'+this.betList[i].market+'"></span><span>'+this.betList[i].drawNumber+'</span><br>';
						if(isNaN(this.betList[i].betItem)){
							temp += '<span data-i18n="'+this.betList[i].betItem+'">'+this.betList[i].betItem+'</span>';
						}else{
							temp += '<span>'+this.betList[i].betItem+'</span>';
						}
						temp +='<span>@'+this.betList[i].odds+'</span></td>'
					}else{
						var num = '';
						if(this.betList[i].parlayItems.length == 2)num = 'two-CY';
						if(this.betList[i].parlayItems.length == 3)num = 'three-CY';
						if(this.betList[i].parlayItems.length == 4)num = 'four-CY';
						if(this.betList[i].parlayItems.length == 5)num = 'five-CY';
						if(this.betList[i].parlayItems.length == 6)num = 'six-CY';
						temp += '<td style ="text-align: left">';
						temp += '<span data-i18n="'+num+'"></span>';
						temp +='<span> @&numsp;'+this.betList[i].odds+'</span><br>';
						for(var x = 0; x < this.betList[i].parlayItems.length; x ++){
							if(isNaN(this.betList[i].parlayItems[x].betItem[0])){
								temp += '<span data-i18n="'+this.betList[i].parlayItems[x].betItem[0]+'"></span>';
							}else{
								temp += '<span></span>';
							}
							temp +=' @ ';
							temp += '<span data-i18n = "'+this.betList[i].parlayItems[x].market+'"></span>';
							temp += '('+this.betList[i].parlayItems[x].drawNumber+')';
							temp +='<br>'
						}
						temp +='</td>'
					}

				}else if (type === '2' && j === 7) {
					if(data[i][j] > 0){
						temp += '<td style="color: red">' + data[i][j] + '</td>';
					}else{
						temp += '<td>' + data[i][j] + '</td>';
					}
				}else{
					temp += '<td>' + data[i][j] + '</td>';
				}
			}

			temp += '</tr>';
		}

		return temp;
	};

	window.BettingRecords = BettingRecords;
}());

