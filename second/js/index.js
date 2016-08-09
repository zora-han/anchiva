/*Created by Secret on 2016/7/14.*/
$(document).ready(function () {
    //时间显示
    setInterval(function(){
        $("#clock").text(moment().format("h:mm:ss"));
    },100);
    health();//自身健康
    event();//事件分类
    addData('virus');//第二行表格
    addData('virus1');//第三行表格
    //自身状态
    var span=$(".state span");
    setInterval(function(){
        for(var i = 0; i < span.length; i++){
            span[i].dataset.img=Math.random()>0.5?1:0;
            var img = span[i].dataset.img;
            if(img === "0"){span[i].innerHTML = "<img src='imgs/down.png'>";}
            else{span[i].innerHTML = "<img src='imgs/up.png'>";}
        }
    },1000);
    var dataMTime,dataMTime1,progressBarTime;
    //表格按钮切换
    $(".table-bars li").click(function(e){
        e.preventDefault();
        var href=$(this).children("a").attr("href");
        $(href).addClass("active").siblings("table").removeClass("active");
        $(this).addClass("active").siblings("li").removeClass("active");
        addData(href.slice(1));
    });
    //左侧导航栏切换
    $(".page-sidebar-menu>.nav-item a").click(function(e){
        e.preventDefault();
        $(this).parent().siblings("li").children("ul").hide().children("li").removeClass("active").removeClass("open");
        var href=$(this).attr("href");
        if(href.slice(0,1)==="#"){
            $(href).addClass("active").siblings("div").removeClass("active");
            $(this).parent().addClass("active").addClass("open").siblings("li").removeClass("active").removeClass("open");
        }
        if(href==="#control"){
            setTimeout(event,200);
            setTimeout(health,200);
        }
    });
    $(".sub-menu>.nav-item a").click(function(e){
        e.preventDefault();
        $(this).parent().siblings("li").removeClass("active").removeClass("open");
        $(this).parent().parent().parent().siblings("li").removeClass("open").removeClass("active");
        var href=$(this)[0].hash;
        if(href==="#system-state"){
            //主机信息显示
            setTimeout(hInformation(),200);
            //自定义时间范围
            $("#selectEd").on("change",function () {
                var selectEd = $(this).val();
                if(selectEd==0){
                    $("#myModal").modal("show");
                    $(this).val("");
                }else{
                    hInformation($(this).val());
                }
            });
            $("#selectEd1").on("change",function () {
                var selectEd = $(this).val();
                if(selectEd==0){
                    $("#myModal1").modal("show");
                    $(this).val("");
                }else{
                    httpConcurrent($(this).val());
                    httpCreate($(this).val());
                }
            });
            //使用产品天数
            var oldTime=new Date("2015/9/12 13:00:05");
            setInterval(function(){
                var newTime=new Date();
                $(".h-text span.days").text(timeDifference(oldTime,newTime));
                $(".input-append.date.form_datetime").attr("data-date",newTime);
            },200);
            //进度条
            progressBar();
            clearInterval(progressBarTime);
            progressBarTime=setInterval(progressBar,15000);
        }else if(href==="#monitoring-defense"){
            //第一行的三个数据
            dataM();
            clearInterval(dataMTime);
            dataMTime=setInterval(dataM,1000);
            //威胁安全趋势
            securityTrend();
            attackSourceRanking();
            attackPurposesRanking();
            addData("attackSource");
            addData("attackPurposes");
            addData("mapData");
            attackMap();
            $("#selectEd2").on("change",function () {
                var selectEd = $(this).val();
                if(selectEd==0){
                    $("#myModa2").modal("show");
                    $(this).val("");
                }else{
                    securityTrend($(this).val());
                }
            });
        }else if(href==="#WAF"){
            //第一行的三个数据
            dataM1();
            clearInterval(dataMTime1);
            dataMTime1=setInterval(dataM1,1000);
            //威胁安全趋势
            securityTrend1();
            attackSourceRanking1();
            attackPurposesRanking1();
            addData("attackSource");
            addData("attackPurposes");
            addData("mapData");
            attackMap1();
            $("#selectEd3").on("change",function () {
                var selectEd = $(this).val();
                if(selectEd==0){
                    $("#myModa3").modal("show");
                    $(this).val("");
                }else{
                    securityTrend1($(this).val());
                }
            });
        }
    });
    //切换标签调用图表
    $(".nav-tabs li a").click(function(){
        var href=$(this)[0].hash;
        if(href==="#session-information"){
            setTimeout(httpConcurrent,200);
            setTimeout(httpCreate,200);
            addData("session");
            $("#selectEd").val("");
            $("#selectEd1").val("");
        }else if(href==="#system-information"){
            setTimeout(hInformation,200);
            $("#selectEd").val("");
            $("#selectEd1").val("");
        }else if(href==="#defense-basic-situation"){
            setTimeout(securityTrend,200);
            setTimeout(attackSourceRanking,200);
            setTimeout(attackPurposesRanking,200);
            setTimeout(attackMap,200);
        }
        $(this).siblings("span").addClass("selected");
    });
    //highcharts图表
    Highcharts.setOptions({
        global: {
            useUTC: false
            }
    });
    //威胁风险
    $('#risk').highcharts({
        chart: {
            type: 'areaspline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            style:{
                backgroundColor:"#F5F5F5"
            },
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = random(0,100);
                        series.addPoint([x, y], true, true);
                        $(".details.r").html(y+"分");
                    }, 1000);
                }
            }
        },
        title: {
            text: '威胁风险',
            style:{
                color:"#333",
                fontSize:20,
                fontWeight: 'bold',
                fontFamily:"Microsoft YaHei"
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
                fontSize:15,
                fontFamily:"Microsoft YaHei"
            },
            y:56
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
                        y: random(0,100)
                    });
                }
                return data;
            }())
        }]
    });
    //安全事件
    $('#safe').highcharts({
        chart: {
            type: 'areaspline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            style:{
                backgroundColor:"#F5F5F5"
            },
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = random(0,100);
                        series.addPoint([x, y], true, true);
                        $(".details.v").html(y+"次");
                    }, 1000);
                }
            }
        },
        title: {
            text: '安全事件',
            style:{
                color:"#333",
                fontSize:20,
                fontWeight: 'bold',
                fontFamily:"Microsoft YaHei"
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
                fontSize:15,
                fontFamily:"Microsoft YaHei"
            },
            y:56
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
            data:(function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: random(0,100)
                    });
                }
                return data;
            }()),
            dataLabels:{
                show:true
            }
        }]
    });
    //下拉框隐藏首选项
    $("select option[value='']").hide();
    //表格连接切换
    $("#mapData").delegate("a", "click", function(e){
        e.preventDefault();
        var href=$(this)[0].hash;
        $(href).addClass("active").siblings("div").removeClass("active");
        console.log($(this).text());
        console.log($(this).parent().prev().text());
        attackRelationship();
        $("#attack-system-analysis-relationship+p").text("当前"+attackData.data[0].target);
        addData("attackSystemData");
    });
    $("#attack-system-analysis-relationship~button").click(function(){
        $(this).siblings("button").removeAttr("disabled");
        $(this).attr("disabled","true");
        var div=$(this).siblings("div");
        if($(this)[0].className==="btn-right"){
            attackRelationshipPie();
            div.children().css("background-image","url(imgs/1_04.jpg)");
        }else{
            attackRelationship();
            div.children().css("background-image","url(imgs/1_03.png)");
        }
    });
});