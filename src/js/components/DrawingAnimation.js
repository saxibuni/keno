(function () {
	function DrawingAnimation (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = this.init();
	}

	DrawingAnimation.prototype.init = function () {
		var temp = 	'<div class="drawing-animation" id="' + this.id + '">' +
						'<div class="info">' +
							'<span class="title issue left">0972</span>' +
							'<span class="title left" data-i18n="balls-drawing"></span>' +
							
							'<div class="summary right">' +
								'<span class="text" data-i18n="exScore"></span>' +
								'<span class="text total">0</span>' +
							'</div>' +

							'<div class="clear"></div>' +
						'</div>' +
						'<div class="wrapper">' +
							'<div class="balls"></div>' +
						'</div>' +
					'</div>';

		return temp;
	};

	DrawingAnimation.prototype.getDom = function () {
		return this.el;
	};

	DrawingAnimation.prototype.show = function (arr) {
		var that = this;
		this.zone.show();
		this.startAnimation(arr);

		setTimeout(function(){
			that.hide();
		}, 1000 * 25);
	};

	DrawingAnimation.prototype.startAnimation = function (originalArr) {
		var i;
		var balls;
		var temp = '';
		var ballSize = 0.4;
		var leftGap = 0.23;
		var interval;
		var timeout;
		var t;
		var animationZone = this.zone.find('.balls');
		var total = this.zone.find('.total');
		var start = 0;
		var arr = originalArr.slice(0);
		var analysisTypes = ['BS', 'UD', 'OTE', 'OE', '5E'];

		for(i = 0; i < analysisTypes.length; i++){
			arr.push(AnalysisObj['get' + analysisTypes[i]](originalArr));
		}

		// arr = 	[
		// 			'01', '02', '03', '04', '05', '06', '07', '08', '09', '10', 
		// 		  	'11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '大', '上', '奇','单', '金'
		// 		];

		for (i = 0 ; i < arr.length; i++) {
			if (i < 13) {
				temp += '<div class="ball up">' + arr[i] + '</div>';
			} else {
				if (i < 20) {
					temp += '<div class="ball down">' + arr[i] + '</div>';
				}else{
					temp += '<div class="ball down" data-i18n="' + arr[i] +'">' + '</div>';
				}
			}
		}

		animationZone.html(temp);
		app.initI18next(animationZone);
		balls = animationZone.children('.ball');
		i = 0;
		t = 400;
		interval = setInterval(function () {
			if (i === 26) {
				clearTimeout(timeout);
				clearInterval(interval);
				return;
			}

			$(balls[i]).css({
				opacity: 1,
				transition: 'transform ' + t/2000 + 's',
				transform: 'scale(2,2)'
			});

			setTimeout(function () {
				if (i < 13) {
					$(balls[i]).css({
						opacity: 1,
						left: leftGap + i * ballSize + 'rem',
						margin: 0,
						transform: 'scale(1,1)',
						transition: 'all ' + t/2000 + 's'
					});
				} else {
						$(balls[i]).css({
							opacity: 1,
							left: leftGap + (i - 13) * ballSize + 'rem',
							margin: 0,
							transform: 'scale(1,1)',
							transition: 'all ' + t/2000 + 's'
						});
				}

				if (i < 20) {
					start += parseInt($(balls[i]).text());
				}

				if (i === 25) {
					total.text(start);
				}

				i++;
			}, t/2)
		}, t);
	};

	DrawingAnimation.prototype.hide = function () {
		this.zone.hide();
	};

	DrawingAnimation.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);
	};

	window.DrawingAnimation = DrawingAnimation;
}());

