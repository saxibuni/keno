(function() {
    'use strict';

    var MILLI_SECONDS_PER_DAY = 24*60*60*1000;

    function Util () {}

    Util.prototype.initPlaceHolder = function(lang) {
        $('input, textarea').placeholder();
    };
    
    Util.prototype.initIE8 = function(lang) {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        
        if (msie > 0) {
            if (ua.substring(msie + 5, msie + 8) === '8.0') {
                $('body').addClass('ie8');
            }
        }
    };
    
    Util.prototype.getTimepickerLang = function() {
        var lang = localStorage.getItem('*lang');
        var dict = {
            'zh-cn': 'zh',
            'zh-tw': 'zh-TW',
            'en-us': 'en'
        }

        return dict[lang];
    };

    Util.prototype.getQueryString = function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    };

    Util.prototype.getDatatableLanguageConfig = function() {
        var temp = {
            'lengthMenu': i18n.t('show') + " _MENU_ " + i18n.t('records-per-page'),
            'emptyTable': i18n.t('no-data-available'),
            'paginate': {
                'next':     i18n.t('next-page'),
                'previous': i18n.t('previous-page')
            }
        };
        
        return temp;
    };

    Util.prototype.initI18next = function(lang, callback) {
        if (typeof lang == 'function') {
            callback = lang;
            lang = '';
        }

        var localePath  = '../data/i18n/';
        var browserLang = navigator.language || navigator.userLanguage;
        var storageLang = localStorage.getItem('*lang');
        var l           = lang || storageLang|| browserLang.toLowerCase();
        
        var options = {
            sendType: 'GET',
            lng: l,
            resGetPath: localePath + l + '.json',
            useLocalStorage: false,
            getAsync: false
        };
        
        if (i18n.lng() && i18n.lng() === lang) {
            return;
        }
        
        if(i18n.lng()) {
            i18n.setLng(lang, options);
        } else {
            i18n.init(options, function(){
                if (callback) {
                    callback();
                }
            });
        }
        
        if (localStorage) {
            localStorage.setItem('*lang', l);
        }

        $('body').i18n();
    };

    Util.prototype.createTable = function(options) {
        /*
        ** options = {
        **     titles: [],
        **     id: '',
        **     rownum: '',
        **     colnum: ''
        ** }
        */
        var i;

        var temp =  '<table id="' + options.id + '"cellspacing="0">' +

                        '<thead>' +
        
                            '<tr>';

        for (i = 0; i < options.titles.length; i++) {
            temp +=             '<td>' + options.titles[i] + '</td>';
        }

        temp +=             '</tr>' +

                        '</thead>' +

                        '<tbody>' +

                            this.createTableRow(options.rownum, options.colnum) +

                        '</tbody>' +
        
                    '</table>';

        return temp;
    };

    Util.prototype.createTableRow = function(rownum, colnum) {
        var i;
        var j;
        var temp = '';

        for (i = 0; i < rownum; i++) {
            if (i%2 === 0) {
                temp += '<tr class="odd">';
            } else {
                temp += '<tr class="even">';
            }
            
            for (j = 0; j < colnum; j++) {
                temp +=  '<td>--</td>';
            }
            
            temp += '</tr>';
        }

        return temp;
    };

    Util.prototype.fillTableRows = function(data, rows) {
        var i;
        var j;
        var tr;
        var cols;

        for (i = 0; i < rows.length; i++) {
            tr = rows[i];
            cols = $(tr).children('td');

            for (j = 0; j < cols.length; j++) {
                if (!data[i] || !data[i][j]) {
                    $(cols[j]).text('--');
                } else {
                    $(cols[j]).text(data[i][j]);
                }
            }
        }
    };

    Util.prototype.addTableRows = function(data, tbody) {
        var i;
        var j;
        var coldata;
        var temp = '';
        
        for (i = 0; i < data.length; i++) {
            coldata = data[i];
            
            temp += '<tr>';
            for (j = 0; j < coldata.length; j++) {
                temp += '<td>' +  coldata[j] + '</td>';
            }
            temp += '</tr>';
        }

        $(temp).appendTo(tbody);
    };

    Util.prototype.getIntervalDate = function (startDate, interval) {
        var temp = new Date(startDate.getTime() + MILLI_SECONDS_PER_DAY*interval);
        return temp;
    };

    Util.prototype.isMobile = {
        android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        blackberry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        ios7up: function() {
            return navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS [7|8|9]_\d/i);
        },
        opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        ipad: function () {
            var ios = this.ios();
            return !!(ios && ios[0] === 'iPad');
        },
        any: function() {
            return (this.android() || this.blackberry() || this.ios() || this.opera() || this.windows());
        }
    };

    Util.prototype.SetInterval = function (callback, n) {
        var testTimeout;
        var i         = 0;
        var count     = 0;
        var startTime = new Date().getTime();

        var fixed = function() {
            var offset = new Date().getTime() - (startTime + count * 1000);
            var next   = 1000 - offset;

            callback();
            
            if (next < 0) {
                next = 0;
            }

           var fixedTimeout = setTimeout(fixed, next);
            
            while (i++ >= n) {
                clearTimeout(testTimeout);
                clearTimeout(fixedTimeout);
            }
        };
        
        testTimeout = setTimeout(fixed, 1000);
    };

    /* ----- Date ----- */
    /**
     * Format a date as 'yyyy/MM/dd hh/mm'
     */
    Date.prototype.formatDateAndTime = function () {
        return this.formatDate() +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes()) +
               ':' + (this.getSeconds() < 10 ? '0' + this.getSeconds(): this.getSeconds());
    };

    /**
     * Format a date as 'MM-dd hh:mm'
     */
    Date.prototype.formatShortDateAndTime = function () {
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               '-' + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate()) +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes());
    };

    /**
     * Format a date as 'yyyy/MM/dd'
     */
    Date.prototype.formatDate = function (divider) {
        divider = divider || '/';
        return this.getFullYear() + divider + this.formatShortDate(divider);
    };

    /**
     * Format a date as 'MM/dd'
     */
    Date.prototype.formatShortDate = function (divider) {
        divider = divider || '/';
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               divider + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate());
    };

    Util.prototype.getDateByDateString = function(dataString){
        var arr = dataString.replace(/-| |:/g,',').split(',');
        var date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2], arr[3], arr[4], arr[5]);
        return date;
    }

    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    }

    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    Util.prototype.addDotToNumber=function(num,dotLength){
        dotLength = dotLength || 2;
        num = num.toString().replace(/\$|\,/g,'');  
        if(isNaN(num))  num = "0.00";  
        var sign = (num == (num = Math.abs(num)));  
        num = Math.floor(num * Math.pow(10, dotLength) + 0.50000000001);  
        var cents = num % Math.pow(10, dotLength);  
        num = Math.floor(num / Math.pow(10, dotLength)).toString();
        if (dotLength == 2) {
            if (parseInt(cents) < 10)  cents = '0' + cents;
        }  
        if (dotLength == 3) {
            if (parseInt(cents) < 10) cents = '00' + cents;
            if (10 < parseInt(cents) && parseInt(cents) < 100) cents = '0' + cents;
        }
        if (dotLength == 4) {
            if (parseInt(cents) < 10) cents = '000' + cents;
            if (10 <= parseInt(cents) && parseInt(cents) < 100) cents = '00' + cents;
            if (100 <= parseInt(cents) && parseInt(cents) < 1000) cents = '0' + cents;
        }
        for (var i = 0; i < Math.floor((num.length - ( 1 + i )) / 3); i++)  
        num = num.substring(0,num.length - (4 * i + 3)) +','+ num.substring(num.length - (4 * i + 3)); 
        // if(isCents == false) return (((sign)? '' : '-') + num);
        return (((sign)? '' : '-') + num + '.' + cents); 
    };


    window.Util = new Util();
}());
