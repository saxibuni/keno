var PlaceBet = {
    kenoPlaceBet:function(betAmount){
        if(betAmount == 0){
            return false;
        }
        var data = Global.betZoneData;
        if(data.length == 1){
            var req = {
                "betType": data[0].betType,
                "market": data[0].market,
                "gameCode": data[0].gameCode,
                "items": [{
                    betItem:data[0].betType == 'Ball'?data[0].betItem[0]:data[0].betItem,
                    drawType:data[0].betType
                }],
                "drawId": app[data[0].market +'_KenoSocket'].drawData.drawId,
                "betAmount": betAmount,
                "odds":data[0].odds
            }
        }else{
            var req = {
                "parlayItems":[],
                "gameCode": 'PL',
                "betAmount": betAmount,
                "odds":1
            };
            var odds = 1;
            for(var i = 0; i < data.length; i++){
                req.parlayItems.push({
                    "betType": data[i].betType,
                    "market": data[i].market,
                    "gameCode":data[i].gameCode,
                    "betItem": data[i].betItem,
                    "drawId": app[data[i].market +'_KenoSocket'].drawData.drawId,
                    "drawNumber": app[data[i].market +'_KenoSocket'].drawData.drawNumber,
                    "odds": data[i].oddsParlay
                });
                req.odds =  req.odds * data[i].oddsParlay
            }
            req.odds = Math.floor(req.odds*10)/10;
        }
        var okCallback = function(){
            app.betDialog.cleanCoverDom();
            app.betDialog.sure.enabled();
            app.betDialog.cleanValue();
        };
        service.placeBet(req,function(res){
            if(res.code == 0){
                app.betDialog.hide();
                app.setDot('history',1);
                app.setMoney(res.balance);
                Global.betZoneData = [];
                app.betDialog.removeSelected();
                app.noticeDialog.show({
                    dataI18nText: 'betSuccess',
                    buttonName: "sure",
                    autoHide: true,
                    timeout: 3000,
                    okCallback:okCallback
                });
            }else{
                app.noticeDialog.show({
                    dataI18nText: res.code,
                    buttonName: "sure",
                    autoHide: true,
                    timeout: 3000,
                    okCallback:function(){
                        app.betDialog.sure.enabled();
                    }
                });
            }
        })
    }
};