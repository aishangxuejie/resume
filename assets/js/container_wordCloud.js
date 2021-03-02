var wordCloud = echarts.init(document.getElementById('wordCloud'), "dark");

var wordCloud_option = {
    backgroundColor:'rgba(255, 255, 255, 0)',
    series: [{
            type: 'wordCloud',
            // drawOutOfBound:true,
            gridSize: 1,
            sizeRange: [8, 35],
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
            data: [{'name':'java','value':9},{'name':'Spring','value':9},{'name':'python','value':6},{'name':'vue','value':7},{'name':'Linux','value':7},{'name':'SpringBoot','value':7},{'name':'DataV','value':7},{'name':'Oracle','value':7},{'name':'Redis','value':7},{'name':'MySql','value':9},{'name':'nosql','value':6},{'name':'JVM','value':5},{'name':'Mybatis','value':7},{'name':'Git','value':5},{'name':'面向对象','value':5},{'name':'多线程','value':5},{'并发':'Git','value':5},]
        }]
}
// wordCloud_option.series[0].data=ddd;
wordCloud.setOption(wordCloud_option);
