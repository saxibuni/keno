$(function() {
    (function init(callback) {

        var login = function() {
            var acctId = Util.getQueryString("acctId");
            var sessionId = Util.getQueryString("sid");
            var token = Util.getQueryString("token");
            acctId = (acctId == null || acctId == "") ? "test_player" : acctId;
            var req = {
                /* acctId: "TESTPLAYER17@TEST",*/
                acctId: sessionId == null ? acctId : null,
                passwd: sessionId == null ? "000000" : null,
                sessionId: sessionId,
                token: token
            };
            app.overlay.show();
            app.overlay.showImg();
            service.login(req, function(res) {
                if (res.code == 0) {
                    app.money = Util.addDotToNumber(res.acct.balance, 2);
                    app.header.find('.money').text(app.money);
                    app.header.find('.name').text(res.acct.acctId);

                    prepare();
                }
            });
        }

        var prepare = function() {
            window.req2resTimeArr = [];
            queryServerTime(6);
            queryGameSetting();
        }

        //获取服务器时间
        var queryServerTime = function(requstTimes) {
            var t1 = (new Date()).getTime(),
                t2 = 0;
            service.queryServerTime({}, function(res) {
                t2 = (new Date()).getTime();
                if (res.code == 0) {
                    if (requstTimes > 0) {
                        window.req2resTimeArr.push(t2 - t1);
                        requstTimes--;
                        queryServerTime(requstTimes);
                    } else {
                        window.req2resTimeArr.push(t2 - t1);
                        var serverTime = window.req2resTimeArr.reduce(function(prev, cur) {
                            return prev + cur;
                        }) / (2 * 6) + res.timeMillis;
                        window.jetLag = serverTime - t2; //服务器与本地时间差
                        queryMarket();
                    }
                }
            });
        }

        //获取市场信息
        var queryMarket = function() {
            service.queryDrawInfo({ gameCode: 'KN' }, function(res) {
                app.overlay.hideImg();
                if (res.code == 0) {
                    var data = res.list;
                    var market = '';
                    for (var i = 0; i < data.length; i++) {
                        market = data[i].market;
                        app[market + '_KenoSocket'] = new KenoSocket(market);
                        app[market + '_KenoSocket'].drawData = data[i];
                        if (!data[i].marketClosed && app[market + '_KenoSocket'].awaitUpdateDraw()) {
                            app[market + '_KenoSocket'].drawData = data[i].nextDraw; 
                        }
                        
                        app['plate_' + market].startCountdown();
                        if (!data[i].marketClosed) {
                            app['plate_' + market].zone.find('.draw-number').text('NO.' + data[i].drawNumber);
                            app[market + '_KenoSocket'].queryPlateResult();
                        }else{
                            app['plate_' + market].zone.find('.market-close-overlay').show();
                            app['plate_' + market].zone.find('.draw-status').addClass('ts');
                            app['plate_' + market].zone.find('.draw-status').find('span').attr('data-i18n','closed');
                            app['plate_' + market].zone.find('.draw-status').find('span').text(i18next.store.data[i18next.language].translation['closed']);
                        }
                    }
                } else {
                    app.noticeDialog.show({
                        dataI18nText: res.code,
                        buttonName: "sure",
                        autoHide: true,
                        timeout: 3000
                    });
                }

            })
        };

        //获取赔率 下注限制等信息
        var queryGameSetting = function() {
            service.queryBetOdds({ gameCode: 'KN' }, function(res) {
                if (res.code == 0) {
                    Global.betOdds = res.list[0].list;
                    service.queryGameLimit({ gameCode: 'KN' }, function(res2) {
                        if (res2.code == 0) {
                            Global.gameLimit = res2.list[0].list;
                            for(var i = 0; i < app.gameHtmlArr.length; i++){
                                app[app.gameHtmlArr[i].id].zone.find('.qw-plate').html(app[app.gameHtmlArr[i].id].createQwPlate());
                                app.initI18next(app[app.gameHtmlArr[i].id].zone);
                            }

                            //混投下注限制
                            service.queryGameLimit({ gameCode: 'PL'}, function(res3){
                                if (res3.code == 0) {
                                    Global.parlayLimit = res3.list[0].list;
                                }
                            });
                        }
                    });
                }
            });
        };

        login();

    })();

    function KenoSocket(market) {
        this.gameCode = 'KN';
        this.market = market;
    }

    KenoSocket.prototype.getMarket = function() {
        var req = {
            gameCode: 'KN',
            market: this.market
        };
        var that = this;
        service.queryDrawInfo(req, function(res) {
            if (res.code == 0) {
                if (res.list[0].nextDraw) {
                    app['plate_' + that.market].zone.find('.draw-number').text('NO.' + res.list[0].drawNumber);
                    that.drawData.nextDraw = res.list[0].nextDraw;
                }else{
                    that.drawData.nextDraw = null;
                }
            } else {
                that.drawData.nextDraw = null;
                app.noticeDialog.show({
                    dataI18nText: res.code,
                    buttonName: "sure",
                    autoHide: true,
                    timeout: 3000
                });
            }
        });
    }

    KenoSocket.prototype.updateDraw = function() {
        if (this.drawData.nextDraw) {
            this.drawData.beginTime = this.drawData.nextDraw.beginTime;
            this.drawData.endTime = this.drawData.nextDraw.endTime;
            this.drawData.closeTime = this.drawData.nextDraw.closeTime;
            this.drawData.drawNumber = this.drawData.nextDraw.drawNumber;
            this.drawData.drawId = this.drawData.nextDraw.drawId;
            this.drawData.marketClosed = this.drawData.nextDraw.marketClosed; 
        }
    }

    KenoSocket.prototype.awaitUpdateDraw = function () {
        var that = this;
        var closeTime = Util.getDateByDateString(this.drawData.closeTime).getTime();
        var endTime = Util.getDateByDateString(this.drawData.endTime).getTime();
        var serverTime = new Date().getTime() + window.jetLag;
        var now = new Date();
        now.setTime(closeTime - serverTime - 480 * 60);
        var timeleft = now.format('hh:mm:ss');
        var flag = ((closeTime < serverTime && serverTime < endTime) || timeleft == '00:00:00') ? true : false;

        if (flag) {
            that.intervalId = setInterval(function(){
                serverTime = new Date().getTime() + window.jetLag;
                if (serverTime > endTime + 1000 * 10) { //endtime 10秒后再取
                    that.getMarket();
                    clearInterval(that.intervalId);
                }
            }, 1000);
        }
        return flag;
    }

    //当天开奖结果
    KenoSocket.prototype.queryPlateResult = function() {
        var req = {
            gameCode: 'KN',
            market: this.market
        };
        service.queryResultList(req, function(res){
            if (res.code == 0) {
                var currentPlate = app['plate_' + req.market];
                var result = res.list;
                currentPlate.data = result;
                //1、绑定路子
                currentPlate.setValue('BS', 0);
                currentPlate.setValue('OE', 1);
                currentPlate.setValue('OTE', 2);
                currentPlate.setValue('UD', 3);
                currentPlate.setValue('PB', 4);
                currentPlate.setValue('5E', 5);
                //2、绑定详情
                currentPlate.setDetailChunk();
            }else{
                app.noticeDialog.show({
                    dataI18nText: res.code,
                    buttonName: "sure",
                    autoHide: true,
                    timeout: 3000
                });
            }
        });
    };


    window.KenoSocket = KenoSocket;
});
