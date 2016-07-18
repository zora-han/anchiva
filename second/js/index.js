/**
 * Created by Secret on 2016/7/14.
 */
//基础动效
$(function(){
    //时间显示
    setInterval(function(){
        $("#clock").text(moment().format("h:mm:ss"));
    },10);
    //表格切换
    //function tab(idName){
    //    var virus=[
    //        {id:0,ip:"1.1.1.1",count:1000},
    //        {id:1,ip:"1.1.1.1",count:1000},
    //        {id:2,ip:"1.1.1.1",count:1000},
    //        {id:3,ip:"1.1.1.1",count:1000},
    //        {id:4,ip:"1.1.1.1",count:1000},
    //        {id:5,ip:"1.1.1.1",count:1000},
    //        {id:6,ip:"1.1.1.1",count:1000},
    //        {id:7,ip:"1.1.1.1",count:1000},
    //        {id:8,ip:"1.1.1.1",count:1000},
    //        {id:9,ip:"1.1.1.1",count:1000}
    //    ];
    //    var net=[
    //        {id:0,ip:"1.1.2.2",count:1000},
    //        {id:1,ip:"1.1.1.1",count:1000},
    //        {id:2,ip:"1.1.1.1",count:1000},
    //        {id:3,ip:"1.1.1.1",count:1000},
    //        {id:4,ip:"1.1.1.1",count:1000},
    //        {id:5,ip:"1.1.1.1",count:1000},
    //        {id:6,ip:"1.1.1.1",count:1000},
    //        {id:7,ip:"1.1.1.1",count:1000},
    //        {id:8,ip:"1.1.1.1",count:1000},
    //        {id:9,ip:"1.1.1.1",count:1000}
    //    ];
    //    var application=[
    //        {id:0,ip:"1.1.3.3",count:1000},
    //        {id:1,ip:"1.1.1.1",count:1000},
    //        {id:2,ip:"1.1.1.1",count:1000},
    //        {id:3,ip:"1.1.1.1",count:1000},
    //        {id:4,ip:"1.1.1.1",count:1000},
    //        {id:5,ip:"1.1.1.1",count:1000},
    //        {id:6,ip:"1.1.1.1",count:1000},
    //        {id:7,ip:"1.1.1.1",count:1000},
    //        {id:8,ip:"1.1.1.1",count:1000},
    //        {id:9,ip:"1.1.1.1",count:1000}
    //    ];
    //    var virus1=[
    //        {id:123113,time:"2016/7/14 16：39：02",type:"Trojan",name:"Trojan/Agent.9fe1!drop"}
    //    ];
    //    var net1=[
    //        {id:14678641,time:"2016/7/14 16：39：02",type:"Trojan",name:"Trojan/Agent.9fe1!drop"}
    //    ];
    //    var application1=[
    //        {id:1546542,time:"2016/7/14 16：39：02",type:"Trojan",name:"Trojan/Agent.9fe1!drop"}
    //    ];
    //    switch (idName){
    //        case "virus":return virus;break;
    //        case "application":return application;break;
    //        case "net":return net;break;
    //        case "virus1":return virus1;break;
    //        case "net1":return net1;break;
    //        case "application1":return application1;
    //    }
    //}
    $(".portlet-title ul li").click(function(e){
        e.preventDefault();
        var href=$(this).children("a").attr("href");
        $(href).show().siblings("table").hide();
        $(this).attr("class","active").siblings("li").removeClass("active");
        //var data=tab(href.slice(1));
        //var fragment=document.createDocumentFragment();
        //for(var i=0;i<data.length;i++){
        //    var tr=document.createElement("tr");
        //    console.log(data[0].length);
        //    if(data[0].length==3){
        //        var td=document.createElement("td");
        //        for(var key in data[i]) {
        //            console.log("sadsad");
        //            if(key==="id"){continue;}
        //            td.innerHTML=data[i][key];
        //            tr.appendChild(td);
        //        }
        //    }else if(data[0].length==4){
        //        for(var key in data[i]) {
        //            console.log("4534");
        //            if(key==="id"){continue;}
        //            td.innerHTML=data[i][key];
        //            tr.appendChild(td);
        //        }
        //    }
        //    fragment.appendChild(tr);
        //    console.log(tr);
        //}
        //$(href).children("tbody").append(fragment);
    });
    //左侧导航栏切换
    $(".page-sidebar-menu>.nav-item a").click(function(){
        $(this).parent().addClass("open").siblings("li").children("ul").hide();
        $(this).siblings().show();
    });
    $(".sub-menu>.nav-item a").click(function(e){
        e.preventDefault();
    })
});
//表格数据载入
//饼图
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
//仪表盘
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
        series: {
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
                data: {value: 0}
        }
    };
    healthChart.timeTicket = setInterval(function () {
        option.series.data.value = (Math.random() * 100)^0;
        option.series.detail.formatter=option.series.data.value<35?"Dangerous"
            :option.series.data.value<75?"Sub Health":"Health";
        option.series.detail.backgroundColor=option.series.data.value<35?"#EB625F"
            :option.series.data.value<75?"#4F5CB7":"#22A700";
        healthChart.setOption(option, true);
    },2000);
    healthChart.setOption(option);
    window.onresize = healthChart.resize;
});
//两个面积图
$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        $('#risk').highcharts({
            chart: {
                type: 'areaspline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = (Math.random()*100)^0;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: '威胁风险',
                style:{
                    color:"#333",
                    fontSize:25,
                    fontWeight: 'bold'
                },
                floating: true,
                align:"right",
                y:30
            },
            subtitle: {
                text: '当前风险状况',
                align:"right",
                style:{
                    color:"#333",
                    fontSize:18
                },
                y:50
            },
            legend: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150,
                labels:{
                    enabled: false
                },
                tickWidth:0
            },
            yAxis: {
                title:null,
                gridLineWidth: 0,
                labels:{
                    enabled: false
                }
            },
            tooltip: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5,
                    fillColor:"#dde4f0",
                    lineWidth:0
                }
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: (Math.random()*100)^0
                        });
                    }
                    return data;
                }())
            }]
        });
        console.log($('#risk').highcharts.series);
        $('#safe').highcharts({
            chart: {
                type: 'areaspline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = (Math.random()*100)^0;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: '安全事件',
                style:{
                    color:"#333",
                    fontSize:25,
                    fontWeight: 'bold'
                },
                floating: true,
                align:"right",
                y:30
            },
            subtitle: {
                text: '当前事件统计',
                align:"right",
                style:{
                    color:"#333",
                    fontSize:18
                },
                y:50
            },
            legend: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150,
                labels:{
                    enabled: false
                },
                tickWidth:0
            },
            yAxis: {
                title:null,
                gridLineWidth: 0,
                labels:{
                    enabled: false
                }
            },
            tooltip: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5,
                    fillColor:"#D8EAC5",
                    lineWidth:0
                }
            },
            series: [{
                name: 'Random data',
                marker: {
                    fillColor: '#A3D56F',
                    lineWidth: 0
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: (Math.random()*100)^0
                        });
                    }
                    return data;
                }()),
                dataLabels:{
                    show:true
                }
            }]
        });
    });
});
//自身状态
$(function(){
    var span=$(".portlet-body .out-box .box span");
    for(var i=0;i<span.length;i++){
        var img=span[i].dataset.img;
        if(img==="0"){
            span[i].innerHTML="<img src='imgs/down.png'>";
        }else{
            span[i].innerHTML="<img src='imgs/up.png'>";
        }
    }

});