/**
 * Created by Secret on 2016/8/9.
 */
//计算随机数函数
function random(min,max){
    return (Math.random()*(max-min)+min)^0;
}
//横轴显示时间格式
function format1(date){
    var h=date.getHours();//获得小时，保存在h中
    h<10&&(h="0"+h);//如果h<10，就变为0+h
    var m=date.getMinutes();//获得分钟，保存在m中
    m<10&&(m="0"+m);//如果m<10,就变为0+m
    return h+":"+m;
}
//告警和事件的数量
var spans=$(".title span");
var riskBase=random(0,200);//告警数量的基数
var eventBase=random(riskBase,999);//事件数量的基数
function titleNum(){
    $.each(spans,function(i,n){
        if(i==0){
            n.innerHTML=riskBase;
        }else{

            n.innerHTML=eventBase;
        }
    });
    risk=riskBase;
}
//进度条
var bars=$(".progress-bar");
function progressBar(){
    $.each(bars,function(i,n){
        var account=random(0,100);
        n["aria-valuenow"]=account;
        n.style.width=account+"%";
        n.parentNode.nextElementSibling.childNodes[1].innerHTML=account+"%";
    });
}



//风险值图
function riskValue(){
    var riskValueChart=echarts.init(document.getElementById('risk-value'));
    var dataS, dataF;
    var SItem={
        normal : {
            color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#7E3FCA' // 0% 处的颜色
            }, {
                offset: 1, color: '#4446D3' // 100% 处的颜色
            }], false)
        }
    };
    var FItem={
        normal : {
            color:"#737781",
                label : {
                formatter : '{b}',
                    textStyle: {
                    fontSize:20
                }
            }
        }
    };

    function dataGeng(){
        dataS=(riskBase/10)^0;
        dataF=100-dataS;
    }
    optionRiskValue= {
        series : [
            {
                type : 'pie',
                center : ['50%', '53%'],
                radius : [95, 105],
                hoverAnimation:false,
                label:{
                    normal:{
                        position : 'center',
                        show:true,
                        formatter : function (params){
                            return params.value
                        },
                        textStyle: {
                            fontSize:70,
                            color:"#fff"
                        }
                    }
                },
                labelLine : {
                    normal:{
                        show : false
                    }
                },
                data : [
                    {
                        name:'score',
                        value:dataS,
                        itemStyle : SItem
                    },
                    {
                        name:'风险值',
                        value:dataF,
                        itemStyle : FItem
                    }
                ]
            }
        ]
    };
    function geng(){
        dataGeng();
        riskValueChart.setOption({
            series: [{
                data:[
                    {name:'score',value:dataS,itemStyle : SItem},
                    {name:'风险值',value:dataF,itemStyle : FItem}
                ]
            }]
        });
    }
    riskValueChart.setOption(optionRiskValue);
    geng();
    riskValueChart.timeTicket = setInterval(geng,1000);
    window.onresize=riskValueChart.resize;
}

//进度条显示
progressBar();

//数值显示
titleNum();
setInterval(function(){
    $.each(spans,function(i,n){
        if(i==0){
            riskBase+=random(0,50);
            n.innerHTML=riskBase;
        }else{
            eventBase+=random(500,1000);
            n.innerHTML=eventBase;
        }
    });
    if(riskBase>1000){
        $.each(spans,function(i,n){
            if(i==0){
                riskBase=random(0,200);
                n.innerHTML=riskBase;
            }else{
                eventBase=random(riskBase,999);
                n.innerHTML=eventBase;
            }
        });
        progressBar();
    }
},3000);


