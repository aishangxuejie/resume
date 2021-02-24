var wordCloud = echarts.init(document.getElementById('wordCloud'), "dark");

var wordCloud_option = {
    backgroundColor:'rgba(255, 255, 255, 0)',
    series: [{
            type: 'wordCloud',
            // drawOutOfBound:true,
            gridSize: 1,
            sizeRange: [12, 55],
            rotationRange: [-45, 0, 45, 90],

            //这是让词云图的颜色随机
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' +
                                Math.round(Math.random() * 255) +
                                ', ' + Math.round(Math.random() * 255) +
                                ', ' + Math.round(Math.random() * 255) + ')'
                    }
                }
            },
            left: 'center',
            top: 'center',
            width: 300,
            height: 200,
            right: null,
            bottom: null,
            data:  [{'name':'java','value':9},{'name':'python','value':9},{'name':'vue','value':9},{'name':'Linux','value':9},]
        }]
}
// wordCloud_option.series[0].data=ddd;
wordCloud.setOption(wordCloud_option);
