(function () {
	function IMPager (opt) {
		this.opt            = opt;
		this.id             = this.opt.id;
		this.currentPage    = 1;
		this.totalPage      = 1;
		this.pageRange      = 4;
		this.firstItemValue = 1;
		this.el             = this.initDom();
		this.pageSize      = 10;
	}

	IMPager.prototype.initDom = function () {
		var temp;

        temp  = '<ul class="im-pager" id="' + this.id + '">' +
					'<li><a class="btn first"    href="#">第一页</a></li>' +
					'<li><a class="btn previous" href="#">上一页</a></li>' +
					'<li><a class="item selected" href="#" data-value="1">1</a></li>' +
					'<li><a class="item"     	 href="#" data-value="2">2</a></li>' +
					'<li><a class="item"     	 href="#" data-value="3">3</a></li>' +
					'<li><a class="item"     	 href="#" data-value="4">4</a></li>' +
					'<li><a class="item more"    href="#">...</a></li>' +
					'<li><a class="btn next"     href="#">下一页</a></li>' +
					'<li><a class="btn last"     href="#">最后一页</a></li>' +
                '</ul>';

		return temp;
	};

	IMPager.prototype.getDom = function () {
		return this.el;
	};

	IMPager.prototype.reloadPageItem = function (start) {
		var i;
		var items = this.zone.find('.item');
		for (i = 0; i < this.pageRange; i++) {
			if (start + i <= this.totalPage) {
				if(start + i < 0) continue;
				$(items[i]).text(start + i);
				$(items[i]).attr('data-value', start + i);
				$(items[i]).show();
			} else {
				$(items[i]).hide();
			}
		}

	};
	IMPager.prototype.isDisable = function(){
		var zone = this.zone;
		if(this.currentPage == 1){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.first').addClass('btn-disabled');
			zone.find('.previous').addClass('btn-disabled');

			if(this.currentPage == this.totalPage){
				zone.find('.next').addClass('btn-disabled');
				zone.find('.last').addClass('btn-disabled');
				zone.find('.more').hide();
			}else{
				if( this.totalPage <= 4){
					zone.find('.more').hide();
				}else{
					zone.find('.more').show();
				}
			}

		}else if(this.currentPage == this.totalPage){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.next').addClass('btn-disabled');
			zone.find('.last').addClass('btn-disabled');
			zone.find('.more').hide();
		}else{
			zone.find('.more').show();
			zone.find('.btn').removeClass('btn-disabled');
		}
	};
	IMPager.prototype.setSelected = function (value) {
		var i;
		var items = this.zone.find('.item');
		for (i = 0; i < 4; i++) {
			if (parseInt($(items[i]).attr('data-value')) === this.currentPage) {
				items.removeClass('selected');
				$(items[i]).addClass('selected');
			}
		}
	};

	IMPager.prototype.bindEvents = function () {
		var that = this;
		var page,page2;
		this.zone = $('#' + this.id);

		this.reloadPageItem(this.currentPage);
		that.isDisable();
		this.zone.delegate('a', 'click', function () {
			if ($(this).hasClass('first')) {
				that.currentPage = 1;
				that.firstItemValue = 1;
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('last')) {
				that.currentPage = that.totalPage;
				that.firstItemValue = parseInt(that.totalPage/that.pageRange) * that.pageRange;
				if(that.totalPage%that.pageRange != 0){
					that.firstItemValue++
				}
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('previous')) {
				if (that.currentPage > 1) {
					if (that.currentPage === that.firstItemValue) {
						that.firstItemValue -= that.pageRange;
						if(that.firstItemValue == 0){
							that.firstItemValue = 1
						}
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage -= 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('next')) {
				if (that.currentPage < that.totalPage) {
					if (that.currentPage === (that.firstItemValue + (that.pageRange - 1))) {
						that.firstItemValue += that.pageRange;
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage += 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('more')) {
				that.zone.find('.item').removeClass('selected');
				that.firstItemValue = parseInt(that.zone.find('.item:first').attr('data-value'));

				if (that.firstItemValue + (that.pageRange - 1) < that.totalPage) {
					that.firstItemValue += that.pageRange;
					that.currentPage = that.firstItemValue;
					that.reloadPageItem(that.firstItemValue);
				}

				that.setSelected();
			} else {
				that.currentPage = parseInt($(this).attr('data-value'));
				that.setSelected();
			}
			that.isDisable();
			if(that.totalPage - that.totalPage%that.pageRange < that.currentPage){
				that.zone.find('.more').hide();
			}else{
				that.zone.find('.more').show();
			}
			//修改-DB
			if(that.id.indexOf('bet') != 'draw-results-xzqk-pager1'){
				if(!that.bettingRecords){
					that.bettingRecords = app.bettingRecords;
				}
				if(page != that.currentPage){
					that.bettingRecords.refreshHtml();
					page = that.currentPage;
				}
			}else{
				if(page2 != that.currentPage){
					that.drawResults = app.drawResults;
					that.drawResults.refreshHtml();
					page2 = that.currentPage;
				}
			}
		});

	};

	window.IMPager = IMPager;
}());