//网络线图
function netLine(){
    var netChart=echarts.init(document.getElementById('net'));
    var interval=5*60*1000;//每5分钟1个数据
    var count=12;//1小时内有12个数据
    var now=new Date(new Date()-3600*1000);//当前时间往前推算1个小时
    var data1 = [];
    var data2 = [];
    var date = [];
    function addData(shift) {
        data1.push(random(0,999));
        data2.push(random(0,999));
        date.push(format1(now));
        if (shift) {
            data1.shift();
            data2.shift();
            date.shift();
        }
        now = new Date(+new Date(now) + interval);
    }
    for (var i = 0; i < count; i++) {addData();}
    optionNet = {
        title : {
            text: '网络',
            left:20,
            top:25,
            textStyle:{
                color:"#505f91",
                fontSize:24
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        color:["#3e4efd","#683caf"],
        grid:{
            left:35,
            right:100,
            top:100
        },
        legend: {
            data:['实时流量','历史基线'],
            align:"right",
            right:100,
            top:45,
            textStyle:{
                color:"#9fc3ff"
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                name:"时间",
                nameTextStyle:{
                    color:"#505f91",
                    fontSize:16
                },
                boundaryGap : false,
                data : date,
                axisLabel:{
                    textStyle:{
                        color:"#9fc3ff"
                    }
                },
                axisTick:{
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:"#9fc3ff"
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name:"流量",
                nameTextStyle:{
                    color:"#505f91",
                    fontSize:16
                },
                axisLabel:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:"#9fc3ff"
                    }
                },
                splitLine:{
                    lineStyle:{
                        type:'dashed',
                        color:"#2A3341"
                    }
                },
                boundaryGap:[0,"30%"]
            }
        ],
        series : [
            {
                name:'实时流量',
                type:'line',
                symbolSize:0,
                symbol:"rect",
                smooth:true,
                areaStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#3e4efd' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#000' // 100% 处的颜色
                        }], false)
                    }
                },
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:data1
            },
            {
                name:'历史基线',
                type:'line',
                symbolSize:0,
                symbol:"rect",
                smooth:true,
                areaStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#683caf' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#000' // 100% 处的颜色
                        }], false)
                    }
                },
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:data2
            }
        ]
    };
    function geng() {
        addData(true);
        netChart.setOption({
            xAxis: {
                data: date
            },
            series: [
                {data: data1},
                {data: data2}
            ]
        });
    }
    netChart.setOption(optionNet);
    geng();
    netChart.timeTicket = setInterval(geng,5000);
    window.onresize=netChart.resize;
}
//主机线图
function hostLine(){
    var hostChart=echarts.init(document.getElementById('host'));
    var interval=5*60*1000;//每5分钟1个数据
    var count=12;//1小时内有12个数据
    var now=new Date(new Date()-3600*1000);//当前时间往前推算1个小时
    var data1 = [];
    var data2 = [];
    var date = [];
    var dat1=0;
    function addData(shift) {
        dat1=random(100,799);
        data1.push(dat1);//成功
        data2.push(random(0,dat1-50));
        date.push(format1(now));
        if (shift) {
            data1.shift();
            data2.shift();
            date.shift();
        }
        now = new Date(+new Date(now) + interval);
    }
    for (var i = 0; i < count; i++) {addData();}
    optionHost = {
        title : {
            text: '主机',
            left:50,
            top:25,
            textStyle:{
                color:"#505f91",
                fontSize:24
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        color:["#5d7c10","#f3ab01"],
        grid:{
            left:50,
            top:100
        },
        legend: {
            data:['登录次数','失败次数'],
            align:"right",
            right:100,
            top:45,
            textStyle:{
                color:"#9fc3ff"
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                name:"时间",
                nameTextStyle:{
                    color:"#505f91",
                    fontSize:16
                },
                boundaryGap : false,
                data : date,
                axisLabel:{
                    textStyle:{
                        color:"#9fc3ff"
                    }
                },
                axisTick:{
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:"#9fc3ff"
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name:"登录",
                nameTextStyle:{
                    color:"#505f91",
                    fontSize:16
                },
                axisLabel:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:"#9fc3ff"
                    }
                },
                splitLine:{
                    lineStyle:{
                        type:'dashed',
                        color:"#2A3341"
                    }
                },
                boundaryGap:[0,"30%"]
            }
        ],
        series : [
            {
                name:'登录次数',
                type:'line',
                symbolSize:0,
                symbol:"rect",
                areaStyle:{
                    normal:{
                        color: "transparent"
                    }
                },
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:data1
            },
            {
                name:'失败次数',
                type:'line',
                symbolSize:0,
                symbol:"rect",
                areaStyle:{
                    normal:{
                        color: "transparent"
                    }
                },
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:data2
            }
        ]
    };
    function geng() {
        addData(true);
        hostChart.setOption({
            xAxis: {
                data: date
            },
            series: [
                {data: data1},
                {data: data2}
            ]
        });
    }
    hostChart.setOption(optionHost);
    geng();
    hostChart.timeTicket = setInterval(geng,5000);
    window.onresize=hostChart.resize;
}
//所有Morris的donut图
var colors=["#5AD12A","#3553E7","#7C2BF4","#95B806","#23BDDF","#0EB98F"];
var handleMorrisDonusChart1=function(){
    var a,b,c,d,e,f;
    a=random(0,50);
    b=random(0,100-a);
    c=random(0,100-a-b);
    d=random(0,100-a-b-c);
    e=random(0,100-a-b-c-d);
    f=100-a-b-c-d-e;
    Morris.Donut(
        {
            element:"network-behavior",
            data:[
                {label:"HTTP",value:a},
                {label:"QQ",value:b},
                {label:"迅雷",value:c},
                {label:"优酷",value:d},
                {label:"微信",value:e},
                {label:"钉钉",value:f}
            ],
            formatter:function(e){return e+"%"},
            resize:true,
            colors:colors,
            labelColor: '#ddd'
        })
};
var handleMorrisDonusChart2=function(){
    var a,b,c,d,e;
    a=random(0,50);
    b=random(0,100-a);
    c=random(0,100-a-b);
    d=random(0,100-a-b-c);
    e=100-a-b-c-d;
    Morris.Donut(
        {
            element:"network-attack",
            data:[
                {label:"端口扫描",value:a},
                {label:"SQL注入",value:b},
                {label:"XSS",value:c},
                {label:"UDP Flood",value:d},
                {label:"口令猜解",value:e}
            ],
            formatter:function(e){return e+"%"},
            resize:true,
            colors:colors,
            labelColor: '#ddd'
        })
};
var handleMorrisDonusChart3=function(){
    var a,b,c,d,e;
    a=random(0,50);
    b=random(0,100-a);
    c=random(0,100-a-b);
    d=random(0,100-a-b-c);
    e=100-a-b-c-d;
    Morris.Donut(
        {
            element:"DNS-hijacking",
            data:[
                {label:"192.168.1.7",value:a},
                {label:"102.165.13.2",value:b},
                {label:"168.17.13.2",value:c},
                {label:"111.101.12.5",value:d},
                {label:"101.101.120.51",value:e}
            ],
            formatter:function(e){return e+"%"},
            resize:true,
            colors:colors,
            labelColor: '#ddd'
        })
};
var handleMorrisDonusChart4=function(){
    var a,b,c,d,e;
    a=random(0,50);
    b=random(0,100-a);
    c=random(0,100-a-b);
    d=random(0,100-a-b-c);
    e=100-a-b-c-d;
    Morris.Donut(
        {
            element:"high-risk-access",
            data:[
                {label:"僵尸网络",value:a},
                {label:"恶意URL",value:b},
                {label:"钓鱼网站",value:c},
                {label:"C2服务器",value:d},
                {label:"恶意程序下载",value:e}
            ],
            formatter:function(e){return e+"%"},
            resize:true,
            colors:colors,
            labelColor: '#ddd'
        })
};
var handleMorrisDonusChart5=function(){
    var a,b,c,d,e;
    a=random(0,50);
    b=random(0,100-a);
    c=random(0,100-a-b);
    d=random(0,100-a-b-c);
    e=100-a-b-c-d;
    Morris.Donut(
        {
            element:"distribution-virus",
            data:[
                {label:"PUA.Generic",value:a},
                {label:"Adware Swift",value:b},
                {label:"Trojan.Crypto",value:c},
                {label:"Viurs.Ramnit",value:d},
                {label:"Ransom.Lockly",value:e}
            ],
            formatter:function(e){return e+"%"},
            resize:true,
            colors:colors,
            labelColor: '#ddd'
        })
};
var handleMorrisDonusChart6=function(){
    var a,b,c,d,e;
    a=random(0,50);
    b=random(0,100-a);
    c=random(0,100-a-b);
    d=random(0,100-a-b-c);
    e=100-a-b-c-d;
    Morris.Donut(
        {
            element:"vulnerability-distribution",
            data:[
                {label:"111.102.9.3",value:a},
                {label:"168.2.30.5",value:b},
                {label:"151.2.6.3",value:c},
                {label:"172.24.10.86",value:d},
                {label:"168.2.0.5",value:e}
            ],
            formatter:function(e){return e+"%"},
            resize:true,
            colors:colors,
            labelColor: '#ddd'
        })
};
var handleMorrisDonusChart7=function(){
    var a,b;
    a=random(50,100);
    b=100-a;
    Morris.Donut(
        {
            element:"host-baseline",
            data:[
                {label:"合规",value:a},
                {label:"违规",value:b}
            ],
            formatter:function(e){return e+"%"},
            resize:true,
            colors:colors,
            labelColor: '#ddd'
        })
};
var MorrisChart=function(){
    "use strict";
    return{
        init:function(){
            handleMorrisDonusChart1();
            handleMorrisDonusChart2();
            handleMorrisDonusChart3();
            handleMorrisDonusChart4();
            handleMorrisDonusChart5();
            handleMorrisDonusChart6();
            handleMorrisDonusChart7();
            setInterval(function(){
                    $("#network-behavior").empty();
                    handleMorrisDonusChart1();
                    $("#network-attack").empty();
                    handleMorrisDonusChart2();
                    $("#DNS-hijacking").empty();
                    handleMorrisDonusChart3();
                    $("#high-risk-access").empty();
                    handleMorrisDonusChart4();
                    $("#distribution-virus").empty();
                    handleMorrisDonusChart5();
                    $("#vulnerability-distribution").empty();
                    handleMorrisDonusChart6();
                    $("#host-baseline").empty();
                    handleMorrisDonusChart7();
            },5000);
        }
    }
}();
var Echarts=function(){
    "use strict";
    return{
        init:function(){
            netLine();
            hostLine();
            riskValue();
        }
    }
}();

$(document).ready(function() {
    MorrisChart.init();
    Echarts.init();
});

function upData(){
    $(".time").text(format(new Date()));
    $(".ip").text(random(0,255)+"."+random(0,255)+"."+random(0,255)+"."+random(0,255));
    $(".percentage").text(random(0,100)+"%")
}
function format(date){
    var y=date.getFullYear();//获得年份，保存在y中
    var M=date.getMonth()+1;//获得月份，+1后保存在M中
    M<10&&(M="0"+M);//如果M<10,就变为0+M
    var d=date.getDate();//获得日期，保存在d中
    d<10&&(d="0"+d);//如果d<10,就变为0+d
    var h=date.getHours();//获得小时，保存在h中
    h<10&&(h="0"+h);//如果h<10，就变为0+h
    var m=date.getMinutes();//获得分钟，保存在m中
    m<10&&(m="0"+m);//如果m<10,就变为0+m
    var s=date.getSeconds();//获得秒数，保存在s中
    s<10&&(s="0"+s);//如果s<10,就变为0+s
    return y+"-"+M+"-"+d+" "+h+":"+m+":"+s;
}
upData();
$(".pull-down").click(function(){
    $(this).siblings().addClass(" animated infinite flipInX");
    upData();
    setTimeout(function(){
        $(".dashboard-stat-right").removeClass("flipInX");
    },1000);
});