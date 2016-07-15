/**
 * Created by Secret on 2016/7/14.
 */
$(function(){
    setInterval(function(){
        $("#clock").text(moment().format("h:mm:ss"));
    },10);
});
$(function(){
    var gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        title: null,
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    // The speed gauge
    $('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 200,
            title: {
                text: 'Speed'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Speed',
            data: [80],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver">km/h</span></div>'
            },
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    }));
    setInterval(function () {
        // Speed
        var chart = $('#container-speed').highcharts(),
            point,
            newVal,
            inc;
        if (chart) {
            point = chart.series[0].points[0];
            inc = Math.round((Math.random() - 0.5) * 100);
            newVal = point.y + inc;
            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }
            point.update(newVal);
        }
    }, 2000);
});
$(function(){
    var eventChart = echarts.init(document.getElementById('event'));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            top:20,
            data:['SQL注入','POP3','HTTP Cetflood','FTP','入侵防御','XSS攻击','FTP Bounce','缓冲区溢出',"病毒","应用安全"]
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '40%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'病毒',itemStyle:{normal:{color:'#9f81f0'}},selected:true},
                    {value:679, name:'应用安全',itemStyle:{normal:{color:'#34aba5'}}},
                    {value:1548, name:'入侵防御',itemStyle:{normal:{color:'#64b2cb'}}}
                ]
            },
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '65%'],
                data:[
                    {value:335, name:'FTP',itemStyle:{normal:{color:'#A1D768'}}},
                    {value:310, name:'XSS攻击',itemStyle:{normal:{color:'#3FB1E3'}}},
                    {value:234, name:'SQL注入',itemStyle:{normal:{color:'#EE9E47'}}},
                    {value:135, name:'HTTP Cetflood',itemStyle:{normal:{color:'#DFD83C'}}},
                    {value:1048, name:'FTP Bounce',itemStyle:{normal:{color:'#81A1EA'}}},
                    {value:251, name:'缓冲区溢出',itemStyle:{normal:{color:'#4F5CB7'}}},
                    {value:147, name:'TCP SYN FLOOD',itemStyle:{normal:{color:'#FFDC84'}}},
                    {value:102, name:'POP3',itemStyle:{normal:{color:'#F18374'}}}
                ]
            }
        ]
    };
    eventChart.setOption(option);
    window.onresize = eventChart.resize;
});
$(function(){
    var healthChart = echarts.init(document.getElementById('health'));
    option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}分"    //提示框样式
        },
        title: {
            text: '自身健康',
            subtext: '当前健康状况',
            left:"right",
            top:50,
            textStyle:{
                fontSize:20
            },
            subtextStyle:{
                fontSize:15,
                color:"#333"
            }
        },
        series: [
            {
                name: '健康指标',               //表名
                type: 'gauge',                  //类型
                center : ['40%', '90%'],        //表的位置
                radius : '120%',                 //大小
                min: 0,                         //最小值
                max: 100,                       //最大值
                startAngle: 180,                //起始角度
                endAngle: 0,                    //终了角度
                axisLine: {            // 坐标轴线
                    show: false,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.33, '#EB625F'],[0.66, '#4F5CB7'],[1, '#22A700']],
                        width: 30
                    }
                },
                axisTick: {                     // 坐标轴小标记
                    show: false
                },
                splitLine: {                    // 分隔线
                    show:false
                },
                axisLabel: {
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'dangerous';
                            case '100' : return 'security';
                        }
                    }
                },
                pointer: {
                    width:5
                },
                itemStyle:{
                    normal:{
                        color:"#384372"
                    }
                },
                detail: {
                    formatter:"",
                    width:100,
                    height:25,
                    offsetCenter:[0, '-120%'],
                    textStyle:{
                        color:"#fff",
                        fontWeight:"bold",
                        fontSize:10
                    }
                },
                data: [{value: 0}]
            }
        ]
    };
    healthChart.timeTicket = setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100)^0;
        option.series[0].detail.formatter=option.series[0].data[0].value<35?"Dangerous"
                                        :option.series[0].data[0].value<75?"Sub Health":"Health";
        option.series[0].detail.backgroundColor=option.series[0].data[0].value<35?"#EB625F"
            :option.series[0].data[0].value<75?"#4F5CB7":"#22A700";
        healthChart.setOption(option, true);
    },2000);
    healthChart.setOption(option);
    window.onresize = healthChart.resize;
});