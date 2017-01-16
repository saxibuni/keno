/*
 *  bet页面 入口函数
 */

(function () {
	'use strict';

	function app () {
		this.money  = '192,256,456';
		this.id     = 'keno-page';
		this.zone   = $('.keno');
		this.header = this.zone.children('.header');
		this.main   = this.zone.children('.main');
		this.languageType = Util.getQueryString("language")  || 'zh';
		this.dic = {};
		this.gameHtmlArr = [];
		this.betDialogDeleteLock = false;

		this.createOverlay();
		this.createPlate();
		this.init();
		this.bindEvents();
		this.showNoticeDialog();
		this.createBetDialog();
		this.initI18next();


        if (Util.isMobile.any() && window.FastClick) {
            FastClick.attach(document.body);
        }
	}

	app.prototype.init = function () {
		var el = $('.main')[0];
		var sortable = new Sortable(el, {
			delay: 0,
			animation: 150,
		    ghostClass: "sortable-ghost",
		    chosenClass: "sortable-chosen",
		    draggable: ".plate",
		    handle: ".landmark"
		});
	};

	app.prototype.createPlate = function () {
		var i;
		var temp;
		var arr = [
			{
				id: 'plate_BJ',
				location: 'beijing',
				market:'BJ'
			},
			{
				id: 'plate_CA',
				location: 'canada',
				market:'CA'
			},
			{
				id: 'plate_AU',
				location: 'australia',
				market:'AU'
			},
			{
				id: 'plate_SK',
				location: 'slovakia',
				market:'SK'
			},
			{
				id: 'plate_MT',
				location: 'malta',
				market:'MT'
			},
			{
				id: 'plate_WCA',
				location: 'west-canada',
				market:'WCA'
			}
		];
		this.gameHtmlArr = arr;
		for(var i = 0; i < arr.length; i++){
			this[arr[i].id] = new Plate(arr[i]);
			temp = this[arr[i].id].getDom();
			this.main.append(temp);
			this[arr[i].id].bindEvents();
		}

		this.main.append('<div class="clear"></div>');
	};

	app.prototype.initI18next = function (elem) {
		var that = this;
		if (!this.i18n) {
			this.i18n = i18next.use(i18nextXHRBackend).init({
				"lngs": ["zh","en"],
				"fallbackLng": ["zh","en"],
				"backend": {
					"loadPath": "../locales/{{lng}}/{{ns}}.json"
				}
		    }, function (err, t) {
		    	that.i18n.changeLanguage(that.languageType);
				jqueryI18next.init(that.i18n, $);
				elem = elem || $('body');
				elem.localize();
			});
		}else{
		    that.i18n.changeLanguage(that.languageType);
			jqueryI18next.init(that.i18n, $);
			elem = elem || $('body');
			elem.localize();
		}
	};

	app.prototype.showComfirmDialog = function () {
		this.confirmDialog = new ConfirmDialog({text: '你确定要修改吗？'});
		$('body').append(this.confirmDialog.getDom());
		this.confirmDialog.bindEvents();
		this.confirmDialog.show();
	};

	app.prototype.showNoticeDialog = function () {
		this.noticeDialog = new NoticeDialog({id: 'app-notice-dialog'});
		$('body').append(this.noticeDialog.getDom());
		this.noticeDialog.bindEvents();

        var width  = parseInt(screen.width);
        var height = parseInt(screen.height);
        var max    = Math.max(width, height);
        var min    = Math.min(width, height);

        if (Util.isMobile.any() && max >= 1024 && min < 1024) {
			this.noticeDialog.show({
				text: '检测到您的设备尺寸较小， 请横屏显示!',
				buttonName: '确定'
			});
        }
	};

	app.prototype.createBetDialog = function () {
		this.betDialog = new BetDialog({id: 'app-bet-dialog'});
		$('body').append(this.betDialog.getDom());
		this.betDialog.bindEvents();
	};
	app.prototype.createOverlay = function () {
		var that = this;
		this.overlay = new IMOverlay({position: $('.bet')});
	};
	//set dot
	app.prototype.setDot = function(type,num){
		var dom = this.zone.find('.header');
		//开奖结果
			if(type == 'results'){
				dom.find('.draw-results').find('.dot').show();
				var dot = dom.find('.draw-results').find('.dot span').text() || 0;
				dom.find('.draw-results').find('.dot span').text(parseInt(num) + parseInt(dot))
			}else{
				dom.find('.bet-record').find('.dot').show();
				var dot = dom.find('.bet-record').find('.dot span').text() || 0;
				dom.find('.bet-record').find('.dot span').text(parseInt(dot) + parseInt(num))
			}
	};
	app.prototype.setMoney = function(money){
		this.zone.find('.money').text(Util.addDotToNumber(money),2);
	}
	app.prototype.anyoneHasTimeout = function () {
		return 	this.userFeedback && this.userFeedback.hasTimeout() ||
				this.userGuide && this.userGuide.hasTimeout() ||
				this.bettingRecords && this.bettingRecords.hasTimeout() ||
				this.drawResults && this.drawResults.hasTimeout();
	};

	app.prototype.anyoneOpen = function () {
		if (this.userFeedback && this.userFeedback.isOpen()) {
			return this.userFeedback;
		}

		if (this.userGuide && this.userGuide.isOpen()) {
			return this.userGuide;
		}

		if (this.bettingRecords && this.bettingRecords.isOpen()) {
			return this.bettingRecords;
		}

		if (this.drawResults && this.drawResults.isOpen()) {
			return this.drawResults;
		}
	};

	app.prototype.bindEvents = function () {
		var header    = this.header;
		var logoarr   = header.find('.logo-arr');
		var biglogo   = header.find('.big-logo');
		var that      = this;
		var obj;
		var tar;
		var data;
		var dict = {
			'bettingRecords'  : {son: 'bettingRecords', father: BettingRecords},
			'userFeedback'    : {son: 'userFeedback',   father: UserFeedback},
			'userGuide'       : {son: 'userGuide',      father: UserGuide},
			'drawResults'     : {son: 'drawResults',    father: DrawResults}
		};

		header.find('.top-item').click(function () {
			if (that.anyoneHasTimeout()) {
				return;
			}

			obj  = that.anyoneOpen();
			tar  = $(this).attr('data-value');
			data = dict[tar];

			/* 关闭已经打开的
			*/
			if (obj) {                                     //有人打开了
				if (!(obj instanceof data.father)) {       //是别人打开了
					obj.hide(true);
				} else {                                   //是自己打开了, 关上就返回
					obj.hide();
					return;
				}
			}

			/* 打开被点击
			*/
			if (!that[data.son]) {                //如果这个对象还没有new过
				that[data.son] = new (data.father)({
					id: data.son
				});
				$('.keno').append(that[data.son].getDom());
				that[data.son].bindEvents();
			}
			if(data.son != 'userFeedback' && data.son != 'userGuide'){
				that[data.son].getValue();
			}
			$(this).children('.dot').hide();
			$(this).children('.dot').children().text('0');
			that[data.son].show();
			$(this).addClass('highlight');
			$('.keno > .header').addClass('higher-z-index');
		});

		header.find('.secret').click(function () {
			var temp;
			var val;
			if ($(this).children('a').attr('data-i18n') === 'hide balance') {
				temp = 'show balance';
				header.find('.money').text('-----');
				if(that.languageType === 'en'){
					val = 'show'
				}else{
					val = '显示'
				}
			} else {
				temp = 'hide balance';
				header.find('.money').text(that.money);
				if(that.languageType === 'en'){
					val = 'hide'
				}else{
					val = '隐藏'
				}
			}

			$(this).children('a').attr('data-i18n', temp);
			$(this).children('a').text(val);
		});

		header.find('.lang').click(function () {
			var i18n;
			var lang = $(this).attr('data-value');

			if (lang === 'en') {
				that.languageType = 'en';
				$('.plate').addClass('english');
			} else {
				that.languageType = 'zh';
				$('.plate').removeClass('english');
			}

			that.initI18next();
			if (that.userGuide) {
				if (that.userGuide.isOpen())
					that.userGuide.refresh();
			}
		});

		if (Util.isMobile.any()) {
			logoarr.click(function () {
				biglogo.toggle();
			});
		} else {
			logoarr.mouseover(function () {
				biglogo.show();
			}).mouseout(function () {
				biglogo.hide();
			});
		}
	};

	window.app = new app();
})();