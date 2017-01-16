(function () {

	var CHUNKWIDTH = 5.26;

	function Plate (opt) {
		this.id   	= opt.id;
		this.market = opt.id.split('_')[1];
		this.opt  	= opt;
		this.isPC 	= !Util.isMobile.any();
		this.languageType = Util.getQueryString("language")  || 'zh';
		this.data   = [];
		this.el   	= this.initDom();
		this.routePageData = this.initRoutePageData();
	}

	Plate.prototype.initRoutePageData = function() {
		var anasysisTypes = ['BS','OE','OTE','UD','PB','5E'];
		var routePageData = {};
		for(var i = 0; i < anasysisTypes.length; i++){
			routePageData[anasysisTypes[i]] = {
				pageIndex: 0,
				dataLenght:0,
				tabIndex: i
			};	
		};
		return routePageData;
	}

	Plate.prototype.getDom = function () {
		return this.el;
	};

	Plate.prototype.initDom = function () {
		var temp;
		var imageMap = {
			'beijing': {
				flag: '../img/china-flag.png',
				landmark: '../img/china-landmark.png'
			},
			'canada': {
				flag: '../img/canada-flag.png',
				landmark: '../img/canada-landmark.png'
			},
			'australia': {
				flag: '../img/australia-flag.png',
				landmark: '../img/australia-landmark.png'
			},
			'slovakia': {
				flag: '../img/slovakia-flag.png',
				landmark: '../img/slovakia-landmark.png'
			},
			'malta': {
				flag: '../img/malta-flag.png',
				landmark: '../img/malta-landmark.png'
			},
			'west-canada': {
				flag: '../img/canada-flag.png',
				landmark: '../img/canada-landmark.png'
			}
		};

		this.countdownProgress = new CountdownProgress({
			id: this.id + '-progress',
			totalTime: this.opt.totalTime
		});

		this.beanLoader = new BeanLoader({
			id: this.id + '-beanLoader'
		});

		this.drawingAnimation = new DrawingAnimation({
			id: this.id + '-drawing-animation'
		});

		temp = 	'<div class="plate' + ((this.languageType == "en") ? " english" : "") + '" id="' + this.id + '">' +
					'<div class="plate-head-zone">' +
						'<div class="landmark ' + this.opt.location + '">' +
							'<div class="nation" data-i18n="' + this.opt.location + '">' +
							'</div>' +
						'</div>' +

						'<div class="head-info">' +
							'<div class="flag-zone">' +
								'<div class="flag-outer">' +
									'<img class="flag-outer" src="' + imageMap[this.opt.location].flag + '"></img>' +
								'</div>' +
							'</div>' +

							'<div class="time">' +
								'<div class="draw-issue">' +
									'<div class="draw-status">' +
										'<span data-i18n="startBetting"></span>' +
									'</div>' +

									'<div class="issue">' +
										'<span class ="draw-number">NO.</span>' +
									'</div>' +
								'</div>' +

								'<div class="count-down"></div>' +
							'</div>' +

							'<div class="category">' +
								'<span class="playing-item qw selected" data-i18n="special rule"></span>' +
								'<span class="playing-item rx" data-i18n="selective rule"></span>' +
							'</div>' +
						'</div>' +
						this.countdownProgress.getDom() +
					'</div>' +

					'<div class="plate-play-zone">' +
						this.createQwPlate() +
						this.createRxPlate() +
						this.beanLoader.getDom() +
					'</div>' +

					'<div class="plate-info-zone">' +
						this.createDrawRoute() +
						this.createDrawDetail() +
						this.drawingAnimation.getDom() +
					'</div>' +
					this.createMarketCloseOverlay() +
					this.createRouteMapTip() +
				'</div>';

		return temp;
	};

	Plate.prototype.createQwOdds = function(betType,betItem){
		var odds = '';
		if(Global.betOdds.length == 0) return '';
		var betOdds = Global.betOdds.filter(function(item,index){
			return item.betType == betType;
		})[0];
		odds = betOdds.items.filter(function(item,index){
			return item.betItem == betItem;
		})[0].odds;
		return odds;
	};

	Plate.prototype.createQwPlate = function () {
		var i;
		var j;
		var that = this;
		var width;
		var arr = [
			[
				{text: 'big', value: '1.95',betItem:'Big',betType: "BS"},
				{text: 'exScore', value: '1.95',betItem:'Tie',betType: "BS"},
				{text: 'small', value: '1.95',betItem:'Small',betType: "BS"}
			],
			[
				{text: 'up', value: '1.95',betItem:'Up',betType: "UD"},
				{text: 'tie-up-down', value: '1.95',betItem:'Tie',betType: "UD"},
				{text: 'down', value: '1.95',betItem:'Down',betType: "UD"}
			],
			[
				{text: 'odds', value: '1.95',betItem:'Odds',betType:'OES'},
				{text: 'tie-odds-evens', value: '1.95',betItem:'Tie',betType:'OES'},
				{text: 'evens', value: '1.95',betItem:'Evens',betType:'OES'}
			],
			[
				{text: 'odd', value: '1.95',betItem:'Odd',betType:'OE'},
				{text: 'even', value: '1.95',betItem:'Even',betType:'OE'}
			],
			[
				{text: 'big odd', value: '1.95',betItem:'BigOdd',betType:'BSOE'},
				{text: 'small odd', value: '1.95',betItem:'SmallOdd',betType:'BSOE'},
				{text: 'big even', value: '1.95',betItem:'BigEven',betType:'BSOE'},
				{text: 'small even', value: '1.95',betItem:'SmallEven',betType:'BSOE'}
			],
			[
				{text: 'gold', value: '1.95',betItem:'Gold',betType:"5E"},
				{text: 'wood', value: '1.95',betItem:'Wood',betType:"5E"},
				{text: 'water', value: '1.95',betItem:'Water',betType:"5E"},
				{text: 'fire', value: '1.95',betItem:'Fire',betType:"5E"},
				{text: 'earth', value: '1.95',betItem:'Earth',betType:"5E"}
			]
		];
		for(var x = 0; x < arr.length; x++){
			for(var y = 0;y < arr[x].length; y++){
				arr[x][y].value = that.createQwOdds(arr[x][y].betType,arr[x][y].betItem)
			}
		}
		if(Global.betOdds.length == 0){
			var temp = 	'<div class="qw-plate">';
		}else{
			var temp = 	'';
		}
		for (i = 0; i < arr.length; i++) {
			temp += 	'<div class="row">';

			for (j = 0; j < arr[i].length; j++) {
				width = Number(100/arr[i].length);

				temp += 	'<div class="column' + (this.isPC?' hover-class':'') + '" style="width: ' + width + '%">' +
								'<div class="text" data-i18n="' +  arr[i][j].text + '" betType = "'+arr[i][j].betType+'" betItem = "'+arr[i][j].betItem+'"></div>' +

								'<div class="value">' +
								'×' + arr[i][j].value +
								'</div>';
				if(arr[i][j].betType == 'BS' && arr[i][j].betItem == 'Tie'){
					temp += '<div class="coverDom-tie"></div>'
				}else if(arr[i][j].betType == '5E'){
					temp += '<div class="coverDom-5E"></div>'
				}else if(arr[i][j].betType == 'UD'){
					if (arr[i][j].betItem == 'Tie') {
						temp += '<div class="coverDom-UDH"></div>'
					}else{
						temp += '<div class="coverDom-UD"></div>'
					}
				}else if(arr[i][j].betType == 'OES'){
					temp += '<div class="coverDom-OES"></div>'
				}
				temp += '</div>'
			}

			temp +=		'</div>'
		}

		temp +=		'</div>';

		return temp;
	};

	Plate.prototype.createRxPlate = function () {
		var i;
		var j;
		var count = 0;
		var temp = 	'<div class="rx-plate">';

		for (i = 1; i <= 80; i++) {
			if (i%12 === 1) {
				temp += '<div class="row">';

				temp += '<div class="column">'+
							'<div class="ball" ball="'+i+'">' +
								i +
							'</div>' +
						'</div>';
			} else if (i%12 === 0 || i === 80) {
				temp += '<div class="column">'+
							'<div class="ball"  ball="'+i+'">' +
								i +
							'</div>' +
						'</div>' +
					'</div>';
			} else {
				temp += '<div class="column">'+
							'<div class="ball"  ball="'+i+'">' +
								i +
							'</div>' +
						'</div>';
			}
		}

		temp += 	'</div>';

		return temp;
	};

	Plate.prototype.createMarketCloseOverlay = function() {
		var temp = '<div class="market-close-overlay">' +
			'</div>';
		return temp;
	}

	Plate.prototype.createRouteMapTip = function() {
		var temp = '<div class="routeTip">' +
						'<span class="numberTip"></span>' +
						'<span class="valueTip"></span>' +
					'</div>';
		return temp;
	}

	Plate.prototype.setRouteMapTip = function(value, number, event){
		if (value) {
			var routeTip = this.zone.find('.routeTip');
			routeTip.find('.numberTip').text(number);
			routeTip.find('.valueTip').text('[' + value + ']');
			routeTip.css({
				left: event.clientX + 2,
				top: event.clientY + 2
			});
			routeTip.show();			
		}
	}

	Plate.prototype.createAnimation1 = function () {
		var temp = 	'<div class="animation-overlay">' +
						'<div class="animation-wrapper">' +
							'<img src="../img/face-open.png" />' +
							'<div class="beans">' +
								'<div class="beans-wrapper">' +
									'<div class="bean"></div>' +
									'<div class="bean"></div>' +
									'<div class="bean"></div>' +
									'<div class="bean"></div>' +
									'<div class="bean"></div>' +
								'</div>' +
							'</div>' +

							'<div class="announcement">' +
								'本期选号已经结束，已进入下一期投注！本期开奖号码随后公布！' +
							'</div>' +
						'</div>' +
					'</div>';

		return temp;
	};

	Plate.prototype.startAnimation1 = function () {
		var face      = this.zone.find('.animation-wrapper img');
		var beans     = this.zone.find('.beans');
		var firstBean = beans.find('.bean:first-child');
		var left      = parseInt(beans.css('left'));
		var count     = 300;
		var count2    = 600;
		var that      = this;

		var interval1 = setInterval(function () {
			if (count%2 === 0) {
				face.attr('src', '../img/face-open.png');
			} else {
				face.attr('src', '../img/face-close.png');
			}

			count --;

			if (count === 0) {
				clearInterval(interval1);
				clearInterval(interval2);
				return;
			}
		}, 300);

		var interval2 = setInterval(function () {
			if (count%2 === 0) {
				beans.css('left', left - 10 + 'px');
			} else {
				beans.css('left', left + 'px');
			}
		}, 100);
	};

	Plate.prototype.createDrawRoute = function () {
		var temp =	'<div class="draw-route">' +
			'<div class="wrapper">' +
			'<div class="left-zone">' +
			'<ul class="status">' +
			'<li class="selected"><span data-i18n="b/s"></span></li>' +
			'<li><span data-i18n="o/e"></span></li>' +
			'<li><span data-i18n="o/t/e"></span></li>' +
			'<li><span data-i18n="u/d"></span></li>' +
			'<li><span data-i18n="pb"></span></li>' +
			'<li><span data-i18n="5e"></span></li>' +
			'<div class="circle" data-i18n="b/s"></div>' +
			'</ul>' +

			'<div class="map">' +
			this.createRouteTable() +
			'</div>' +
			'</div>' +

			'<div class="draw-route-naver">' +
			'<div class="arrow">' +
			'<img src="../img/left-arrow.png" height=15 width=15/>' +
			'</div>' +
			'<div class="text" data-i18n="draw detail"></div>' +
			'</div>' +
			'</div>' +
			'</div>';

		return temp;
	};

	Plate.prototype.createRouteTable = function () {
		var i;
		var j = 0;
		var temp = "";
		for(var x = 0;x < 6;x++){
			var tabInx = "table_"+x;
			temp += '<div class="table '+tabInx+'">' +
				'<div class="table_left" nav-index = "' + x + '"></div>'+
				'<div class="tbody">';

			for (i = 0; i < 5; i++) {
				temp += 		'<div class="tr" tab-tr = "'+i+'">';

				for (j = 0; j < 20; j++) {
					temp +=			'<div class="td" tab-td = "'+j+'"><span></span></div>';
				}

				temp += 		'</div>';
			}

			temp +=			'</div>' +
				'<div class="table_right" nav-index = "' + x + '"></div>'+
				'</div>';
		}


		return temp;
	};

	Plate.prototype.createDrawDetail = function () {
		var temp = 	'<div class="draw-detail">' +
			'<div class="wrapper">' +
			'<div class="draw-detail-naver">' +
			'<div class="arrow">' +
			'<img src="../img/left-arrow.png" height=15 width=15/>' +
			'</div>' +
			'<div class="text" data-i18n="draw map"></div>' +
			'</div>' +

			'<div class="timeline">' +
			'<div class="play">' +
			'<div class="prev">' +
			'<img src="../img/timeline-left.png"/>' +
			'</div>' +

			'<div class="next">' +
			'<img src="../img/timeline-right.png"/>' +
			'</div>' +
			'</div>' +

			'<div class="timeline-slider">' +
			'<div class="chunks-line" style="left: 0rem">'+
					this.addDetailChunk() +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>';

		return temp;
	};

	//更新
	Plate.prototype.setDetailChunk = function(){
		var temp = this.addDetailChunk();
		this.zone.find('.chunks-line').html(temp);
		app.initI18next(this.zone);
		this.resetChunksLineWidth();
	};

	//初始化
	Plate.prototype.addDetailChunk = function () {
		this.data.reverse();
		var temp = '';
		var list = this.data;
		var Chunklist = [];
		var num = [];
		var y = 0;
		for(var i = 0; i < Math.ceil(list.length/4); i++){
			for(var j = 0; j < 4; j++){
				if(i == Math.ceil(list.length/4) - 1 && list.length%4 == j && j != 0){
					break;
				}
				num.push(list[y]);
				y++;
			}
			Chunklist.push(num);
			num = [];
		}
		for(var i = Chunklist.length-1 ; i >=0; i--){
			temp +=	'<div class="chunk">';
			for(var j = 0; j < Chunklist[i].length; j++){
				if(i == Chunklist.length - 1 &&  Chunklist[i].length != 4){
					if(Chunklist[i].length == 1){
						temp += '<div class="chunk-up">';
						temp += this.createDetailItem('left-item',Chunklist[i][0]);
						temp +='<div class="clear"></div>';
						temp += '</div>'
					}
					if(Chunklist[i].length == 2){
						temp += '<div class="chunk-up">';
						temp += this.createDetailItem('left-item',Chunklist[i][1]);
						temp += this.createDetailItem('left-item',Chunklist[i][0]);
						temp +='<div class="clear"></div>';
						temp += '</div>'
					}
					if(Chunklist[i].length == 3){
						temp += '<div class="chunk-up">';
						temp += this.createDetailItem('left-item',Chunklist[i][1]);
						temp += this.createDetailItem('left-item',Chunklist[i][0]);
						temp +='<div class="clear"></div>';
						temp += '</div>';
						temp += '<div class="chunk-up">';
						temp += this.createDetailItem('left-item',Chunklist[i][2]);
						temp +='<div class="clear"></div>';
						temp += '</div>'
					}
					break;
				}
				if(j == 0){
					temp += '<div class="chunk-up">';
					temp += this.createDetailItem('left-item',Chunklist[i][j]);
				}
				if(j == 1){
					temp += this.createDetailItem('right-item',Chunklist[i][j]);
					temp +='<div class="clear"></div>';
					temp += '</div>'
				}
				if(j == 2){
					temp += '<div class="chunk-up">';
					temp += this.createDetailItem('left-item',Chunklist[i][j])
				}
				if(j == 3){
					temp += this.createDetailItem('right-item',Chunklist[i][j])
					temp +='<div class="clear"></div>';
					temp += '</div>'
				}
			}

			temp += '</div>'
		}

		return temp;
	};

	Plate.prototype.setValue = function(anasysisType,index){
		var that = this;
		if(index == undefined) index = 0;
		var tableIdx=".table_" + index;
		var dom = $('#' + this.id).find('.map').find(tableIdx).find(".tbody");
		var tr;
		var td;
		var repeatVal;
		var num = AnalysisObj.getRouterMap(this.data, anasysisType);
		var y = 0;
		var cute;

		for(var i = 0; i< num.length; i++){
			for(var j = 0; j < num[i].length; j++){
				if (i > dom.find('[tab-tr='+j+']').find('[tab-td]').length - 1) {
					//格子不够 动态再加一个
					cute = '<div class="td" tab-td = "'+ i +'"><span></span></div>';
					dom.find('[tab-tr='+j+']').append(cute);
				}
				if(typeof num[i][j].value == 'number'){
					dom.find('[tab-tr='+j+']')
						.find('[tab-td='+i+']')
						.children()
						.text(num[i][j].value)
						.attr('number',num[i][j].number);
				}else{
					dom.find('[tab-tr='+j+']')
						.find('[tab-td='+i+']')
						.children()
						.attr('data-i18n',num[i][j].value)
						.attr('number',num[i][j].number);
				}
				that.setColorValue(dom.find('[tab-tr='+j+']').find('[tab-td='+i+']'),num[i][j].value,anasysisType);
			}
		}
		if (num.length > 20) {
			dom[0].style.left = (0.264 - (num.length - 20) * 0.2376) + "rem";
		}
		else{
			dom[0].style.left = 0.264 + 'rem';
		}
		dom[0].style.right = 0.264 + 'rem';

		this.routePageData[anasysisType].pageIndex = 0;
		this.routePageData[anasysisType].dataLenght = num.length;
	};

	Plate.prototype.setColorValue = function(dom,val,anasysisType){
		if(anasysisType != 'PB'){
			var color = '';
			var colorList = [
				['上','up','router_U','大','big','router_B','奇','odds','router_Odd','火','fire','router_Fi','单','odd','router_Single'],
				['下','down','router_D','小','small','router_S','偶','evens','router_Eevn','双','even','router_Double'],
				['和','tie','木','wood'],
				['金','gold','router_Go'],
				['水','water','router_Wa'],
				['土','earth','router_Ea']
			];
			if(colorList[0].indexOf(val) >= 0)color = '#cf0000';
			if(colorList[1].indexOf(val) >= 0)color = '#585858';
			if(colorList[2].indexOf(val) >= 0)color = '#12b70f';
			if(colorList[3].indexOf(val) >= 0)color = '#f7941d';
			if(colorList[4].indexOf(val) >= 0)color = '#0000ff';
			if(colorList[5].indexOf(val) >= 0)color = '#603913';
			dom.css('color',color);
		}else{
			dom.children().addClass('TabScale')
		}
	};
	
	Plate.prototype.toggleRoute = function(index){
		var dom = $('#' +this.id).find('.map');
		 dom.find(".table").hide();

		if(index == undefined) index = 0;
		var tableIdx=".table_"+index;
		dom.find(tableIdx).show();
	};

	Plate.prototype.resetChunksLineWidth = function () {
		var chunksLine = this.zone.find('.chunks-line');
		var len   = chunksLine.find('.chunk').length;
		var width = CHUNKWIDTH;
		chunksLine.css({
			'width': len*width + 'rem',
			'left': (0 - (len - 1) * width) + 'rem'
		});
		chunksLine.find('.chunk').css('width', width + 'rem');

		this.startleft = 0 - (len - 1) * width;
	};

	Plate.prototype.createDetailItem = function (className,data) {
		var i;
		var j;
		var result = data.result.replace(/[\[\]]/g,'').split(',');
		var temp = '<div class="item ' + className + '">' +
			'<div class="item-wrapper">' +
			'<div class="info">' +
			'<span class="text">NO.</span>' +
			'<span class="issue">'+data.number+'</span>' +
			'<span class="text" data-i18n="total"></span>' +
			'<span class="total">'+AnalysisObj.getPB(result)+'</span>' +
			'</div>' +

			'<div class="table">' +
			'<div class="tbody">';

		for (i = 0; i < 2; i++) {
			temp +=					'<div class="row">';

			for (j = 0; j < 13; j++) {
				if (i === 0) {
					if (j === 10) {
						temp +=			'<div class="td value1"><span data-i18n="'+AnalysisObj.getBS(result)+'" number = "'+data.number+'">'+AnalysisObj.getBS(result)+'</span></div>';
					} else if (j === 11) {
						temp +=			'<div class="td value2"><span data-i18n="'+AnalysisObj.getUD(result)+'" number = "'+data.number+'">'+AnalysisObj.getUD(result)+'</span></div>';
					} else if (j === 12) {
						temp +=			'<div class="td value3"><span data-i18n="'+AnalysisObj.getOTE(result)+'" number = "'+data.number+'">'+AnalysisObj.getOTE(result)+'</span></div>';
					} else {
						temp +=			'<div class="td"><span number = "'+data.number+'">'+result[j]+'</span></div>';
					}
				} else {
					if (j === 10) {
						temp +=			'<div class="td value4"><span data-i18n= "'+AnalysisObj.getOE(result)+'" number = "'+data.number+'">'+AnalysisObj.getOE(result)+'</span></div>';
					} else  if (j === 11) {
						temp +=			'<div class="td value5"><span data-i18n="'+AnalysisObj.get5E(result)+'" number = "'+data.number+'">'+AnalysisObj.get5E(result)+'</span></div>';
					} else if(j === 12){
						temp +=			'<div class="td value6"></div>';
					}else{
						temp +=			'<div class="td" number = "'+data.number+'"><span>'+result[j + 10]+'</span></div>';
					}
				}
			}

			temp +=					'</div>';
		}

		temp  +=				'</div>' +
			'</div>' +
			'</div>' +
			'</div>';

		return temp;
	};

	Plate.prototype.setProgress = function (leftTime, totalTime) {
		this.countdownProgress.set(leftTime, totalTime);
	};

	Plate.prototype.startCountdown = function () {
		var countdown = this.zone.find('.count-down');
		var that      = this;
		var drawData;
		var leftTime;
		var serverTime;
		var beginTime;
		var closeTime;
		var endTime;
		var totalTime;
		var now;
		var min;
		var sec;

		var callback = function () {
			setInterval(function () {
				drawData = app[that.market + '_KenoSocket'].drawData;
				if (!drawData.marketClosed) {
					now = new Date();
					serverTime 	= new Date().getTime() + window.jetLag;
					beginTime 	= Util.getDateByDateString(drawData.beginTime).getTime();
					closeTime 	= Util.getDateByDateString(drawData.closeTime).getTime();
					endTime 	= Util.getDateByDateString(drawData.endTime).getTime();
					totalTime 	= Math.round((endTime - beginTime) / 1000);
					
					count 		= Math.round((closeTime - serverTime) / 1000);
					min 		= parseInt(count / 60) < 10 ? '0' + parseInt(count / 60) : parseInt(count / 60);
					sec 		= parseInt(count % 60) < 10 ? '0' + parseInt(count % 60) : parseInt(count % 60);
					
					if (serverTime > endTime) {
						countdown.html('00:00');
						return;
					}

					countdown.html(min + ':' + sec);
					that.setProgress(count, totalTime);

					//进入下一期
					if (count == 0 || serverTime > closeTime) {
						that.beanLoader.show();
						setTimeout(function(){
							that.beanLoader.hide();
						},5000);
						app[that.market + '_KenoSocket'].updateDraw();

						//当前彩期结束10秒后获取下一期的
						setTimeout(function(){
							app[that.market + "_KenoSocket"].getMarket();
						},endTime - closeTime + 10000);
					}
				}

			}, 1000);
		};

		this.countdownProgress.startAnimation(callback.bind(this));
	};

	Plate.prototype.showBetDialog = function (data) {
		if (app.betDialogDeleteLock) {
			return;
		}

		if (app.betDialog.isHide()) {
			app.betDialog.show();
			app.betDialog.addRecord(this.id,data);
			app.betDialog.okCallback = function(betAmount){
				PlaceBet.kenoPlaceBet(betAmount);
			};
		} else {
			if (!app.betDialog.hasData(this.id) || app.betDialog.hasData(this.id)) {
				app.betDialog.addRecord(this.id,data);
			}
		}
	};

	Plate.prototype.RXIsShowHide = function(){
		var that = this;
		var isRx = that.zone.find('.category').find('.selected').hasClass('rx');
		if(app[that.market + '_KenoSocket'].drawData.marketClosed) return false;
		if(Global.betZoneData.length > 0 && isRx){
			var marketList = [];
			for(var i = 0; i < Global.betZoneData.length; i++){
				marketList.push(Global.betZoneData[i].market)
			}
			if(Global.betZoneData.length > 1){
				that.zone.find('.market-close-overlay').show();
				that.zone.find('.market-close-overlay').css('opacity','0.85');
			}else{
				if(Global.betZoneData.length == 1 && that.market != Global.betZoneData[0].market){
					that.zone.find('.market-close-overlay').show();
					that.zone.find('.market-close-overlay').css('opacity','0.85');
				}else{
					setTimeout(function(){
						that.zone.find('.market-close-overlay').hide();
						that.zone.find('.market-close-overlay').css('opacity','0');
					},350)
				}
			}
		}else{
			var isShowList = ['Ball','5E','UD','OES','Tie'];
			if(Global.betZoneData.length == 1 && (isShowList.indexOf(Global.betZoneData[0].betType) >=0 || Global.betZoneData[0].betType == 'BS' && Global.betZoneData[0].betItem[0] == 'Tie') && that.market != Global.betZoneData[0].market){
				that.zone.find('.market-close-overlay').show();
				that.zone.find('.market-close-overlay').css('opacity','0.85');
			}else{
				setTimeout(function(){
					that.zone.find('.market-close-overlay').hide();
					that.zone.find('.market-close-overlay').css('opacity','0');
				},350)
			}
		}
	};

	Plate.prototype.bindEvents = function (callback) {
		var qwPlate;
		var rxPlate;
		var ballRX = [];
		var drawRoute;
		var drawDetail;
		var chunksLine;
		var statusUl;
		var width;
		var left;
		var len;
		var circle;
		var index;
		var lock = false;
		var that = this;
		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';

		this.zone  = $('#' + this.id);
		qwPlate    = this.zone.find('.qw-plate');
		rxPlate    = this.zone.find('.rx-plate');
		drawRoute  = this.zone.find('.draw-route');
		drawDetail = this.zone.find('.draw-detail');
		chunksLine = drawDetail.find('.chunks-line');
		statusUl   = drawRoute.find('ul.status');
		circle     = statusUl.children('.circle');

		this.zone.delegate('.playing-item', 'click', function () {
			that.zone.find('.playing-item').removeClass('selected');

			if ($(this).hasClass('qw')) {
				qwPlate.css('left', '0');
				rxPlate.css('left', '100%');
				that.nation = 'qw';
			} else {
				qwPlate.css('left', '-100%');
				rxPlate.css('left', '0');
				that.nation = 'rx';
			}

			$(this).addClass('selected');
			that.RXIsShowHide();
		});

		this.zone.delegate('.table_left','click', function(){
			var index = parseInt($(this).attr('nav-index'));
			var currentPageData;
			for(var key in that.routePageData){
				if (that.routePageData[key]['tabIndex'] == index) {
					currentPageData = that.routePageData[key];
				}
			};

			var left = parseFloat($(this).next()[0].style.left.replace('rem',''));
			var right = parseFloat($(this).next()[0].style.right.replace('rem',''));

			if (currentPageData.dataLenght > 20 && currentPageData.pageIndex < currentPageData.dataLenght - 20) {
				currentPageData.pageIndex++;
				$(this).next()[0].style.left = (left + 0.2376) + 'rem';
				$(this).next()[0].style.right = (right - 0.2376) + 'rem';
			}
		});

		this.zone.delegate('.table_right', 'click', function() {
			var index = parseInt($(this).attr('nav-index'));
			var currentPageData;
			for(var key in that.routePageData){
				if (that.routePageData[key]['tabIndex'] == index) {
					currentPageData = that.routePageData[key];
				}
			};

			var left = parseFloat($(this).prev()[0].style.left.replace('rem',''));
			var right = parseFloat($(this).prev()[0].style.right.replace('rem',''));

			if (currentPageData.dataLenght > 20 && currentPageData.pageIndex > 0) {
				currentPageData.pageIndex--;
				$(this).prev()[0].style.left = (left - 0.2376) + 'rem';
				$(this).prev()[0].style.right = (right + 0.2376) + 'rem';
			}
		});

		this.zone.delegate('.draw-route .tbody .td > span','mouseover', function(e){
			var number = $(this).attr('number');
			var value = $(this).text();
			that.setRouteMapTip(value, number, e);
		}).delegate('.draw-route .tbody .td > span','mouseout', function(e){
			that.zone.find('.routeTip').hide();
		});

		this.zone.delegate('.routeTip', 'mouseover', function(event) {
			$(this).show();
		}).delegate('.routeTip', 'mouseout', function(event) {
			$(this).hide();
		});

		statusUl.delegate('li', 'click', function () {
			statusUl.children('li').removeClass('selected');
			$(this).addClass('selected');
			var dataI18n = $(this).children().attr('data-i18n');
			index = $(this).index();
			circle.html(i18next.t($(this).children('span').attr('data-i18n')));
			circle.css('left', (index * 0.869 + 0.12) + 'rem');
			circle.attr('data-i18n',dataI18n);
			that.toggleRoute(index);
			app.initI18next($('#' +that.id).find('.map .tbody'))
		});

		qwPlate.delegate('.column', 'click', function () {
			qwPlate.find('.column').removeClass('selected');
			rxPlate.find('.ball').removeClass('selected');
			$(this).addClass('selected');
			var data = {
				issue: app[that.market+'_KenoSocket'].drawData.drawNumber,
				nation: qwPlate.parents('.plate').attr('id').split('_')[1],
				betContent: $(this).find('.text').text(),
				betType:$(this).find('.text').attr('bettype'),
				betItem:$(this).find('.text').attr('betitem'),
				market:that.market
			};
			that.showBetDialog(data);
		});

		rxPlate.delegate('.ball', 'click', function () {
			qwPlate.find('.column').removeClass('selected');
			if(rxPlate.find('.selected').length == 1 && $(this).hasClass('selected')) return false;
			if(rxPlate.find('.selected').length != ballRX.length && ballRX.length != 0)ballRX = [];
			if(ballRX.length < 5 || $(this).hasClass('selected')){
				var text = $(this).text();
				if(text < 10){
					text = '0' + text
				}
				if($(this).hasClass('selected')){
					var index = ballRX.indexOf(text);
					ballRX.splice(index,1);
				}else{
					ballRX.push(text);
				}
				$(this).toggleClass('selected');
			}
			var data = {
				issue: app[that.market+'_KenoSocket'].drawData.drawNumber,
				nation: qwPlate.parents('.plate').attr('id').split('_')[1],
				betContent: ballRX.toString(),
				betType:'Ball',
				betItem:ballRX,
				market:that.market
			};
			that.showBetDialog(data);
		});

		drawRoute.find('.draw-route-naver').click(function () {
			drawRoute.css('left', '-100%');
			drawDetail.css('left', '0');
		});

		drawDetail.find('.draw-detail-naver').click(function () {
			drawRoute.css('left', '0');
			drawDetail.css('left', '100%');
		});

		drawDetail.find('.prev').click(function () {
			if (lock) {
				return;
			}

			lock = true;

			width = CHUNKWIDTH;

			if (Math.round(that.startleft) === 0) {
				lock = false;
				return;
			}

			that.startleft += width;
			chunksLine.css('left', that.startleft + 'rem');

			var timeout = setTimeout(function () {
				lock = false;
				clearTimeout(timeout);
			}, 500);
		});

		drawDetail.find('.next').click(function () {
			if (lock) {
				return;
			}

			lock = true;

			width = CHUNKWIDTH;
			len   = chunksLine.find('.chunk').length;

			if (that.startleft === (0 - (len-1) * width)) {
				lock = false;
				return;
			}

			that.startleft -= width;
			chunksLine.css('left', that.startleft + 'rem');

			var timeout = setTimeout(function () {
				lock = false;
				clearTimeout(timeout);
			}, 500);
		});

		this.resetChunksLineWidth();
		this.countdownProgress.bindEvents();
		this.beanLoader.bindEvents();
		this.drawingAnimation.bindEvents();
	};

	window.Plate = Plate;
}());

