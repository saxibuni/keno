/*
 *  投注记录 下拉界面 DrawResults.js
 *  继承自: IMDialog
 */
(function () {
	var req = {};
	function DrawResults (opt,num) {
		IMDialog.call(this, (opt || {}));

		this.data = [];
		this.tabType = 1;
		this.el = this.initDom();
		req = {
			"gameCode":"KN",
			"market":"BJ",
			"page":{
				"pageNo":this.pager1.currentPage,
				"pageSize":this.pager1.pageSize
			}
		};
	}
	DrawResults.prototype = new IMDialog();

	DrawResults.prototype.initDom = function () {
		var temp;

		this.searchButton = new IMButton({
			text: 'search',
			className: 'search',
			id:'searchReportResult'
		});

		this.exportButton = new IMButton({
			text: 'export',
			className: 'export',
			id:'export'
		});

		this.pager1 = new IMPager({id: 'draw-results-xzqk-pager1'});
		this.tip    = new IMTip();

		temp = 	'<div class="draw-results-dialog">' +
			'<div class="dialog-wrapper">' +
			'<div class="row">' +
			'<div class="head-height">' +
			'<ul class="tabs">' +
			'<li class="tab1 active"><span data-i18n="draw results"></span></li>' +
			'</ul>' +

			'<div class="stick"></div>' +
			'</div>'+

			'<div class="head-height" style="margin-left:2%">' +
			'<div class="zone2">'+this.createSelectDom()
			+'<span data-i18n="bet-issue"></span>'+'<input type="text" name="issueVal"  class="issueVal"/>'+
			this.createDatetimePicker() +
			this.searchButton.getDom() +
			'</div>' +
			'</div>' +

			'<div class="head-height" style="float: right;">' +
			'<div class="zone3">' +
			this.exportButton.getDom() +
			'<span class="close-icon">✕</span>' +
			'</div>' +
			'</div>' +

			'<div class="clear"></div>' +
			'</div>' +

			'<div class="cont content1">' +
			'<div class="table-zone">' +
			this.createTable() +
			'</div>' +
			'<div class="pager-zone">' +
			this.pager1.getDom() +
			'</div>' +
			'</div>' +
			this.tip.getDom()+
			'</div>'  +
			'</div>' +

			'<div class="overlay overlay1" style="top: .7rem"></div>';
		return temp;

	};

	DrawResults.prototype.createDatetimePicker = function () {
		this.betDate    = new IMDatetimepicker({className: 'betTime', text:'查询日期',i18n:'betDate'});
		return this.betDate.getDom();
	};


	DrawResults.prototype.getDom = function () {
		return this.el;
	};

	DrawResults.prototype.getValue = function(){
		var that = this;

		service.reportResult(req,function(res){
			if(res.code == 0){
				that.betList = res.list;
				that.data = [];
				for(var i = 0; i< res.list.length; i++){
					res.list[i].officialResultTime = res.list[i].officialResultTime || "-";
					that.data.push([
						res.list[i].number,
						res.list[i].time,
						res.list[i].officialResultTime,
						res.list[i].result.replace("[","").replace("]","").split(",")
					])
				}

				if(that.pager1.totalPage !=  res.page.pageCount){
					that.pager1.totalPage =  res.page.pageCount || 1;
					that.pager1.initDom();
					app.drawResults.zone.find('.content1 .pager-zone ').empty();
					app.drawResults.zone.find('.content1 .pager-zone ').append(that.pager1.getDom());
					that.pager1.bindEvents();
				}

			};
			var html = that.createRows();
			$('.keno').find('.content1').find('tbody').html(html);
			app.initI18next($('.keno').find('.content1').find('tbody'))
		})
	};

	DrawResults.prototype.refreshHtml = function(){
		this.getValue();
	};

	DrawResults.prototype.show = function () {
		this.showContentOverlay();
	};

	DrawResults.prototype.hide = function (flag) {
		var that = this;

		this.hideContentOverlay();

		//flag用来标明是否是在是直接切换投注记录与用户反馈,
		//如果是就不用清除higher-z-index, 在bet.js中调用。
		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.draw-results').removeClass('highlight');
				$('.keno > .header').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;
			}, 300);
		} else {
			$('.draw-results').removeClass('highlight');
		}
	};

	DrawResults.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}
		return false;
	};

	DrawResults.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};

	DrawResults.prototype.createSelectDom = function(){
		var el = '';
		el+='<div class="areaSelect">'
			+'<p></p>'
			+'<ul style="display: none;">'
			+'<li data-i18n="BJ"></li>'
			+'<li data-i18n="CA"></li>'
			+'<li data-i18n="AU"></li>'
			+'<li data-i18n="SK"></li>'
			+'<li data-i18n="MT"></li>'
			+'<li data-i18n="WCA"></li>'
			+'</ul>'
			+'</div>'
		return el;
	}
	DrawResults.prototype.bindEvents = function (state) {
		var left;
		var content;
		var content1;
		var tabs;
		var zone2;
		var temp;
		var that = this;
		var today = new Date();

		this.zone  = $('.draw-results-dialog');

		this.betDate.disableTime();

		tabs       = this.zone.find('.tabs');
		stick      = this.zone.find('.stick');
		content    = this.zone.find('.cont');
		zone2      = this.zone.find('.zone2');
		content1   = this.zone.find('.content1');

		zone2.show();
		today = today.formatDate();

		this.zone.find('.betTime input').datetimepicker({value: today, lang: 'en'});

		this.zone.find('.close-icon').click(function () {
			that.hide();
		});

		var areaSlect = this.zone.find('.areaSelect');
		//禁用时间控件
		that.zone.find(".issueVal").bind('input propertychange',function(){
			var inputVal = $(this).val().replace(/[^\d]/g,"");
			$(this).val(inputVal);
			if($(this).val().length > 0)that.zone.find(".betTime").find("input").attr("disabled","true");
			else that.zone.find(".betTime").find("input").removeAttr("disabled");
		});
		//搜索
		$("#searchReportResult").click(function(){
			req = {
				"gameCode": "KN",
				"market": areaSlect.find("p").attr("data-i18n"),
				"drawDate":  that.zone.find(".betTime").find("input").val(),
				"drawNumber": that.zone.find(".issueVal").val(),
				"page": {
					"pageNo": that.pager1.currentPage,
					"pageSize": that.pager1.pageSize
				}
			};
			that.getValue();

		})
		//select事件 空白处
		$(document).click(function(){
			if(window.event.target.parentElement.className != "areaSelect"){
				areaSlect.find('ul').hide();
			}else{
				areaSlect.find('ul').toggle();
			}
		})

		if(areaSlect.find('p').text() == ''){
			areaSlect.find('p').attr("data-i18n","BJ");
		}
		areaSlect.find('ul').delegate('li','click',function(){
			areaSlect.find('p').attr("data-i18n",$(this).attr("data-i18n"));
			app.initI18next(areaSlect.find('p'));
		});


		this.pager1.bindEvents();
		this.bindOverlayEvents();
		this.zone.localize();
	};

	DrawResults.prototype.createTable = function () {
		var temp = '';
		var header = [
			['bet-issue', 'betDate','officialDate'],
			['totalNum','big','odd','up','o/t/e','5E']
		]

		var columns1 = header[0];
		var columns2 = header[1];


		temp =	'<table>' + '<thead>' + '<tr>';

		for (var i = 0; i < columns1.length; i++) {
			temp +=	'<td data-i18n="' + columns1[i] + '"></td>';
		}
		for(var i=1;i<21;i++){
			temp +=	'<td>'+i+'</td>';
		}
		for (var i = 0; i < columns2.length; i++) {
			temp +=	'<td data-i18n="' + columns2[i] + '"></td>';
		}

		temp +=	'</tr>' + '</thead>' + '<tbody>' + this.createRows() + '</tbody>' + '</table>';
		return temp;
	};

	DrawResults.prototype.createRows = function () {
		var temp = '';
		var data = this.data;
		var analyArr = ['getPB','getBS','getOE','getUD','getOTE','get5E'];

		for (i = 0; i < data.length; i++) {
			temp +=	'<tr>';

			for (j = 0; j < data[i].length; j++) {
				if(typeof data[i][j] != "object"){
					temp += '<td>' + data[i][j] + '</td>';
				}else{
					for(var k = 0;k<data[i][j].length;k++){
						temp += '<td>' + data[i][j][k] + '</td>';
					}
					for(var k = 0;k<analyArr.length;k++){
						var funName = analyArr[k];
						result = AnalysisObj[funName](data[i][j]);
						if(typeof result == "number"){
							temp +=	'<td>'+result+'</td>';
						}else{
							temp +=	'<td data-i18n="' + result + '"></td>';
						}
					}
				}
			}
			temp += '</tr>';
		}
		return temp;
	};

	window.DrawResults = DrawResults;
}());

