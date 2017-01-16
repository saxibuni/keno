(function () {
	function IMDatetimepicker (opt) {
		this.opt = opt;
		this.el  =	'<div class="im-datetimepicker ' + this.opt.className + '">' +
						'<div class="time-label" data-i18n = "'+this.opt.i18n+'" >' + this.opt.text + '</div>' +
	                    '<input type="text"/>' +
	                '</div>';
	}

	IMDatetimepicker.prototype.getDom = function () {
		return this.el;
	};
	IMDatetimepicker.prototype.setDateFormat = function () {
		$('.im-datetimepicker input').datetimepicker({
			format:'Y-m-d H:m:s',
			formatDate:'Y-m-d H:m:s'
		});
	};
	IMDatetimepicker.prototype.disableTime = function () {
		$('.im-datetimepicker.betTime input').datetimepicker({
			timepicker:false,
			format:'Y-m-d',
			formatDate:'Y-m-d'
		});
	};

	window.IMDatetimepicker = IMDatetimepicker;
}());