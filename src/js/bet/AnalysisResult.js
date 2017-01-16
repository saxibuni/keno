AnalysisObj = {
    //珠仔
    getPB: function(data) {
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            result += parseInt(data[i]);
        }
        return result;
    },

    //大小
    getBS: function(data) {
        var result = 0;
        var dataType;
        for (var i = 0; i < data.length; i++) {
            result += parseInt(data[i]);
        }
        if (result < 810) {
            dataType = 'router_S';
        } else if (result == 810) {
            dataType = 'router_H';
        } else if (result > 810) {
            dataType = 'router_B';
        }
        return dataType;
    },

    //单双
    getOE: function(data) {
        var dataType;
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            result += parseInt(data[i]);
        }
        if (result % 2 == 0) {
            dataType = 'router_Double';
        } else if (result % 2 != 0) {
            dataType = 'router_Single';
        }
        return dataType;
    },

    //上下
    getUD: function(data) {
        var dataType;
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            if (parseInt(data[i]) > 40)
                result += 1;
        }
        if (result == 10) {
            dataType = 'router_UDH';
        } else if (result > 10) {
            dataType = 'router_U';
        } else if (result < 10) {
            dataType = 'router_D';
        }
        return dataType;
    },

    //奇偶
    getOTE: function(data) {
        var dataType;
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            if (parseInt(data[i]) % 2 == 0)
                result += 1;
        }
        if (result == 10) {
            dataType = 'router_OEH';
        } else if (result > 10) {
            dataType = 'router_Eevn'
        } else if (result < 10) {
            dataType = 'router_Odd'
        }
        return dataType;
    },

    //五行
    get5E: function(data) {
        var dataType;
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            result += parseInt(data[i]);
        }
        if (210 <= result && result < 696) {
            dataType = 'router_Go';
        }
        if (696 <= result && result < 764) {
            dataType = 'router_Wo';
        }
        if (764 <= result && result < 855) {
            dataType = 'router_Wa';
        }
        if (855 <= result && result < 924) {
            dataType = 'router_Fi';
        }
        if (924 <= result && result <= 1410) {
            dataType = 'router_Ea';
        }
        return dataType;
    },

    //获取路子
    getRouterMap: function(originalData, anasysisType) {
        var data = [];

        originalData.sort(function(item1, item2) {
            return parseInt(item1.number) > parseInt(item2.number);
        });

        for (var i = 0; i < originalData.length; i++) {
            var tempArr = originalData[i].result.replace(/\[|\]/g, '').split(',');
            tempArr.drawNumber = originalData[i].number;
            data.push(tempArr);
        };

        var mapResult = this.getMapResult(data, anasysisType);
        var result = this.initUIResult();
        var nextIndex = {
            colume: 0,
            row: 0
        };

        if (anasysisType == 'PB')
            return this.getPBRouterMap(data, anasysisType);

        for (var i = 0; i < mapResult.length; i++) {
            if (i == 0) {
                result[0][0] = mapResult[i];
                nextIndex.row++;
            } else {
                if (mapResult[i].value != mapResult[i - 1].value) {
                    //另起一列 行为0
                    nextIndex.row = 0;
                    nextIndex.colume = this.calcColumeIndex(result);
                    result[nextIndex.colume][nextIndex.row] = mapResult[i];
                    nextIndex.row++;
                } else {
                    //连续相同
                    //1、先往下试试
                    //2、如果超过索引或指定各自被占用  则向右边移动
                    if (nextIndex.row == 5 || result[nextIndex.colume][nextIndex.row].value != '') {
                        nextIndex.row--;
                        nextIndex.colume++;
                        (nextIndex.colume > result.length - 1) && result.push([
                            { value: '', number: '' },
                            { value: '', number: '' },
                            { value: '', number: '' },
                            { value: '', number: '' },
                            { value: '', number: '' }
                        ]);
                        result[nextIndex.colume][nextIndex.row] = mapResult[i];
                        nextIndex.row++;
                    } else {
                        result[nextIndex.colume][nextIndex.row] = mapResult[i];
                        nextIndex.row++;
                    }
                }
            }
        }

        return result;
    },

    //珠仔的路子
    getPBRouterMap: function(data, anasysisType) {
        var mapResult = this.getMapResult(data, anasysisType);
        var result = this.initUIResult();
        var nextIndex = {
            colume: 0,
            row: 0
        };

        for (var i = 0; i < data.length; i++) {
            result[nextIndex.colume][nextIndex.row] = mapResult[i];
            nextIndex.row++;
            if (nextIndex.row == 5) {
                nextIndex.row = 0;
                nextIndex.colume++;
            }
        }

        return result;
    },

    getMapResult: function(data, anasysisType) {
        var result = [];
        var that = this;
        data.forEach(function(item) {
            result.push({
                value: that['get' + anasysisType](item),
                number: item.drawNumber
            });
        });
        return result;
    },

    initUIResult: function() {
        var result = [];
        for (var i = 0; i < 20; i++) {
            var item = [
                { value: '', number: '' },
                { value: '', number: '' },
                { value: '', number: '' },
                { value: '', number: '' },
                { value: '', number: '' }
            ];
            result.push(item);
        }
        return result;
    },

    calcColumeIndex: function(result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i][0].value == '') {
                return i;
            }
        }
        result.push([
            { value: '', number: '' },
            { value: '', number: '' },
            { value: '', number: '' },
            { value: '', number: '' },
            { value: '', number: '' }
        ]);
        return (i + 1);
    }
};
