$(function() {

    // Kickout = -1;
    // AcctInfoUpdated = -3;
    // OddsChanged = -5;
    // PushNotice = -7;
    // MarketOpen = -9;
    // MarketClosed = -10;
    // DrawClosed = -11;
    // DrawAward = -12;
    //当市场开启了 才处理它的推送消息

    PushMessage = {
        marketOpen: function() {
            service.bindPushEvent(-9, function(res) {
                var currentKenoSocket = app[res.market + '_KenoSocket'];
                var currentPlate = app['plate_' + res.market];
                currentKenoSocket.drawData = res.currentDraw;
                if (currentKenoSocket.awaitUpdateDraw()) {
                    currentKenoSocket.updateDraw();
                }
                currentPlate.zone.find('.market-close-overlay').hide();
                currentPlate.zone.find('.draw-status').removeClass('ts');
                currentPlate.zone.find('.draw-status').find('span').attr('data-i18n','startBetting');
                currentPlate.zone.find('.draw-status').find('span').text(i18next.store.data[i18next.language].translation['startBetting']);
            });
            return this;
        },

        marketClose: function() {
            service.bindPushEvent(-10, function(res) {
                var currentKenoSocket = app[res.market + '_KenoSocket'];
                var currentPlate = app['plate_' + res.market];
                currentKenoSocket.drawData.marketClosed = true;
                currentPlate.zone.find('.market-close-overlay').show();
                currentPlate.zone.find('.draw-status').addClass('ts');
                currentPlate.zone.find('.draw-status').find('span').attr('data-i18n','closed');
                currentPlate.zone.find('.draw-status').find('span').text(i18next.store.data[i18next.language].translation['closed']);
                currentPlate.zone.find('.count-down').text('');
                currentPlate.zone.find('.filler').css('width','0%');
            });
            return this;
        },

        drawAward: function() {
            service.bindPushEvent(-12, function(res) {
                var awardData = {
                    number: res.drawNumber,
                    result: res.result
                };
                var currentPlate = app['plate_' + res.market];
                currentPlate.data.push(awardData);

                //1、绑定路子
                currentPlate.setValue('BS', 0);
                currentPlate.setValue('OE', 1);
                currentPlate.setValue('OTE', 2);
                currentPlate.setValue('UD', 3);
                currentPlate.setValue('PB', 4);
                currentPlate.setValue('5E', 5);
                //2、绑定详情
                currentPlate.setDetailChunk();
                //3、开奖动画
                currentPlate.drawingAnimation.show(res.result.replace(/\[|\]/g, '').split(','));
            });
            return this;
        },

        acctInfoUpdate: function() {
            service.bindPushEvent(-3, function() {
                servive.queryAcctInfo({}, function(res) {
                    if (res.code == 0) {
                        app.money = Util.addDotToNumber(res.acct.balance, 2);
                        app.header.find('.money').text(app.money);
                    }
                });
            });
            return this;
        }
    };

    PushMessage
        .marketOpen()
        .marketClose()
        .drawAward()
        .acctInfoUpdate();

    //每隔5分钟取一次balance       
    setTimeout(function() {
        setInterval(function() {
            service.queryAcctInfo({}, function(res) {
                if (res.code == 0) {
                    app.money = Util.addDotToNumber(res.acct.balance, 2);
                    app.header.find('.money').text(app.money);
                }
            });
        }, 1000 * 60 * 5);
    }, 1000 * 60 * 5);
});
