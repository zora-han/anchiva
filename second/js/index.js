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
        var fDiv=$(href+" .tab-content>div:first-child");
        var fSpan=$(href+" .nav-tabs li:first-child a");
        var c=fDiv.css("display");
        if(c!=="block"){//默认显示每个页面的第一个模块
            fDiv.addClass("active").siblings("div").removeClass("active");
            fSpan.attr("aria-expanded","true").siblings("span").addClass("selected").parent().addClass("active").siblings("li").removeClass("active").children("a").attr("aria-expanded","false").siblings("span").removeClass("selected");
        }
        if(href==="#system-state"){
            //主机信息显示
            setTimeout(hInformation(),200);
            //自定义时间范围
            $("#selectEd").on("change",function () {
                hInformation($(this).val());
            });
            $("#selectEd1").on("change",function () {
                httpConcurrent($(this).val());
                httpCreate($(this).val());
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
            securityTrend("security-trend");
            attackSourceRanking('attack-source-ranking');
            attackPurposesRanking('attack-purposes-ranking');
            addData("attackSource");
            addData("attackPurposes");
            addData("mapData");
            attackMap("attack-map");
            $("#selectEd2").on("change",function () {
                securityTrend("security-trend",$(this).val());
            });
        }else if(href==="#WAF"){
            //第一行的三个数据
            dataM1();
            clearInterval(dataMTime1);
            dataMTime1=setInterval(dataM1,1000);
            //威胁安全趋势
            securityTrend("security-trend1");
            attackSourceRanking('attack-source-ranking1');
            attackPurposesRanking('attack-purposes-ranking1');
            addData("attackSource2");
            addData("attackPurposes2");
            addData("mapData2");
            attackMap("attack-map1");
            $("#selectEd3").on("change",function () {
                securityTrend("security-trend1",$(this).val());
            });
        }else if(href==="#intrusion-protection-strategy"){
            addData("intrusion");
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
            $("#selectEd2").val("");
        }else if(href==="#defense-time-monitoring"){
            $("#selectEd2").val("");
        }else if(href==="#exceptions-host"){
            addData("exceptions");
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
            marginRight: 0,
            marginLeft: 0,
            backgroundColor:"#F5F5F5",
            marginBottom: 0,
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
            tickWidth:0,
            lineWidth:0
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
                $(".details.r").html(data[data.length-1].y+"分");
                return data;
            }())
        }]
    });
    //安全事件
    $('#safe').highcharts({
        chart: {
            type: 'areaspline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 0,
            marginLeft: 0,
            backgroundColor:"#F5F5F5",
            marginBottom: 0,
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
            tickWidth:0,
            lineWidth:0
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
                $(".details.v").html(data[data.length-1].y+"次");
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
    var relationship=$("#attack-system-analysis-relationship"),
        relationshipPie=$("#attack-system-analysis-relationship-pie");
    $("#mapData,#mapData2").delegate("a", "click", function(e){
        e.preventDefault();
        attackData=tab("attackSystemData");
        var href=$(this)[0].hash;
        $(href).addClass("active").siblings("div").removeClass("active");
        console.log($(this).text());
        console.log($(this).parent().prev().text());
        attackRelationship(attackData);
        $(".filter-conditions ul li:first-child p").text("当前源："+attackData.data[0].target);
        $("#attackSystemData").addClass("active").siblings("table").removeClass("active");
        addData("attackSystemData");
        $("#attack-system-analysis-relationship~button").click(function(){
            $(this).siblings("button").removeAttr("disabled");
            $(this).attr("disabled","true");
            var div=$(this).siblings("div");
            if($(this)[0].className==="btn-right"){
                relationship.removeClass("active");
                relationshipPie.addClass("active");
                attackRelationshipPie(tab("attackSystemData"));
            }else{
                relationshipPie.removeClass("active");
                relationship.addClass("active");
                attackRelationship(tab("attackSystemData"));
            }
        });
    });
    $("#attackSource,#attackSource2").delegate("a:first-child", "click", function(e){
        e.preventDefault();//阻止跳转
        $(".filter-conditions ul li:first-child").siblings("li").removeClass("active");//清空过滤项
        var source="attackSystemDataSource",//攻击源排名
            href=$(this)[0].hash;//所点击a的href属性
        attackData=tab(source);//返回攻击源排名的对象
        $(href).addClass("active").siblings("div").removeClass("active");//显示关系图页面
        (relationship.css("display")==="block")? attackRelationship(attackData):attackRelationshipPie(attackData);//画图
        $(".filter-conditions ul li:first-child p").text("当前源："+attackData.data[0].target);//在页面上显示当前源
        $("#"+source).addClass("active").siblings("table").removeClass("active");//显示攻击源排名表格
        addData(source);//填充表格中内容
        $("#attack-system-analysis-relationship~button").click(function(){//按钮点击事件
            $(this).siblings("button").removeAttr("disabled");//让另一个按钮可用
            $(this).attr("disabled","true");//让自己不可用
            if($(this)[0].className==="btn-right"){//画饼图
                relationship.removeClass("active");
                relationshipPie.addClass("active");
                attackRelationshipPie(attackData);
            }else{                                  //画关系图
                relationshipPie.removeClass("active");
                relationship.addClass("active");
                attackRelationship(attackData);
            }
        });
        $("#"+source+" tbody,#filter1 tbody").delegate("a", "click", function(e){//表格过滤事件
            e.preventDefault();
            var href=$(this)[0].hash.slice(1);
            var value=$(this).text();
            var arr=[];
            $.each(attackData.data,function(i,n){
                if(n[href]===value){
                    arr.push(n)
                }
            });
            attackData.data=arr;
            filter1=attackData;
            if(relationship.css("display")==="block"){
                attackRelationship(attackData);
            }else{
                attackRelationshipPie(attackData);
            }
            $("#filter1").addClass("active").siblings("table").removeClass("active");
            addData("filter1");
            $("#"+href+" p").text(value).parent().addClass("active");
        });
        $(".filter-conditions ul li i").click(function(){
            attackData=tab(source);
            var li=$(this).parent().siblings().has("i");
            var lArr=[];
            var arr=[];
            $.each(li,function(i,n){
                if(n.className==="active"){
                    lArr.push({name:n.id,value:n.childNodes[1].innerHTML});
                }
            });
            if(lArr.length==2){
                $.each(attackData.data,function(i,n){
                    (n[lArr[0]["name"]]===lArr[0]["value"]&&n[lArr[0]["name"]]===lArr[0]["value"])&& arr.push(n);
                });
                attackData.data=arr;
            }else if(lArr.length==1){
                $.each(attackData.data,function(i,n){
                    (n[lArr[0]["name"]]===lArr[0]["value"])&& arr.push(n);
                });
                attackData.data=arr;
            }
            if(relationship.css("display")==="block"){
                attackRelationship(attackData);
            }else{
                attackRelationshipPie(attackData);
            }
            $(this).parent().removeClass("active");
            filter1=attackData;
            addData("filter1");
        })
    });
    $("#attackPurposes,#attackPurposes2").delegate("a", "click", function(e){
        e.preventDefault();//阻止跳转
        $(".filter-conditions ul li:first-child").siblings("li").removeClass("active");
        var source="attackSystemDataAttack",//攻击目的排名
            href=$(this)[0].hash;//所点击a的href属性
        attackData=tab("attackSystemDataAttack");
        $(href).addClass("active").siblings("div").removeClass("active");//显示关系图页面
        (relationship.css("display")==="block")? attackRelationship(attackData):attackRelationshipPie(attackData);//画图
        $(".filter-conditions ul li:first-child p").text("当前目的："+attackData.data[0].target);//在页面上显示当前目的
        $("#"+source).addClass("active").siblings("table").removeClass("active");//显示攻击目的排名表格
        addData(source);//填充表格中内容
        $("#attack-system-analysis-relationship~button").click(function(){
            $(this).siblings("button").removeAttr("disabled");//让另一个按钮可用
            $(this).attr("disabled","true");//让自己不可用
            if($(this)[0].className==="btn-right"){//画饼图
                relationship.removeClass("active");
                relationshipPie.addClass("active");
                attackRelationshipPie(attackData);
            }else{                                  //画关系图
                relationshipPie.removeClass("active");
                relationship.addClass("active");
                attackRelationship(attackData);
            }
        });
        $("#"+source+" tbody,#filter tbody").delegate("a", "click", function(e){//表格过滤事件
            e.preventDefault();
            var href=$(this)[0].hash.slice(1);
            var value=$(this).text();
            var arr=[];
            $.each(attackData.data,function(i,n){
                (n[href]===value)&& arr.push(n)
            });
            attackData.data=arr;
            filter=attackData;
            if(relationship.css("display")==="block"){
                attackRelationship(attackData);
            }else{
                attackRelationshipPie(attackData);
            }
            $("#filter").addClass("active").siblings("table").removeClass("active");
            addData("filter");
            $("#"+href+" p").text(value).parent().addClass("active");
        });
        $(".filter-conditions ul li i").click(function(){
            attackData=tab(source);
            var li=$(this).parent().siblings().has("i");
            var lArr=[];
            var arr=[];
            $.each(li,function(i,n){
                if(n.className==="active"){
                    lArr.push({name:n.id,value:n.childNodes[1].innerHTML});
                }
            });
            if(lArr.length==2){
                $.each(attackData.data,function(i,n){
                    (n[lArr[0]["name"]]===lArr[0]["value"]&&n[lArr[0]["name"]]===lArr[0]["value"])&& arr.push(n);
                });
                attackData.data=arr;
            }else if(lArr.length==1){
                $.each(attackData.data,function(i,n){
                    (n[lArr[0]["name"]]===lArr[0]["value"])&& arr.push(n);
                });
                attackData.data=arr;
            }
            if(relationship.css("display")==="block"){
                attackRelationship(attackData);
            }else{
                attackRelationshipPie(attackData);
            }
            $(this).parent().removeClass("active");
            filter=attackData;
            addData("filter");
        })
    });
});