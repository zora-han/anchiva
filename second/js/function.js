/*Created by Secret on 2016/7/28.*/
//1.动态添加表格
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
    //攻击源排名
    var attackSource = {
        'data':[
            {id:0,ip:'101.101.101.101',account:1000000},
            {id:1,ip:'255.255.255.102',account:800000},
            {id:2,ip:'133.123.103.113',account:789456},
            {id:3,ip:'114.104.104.124',account:600000},
            {id:4,ip:'255.136.208.114',account:561234},
            {id:5,ip:'106.255.123.195',account:400000},
            {id:6,ip:'192.168.178.106',account:302146},
            {id:7,ip:"186.122.240.103",account:200000},
            {id:8,ip:"134.105.236.188",account:102345},
            {id:9,ip:"101.250.253.196",account:55555}

        ]
    };
    //攻击目的排名
    var attackPurposes = {
        'data':[
            {id:0,ip:'101.101.101.101',account:1000000},
            {id:1,ip:'255.255.255.102',account:800000},
            {id:2,ip:'133.123.103.113',account:789456},
            {id:3,ip:'114.104.104.124',account:600000},
            {id:4,ip:'255.136.208.114',account:561234},
            {id:5,ip:'106.255.123.195',account:400000},
            {id:6,ip:'192.168.178.106',account:302146},
            {id:7,ip:"186.122.240.103",account:200000},
            {id:8,ip:"134.105.236.188",account:102345},
            {id:9,ip:"101.250.253.196",account:55555}

        ]
    };
    //地图信息
    var mapData = [
        [{name:'北京'}, {name:'上海',value:95}],
        [{name:'北京'}, {name:'广州',value:90}],
        [{name:'北京'}, {name:'大连',value:80}],
        [{name:'北京'}, {name:'南宁',value:70}],
        [{name:'北京'}, {name:'南昌',value:60}],
        [{name:'北京'}, {name:'拉萨',value:50}],
        [{name:'北京'}, {name:'长春',value:40}],
        [{name:'北京'}, {name:'包头',value:30}],
        [{name:'北京'}, {name:'重庆',value:20}],
        [{name:'北京'}, {name:'常州',value:10}]
    ];
    //攻击统计分析
    var attackSystemData = {
        'record_count':20,	/*总记录数*/
        'page_size':10,		/*每页的记录数*/
        'page_count':1,	    /*总页数*/
        'cur_page':2,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:122133,source:"192.168.111.253",target:"源：102.068.135.255",type:"类型1",account:18,name:"asdas"},
            {id:12123233,source:"172.189.165.123",target:"源：102.068.135.255",type:"类型2",account:11,name:"asdassf"},
            {id:12233,source:"166.145.189.235",target:"源：102.068.135.255",type:"类型3",account:10,name:"asdfas"},
            {id:122133,source:"145.132.105.168",target:"源：102.068.135.255",type:"类型4",account:9,name:"asdasdfs"},
            {id:12133,source:"136.100.120.210",target:"源：102.068.135.255",type:"类型5",account:8,name:"asddsfas"},
            {id:12323,source:"133.168.157.146",target:"源：102.068.135.255",type:"类型5",account:7,name:"asdsdfas"},
            {id:12133,source:"111.111.111.111",target:"源：102.068.135.255",type:"类型4",account:6,name:"asdsdfas"},
            {id:11323,source:"222.222.222.220",target:"源：102.068.135.255",type:"类型3",account:5,name:"asdsdfas"},
            {id:13123,source:"133.145.231.201",target:"源：102.068.135.255",type:"类型2",account:4,name:"assdfdas"},
            {id:11323,source:"168.172.193.234",target:"源：102.068.135.255",type:"类型1",account:3,name:"asdsfas"}

            //{id:14522133,source:"192.168.110.253",target:"源：102.068.135.255",type:"类型1",account:2,name:"asdas"},
            //{id:12654123233,source:"170.189.165.123",target:"源：102.068.135.255",type:"类型2",account:2,name:"asdassf"},
            //{id:1256233,source:"166.140.189.235",target:"源：102.068.135.255",type:"类型3",account:2,name:"asdfas"},
            //{id:124562133,source:"145.130.105.168",target:"源：102.068.135.255",type:"类型4",account:2,name:"asdasdfs"},
            //{id:12154633,source:"130.100.120.210",target:"源：102.068.135.255",type:"类型5",account:1,name:"asddsfas"},
            //{id:12546323,source:"130.168.157.146",target:"源：102.068.135.255",type:"类型5",account:1,name:"asdsdfas"},
            //{id:12187933,source:"110.111.111.111",target:"源：102.068.135.255",type:"类型4",account:1,name:"asdsdfas"},
            //{id:1179323,source:"220.222.222.220",target:"源：102.068.135.255",type:"类型3",account:1,name:"asdsdfas"},
            //{id:13178923,source:"133.145.201.201",target:"源：102.068.135.255",type:"类型2",account:1,name:"assdfdas"},
            //{id:11378923,source:"168.172.103.234",target:"源：102.068.135.255",type:"类型1",account:1,name:"asdsfas"}
        ]
    };
    switch (idName){
        case "virus":return virus;break;
        case "application":return application;break;
        case "net":return net;break;
        case "virus1":return virus1;break;
        case "net1":return net1;break;
        case "application1":return application1;break;
        case "session":return session;break;
        case "attackSource":return attackSource;break;
        case "attackSource2":return attackSource;break;
        case "attackPurposes":return attackPurposes;break;
        case "attackPurposes2":return attackPurposes;break;
        case "attackSystemData":return attackSystemData;break;
        case "mapData":return mapData;break;
        case "mapData2":return mapData;
    }
}
function addData(name){
    var tabName=tab(name);
    var str="",c=name.charAt(name.length-1);
    if(name==="attackSystemData"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td>'
            +n.id+'</td><td><a href="#">'
            +n.source+'</a></td><td><a href="#">'
            +n.target.replace(/源：/,"")+'</a></td><td><a href="#">'
            +n.type+'</a></td><td>'
            +n.account+'</td><td><a href="#">'
            +n.name+'</a></td>'
            +'<td><a href="#"><img src="imgs/u300.png" alt=""/></a></td>'
            +'<td><a href="#"><img src="imgs/u298.png" alt=""/></a></td>'
            +'<td><a href="#"><img src="imgs/u296.png" alt=""/></a></td>'
            +'</tr>';
        });
    }else if(name==="mapData"||name==="mapData2"){
        $.each(tabName,function(i,n){
            str+='<tr><td>'
            +n[1].name+'</td><td><a href="#attack-system-analysis">'
            +n[1].value+'</a></td></tr>';
        });
    }else if(name==="attackPurposes"||name==="attackPurposes2"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td>'
            +(n.id+1)+'</td><td>'
            +n.ip+'</td><td>'
            +n.account+'</td></tr>';
        });
    }else if(name==="attackSource"||name==="attackSource2"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td>'
            +(n.id+1)+'</td><td>'
            +n.ip+'</td><td>'
            +n.account+'</td></tr>';
        });
    }else if(name==="session"){
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
    if($('#'+name).has("tfoot")){
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
}

//2.计算天数差
function timeDifference(oldTime,newTime){
    var time=newTime-oldTime;
    var days=Math.floor(time/(24*3600*1000));   //计算出相差天数
    var leave1=time%(24*3600*1000);             //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));   //计算出小时数
    var leave2=leave1%(3600*1000);              //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000));   //计算相差分钟数
    var leave3=leave2%(60*1000);                //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);        //计算相差秒数
    return days+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒";
}

//3.计算随机数
function random(min,max){
    return (Math.random()*(max-min)+min)^0;
}

//4.echarts图表
//4.1自身健康
function health(){
    var healthChart = echarts.init(document.getElementById('health'));
    optionHealth = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}分"    //提示框样式
        },
        title: {//标题样式
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
            axisLabel: {                    //坐标标签
                show:false
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
    var value=function(){
        optionHealth.series.data.value = random(0,100);
        optionHealth.series.detail.formatter=optionHealth.series.data.value<35?"Dangerous"
            :optionHealth.series.data.value<75?"Sub Health":"Health";
        optionHealth.series.detail.backgroundColor=optionHealth.series.data.value<35?"#EB625F"
            :optionHealth.series.data.value<75?"#4F5CB7":"#22A700";
        healthChart.setOption(optionHealth, true);
    };
    value();
    healthChart.timeTicket = setInterval(value,2000);
    healthChart.setOption(optionHealth);
    window.addEventListener("resize",healthChart.resize);//自适应分辨率改变重画图形
}
//4.2事件分类
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
//4.3主机信息
function hInformation(){
    var HInformationChart = echarts.init(document.getElementById('h-information'));
    var interval,count,now;
    switch (arguments.length){
        case 0:
            interval=60000;//每一分钟一个数据
            count=60;//一小时内有六十个数据
            now=new Date(new Date()-3600*1000);
            break;
        case 1:
            interval=arguments[0]==300000?30000//5分钟前 30秒一个数据
                :arguments[0]==3600000?60000//1小时前 1分钟一个数据
                :arguments[0]==86400000?3600000//1天前 1小时一个数据
                :(24*3600*1000);//1个月前 1天一个数据
            count=arguments[0]/interval;
            now=new Date(new Date()-arguments[0]);
    }
    var date = [];
    var data = [];
    var data1= [];
    function addData(shift) {
        date.push(now.toLocaleString().replace(/[上下午]{2}/,'').replace(/ /,"\n"));
        data.push(random(0,100));
        data1.push(random(0,100));
        if (shift) {
            date.shift();
            data.shift();
            data1.shift();
        }
        now = new Date(+new Date(now) + interval);
    }
    for (var i = 0; i < count; i++) {addData();}
    optionHInformation = {
        tooltip: {
            trigger: 'axis'
        },
        grid:{
            top:20,
            bottom:50
        },
        color:["#AC4AEC","#42B8ED"],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
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
            axisLabel:{
                interval:(count/8)^0
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
        series: [
            {
                name:'内存',
                type:'line',
                smooth: true,
                symbol:"circle",
                symbolSize:15,
                data:data,
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
                data:data1,
                smooth: true,
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
    function geng(){
        addData(true);
        HInformationChart.setOption({
            xAxis: {data: date},
            series: [{data: data}, {data: data1}]
        });
    }
    HInformationChart.setOption(optionHInformation);
    geng();
    HInformationChart.timeTicket = setInterval(geng,30000);
    window.addEventListener("resize",HInformationChart.resize);
}
//4.4HTTP并发连接数
function httpConcurrent(){
    var HConcurrentChart = echarts.init(document.getElementById('http-concurrent'));
    var interval,count,now;
    switch (arguments.length){
        case 0:
            interval=60000;//每一分钟一个数据
            count=60;//一小时内有六十个数据
            now=new Date(new Date()-3600*1000);
            break;
        case 1:
            interval=arguments[0]==300000?30000//5分钟前 30秒一个数据
                :arguments[0]==3600000?60000//1小时前 1分钟一个数据
                :arguments[0]==86400000?3600000//1天前 1小时一个数据
                :(24*3600*1000);//1个月前 1天一个数据
            count=arguments[0]/interval;
            now=new Date(new Date()-arguments[0]);
    }
    var date = [];
    var data = [];
    function addData(shift) {
        if(interval<=60000){
            date.push(now.toLocaleTimeString().replace(/[上下午]{2}/,""));
        }else{
            date.push(now.toLocaleString().replace(/[上下午]{2}/,'').replace(/ /,"\n"));
        }
        data.push(random(0,999999));
        if (shift) {
            date.shift();
            data.shift();
        }
        now = new Date(+new Date(now) + interval);
    }
    for (var i = 0; i < count; i++) {addData();}
    optionConcurrent = {
        title:{
            text:"HTTP并发连接数",
            top:40,
            left:"center"
        },
        tooltip: {
            trigger: 'axis'
        },
        grid:{
            top:100,
            bottom:50,
            left:80
        },
        color:["#00A0E9"],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
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
            axisLabel:{
                interval:(count/8)^0
            },
            axisTick:{
                show:false
            }
        },
        yAxis: {
            type: 'value',
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
            }
        },
        series: [
            {
                name:'HTTP并发连接数',
                type:'line',
                smooth: true,
                symbol:"circle",
                symbolSize:15,
                data:data,
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
    function gengHC(){
        addData(true);
        HConcurrentChart.setOption({
            xAxis: {
                data: date
            },
            series: [{data: data}]
        });
    }
    HConcurrentChart.setOption(optionConcurrent);
    gengHC();
    HConcurrentChart.timeTicket = setInterval(gengHC,30000);
    window.addEventListener("resize",HConcurrentChart.resize);
}
//4.5HTTP创建新连接数
function httpCreate(){
    var HCreateChart = echarts.init(document.getElementById('http-create'));
    var interval,count,now;
    switch (arguments.length){
        case 0:
            interval=60000;//每一分钟一个数据
            count=60;//一小时内有六十个数据
            now=new Date(new Date()-3600*1000);
            break;
        case 1:
            interval=arguments[0]==300000?30000//5分钟前 30秒一个数据
                :arguments[0]==3600000?60000//1小时前 1分钟一个数据
                :arguments[0]==86400000?3600000//1天前 1小时一个数据
                :(24*3600*1000);//1个月前 1天一个数据
            count=arguments[0]/interval;
            now=new Date(new Date()-arguments[0]);
    }
    var date = [];
    var data = [];
    function addData(shift) {
        if(interval<=60000){
            date.push(now.toLocaleTimeString().replace(/[上下午]{2}/,""));
        }else{
            date.push(now.toLocaleString().replace(/[上下午]{2}/,'').replace(/ /,"\n"));
        }
        data.push(random(0,999999));
        if (shift) {
            date.shift();
            data.shift();
        }
        now = new Date(+new Date(now) + interval);
    }
    for (var i = 0; i < count; i++) {addData();}
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
            bottom:50,
            left:80
        },
        color:["#59B725"],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
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
            axisLabel:{
                interval:(count/8)^0
            },
            axisTick:{
                show:false
            }
        },
        yAxis: {
            type: 'value',
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
            }
        },
        textStyle:{
            fontFamily:"Microsoft YaHei"
        },
        series: [
            {
                name:'HTTP新建连接数',
                type:'line',
                smooth: true,
                symbol:"circle",
                symbolSize:15,
                data:data,
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
    function gengHC(){
        addData(true);
        HCreateChart.setOption({
            xAxis: {
                data: date
            },
            series: [{data: data}]
        });
    }
    HCreateChart.setOption(optionCreate);
    gengHC();
    HCreateChart.timeTicket = setInterval(gengHC,30000);
    window.addEventListener("resize",HCreateChart.resize);
}
//4.6攻击地图
function attackMap(id){
    var attackMapChart = echarts.init(document.getElementById(id));
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };
    var BJData =tab("mapData");
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };
    var color = ['#D7422C'];
    var series = [];
    [['北京', BJData]].forEach(function (item, i) {
        series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    optionattackMap = {
        grid:{
            left:"3%",
            bottom:"3%",
            top:"3%"
        },
        tooltip : {
            trigger: 'item'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#ACCAEE',
                    borderColor: '#fff'
                },
                emphasis: {
                    areaColor: '#8BB7ED'
                }
            }
        },
        series: series
    };
    attackMapChart.setOption({
        series: [{
            type: 'map',
            map: 'china'
        }]
    });
    attackMapChart.setOption(optionattackMap);
    window.addEventListener("resize",attackMapChart.resize);
}
//4.7威胁安全趋势
function securityTrend(id,time){
    var securityTrendChart = echarts.init(document.getElementById(id));
    var interval,count,now;
    if(time===undefined){
        interval=60000;//每一分钟一个数据
        count=60;//一小时内有六十个数据
        now=new Date(new Date()-3600*1000);
    }else{
        interval=time==300000?30000//5分钟前 30秒一个数据
            :time==3600000?60000//1小时前 1分钟一个数据
            :time==86400000?3600000//1天前 1小时一个数据
            :(24*3600*1000);//1个月前 1天一个数据
        count=time/interval;
        now=new Date(new Date()-time);
    }
    var date = [];
    var data = [];
    function addData(shift) {
        if(interval<=60000){
            date.push(now.toLocaleTimeString().replace(/[上下午]{2}/,""));
        }else{
            date.push(now.toLocaleString().replace(/[上下午]{2}/,'').replace(/ /,"\n"));
        }
        data.push(random(0,999999));
        if (shift) {
            date.shift();
            data.shift();
        }
        now = new Date(+new Date(now) + interval);
    }
    for (var i = 0; i < count; i++) {addData();}
    optionSecurityTrend = {
        tooltip: {
            trigger: 'axis'
        },
        grid:{
            left:80
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
            interval:2,
            axisLabel:{
                interval:(count/8)^0
            },
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
            splitLine:{
                show:true
            }
        },
        yAxis: {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#799FDF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#B9CCEC' // 100% 处的颜色
                    }], false)
                }
            }
        },
        series: [
            {
                name:'威胁次数',
                type:'line',
                smooth:true,
                data: data,
                symbol:"circle",
                symbolSize:15,
                areaStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#00A0E9' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#fff' // 100% 处的颜色
                        }], false)
                    }
                },
                lineStyle:{
                    normal:{
                        color:"#5EA2FF",
                        width:1
                    }

                },
                itemStyle:{
                    normal:{
                        color: '#00A0E9',
                        borderWidth:5,
                        borderColor:"#BCEAFF"
                    }
                }
            }
        ]
    };
    function gengS() {
        addData(true);
        securityTrendChart.setOption({
            xAxis: {
                data: date
            },
            series: [{
                data: data
            }]
        });
    }
    securityTrendChart.setOption(optionSecurityTrend);
    gengS();
    securityTrendChart.timeTicket = setInterval(gengS,30000);
    window.addEventListener("resize",securityTrendChart.resize);
}
//4.8攻击源排名
function attackSourceRanking(id){
    var attackSourceChart = echarts.init(document.getElementById(id));
    var attackSource=tab("attackSource");
    var ip=[],data=[];
    $.each(attackSource.data,function(i,n){
        ip.push(n.ip);
        data.push(n.account);
    });
    optionAttackSource= {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: "3%",
            bottom:"2%",
            right:"3%",
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ip,
                axisTick: {
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:"#A1A1A1"
                    }
                },
                axisLabel:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisTick:{
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:"#A1A1A1"
                    }
                },
                splitLine:{
                    show:false
                }
            }
        ],
        series : [
            {
                name:'攻击次数',
                type:'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#F89C83','#EDBB21','#B4DA59','#8FC1D9','#86D999',
                                '#7CA9F4','#AED24D','#B49CF8','#F7B3C8','#98BCF7'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                barWidth: '80%',
                data:data
            }
        ]
    };
    attackSourceChart.setOption(optionAttackSource);
    window.addEventListener("resize",attackSourceChart.resize);
}
//4.9攻击目的排名
function attackPurposesRanking(id){
    var attackPurposesChart = echarts.init(document.getElementById(id));
    var attackSource=tab("attackPurposes");
    var ip=[],data=[];
    $.each(attackSource.data,function(i,n){
        ip.push(n.ip);
        data.push(n.account);
    });
    optionAttackPurposes = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: "3%",
            bottom:"2%",
            right:"3%",
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ip,
                axisTick: {
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:"#A1A1A1"
                    }
                },
                axisLabel:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisTick:{
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:"#A1A1A1"
                    }
                },
                splitLine:{
                    show:false
                }
            }
        ],
        series : [
            {
                name:'攻击次数',
                type:'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#F89C83','#EDBB21','#B4DA59','#8FC1D9','#86D999',
                                '#7CA9F4','#AED24D','#B49CF8','#F7B3C8','#98BCF7'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                barWidth: '80%',
                data:data
            }
        ]
    };
    attackPurposesChart.setOption(optionAttackPurposes);
    window.addEventListener("resize",attackPurposesChart.resize);
}
//4.10攻击访问统计关系图
var attackData=tab("attackSystemData");
var RelationshipData=attackData.data;
function attackRelationship(){
    var attackRelationshipChart = echarts.init(document.getElementById('attack-system-analysis-relationship'));
    var link=[];
    var sData=[];
    var color=["#99C343","#87CDF9","#FF7F50","#E3B618","#31D45A","#7E8CF2","#E87F98","#D59421","#C586EA","#44CACA"];
    function addLink(){
        $.each(attackData.data,function(i,n){
            if(i<10){
                link.push({
                    source: n.source,
                    target: n.target,
                    weight:1
                });
            }
        });
        return link;
    }
    function addData(){
        $.each(RelationshipData,function(i,n){
            if(i==0){
                sData.push({
                    category:i,
                    name: n.target,
                    value : 10,
                    symbol:"image://imgs/0.png",
                    symbolSize:100
                });
            }else if(i<10){
                sData.push({
                    category:i,
                    name: n.source,
                    value : 5,
                    itemStyle:{
                        normal:{
                            color:color[i-1]
                        }
                    }
                });
            }
        });
        return sData;
    }
    optionAttackRelationship = {
        tooltip: {
            trigger:"axis"
        },
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                name: '关系图',
                //top:"11%",
                //left:"20%",
                layout: 'force',
                symbolSize:25,
                force:{
                    initLayout:"circular",
                    repulsion:1400,
                    gravity:0,
                    edgeLength:80,
                    layoutAnimation:false
                },
                lineStyle: {
                    normal: {
                        width:0
                    }
                },
                label: {
                    normal: {
                        show:true,
                        textStyle:{
                            color:"#333",
                            fontFamily:"Microsoft Yahei"
                        },
                        position:"bottom"
                    }
                },
                categories: [
                    {
                        name:"被攻击对象",
                        label:{
                            normal:{
                                position:"top"
                            }

                        }
                    },
                    {
                        name:"1"
                    },
                    {
                        name:"2"
                    },
                    {
                        name:"3"
                    },
                    {
                        name:"4"
                    },
                    {
                        name:"5"
                    },
                    {
                        name:"6"
                    },
                    {
                        name:"7"
                    },
                    {
                        name:"8"
                    },
                    {
                        name:"9"
                    },
                    {
                        name:"10"
                    }
                ],
                data:addData(),
                links :addLink()
            }
        ]
    };
    attackRelationshipChart.setOption(optionAttackRelationship);
    window.addEventListener("resize",attackRelationshipChart.resize);
}
//4.11攻击访问统计饼图
function attackRelationshipPie(){
    var attackRelationshipChart = echarts.init(document.getElementById('attack-system-analysis-relationship'));
    var value1=0,value2=0,value3=0,value4=0,value5=0;
    $.each(attackData.data,function(i,n){
        if(n.type==="类型1"){
            value1++;
        }else if(n.type==="类型2"){
            value2++;
        }else if(n.type==="类型3"){
            value3++;
        }else if(n.type==="类型4"){
            value4++;
        }else if(n.type==="类型5"){
            value5++;
        }
    });
    optionAttackRelationship = {
        color:["#71C834","#52AFE5","#FEB71B","#884FFA","#9F81DD"],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                zlevel:1,
                selectedMode: 'single',
                radius: [0, '60%'],
                labelLine: {
                    normal: {
                        length:50,
                        length2:60

                    }
                },
                data:[
                    {value:value1, name:'类型1'},
                    {value:value2, name:'类型2'},
                    {value:value3, name:'类型3'},
                    {value:value4, name:'类型4'},
                    {value:value5, name:'类型5'}
                ]
            },
            {
                name:'边框',
                type:'pie',
                hoverAnimation:false,
                legendHoverLink:false,
                radius: ['65%', '75%'],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                markLine:{
                    data:{
                        1:{
                            symbol:"circle",
                            symbolSize:10
                        }
                    }
                },
                data:[
                    {
                        name:'边框',
                        label:{
                            normal:{
                                show:false
                            }
                        },
                        itemStyle:{
                            normal:{
                                color:"#C2D5F3"
                            },
                            emphasis:{
                                color:"#C2D5F3"
                            }
                        }
                    }
                ]
            }
        ]
    };
    attackRelationshipChart.setOption(optionAttackRelationship);
    window.addEventListener("resize",attackRelationshipChart.resize);
}

//5.进度条
var bars=$(".p-bar .progress-bar");
function progressBar(){
    $.each(bars,function(i,n){
        var account=random(0,100);
        n["aria-valuenow"]=account;
        n.style.width=account+"%";
        n.className=account<60? "progress-bar success-color" :account<90?"progress-bar warning-color" :"progress-bar danger-color";
        n.parentNode.nextElementSibling.className=account<60?"success" :account<90?"warning" :"danger";
        n.parentNode.nextElementSibling.innerHTML=account+"%";
    });
}
//6.防御检测三个数据
function dataM(){
    $(".details.t span").html(random(1000,9999));
    $(".details.d span").html(random(1000,9999));
    $(".details.h span").html(random(1,255)+"."+random(1,255)+"."+random(1,255)+"."+random(1,255));
}
function dataM1(){
    $(".details.f span").html(random(1000,9999));
    $(".details.l span").html(random(1000,9999));
    $(".details.b span").html(random(1000,9999));
}