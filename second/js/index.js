/**
 * Created by Secret on 2016/7/14.
 */
//1页面内所需要的所有函数
    //1.1动态表格
        //1.1.1动态表格所需数据
        function tab(idName){
            //病毒感染源
            var virus = {
                'record_count':50,	/*总记录数*/
                'page_size':10,		/*每页的记录数*/
                'page_count':5,		/*总页数*/
                'cur_page':1,		/*当前页号*/
                'data':[			/*当前页中的数据*/
                    {id:0,ip:"1.1.1.1",count:1000},
                    {id:1,ip:"1.1.1.1",count:1000},
                    {id:2,ip:"1.1.1.1",count:1000},
                    {id:3,ip:"1.1.1.1",count:1000},
                    {id:4,ip:"1.1.1.1",count:1000},
                    {id:5,ip:"1.1.1.1",count:1000},
                    {id:6,ip:"1.1.1.1",count:1000},
                    {id:7,ip:"1.1.1.1",count:1000},
                    {id:8,ip:"1.1.1.1",count:1000},
                    {id:9,ip:"1.1.1.1",count:1000}
                ]
            };
            //网络入侵源
            var net = {
                'record_count':50,	/*总记录数*/
                'page_size':10,		/*每页的记录数*/
                'page_count':5,		/*总页数*/
                'cur_page':1,		/*当前页号*/
                'data':[			/*当前页中的数据*/
                    {id:0,ip:"2.2.2.2",count:1000},
                    {id:1,ip:"2.2.2.2",count:1000},
                    {id:2,ip:"2.2.2.2",count:1000},
                    {id:3,ip:"2.2.2.2",count:1000},
                    {id:4,ip:"2.2.2.2",count:1000},
                    {id:5,ip:"2.2.2.2",count:1000},
                    {id:6,ip:"2.2.2.2",count:1000},
                    {id:7,ip:"2.2.2.2",count:1000},
                    {id:8,ip:"2.2.2.2",count:1000},
                    {id:9,ip:"2.2.2.2",count:1000}
                ]
            };
            //应用事件源
            var application = {
                'record_count':50,	/*总记录数*/
                'page_size':10,		/*每页的记录数*/
                'page_count':5,		/*总页数*/
                'cur_page':1,		/*当前页号*/
                'data':[			/*当前页中的数据*/
                    {id:0,ip:"3.3.3.3",count:1000},
                    {id:1,ip:"3.3.3.3",count:1000},
                    {id:2,ip:"3.3.3.3",count:1000},
                    {id:3,ip:"3.3.3.3",count:1000},
                    {id:4,ip:"3.3.3.3",count:1000},
                    {id:5,ip:"3.3.3.3",count:1000},
                    {id:6,ip:"3.3.3.3",count:1000},
                    {id:7,ip:"3.3.3.3",count:1000},
                    {id:8,ip:"3.3.3.3",count:1000},
                    {id:9,ip:"3.3.3.3",count:1000}
                ]
            };
            //病毒感染
            var virus1 = {
                'record_count':25,	/*总记录数*/
                'page_size':8,		/*每页的记录数*/
                'page_count':5,		/*总页数*/
                'cur_page':1,		/*当前页号*/
                'data':[			/*当前页中的数据*/
                    {id:123113,time:"2016/7/14 16：39：02",type:"Trojan",name:"Trojan/Agent.9fe1!drop"}
                ]
            };
            //网络入侵
            var net1 = {
                'record_count':25,	/*总记录数*/
                'page_size':8,		/*每页的记录数*/
                'page_count':5,		/*总页数*/
                'cur_page':1,		/*当前页号*/
                'data':[			/*当前页中的数据*/
                    {id:46576821,time:"2016/7/14 16：39：02",type:"Trojan",name:"Trojan/Agent.9fe1!drop"}
                ]
            };
            //应用事件
            var application1 = {
                'record_count':25,	/*总记录数*/
                'page_size':8,		/*每页的记录数*/
                'page_count':5,		/*总页数*/
                'cur_page':1,		/*当前页号*/
                'data':[			/*当前页中的数据*/
                    {id:214654,time:"2016/7/14 16：39：02",type:"Trojan",name:"Trojan/Agent.9fe1!drop"}
                ]
            };
            //接口信息
            var session = {
                'record_count':25,	/*总记录数*/
                'page_size':8,		/*每页的记录数*/
                'page_count':5,		/*总页数*/
                'cur_page':1,		/*当前页号*/
                'data':[			/*当前页中的数据*/
                    {id:0,interface:"eth0",IP:"192.168.1.1",state:"UP",mode:"路由",TxPacket:"2，113",ErrorPacket:55,RxPacket:"5，122",Error:44},
                    {id:1,interface:"eth1",IP:"172.2.1.11",state:"DOWN",mode:"透明",TxPacket:"4，221",ErrorPacket:37,RxPacket:"6，23",Error:12}
                ]
            };
            switch (idName){
                case "virus":return virus;break;
                case "application":return application;break;
                case "net":return net;break;
                case "virus1":return virus1;break;
                case "net1":return net1;break;
                case "application1":return application1;
                case "session":return session;
            }
        }
        //1.1.2动态添加表格及内容
        function addData(name){
            var tabName=tab(name);
            var str="",c=name.charAt(name.length-1);
            if(name==="session"){
                $.each(tabName.data,function(i,n){
                    str+='<tr><td>'
                    +n.interface+'</td><td>'
                    +n.IP+'</td><td>'
                    +n.state+'</td><td>'
                    +n.mode+'</td><td>'
                    +n.TxPacket+'</td><td>'
                    +n.ErrorPacket+'</td><td>'
                    +n.RxPacket+'</td><td>'
                    +n.Error+'</td></tr>';
                });
                var q=10-tabName.data.length;
                for(var m=0;m<q;m++){
                    str+='<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
                }
            }else if(c.toString()==="1"){
                $.each(tabName.data,function(i,n){
                    str+='<tr><td>'
                    +n.id+'</td><td>'
                    +n.time+'</td><td>'
                    +n.type+'</td><td>'
                    +n.name+'</td></tr>';
                });
                var ye=8-tabName.data.length;
                for(var i=0;i<ye;i++){
                    str+='<tr><td></td><td></td><td></td><td></td></tr>';
                }
            }else{
                $.each(tabName.data,function(i,n){
                    str+='<tr><td>' +n.ip+'</td><td>' +n.count+'</td>'
                    +'<td><a href="#"><img src="imgs/u300.png" alt=""/></a></td>'
                    +'<td><a href="#"><img src="imgs/u298.png" alt=""/></a></td>'
                    +'<td><a href="#"><img src="imgs/u296.png" alt=""/></a></td>'
                    +'</tr>';
                });
            }
            $('#'+name+' tbody').html(str);
            str='<li><a href="javascript:;"><i class="fa fa-caret-left"></i></a></li>'
            +'<li><a href="javascript:;">首页</a></li>';
            for(var m=1;m<=tabName.page_count;m++){
                if(m==tabName.cur_page){
                    str+='<li><a href="javascript:;" class="act">'+m+'</a></li>';
                }else{
                    str+='<li><a href="javascript:;">'+m+'</a></li>';
                }
            }
            str+='<li><a href="javascript:;">末页</a></li>'
            +'<li><a href="javascript:;"><i class="fa fa-caret-right"></i></a></li>';
            $('#'+name+' tfoot ul').html(str);
        }
    //1.2计算天数差
    function timeDifference(oldTime,newTime){
        var time=newTime-oldTime;
        //计算出相差天数
        var days=Math.floor(time/(24*3600*1000));
        //计算出小时数
        var leave1=time%(24*3600*1000);         //计算天数后剩余的毫秒数
        var hours=Math.floor(leave1/(3600*1000));
        //计算相差分钟数
        var leave2=leave1%(3600*1000);          //计算小时数后剩余的毫秒数
        var minutes=Math.floor(leave2/(60*1000));
        //计算相差秒数
        var leave3=leave2%(60*1000);            //计算分钟数后剩余的毫秒数
        var seconds=Math.round(leave3/1000);
        return days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒";
    }
    //1.3控制面板
        //1.3.1自身健康
        function health(){
            var healthChart = echarts.init(document.getElementById('health'));
            optionHealth = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}分"    //提示框样式
                },
                title: {
                    text: '自身健康',
                    subtext: '当前健康状况',
                    left:"right",
                    top:19,
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
                            fontSize:10,
                            fontFamily:"Microsoft YaHei"
                        }
                    },
                    data: {value: 0}
                }
            };
            healthChart.timeTicket = setInterval(function () {
                optionHealth.series.data.value = (Math.random() * 100)^0;
                optionHealth.series.detail.formatter=optionHealth.series.data.value<35?"Dangerous"
                    :optionHealth.series.data.value<75?"Sub Health":"Health";
                optionHealth.series.detail.backgroundColor=optionHealth.series.data.value<35?"#EB625F"
                    :optionHealth.series.data.value<75?"#4F5CB7":"#22A700";
                healthChart.setOption(optionHealth, true);
            },2000);
            if($("#control")[0].style.display==="none"){
                console.log("停");
                clearInterval(healthChart.timeTicket);
            }
            healthChart.setOption(optionHealth);
            window.addEventListener("resize",healthChart.resize);
        }
        //1.3.2事件分类
        var data=[
            [
                {value:335, name:'FTP',color:'#A1D768'},
                {value:310, name:'XSS攻击',color:'#3FB1E3'},
                {value:234, name:'SQL注入',color:'#EE9E47'},
                {value:135, name:'HTTP Cetflood',color:'#DFD83C'},
                {value:1048, name:'FTP Bounce',color:'#81A1EA'},
                {value:251, name:'缓冲区溢出',color:'#4F5CB7'},
                {value:147, name:'TCP SYN FLOOD',color:'#FFDC84'},
                {value:102, name:'POP3',color:'#F18374'}
            ],
            [
                {value:335, name:'病毒',color:'#9f81f0'},
                {value:679, name:'应用安全',color:'#34aba5'},
                {value:1548, name:'入侵防御',color:'#64b2cb'}
            ]
        ];
        function event(){
            var eventChart = echarts.init(document.getElementById('event'));
            optionEvent = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    top:20,
                    height:280,
                    data:function(){
                        var data1=[];
                        $.each(data[0],function(i,n){
                            data1.push(n.name);
                        });
                        $.each(data[1],function(i,n){
                            data1.push(n.name);
                        });
                        return data1;
                    }()
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
                        data:function(){
                            var data1=[];
                            $.each(data[1],function(i,n){
                                var obj={};
                                obj.value= n.value;
                                obj.name= n.name;
                                obj.itemStyle={normal:{color: n.color}};
                                data1.push(obj);
                            });
                            return data1;
                        }()
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '65%'],
                        data:function(){
                            var data1=[];
                            $.each(data[0],function(i,n){
                                var obj={};
                                obj.value= n.value;
                                obj.name= n.name;
                                obj.itemStyle={normal:{color: n.color}};
                                data1.push(obj);
                            });
                            return data1;
                        }()
                    }
                ]
            };
            eventChart.setOption(optionEvent);
            window.onresize=eventChart.resize;
        }
    //1.4系统状态
        //1.4.1主机信息
        function hInformation(){
            var HInformationChart = echarts.init(document.getElementById('h-information'));
            optionHInformation = {
                tooltip: {
                    trigger: 'axis'
                },
                grid:{
                    top:20,
                    bottom:50
                },
                color:["#AC4AEC","#42B8ED"],
                xAxis:  {
                    type: 'category',
                    data: ['周一','周二','周三','周四','周五','周六','周日'],
                    boundaryGap: false,
                    interval:2,
                    axisLine:{
                        lineStyle:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0, color: '#799FDF' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#B9CCEC' // 100% 处的颜色
                            }], false)
                        }
                    },
                    splitLine:{
                        show:true
                    },
                    axisTick:{
                        show:false
                    }
                },
                yAxis: {
                    type: 'value',
                    min:0,
                    max:100,
                    axisLine:{
                        lineStyle:{
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0, color: '#799FDF' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#B9CCEC' // 100% 处的颜色
                            }], false)
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel: {
                        formatter: '{value} %',
                        interval:1
                    }
                },
                textStyle:{
                    fontFamily:"Microsoft YaHei"
                },
                series: [
                    {
                        name:'内存',
                        type:'line',
                        smooth: true,
                        symbol:"circle",
                        symbolSize:15,
                        data:[10, 20, 40, 47, 22, 53, 5],
                        connectNulls:true,
                        itemStyle:{
                            normal:{
                                borderColor:"#D594FF",
                                borderWidth:5
                            }
                        },
                        markLine: {
                            label:{
                                normal:{
                                    show:false
                                }
                            },
                            data: [
                                {symbol:"none",type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'CPU',
                        type:'line',
                        symbolSize:0,
                        smooth: true,
                        data:[20, 30, 50, 57, 32, 63, 10],
                        markLine: {
                            label:{
                                normal:{
                                    show:false
                                }
                            },
                            data: [
                                {symbol:"none",type: 'average', name: '平均值'}
                            ]
                        }
                    }
                ]
            };
            HInformationChart.setOption(optionHInformation);
            window.addEventListener("resize",HInformationChart.resize);
        }
        //1.4.2会话信息
            //1.4.2.1HTTP并发链接数
            function httpConcurrent(){
                var HConcurrentChart = echarts.init(document.getElementById('http-concurrent'));
                optionConcurrent = {
                    title:{
                        text:"HTTP并发链接数",
                        top:40,
                        left:"center"
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid:{
                        top:100,
                        bottom:50
                    },
                    color:["#00A0E9"],
                    xAxis:  {
                        type: 'category',
                        data: ['周一','周二','周三','周四','周五','周六','周日'],
                        boundaryGap: false,
                        interval:2,
                        axisLine:{
                            lineStyle:{
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#799FDF' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#B9CCEC' // 100% 处的颜色
                                }], false)
                            }
                        },
                        splitLine:{
                            show:true
                        },
                        axisTick:{
                            show:false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        min:0,
                        max:100,
                        axisLine:{
                            lineStyle:{
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#799FDF' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#B9CCEC' // 100% 处的颜色
                                }], false)
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        axisLabel: {
                            formatter: '{value} %',
                            interval:1
                        }
                    },
                    textStyle:{
                        fontFamily:"Microsoft YaHei"
                    },
                    series: [
                        {
                            name:'内存',
                            type:'line',
                            smooth: true,
                            symbol:"circle",
                            symbolSize:15,
                            data:[10, 20, 40, 47, 22, 53, 5],
                            connectNulls:true,
                            itemStyle:{
                                normal:{
                                    borderColor:"#BCEAFF",
                                    borderWidth:5
                                }
                            },
                            markLine: {
                                label:{
                                    normal:{
                                        show:false
                                    }
                                },
                                data: [
                                    {symbol:"none",type: 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                };
                HConcurrentChart.setOption(optionConcurrent);
                window.addEventListener("resize",HConcurrentChart.resize);
            }
            //1.4.2.2HTTP创建新链接数
            function httpCreate(){
                var HCreateChart = echarts.init(document.getElementById('http-create'));
                optionCreate = {
                    title:{
                        text:"HTTP新建连接数",
                        top:40,
                        left:"center"
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid:{
                        top:100,
                        bottom:50
                    },
                    color:["#59B725"],
                    xAxis:  {
                        type: 'category',
                        data: ['周一','周二','周三','周四','周五','周六','周日'],
                        boundaryGap: false,
                        interval:2,
                        axisLine:{
                            lineStyle:{
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#799FDF' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#B9CCEC' // 100% 处的颜色
                                }], false)
                            }
                        },
                        splitLine:{
                            show:true
                        },
                        axisTick:{
                            show:false
                        }
                    },
                    yAxis: {
                        type: 'value',
                        min:0,
                        max:100,
                        axisLine:{
                            lineStyle:{
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#799FDF' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#B9CCEC' // 100% 处的颜色
                                }], false)
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        axisLabel: {
                            formatter: '{value} %',
                            interval:1
                        }
                    },
                    textStyle:{
                        fontFamily:"Microsoft YaHei"
                    },
                    series: [
                        {
                            name:'内存',
                            type:'line',
                            smooth: true,
                            symbol:"circle",
                            symbolSize:15,
                            data:[10, 20, 40, 47, 22, 53, 5],
                            connectNulls:true,
                            itemStyle:{
                                normal:{
                                    borderColor:"#D2FFBC",
                                    borderWidth:5
                                }
                            },
                            markLine: {
                                label:{
                                    normal:{
                                        show:false
                                    }
                                },
                                data: [
                                    {symbol:"none",type: 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                };
                HCreateChart.setOption(optionCreate);
                window.addEventListener("resize",HCreateChart.resize);
            }
        //1.4.3进度条
        var bars=$(".p-bar .progress-bar");
        var ps=$(".p-bar li p:last-child");
        function progressBar(){
            $.each(bars,function(i,n){
                var account=(Math.random()*100)^0;
                n["aria-valuenow"]=account;
                n.style.width=account+"%";
            });
            $.each(ps,function(i,n){
                var c= n.className;
                n.innerHTML=$("."+c+"-color")[0]["aria-valuenow"]+"%";
            });
        }
//基础动效
$(function(){
    $("#selectEd option:first-child").hide();
    $("#selectEd").on("change",function () {
        var selectEd = $(this).val();
        if(selectEd==0){
            $("#myModal").modal("show");
            $(this).val("");
        }
    });

    event();//事件分类
    health();//自身健康
});
$(document).ready(function () {
    //时间显示
    setInterval(function(){
        $("#clock").text(moment().format("h:mm:ss"));
    },10);
    //控制面板——添加表格
    addData('virus');
    addData('virus1');
    //表格按钮切换
    $(".portlet-title .table-bars li").click(function(e){
        e.preventDefault();
        var href=$(this).children("a").attr("href");
        $(href).show().siblings("table").hide();
        $(this).addClass("active").siblings("li").removeClass("active");
        addData(href.slice(1));
    });
    //左侧导航栏切换
    $(".page-sidebar-menu>.nav-item a").click(function(){
        var that=$(this);
        console.log(that);
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
        var href=$(this).attr("href");
        $(href).addClass("active").siblings("div").removeClass("active");
        if(href==="#system-state"){
            setTimeout(hInformation,200);
            var oldTime=new Date("2015/9/12 13:00:05");
            setInterval(function(){
                var newTime=new Date();
                $(".h-text span").text(timeDifference(oldTime,newTime));
            },200);
            progressBar();
            setInterval(progressBar,2000);
        }
    });
    //系统状态——切换标签调用图表
    $("#system-state .nav-tabs li a").click(function(){
        var href=$(this).attr("href");
        if(href==="#session-information"){
            setTimeout(httpConcurrent,200);
            setTimeout(httpCreate,200);
            addData("session");
        }else{
            setTimeout(hInformation,200);
        }
        $(this).siblings("span").addClass("selected");
    });
    //highcharts图表事件
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
                        y: (Math.random()*100)^0
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
    //控制面板——自身状态动态获取数据
    var span=$(".portlet-body .row.state span");
    setInterval(function() {
        for (var i = 0; i < span.length; i++) {
            span[i].dataset.img=Math.random()>0.5?1:0;
            var img = span[i].dataset.img;
            if (img === "0") {
                span[i].innerHTML = "<img src='imgs/down.png'>";
            } else {
                span[i].innerHTML = "<img src='imgs/up.png'>";
            }
        }
    },1000);

});