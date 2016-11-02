/*Created by Secret on 2016/7/28.*/
//1.动态添加表格
    //地图和攻击目的过滤、攻击源过滤
var filter,filter1,filter2,filter3={},serverGroupAdd=[],HTTPParametersProtectiveAdd={},
    //入侵防护页的操作标识
    operation='<td><img src="imgs/9.png" alt=""/></td><td><img src="imgs/3.png" alt=""/></td><td><img src="imgs/4.png" alt=""/></td>',
    //web扫漏页
    operationT='<td><img src="imgs/7.png" alt=""/></td><td><img src="imgs/p.png" alt=""/></td><td><img src="imgs/9.png" alt=""/></td><td><img src="imgs/4.png" alt=""/></td>',
    operationC='<td><img src="imgs/9.png" alt=""/></td><td><img src="imgs/4.png" alt=""/></td>',
    operationR='<td><img src="imgs/d.png" alt=""/></td><td><img src="imgs/s.png" alt=""/></td><td><img src="imgs/x.png" alt=""/></td><td><img src="imgs/4.png" alt=""/></td>',
    operationA='<td><img src="imgs/host-add.png" alt=""/></td><td><img src="imgs/more.png" alt=""/></td>',
    //早前页面的操作标识
    operationOld='<td><img src="imgs/u300.png" alt=""/></td><td><img src="imgs/u298.png" alt=""/></td><td><img src="imgs/u296.png" alt=""/></td>',
    //九格
    gridNine='<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>',
    //八格
    gridEight='<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>',
    //七格
    gridSeven='<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>',
    //十格
    gridTen='<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>',
    //十一格
    gridEleven='<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>',
    //四格
    gridFour='<tr><td></td><td></td><td></td><td></td></tr>',
    //三格
    gridThree='<tr><td></td><td></td><td></td></tr>',
    //例外配置
    configuration={
        'record_count':100,	/*总记录数*/
            'page_size':20,		/*每页的记录数*/
            'page_count':5,	    /*总页数*/
            'cur_page':1,		/*当前页号*/
            'data':[			/*当前页中的数据*/
            {id:0,type:"类别1",featureID:"111111111",featureName:"特征1",
                exceptionIp:["102.103.104.105","102.103.104.105","102.103.104.105","102.103.104.105"],
                exceptionURL:["www.baidu.com","www.baidu.com","www.baidu.com"]
            },
            {id:1,type:"类别2",featureID:"222222222",featureName:"特征5",
                exceptionIp:["203.201.204.206"],
                exceptionURL:["www.bootcss.com"]
            },
            {id:2,type:"类别3",featureID:"255255255",featureName:"特征3",
                exceptionIp:["111.100.122.133"],
                exceptionURL:["fontawesome.dashgame.com","fontawesome.dashgame.com"]
            },
            {id:3,type:"类别3",featureID:"231231231",featureName:"特征7",
                exceptionIp:["200.203.103.105","200.203.103.105"],
                exceptionURL:["echarts.baidu.com"]
            },
            {id:4,type:"类别4",featureID:"253103101",featureName:"特征6",
                exceptionIp:["192.111.102.103"],
                exceptionURL:["v1.hcharts.cn"]
            },
            {id:5,type:"类别2",featureID:"111222101",featureName:"特征2",
                exceptionIp:["172.103.108.106"],
                exceptionURL:["momentjs.cn","www.treejs.cn"]
            },
            {id:6,type:"类别5",featureID:"205146235",featureName:"特征8",
                exceptionIp:["189.111.125.167"],
                exceptionURL:["www.daterangepicker.com","momentjs.cn"]
            },
            {id:7,type:"类别1",featureID:"144120156",featureName:"特征3",
                exceptionIp:["168.135.102.160"],
                exceptionURL:["hpneo.github.io","momentjs.cn","www.treejs.cn"]
            },
            {id:8,type:"类别4",featureID:"125136111",featureName:"特征5",
                exceptionIp:["172.144.156.189","168.135.102.160"],
                exceptionURL:["www.treejs.cn"]
            },
            {id:9,type:"类别5",featureID:"130120110",featureName:"特征4",
                exceptionIp:["130.146.178.156","168.135.102.160","168.130.176.145"],
                exceptionURL:["jquery.malsup.com"]
            },
            {id:10,type:"类别1",featureID:"145120135",featureName:"特征8",
                exceptionIp:["168.130.176.145"],
                exceptionURL:["cn.vuejs.org"]
            },
            {id:11,type:"类别2",featureID:"100246238",featureName:"特征3",
                exceptionIp:["122.135.168.197"],
                exceptionURL:["www.wufangbo.com"]
            },
            {id:12,type:"类别3",featureID:"100100100",featureName:"特征5",
                exceptionIp:["132.100.155.165"],
                exceptionURL:["www.dowebok.com"]
            },
            {id:13,type:"类别3",featureID:"255230245",featureName:"特征6",
                exceptionIp:["189.106.105.132"],
                exceptionURL:["www.bootcdn.cn"]
            },
            {id:14,type:"类别4",featureID:"175146130",featureName:"特征1",
                exceptionIp:["176.189.146.134"],
                exceptionURL:["www.php100.com"]
            },
            {id:15,type:"类别2",featureID:"163145111",featureName:"特征2",
                exceptionIp:["172.199.158.137"],
                exceptionURL:["select2.github.io"]
            },
            {id:16,type:"类别5",featureID:"195126135",featureName:"特征8",
                exceptionIp:["192.100.148.159"],
                exceptionURL:["www.w3school.com.cn"]
            },
            {id:17,type:"类别1",featureID:"146178199",featureName:"特征3",
                exceptionIp:["186.135.107.109"],
                exceptionURL:["angular.cn"]
            },
            {id:18,type:"类别4",featureID:"130194168",featureName:"特征6",
                exceptionIp:["111.156.130.178"],
                exceptionURL:["www.oschina.net"]
            },
            {id:19,type:"类别5",featureID:"177163140",featureName:"特征9",
                exceptionIp:["172.109.104.245"],
                exceptionURL:["jquery.malsup.com"]
            }
        ]
    },
    //WAF策略
    WAFIntrusion={
        'record_count':100,	/*总记录数*/
        'page_size':20,		/*每页的记录数*/
        'page_count':5,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:0,name:"基本防护",feature:"基本特征库",agreementSafe:"启用选项5",contentSafe:"启用选项7",reference:"75次",matching:"25次"},
            {id:1,name:"增强防护",feature:"增强特征库",agreementSafe:"启用选项10",contentSafe:"启用选项12",reference:"10次",matching:"8次"},
            {id:2,name:"用户定义",feature:"用户定义",agreementSafe:"启用选项7",contentSafe:"启用选项9",reference:"30次",matching:"19次"}
        ]
        },
    //任务列表
    task=[
        {id:1,name:"fsdfsdfsd",type:"每月",submit:"administrator",state:"2016-08-01 00:05:23 正常退出",url:"www.bootcss.com"},
        {id:2,name:"weeg",type:"每月",submit:"administrator",state:"2016-08-01 08:05:23 正常退出",url:"fontawesome.dashgame.com"}
    ],
    //报告列表
    report=[
        {id:1,name:"6_23502_1854749632.xml",url:"http://www.ed2000.com",count:6,time:"2016.08.12 08:23:56"},
        {id:2,name:"6_7570_1862347046.xml",url:"http://www.ed2000.com",count:0,time:"2016.07.12 08:23:56"},
        {id:3,name:"6_16568_1864569627.xml",url:"http://www.ed2000.com",count:0,time:"2016.03.12 08:23:56"},
        {id:4,name:"6_3134_1866988805.xml",url:"http://www.ed2000.com",count:15,time:"2015.08.12 08:23:56"},
        {id:5,name:"6_2625_1457552085.xml",url:"http://www.ed2000.com",count:15,time:"2015.06.15 08:23:56"},
        {id:6,name:"6_5031_1459452964.xml",url:"http://www.ed2000.com",count:38,time:"2015.05.18 08:23:56"},
        {id:7,name:"6_23616_1457582248.xml",url:"http://www.ed2000.com",count:0,time:"2015.03.09 08:23:56"},
        {id:8,name:"7_20440_1457592434.xml",url:"http://fa.163.com/s/o",count:0,time:"2015.01.25 08:23:56"}
    ],
    //入侵防护策略
    intrusion={
        'record_count':100,	/*总记录数*/
        'page_size':20,		/*每页的记录数*/
        'page_count':5,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:0,name:"策略1",feature:"启用/未启用 （5000/5000）",reference:10,matching:8},
            {id:1,name:"策略2",feature:"启用/未启用 （1800/300）",reference:15,matching:11},
            {id:2,name:"策略3",feature:"启用/未启用 （1800/150）",reference:20,matching:10},
            {id:3,name:"策略4",feature:"启用/未启用 （1800/500）",reference:48,matching:40},
            {id:4,name:"策略5",feature:"启用/未启用 （1800/680）",reference:11,matching:6}
        ]
    },
    //特例主机
    exceptions={
        'record_count':100,	/*总记录数*/
        'page_size':20,		/*每页的记录数*/
        'page_count':5,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:0,type:"类型1",featureID:"111111111",featureName:"特征1",
                exceptionId:["102.103.104.105","203.201.204.206","111.100.122.133"]
            },
            {id:1,type:"类型2",featureID:"222222222",featureName:"特征5",
                exceptionId:["203.201.204.206","111.100.122.133"]
            },
            {id:2,type:"类型3",featureID:"255255255",featureName:"特征3",
                exceptionId:["111.100.122.133"]
            },
            {id:3,type:"类型3",featureID:"231231231",featureName:"特征7",
                exceptionId:["200.203.103.105"]
            },
            {id:4,type:"类型4",featureID:"253103101",featureName:"特征6",
                exceptionId:["192.111.102.103"]
            },
            {id:5,type:"类型2",featureID:"111222101",featureName:"特征2",
                exceptionId:["172.103.108.106"]
            },
            {id:6,type:"类型5",featureID:"205146235",featureName:"特征8",
                exceptionId:["189.111.125.167"]
            },
            {id:7,type:"类型1",featureID:"144120156",featureName:"特征3",
                exceptionId:["168.135.102.160"]
            },
            {id:8,type:"类型4",featureID:"125136111",featureName:"特征5",
                exceptionId:["172.144.156.189"]
            },
            {id:9,type:"类型5",featureID:"130120110",featureName:"特征4",
                exceptionId:["130.146.178.156"]
            },
            {id:10,type:"类型1",featureID:"145120135",featureName:"特征8",
                exceptionId:["168.130.176.145"]
            },
            {id:11,type:"类型2",featureID:"100246238",featureName:"特征3",
                exceptionId:["122.135.168.197"]
            },
            {id:12,type:"类型3",featureID:"100100100",featureName:"特征5",
                exceptionId:["132.100.155.165"]
            },
            {id:13,type:"类型3",featureID:"255230245",featureName:"特征6",
                exceptionId:["189.106.105.132"]
            },
            {id:14,type:"类型4",featureID:"175146130",featureName:"特征1",
                exceptionId:["176.189.146.134"]
            },
            {id:15,type:"类型2",featureID:"163145111",featureName:"特征2",
                exceptionId:["172.199.158.137"]
            },
            {id:16,type:"类型5",featureID:"195126135",featureName:"特征8",
                exceptionId:["192.100.148.159"]
            },
            {id:17,type:"类型1",featureID:"146178199",featureName:"特征3",
                exceptionId:["186.135.107.109"]
            },
            {id:18,type:"类型4",featureID:"130194168",featureName:"特征6",
                exceptionId:["111.156.130.178"]
            },
            {id:19,type:"类型5",featureID:"177163140",featureName:"特征9",
                exceptionId:["172.109.104.245"]
            }
        ]
    },
    //事件分类
    data=[
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
    ],
    //反向代理接口
    reverseInterface={
        'record_count':5,	/*总记录数*/
        'page_size':25,		/*每页的记录数*/
        'page_count':1,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:0,name:"fontawesome.dashgame.com",agentIP:"192.168.1.5:80",serviceIP:"192.168.1.1:80"},
            {id:1,name:"fontawesome.dashgame.com",agentIP:"172.168.1.5:80",serviceIP:"192.168.1.1:23"},
            {id:2,name:"fontawesome.dashgame.com",agentIP:"192.168.1.1:80",serviceIP:"192.168.1.1:20"},
            {id:3,name:"fontawesome.dashgame.com",agentIP:"192.136.1.1:80",serviceIP:"192.168.1.1:21"},
            {id:4,name:"fontawesome.dashgame.com",agentIP:"192.168.10.1:80",serviceIP:"192.168.1.1:443"}
        ]
    },
    //负载均衡
    loadBalancing=[
        {id:0,name:"fontawesome.dashgame.com",agentIP:"192.168.1.5:80",service:"test1",algorithm:"IP哈希"},
        {id:1,name:"fontawesome.dashgame.com",agentIP:"172.168.1.5:80",service:"test2",algorithm:"轮询"},
        {id:2,name:"fontawesome.dashgame.com",agentIP:"192.168.1.1:80",service:"test3",algorithm:"最少连接数"},
        {id:3,name:"fontawesome.dashgame.com",agentIP:"192.136.1.1:80",service:"test4",algorithm:"轮询"},
        {id:4,name:"fontawesome.dashgame.com",agentIP:"192.168.10.1:80",service:"test5",algorithm:"最少连接数"}
    ],
    //服务器组
    serverGroup=[
        {
            id:0,
            service:{
                name:"test1",
                serviceIP:["192.168.1.1:80"],
                note:["jhgdjhgdjwgdwydinjz"]
            }
        },
        {
            id:1,
            service:{
                name:"test2",
                serviceIP:["192.168.1.1:23"],
                note:["jhgdjhgdjwgdwydinjz"]
            }
        },
        {
            id:2,
            service:{
                name:"test3",
                serviceIP:["192.168.1.1:20"],
                note:["jhgdjhgdjwgdwydinjz"]
            }
        },
        {
            id:3,
            service:{
                name:"test4",
                serviceIP:["192.168.1.1:21"],
                note:["jhgdjhgdjwgdwydinjz"]
            }
        },
        {
            id:4,
            service:{
                name:"test5",
                serviceIP:["192.168.1.1:443","192.168.1.1:443"],
                note:["jhgdjhgdjwgdwydinjz",""]
            }
        }
    ],
    //许可证状态
    licenseState=[
        {id:0,name:"web应用防火墙许可证",state:false,serviceTime:"2013.05.02-2015.06.03"},
        {id:1,name:"web应用防火墙许可证",state:true,serviceTime:"2016.05.02-2019.04.03"}
    ],
    //CSRF检查
    CSRF={
        'record_count':5,	/*总记录数*/
        'page_size':25,		/*每页的记录数*/
        'page_count':1,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[
            {id:1,URL:"/test/index",referer:"0.0.0.123",refererCheck:"启用",hidden:"启用"}
        ]
    },
    //HTTP参数防护
    HTTPParametersProtective={
        'record_count':5,	/*总记录数*/
        'page_size':25,		/*每页的记录数*/
        'page_count':1,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[
            {id:1,name:"username",domain:"172.21.1.226",url:"/login.html",account:1},
            {id:2,name:"password",domain:"172.21.1.226",url:"/login_test.html",account:1},
            {id:3,name:"post",domain:"172.21.1.226",url:"/test.php",account:1},
            {id:4,name:"test1",domain:"172.21.1.228",url:"/tt.html",account:1}
        ]
    },
    //防盗链
    preventingHotlinking={
        'record_count':5,	/*总记录数*/
        'page_size':25,		/*每页的记录数*/
        'page_count':1,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[
            {id:1,name:"username",url:"/login.html"},
            {id:2,name:"password",url:"/login_test.html"},
            {id:3,name:"post",url:"/test.php"},
            {id:4,name:"test1",url:"/tt.html"}
        ]
    },
    //爬虫防护
    crawlerProtection={
        'record_count':5,	/*总记录数*/
        'page_size':25,		/*每页的记录数*/
        'page_count':1,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[
            {id:1,name:"Baiduspider_Baidu",features:"Baiduspider"},
            {id:2,name:"Googlebot_Google",features:"Googlebot"},
            {id:3,name:"Feedfetcher_Google",features:"Feedfetcher-Google"},
            {id:4,name:"Mediapartners_Google",features:"Mediapartners-Google"},
            {id:5,name:"AdsBot_Google",features:"AdsBot-Google"},
            {id:6,name:"Slurp_Yahoo",features:"Yahoo! Slurp"},
            {id:7,name:"bingbot_Microsoft",features:"bingbot"},
            {id:8,name:"msnbot_Microsoft",features:"msnbot"},
            {id:9,name:"Sosospider_Tencent",features:"Sosospider"},
            {id:10,name:"Sosoimagespider_Tencent",features:"Sosoimagespider"},
            {id:1,name:"YodaoBot_Netease",features:"YodaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"},
            {id:1,name:"YoudaoBot_Netease",features:"YoudaoBot"}
        ]
    };
function tab(idName){
    //病毒感染源
    var virus = {
        'record_count':50,	/*总记录数*/
        'page_size':10,		/*每页的记录数*/
        'page_count':5,		/*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:0,ip:"111.111.111.111",count:1000},
            {id:1,ip:"111.111.111.111",count:1000},
            {id:2,ip:"111.111.111.111",count:1000},
            {id:3,ip:"111.111.111.111",count:1000},
            {id:4,ip:"111.111.111.111",count:1000},
            {id:5,ip:"111.111.111.111",count:1000},
            {id:6,ip:"111.111.111.111",count:1000},
            {id:7,ip:"111.111.111.111",count:1000},
            {id:8,ip:"111.111.111.111",count:1000},
            {id:9,ip:"111.111.111.111",count:1000}
        ]
    };
    //网络入侵源
    var net = {
        'record_count':50,	/*总记录数*/
        'page_size':10,		/*每页的记录数*/
        'page_count':5,		/*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:0,ip:"255.255.255.255",count:1000},
            {id:1,ip:"255.255.255.255",count:1000},
            {id:2,ip:"255.255.255.255",count:1000},
            {id:3,ip:"255.255.255.255",count:1000},
            {id:4,ip:"255.255.255.255",count:1000},
            {id:5,ip:"255.255.255.255",count:1000},
            {id:6,ip:"255.255.255.255",count:1000},
            {id:7,ip:"255.255.255.255",count:1000},
            {id:8,ip:"255.255.255.255",count:1000},
            {id:9,ip:"255.255.255.255",count:1000}
        ]
    };
    //应用事件源
    var application = {
        'record_count':50,	/*总记录数*/
        'page_size':10,		/*每页的记录数*/
        'page_count':5,		/*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:0,ip:"113.223.113.223",count:1000},
            {id:1,ip:"113.223.113.223",count:1000},
            {id:2,ip:"113.223.113.223",count:1000},
            {id:3,ip:"113.223.113.223",count:1000},
            {id:4,ip:"113.223.113.223",count:1000},
            {id:5,ip:"113.223.113.223",count:1000},
            {id:6,ip:"113.223.113.223",count:1000},
            {id:7,ip:"113.223.113.223",count:1000},
            {id:8,ip:"113.223.113.223",count:1000},
            {id:9,ip:"113.223.113.223",count:1000}
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
            {id:465768,time:"2016/7/14 16：39：02",type:"Trojan",name:"Trojan/Agent.9fe1!drop"}
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
    //.1点击地图进入
    var attackSystemData = {
        'record_count':20,	/*总记录数*/
        'page_size':10,		/*每页的记录数*/
        'page_count':2,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:122133,source:"192.168.111.253",target:"102.068.135.255",type:"类型1",account:18,name:"asdas"},
            {id:12123233,source:"172.189.165.123",target:"102.068.135.255",type:"类型2",account:11,name:"asdassf"},
            {id:12233,source:"166.145.189.235",target:"102.068.135.255",type:"类型3",account:10,name:"asdfas"},
            {id:122133,source:"145.132.105.168",target:"102.068.135.255",type:"类型4",account:9,name:"asdasdfs"},
            {id:12133,source:"136.100.120.210",target:"102.068.135.255",type:"类型5",account:8,name:"asddsfas"},
            {id:12323,source:"133.168.157.146",target:"102.068.135.255",type:"类型5",account:7,name:"asdsdfas"},
            {id:12133,source:"111.111.111.111",target:"102.068.135.255",type:"类型4",account:6,name:"asdsdfas"},
            {id:11323,source:"222.222.222.220",target:"102.068.135.255",type:"类型3",account:5,name:"asdsdfas"},
            {id:13123,source:"133.145.231.201",target:"102.068.135.255",type:"类型2",account:4,name:"assdfdas"},
            {id:11323,source:"168.172.193.234",target:"102.068.135.255",type:"类型1",account:3,name:"asdsfas"}

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
    //.2点击攻击源进入
    var attackSystemDataSource = {
        'record_count':20,	/*总记录数*/
        'page_size':10,		/*每页的记录数*/
        'page_count':2,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:122133,source:"192.168.111.253",target:"101.101.101.101",type:"类型1",account:18,name:"asdas"},
            {id:12123233,source:"172.189.165.123",target:"101.101.101.101",type:"类型2",account:11,name:"asdassf"},
            {id:12233,source:"166.145.189.235",target:"101.101.101.101",type:"类型3",account:10,name:"asdfas"},
            {id:122133,source:"145.132.105.168",target:"101.101.101.101",type:"类型4",account:9,name:"asdasdfs"},
            {id:12133,source:"136.100.120.210",target:"101.101.101.101",type:"类型5",account:8,name:"asdsdfas"},
            {id:12323,source:"133.168.157.146",target:"101.101.101.101",type:"类型5",account:7,name:"asdsdfas"},
            {id:12133,source:"111.111.111.111",target:"101.101.101.101",type:"类型4",account:6,name:"asdsdfas"},
            {id:11323,source:"222.222.222.220",target:"101.101.101.101",type:"类型3",account:5,name:"asdsdfas"},
            {id:13123,source:"133.145.231.201",target:"101.101.101.101",type:"类型2",account:4,name:"assdfdas"},
            {id:11323,source:"168.172.193.234",target:"101.101.101.101",type:"类型1",account:3,name:"asdsfas"}
        ]
    };
    //.3点击攻击目的进入
    var attackSystemDataAttack = {
        'record_count':20,	/*总记录数*/
        'page_size':10,		/*每页的记录数*/
        'page_count':2,	    /*总页数*/
        'cur_page':1,		/*当前页号*/
        'data':[			/*当前页中的数据*/
            {id:122133,source:"192.168.111.253",target:"101.101.101.101",type:"类型1",account:18,name:"asdas"},
            {id:12123233,source:"172.189.165.123",target:"101.101.101.101",type:"类型2",account:11,name:"asdassf"},
            {id:12233,source:"166.145.189.235",target:"101.101.101.101",type:"类型3",account:10,name:"asdfas"},
            {id:122133,source:"145.132.105.168",target:"101.101.101.101",type:"类型4",account:9,name:"asdasdfs"},
            {id:12133,source:"136.100.120.210",target:"101.101.101.101",type:"类型5",account:8,name:"asddsfas"},
            {id:12323,source:"133.168.157.146",target:"101.101.101.101",type:"类型5",account:7,name:"asdsdfas"},
            {id:12133,source:"111.111.111.111",target:"101.101.101.101",type:"类型4",account:6,name:"asdsdfas"},
            {id:11323,source:"222.222.222.220",target:"101.101.101.101",type:"类型3",account:5,name:"asdsdfas"},
            {id:13123,source:"133.145.231.201",target:"101.101.101.101",type:"类型2",account:4,name:"assdfdas"},
            {id:11323,source:"168.172.193.234",target:"101.101.101.101",type:"类型1",account:3,name:"asdsfas"}
        ]
    };
    //添加例外主机
    var basicCharacteristics =[
        {"id":1,"name":"CGT访问（654）","isParent":true},
        {"id":2,"name":"CGT攻击（344）","isParent":true},
        {"id":3,"name":"安全漏洞（789）","isParent":true},
        {"id":4,"name":"安全扫描（789）","isParent":true},
        {"id":5,"name":"安全审计（789）","isParent":true},
        {"id":6,"name":"缓冲溢出（789）","isParent":true},
        {"id":7,"name":"拒绝服务（789）","isParent":true},
        {"id":8,"name":"木马后门（789）","isParent":true},
        {"id":9,"name":"欺骗劫持（789）","isParent":true},
        {"id":1055099, "pId":9, "name":"ARP_IP地址冲突","ty":"欺骗劫持","level":"高"},
        {"id":1055102, "pId":9, "name":"ARP_IP地址欺骗","ty":"欺骗劫持","level":"低"},
        {"id":10,"name":"协议分析（789）","isParent":true},
        {"id":11,"name":"蠕虫病毒（789）","isParent":true}
    ];
    //协议安全
    var securityAgreement=[
        {"id":1,"name":"CSRF检查","count":3,"checked":true},
        {"id":2,"name":"溢出检查","count":15,"checked":true},
        {"id":3,"name":"HTTP参数防护","count":5,"checked":true},
        {"id":4,"name":"HTTP协议检查","count":5,"checked":true},
        {"id":5,"name":"HTTP方法控制","count":3,"checked":false},
        {"id":6,"name":"URL禁用词过滤","count":6,"checked":true},
        {"id":7,"name":"屏蔽服务器版本","count":9,"checked":true},
        {"id":8,"name":"屏蔽服务器错误代码","count":2,"checked":true},
        {"id":9,"name":"Cookie白名单","count":7,"checked":true},
        {"id":10,"name":"Cookie溢出检查","count":2,"checked":true},
        {"id":11,"name":"Cookie安全过滤","count":56,"checked":true},
        {"id":12,"name":"屏蔽客户端错误代码","count":23,"checked":true}
    ];
    //内容安全
    var contentsecurity=[
        {"id":1,"name":"防盗链","count":5},
        {"id":2,"name":"爬虫防护","count":15},
        {"id":3,"name":"扫描器防护","count":3},
        {"id":4,"name":"URL访问控制","count":5},
        {"id":5,"name":"代码泄漏检查","count":56},
        {"id":6,"name":"敏感内容过滤","count":6},
        {"id":7,"name":"禁止直接访问","count":9},
        {"id":8,"name":"静态网页防篡改","count":23},
        {"id":9,"name":"上传文件类型检查","count":3},
        {"id":10,"name":"数据库错误信息检查","count":7},
        {"id":11,"name":"防暴力破解和扫号攻击","count":2},
        {"id":12,"name":"代码泄漏检查","count":26},
        {"id":13,"name":"WEBshell检查","count":12},
        {"id":14,"name":"目录内容泄漏检查","count":2},
        {"id":15,"name":"IIS短文件，文件夹防泄漏","count":12}
    ];
    //URL禁用词过滤
    var URLDisableWord=[
        {id:0,type:"$EA",describe:"扩展属性索引"},
        {id:1,type:"$DATA",describe:"包含默认的文件数据"},
        {id:2,type:"$BITMAP",describe:"位图的属性"},
        {id:3,type:"$TXF_DATA",describe:"事物的NTFS数据"},
        {id:4,type:"$FILE_NAME",describe:"文件名"},
        {id:5,type:"$OBJECT_ID",describe:"为每个MFT记录唯一的GUID"},
        {id:6,type:"$INDEX_ROOT",describe:"支持文件夹和其他索引"},
        {id:7,type:"$PROPERTY_SET",describe:"此属性已经被废弃使用"},
        {id:8,type:"$VOLUME_NAME",describe:"卷的名称"},
        {id:9,type:"$REPARSE_POINT",describe:"用于卷装入点"},
        {id:10,type:"$SYMBOLIC_LINK",describe:"此属性已经被废弃使用"},
        {id:11,type:"$ATTRIBUTE_LIST",describe:"列出所有属性记录的位置"},
        {id:12,type:"$VOLUME_VERSION",describe:"此属性已经被废弃使用"},
        {id:13,type:"$EA_INFORMATION",describe:"扩展属性信息"},
        {id:14,type:"$INDEX_ALLOCATION",describe:"一个目录流的类型名"},
        {id:15,type:"$SECURITY_DESCRIPTOR",describe:"安全描述符（存储ACL和SID）"},
        {id:16,type:"$VOLUME_INFORMATION",describe:"版本和卷的状态"},
        {id:17,type:"$LOGGED_UTILITY_STREAM",describe:"使用加密文件系统"},
        {id:18,type:"$STANDARD_INFORMATION",describe:"标准信息如文件的时间和配额数据"}
    ];
    switch (idName){
        case "virus":return virus;
        case "application":return application;
        case "net":return net;
        case "virus1":return virus1;
        case "net1":return net1;
        case "application1":return application1;
        case "mapData":return mapData;
        case "mapData2":return mapData;
        case "attackSource":return attackSource;
        case "attackSource2":return attackSource;
        case "attackPurposes":return attackPurposes;
        case "attackPurposes2":return attackPurposes;
        case "attackSystemData":return attackSystemData;
        case "attackSystemDataSource":return attackSystemDataSource;
        case "attackSystemDataAttack":return attackSystemDataAttack;
        case "filter":return filter;
        case "filter1":return filter1;
        case "filter2":return filter2;
        case "filter3":return filter3;
        case "session":return session;
        case "intrusion":return intrusion;
        case "intrusion2":return intrusion;
        case "exceptions":return exceptions;
        case "WAFIntrusion":return WAFIntrusion;
        case "configuration":return configuration;
        case "task":return task;
        case "report":return report;
        case "basicCharacteristics":return basicCharacteristics;
        case "reverseInterface":return reverseInterface;
        case "loadBalancing":return loadBalancing;
        case "serverGroup":return serverGroup;
        case "serverGroupAdd":return serverGroupAdd;
        case "licenseState":return licenseState;
        case "securityAgreement":return securityAgreement;
        case "contentsecurity":return contentsecurity;
        case "CSRF":return CSRF;
        case "HTTPParametersProtective":return HTTPParametersProtective;
        case "HTTPParametersProtectiveAdd":return HTTPParametersProtectiveAdd;
        case "URLDisableWord":return URLDisableWord;
        case "preventingHotlinking":return preventingHotlinking;
    }
}
function addData(name){
    var tabName=tab(name),//获取所需数据
        str="",//拼接字符串
        c=name.charAt(name.length-1), //判断相似名称
        r,//页面剩余行数
        m=0,//循环起始点
        href,
        index,
        i;//循环起始点
    if(name==="preventingHotlinking"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td><input type="checkbox" name="checkIP" ></td><td>'
            + n.name +'</td><td>'
            + n.url +'</td><td><input type="checkbox" name="checkIP2"></td>'
            +operation+'</tr>';
        });
        r=20-tabName.data.length;
        for(i=0;i<r;i++){str+=gridSeven;}
    }else if(name==="URLDisableWord"){
        $.each(tabName,function(i,n){
            str+='<tr><td><input type="checkbox" name="checkIP"></td><td>'
            + n.type +'</td><td>'
            + n.describe+ '</td></tr>';
        });
    }else if(name==="HTTPParametersProtectiveAdd"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td>'
            + n.name +'</td><td>'
            + n.long+ '</td><td>'
            + n.type +'</td></tr>';
        });
        r=5-tabName.data.length;
        for(i=0;i<r;i++){str+=gridThree;}
    }else if(name==="HTTPParametersProtective"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td><input type="checkbox" name="checkIP" ></td><td>'
            + n.name +'</td><td>'
            + n.domain+ '</td><td>'
            + n.url +'</td><td>'
            + n.account +'</td><td><input type="checkbox" name="checkIP2"></td>'
            +operationC+'</tr>';
        });
        r=20-tabName.data.length;
        for(i=0;i<r;i++){str+=gridEight;}
    }else if(name==="CSRF"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td><input type="checkbox" name="checkIP" ></td><td>'
            + n.URL +'</td><td>'
            + n.referer+ '</td><td>'
            + n.refererCheck +'</td><td>'
            + n.hidden +'</td>'
            +operationC+'</tr>';
        });
        r=20-tabName.data.length;
        for(i=0;i<r;i++){str+=gridSeven;}
    }else if(name==="contentsecurity"){//内容安全
        $.each(tabName,function(i,n){
            str+='<tr><td><input type="checkbox" name="checkIP" ></td><td>'
            + n.name
            +'</td><td><select name="move"><option value="0">阻断</option><option value="1">放行</option><option value="2">告警</option><option value="3">重定向</option></select></td><td><select name="log"><option value="0">记录</option><option value="1">不记录</option></select></td><td>'
            + n.count +'</td><td>';
            if(n.id<12){
                str+='<button name="optionBtn">选项</button>';
            }
            str+='</td></tr>';
        });
    }else if(name==="securityAgreement"){//协议安全
        $.each(tabName,function(i,n){
            str+='<tr><td><input type="checkbox" name="checkIP" ></td><td>'
                + n.name
                +'</td><td><select name="move"><option value="0">阻断</option><option value="1">放行</option><option value="2">告警</option><option value="3">重定向</option></select></td><td><select name="log"><option value="0">记录</option><option value="1">不记录</option></select></td><td>'
                + n.count +'</td><td>';
            if(n.id<7){
                str+='<button name="optionBtn">选项</button>';
            }
            str+='</td></tr>';
        });
    }else if(name==="licenseState"){              //许可证状态
        $.each(tabName,function(i,n){
            str+='<tr><td>'+ n.name +'</td>';
            if(n.state==true){
                str+='<td class="green">有效</td>';
            }else{
                str+='<td class="red">已过期</td>';
            }
            str+='<td>'+n.serviceTime+'</td></tr>';
        });
    }else if(name==="serverGroupAdd"){
        $.each(tabName,function(i,n){
            $.each(n.service.serviceIP,function(j,m){
                str+='<tr><td><input type="checkbox" name="checkIP" data-id="'+n.id+'"/></td>';
                index=m.indexOf(":");
                str+='<td>'+m.slice(0,index)+'</td><td>'
                +m.slice(index+1)+'</td><td>'
                +n.service.note[j]+'</td></tr>'
            });
        });
    }else if(name==="serverGroup"){
        $.each(tabName,function(i,n){
            str+='<tr><td rowspan="'+n.service.serviceIP.length+'"><input type="checkbox" name="checkIP"/></td><td rowspan="'+n.service.serviceIP.length+'" data-id="'+ n.id+'">'
            +n.service.name+'</td>';
            $.each(n.service.serviceIP,function(j,m){
                str+='<td>'+m+'</td><td>'
                +n.service.note[j]+'</td></tr>'
            });
        });
    }else if(name==="loadBalancing"){
        $.each(tabName,function(i,n){
            str+='<tr><td><input type="checkbox" name="checkIP"/></td><td>'
            +n.service+'</td><td>'
            +n.agentIP+'</td><td>'
            +n.algorithm+'</td><td>'
            +n.name+'</td></tr>';
        });
    }else if(name==="reverseInterface"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td><input type="checkbox" name="checkIP"/></td><td>'
                +n.agentIP+'</td><td>'
                +n.name+'</td><td>'
                +n.serviceIP+'</td></tr>';
        });
    }else if(name==="basicCharacteristics"){
        $.each(tabName,function(i,n){
            if(n.isParent===true){
                str+='<tr data-tt-id="'+n.id+'"><td>'
                +n.name+'</td><td></td><td></td><td>'
            }else{
                str+='<tr data-tt-id="'+n.id+'" data-tt-parent-id="'+ n.pId+'"><td>'
                +n.name+'</td><td>'
                +n.id+'</td><td>'
                +n.level+'</td><td>'
            }
            str+='<select name="move"><option value="0">阻断</option><option value="1">放行</option><option value="2">告警</option><option value="3">重定向</option></select></td><td><select name="log"><option value="0">记录</option><option value="1">不记录</option></select></td>'
            +'<td><input type="checkbox" name="checkIP" /></td>'
            +operationA+'</tr>';
        });
    }else if(name==="report"){
        $.each(tabName,function(i,n){
            str+='<tr><td><input type="checkbox"/></td><td  data-name="name">'
            +n.name+'</td><td>'
            +n.url+'</td><td>'
            +n.count+'</td><td>'
            +n.time+'</td>'
            +operationR+'</tr>';
        });
        r=10-tabName.length;
        for(i=0;i<r;i++){str+=gridNine;}
    }else if(name==="task"){
        $.each(tabName,function(i,n){
            str+='<tr><td><input type="checkbox"/></td><td  data-name="name">'
            +n.name+'</td><td class="state-img"><img src="imgs/icon03.png" alt=""/></td><td>'
            +n.url+'</td><td>'
            +n.type+'</td><td>'
            +n.submit+'</td><td>'
            +n.state+'</td>'
            +operationT+'</tr>';
        });
        r=10-tabName.length;
        for(i=0;i<r;i++){str+=gridEleven;}
    }else if(name==="WAFIntrusion"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td><input type="checkbox"/></td><td  data-name="name">'
            +n.name+'</td><td>'
            +n.feature+'</td><td>'
            +n.agreementSafe+'</td><td>'
            +n.contentSafe+'</td><td>'
            +n.reference+'</td><td>'
            +n.matching+'</td>'
            +operation+'</tr>';
        });
        r=20-tabName.data.length;
        for(i=0;i<r;i++){str+=gridTen;}
    }else if(name==="exceptions"||name==="filter3"){//特例主机
        $.each(tabName.data,function(i,n){
            str+='<tr><td><input type="checkbox"/></td><td data-name="name">'
            +n.featureID+'</td><td>'
            +n.type+'</td><td>'
            +n.featureName+'</td><td>'
            +n.exceptionId[0];
            if(n.exceptionId.length>1){
                str+='<span> ...</span>';
            }
            str+='</td><td><input type="checkbox"/></td>'
            +operation+'</tr>';
        });
        r=20-tabName.data.length;
        for(i=0;i<r;i++){str+=gridNine;}
    }else if(name==="configuration"||name==="filter2"){//例外配置
        $.each(tabName.data,function(i,n){
            str+='<tr><td><input type="checkbox"/></td><td data-name="name">'
            +n.featureID+'</td><td>'
            +n.featureName+'</td><td>'
            +n.type+'</td><td data-name="ip">'
            +n.exceptionIp[0];
            if(n.exceptionIp.length>1){
                str+='<span> ...</span>';
            }
            str+='</td><td data-name="url">'+n.exceptionURL[0];
            if(n.exceptionURL.length>1){
                str+='<span> ...</span>';
            }
            str+='</td><td><input type="checkbox"/></td>'
            +operation+'</tr>';
        });
        r=20-tabName.data.length;
        for(i=0;i<r;i++){str+=gridTen;}
    }else if(name==="intrusion"){//入侵防护策略
        $.each(tabName.data,function(i,n){
            str+='<tr><td><input type="checkbox"/></td><td data-name="name">'
            +n.name+'</td><td>'
            +n.feature+'</td><td>'
            +n.reference+'</td><td>'
            +n.matching+'</td>'
            +operation+'</tr>';
        });
        r=20-tabName.data.length;
        for(i=0;i<r;i++){str+=gridEight;}
        //点击攻击源进入及过滤
    }else if(name==="attackSystemDataSource"||name==="filter1"){
        $.each(tabName.data,function(i,n){
            str+='<tr><td>'
            +n.id+'</td><td>'
            +n.target+'</td><td><a href="#source">'
            +n.source+'</a></td><td><a href="#type">'
            +n.type+'</a></td><td>'
            +n.account+'</td><td><a href="#name">'
            +n.name+'</a></td>'
            +operationOld+'</tr>';
        });
        r=10-tabName.data.length;
        for(i=0;i<r;i++){str+=gridNine;}
    }else if(name==="attackSystemData"||name==="attackSystemDataAttack"||name==="filter"){//点击攻击目的、地图进入以及过滤
        $.each(tabName.data,function(i,n){
            str+='<tr><td>'
            +n.id+'</td><td><a href="#source">'
            +n.source+'</a></td><td>'
            +n.target+'</td><td><a href="#type">'
            +n.type+'</a></td><td>'
            +n.account+'</td><td><a href="#name">'
            +n.name+'</a></td>'
            +operationOld+'</tr>';
        });
        r=10-tabName.data.length;
        for(i=0;i<r;i++){str+=gridNine;}
    }else if(name==="mapData"||name==="mapData2"){//地图信息
        href=(name==="mapData2")?"#WAF-attack-system-analysis":"#defense-attack-system-analysis";
        $.each(tabName,function(i,n){
            str+='<tr><td>'
            +n[1].name+'</td><td><a href='
            +href+'>'
            +n[1].value+'</a></td></tr>';
        });
    }else if(name==="attackPurposes"||name==="attackPurposes2"){//攻击目的排名
        href=(name==="attackPurposes2")?"#WAF-attack-system-analysis":"#defense-attack-system-analysis";
        $.each(tabName.data,function(i,n){
            str+='<tr><td>'
            +(n.id+1)+'</td><td><a href='
            +href+'>'
            +n.ip+'</a></td><td>'
            +n.account+'</td></tr>';
        });
    }else if(name==="attackSource"||name==="attackSource2"){//攻击源排名
        href=(name==="attackSource2")?"#WAF-attack-system-analysis":"#defense-attack-system-analysis";
        $.each(tabName.data,function(i,n){
            str+='<tr><td>'
            +(n.id+1)+'</td><td><a href='
            +href+'>'
            +n.ip+'</a></td><td>'
            +n.account+'</td></tr>';
        });
    }else if(name==="session"){//接口信息
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
        r=10-tabName.data.length;
        for(i=0;i<r;i++){str+=gridEight;}
    }else if(c.toString()==="1"){//监控面板-事件告警下三个表格
        $.each(tabName.data,function(i,n){
            str+='<tr><td>'
            +n.id+'</td><td>'
            +n.time+'</td><td>'
            +n.type+'</td><td>'
            +n.name+'</td></tr>';
        });
        r=8-tabName.data.length;
        for(i=0;i<r;i++){str+=gridFour;}
    }else{//监控面板-事件分类后三个表格
        $.each(tabName.data,function(i,n){
            str+='<tr><td>' +n.ip+'</td><td>' +n.count+'</td>'
            +operationOld+'</tr>';
        });
    }
    $('#'+name+' tbody').html(str);//添加表格内容
    //添加分页
    if($('#'+name).has("tfoot").length==1){
        str='<li><a href="javascript:;"><i class="fa fa-caret-left"></i></a></li>'
        +'<li><a href="javascript:;">首页</a></li>';
        for(m=1;m<=tabName.page_count;m++){
            if(m==tabName.cur_page){
                str+='<li><a href="javascript:;" class="act">'+m+'</a></li>';
            }else{
                str+='<li><a href="javascript:;">'+m+'</a></li>';
            }
        }
        str+='<li><a href="javascript:;">末页</a></li>'
        +'<li><a href="javascript:;"><i class="fa fa-caret-right"></i></a></li>';
        $('#'+name+' tfoot ul').html(str);
    }else if($('#'+name).siblings(".portlet-title").has(".table-footer").length==1){
        str='<li>一共'+tabName.page_count+'页，'+tabName.record_count+'条数据</li><li><a href="javascript:;"><img src="imgs/left-down.png"/></a></li>'
        +'<li><a href="javascript:;"><img src="imgs/left.png"/></a></li>';
        for(m=1;m<=tabName.page_count;m++){
            if(m==tabName.cur_page){
                str+='<li><a href="javascript:;" class="act">'+m+'</a></li>';
            }else{
                str+='<li><a href="javascript:;">'+m+'</a></li>';
            }
        }
        str+='<li><a href="javascript:;"><img src="imgs/right.png"/></a></li>'
        +'<li><a href="javascript:;"><img src="imgs/right-down.png"/></a></li>'
        +'<li><input type="text"/></li><li><button class="btn-normal">跳转</button></li>';
        $('#'+name).siblings(".portlet-title").children(".table-footer").html(str);
    }
}

//2.计算天数差
function timeDifference(oldTime,newTime){
    var time=newTime-oldTime,
        days=Math.floor(time/(24*3600*1000)),   //计算出相差天数
        leave1=time%(24*3600*1000),             //计算天数后剩余的毫秒数
        hours=Math.floor(leave1/(3600*1000)),   //计算出小时数
        leave2=leave1%(3600*1000),              //计算小时数后剩余的毫秒数
        minutes=Math.floor(leave2/(60*1000)),   //计算相差分钟数
        leave3=leave2%(60*1000),                //计算分钟数后剩余的毫秒数
        seconds=Math.round(leave3/1000);        //计算相差秒数
    return days+"天"+hours+"小时"+minutes+"分钟"+seconds+"秒";
}

//3.计算随机数
function random(min,max){
    return (Math.random()*(max-min)+min)^0;
}

//4.时间格式
//4.1只显示小时和分钟
function format(date){
    var h=date.getHours(),//获得小时，保存在h中
        m=date.getMinutes();//获得分钟，保存在m中
    h<10&&(h="0"+h);//如果h<10，就变为0+h
    m<10&&(m="0"+m);//如果m<10,就变为0+m
    return h+":"+m;
}
//4.2显示月、日、小时和分钟
function format1(date){
    var M=date.getMonth()+ 1,//获得月份，+1后保存在M中
        d=date.getDate(),//获得日期，保存在d中
        h=date.getHours(),//获得小时，保存在h中
        m=date.getMinutes();//获得分钟，保存在m中
    M<10&&(M="0"+M);//如果M<10,就变为0+M
    d<10&&(d="0"+d);//如果d<10,就变为0+d
    h<10&&(h="0"+h);//如果h<10，就变为0+h
    m<10&&(m="0"+m);//如果m<10,就变为0+m
    return M+"-"+d+"\n"+h+":"+m;
}

//5.echarts图表
//5.1自身健康
function health(){
    var healthChart = echarts.init(document.getElementById('health')),
        optionHealth = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}分"    //提示框样式
            },
            title: {                                 //标题样式
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
                axisLine: {                     // 坐标轴线
                    show: false,                // 默认显示，属性show控制显示与否
                    lineStyle: {                // 属性lineStyle控制线条样式
                        color: [[0.33, '#EB625F'],[0.66, '#4F5CB7'],[1, '#22A700']],
                        width: 30
                    }
                },
                axisTick: {show: false}, // 坐标轴小标记
                splitLine: {show:false},// 分隔线
                axisLabel: {show:false},//坐标标签
                pointer: {width:5},
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
    clearInterval(healthChart.timeTicket);
    healthChart.timeTicket = setInterval(value,2000);//
    healthChart.setOption(optionHealth);
    window.addEventListener("resize",healthChart.resize);//自适应分辨率改变重画图形
}
//5.2事件分类
function event(id){
    var eventChart = echarts.init(document.getElementById(id)),
        topValue=20,optionEvent,legendColor="#333";
    if(id==="bg-threat"){
        topValue=60;
        legendColor="#9fc3ff"
    }
        optionEvent = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                top:topValue,
                height:280,
                textStyle:{
                    color:legendColor
                },
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
    if(id==="bg-threat"){
        eventChart.setOption({
            backgroundColor:'url("imgs/box-bg.png")',
            title : {
                text: '威胁分类',
                left: 'left',
                textStyle : {
                    color: '#3765a1',
                    fontSize:28
                }
            }
        });
    }
    eventChart.setOption(optionEvent);
    window.addEventListener("resize",eventChart.resize);//自适应分辨率改变重画图形
}
//5.3主机信息
function hInformation(){
    var HInformationChart = echarts.init(document.getElementById('h-information')),
        interval="",count=0,now="",date = [],data = [],data1= [];
    if(arguments[0]===undefined||arguments[0]===""){
        interval=60000;//每一分钟一个数据
        count=60;//一小时内有六十个数据
        now=new Date(new Date()-3600*1000);
    }else{
        interval=arguments[0]==300000?30000//5分钟前 30秒一个数据
            :arguments[0]==3600000?60000//1小时前 1分钟一个数据
            :arguments[0]==86400000?3600000//1天前 1小时一个数据
            :(24*3600*1000);//1个月前 1天一个数据
        count=arguments[0]/interval;
        now=new Date(new Date()-arguments[0]);
    }
    function addData(shift) {
        (interval<=60000)?date.push(format(now)):date.push(format1(now));
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
    var optionHInformation = {
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
//5.4HTTP并发连接数
function httpConcurrent(){
    var HConcurrentChart = echarts.init(document.getElementById('http-concurrent')),
        interval,count,now,date = [],data = [];
    if(arguments[0]===undefined||arguments[0]===""){
        interval=60000;//每一分钟一个数据
        count=60;//一小时内有六十个数据
        now=new Date(new Date()-3600*1000);
    }else{
        interval=arguments[0]==300000?30000//5分钟前 30秒一个数据
            :arguments[0]==3600000?60000//1小时前 1分钟一个数据
            :arguments[0]==86400000?3600000//1天前 1小时一个数据
            :(24*3600*1000);//1个月前 1天一个数据
        count=arguments[0]/interval;
        now=new Date(new Date()-arguments[0]);
    }
    function addData(shift) {
        if(interval<=60000){
            date.push(format(now));
        }else{
            date.push(format1(now));
        }
        data.push(random(0,999999));
        if (shift) {
            date.shift();
            data.shift();
        }
        now = new Date(+new Date(now) + interval);
    }
    for (var i = 0; i < count; i++) {addData();}
    var optionConcurrent = {
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
//5.5HTTP创建新连接数
function httpCreate(){
    var HCreateChart = echarts.init(document.getElementById('http-create')),
        interval,count,now,date = [],data = [];
    if(arguments[0]===undefined||arguments[0]===""){
        interval=60000;//每一分钟一个数据
        count=60;//一小时内有六十个数据
        now=new Date(new Date()-3600*1000);
    }else{
        interval=arguments[0]==300000?30000//5分钟前 30秒一个数据
            :arguments[0]==3600000?60000//1小时前 1分钟一个数据
            :arguments[0]==86400000?3600000//1天前 1小时一个数据
            :(24*3600*1000);//1个月前 1天一个数据
        count=arguments[0]/interval;
        now=new Date(new Date()-arguments[0]);
    }
    function addData(shift) {
        (interval<=60000)?date.push(format(now)):date.push(format1(now));
        data.push(random(0,999999));
        if (shift) {
            date.shift();
            data.shift();
        }
        now = new Date(+new Date(now) + interval);
    }
    for (var i = 0; i < count; i++) {addData();}
    var optionCreate = {
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
//5.6攻击地图
function attackMap(id){
    var attackMapChart = echarts.init(document.getElementById(id)),
        geoCoordMap = {
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
        },
        BJData =tab("mapData"),
        convertData = function (data) {
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
        },
        color = ['#D7422C'],
        series = [];
    if(id==="bg-attack"){
        color=['#a6c84c', '#ffa022', '#46bee9'];
    }
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
                    if(id==="bg-attack"){
                        var a={
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        }
                    }else{
                        var a={
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        }
                    }
                    return a;
                })
            });
    });
    var optionattackMap = {
        grid:{
            left:"3%",
            bottom:"3%",
            top:"3%"
        },
        tooltip : {
            trigger: 'item'
        },
        geo: {},
        series: series
    };
    if(id==="bg-attack"){
        attackMapChart.setOption({
            backgroundColor:'url("imgs/box-bg.png")',
            title : {
                text: '攻击地图',
                left: 'left',
                textStyle : {
                    color: '#3765a1',
                    fontSize:28
                }
            },
            series: [{
                type: 'map',
                map: 'china'
            }],
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor:"#11172C",
                        borderColor: 'rgba(67,75,110,1)',
                        borderWidth:1
                    },
                    emphasis: {
                        areaColor: 'transparent'
                    }
                }
            }
        });
    }else{
        attackMapChart.setOption({
            series: [{
                type: 'map',
                map: 'china'
            }],
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
            }
        });
    }
    attackMapChart.setOption(optionattackMap);
    window.addEventListener("resize",attackMapChart.resize);
}
//5.7威胁安全趋势
function securityTrend(id,time){
    var securityTrendChart = echarts.init(document.getElementById(id)),
        interval,count,now,date = [],data = [];
    if(time===undefined||time===""){
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
    function addData(shift) {
        (interval<=60000)?date.push(format(now)):date.push(format1(now));
        data.push(random(0,999999));
        if (shift) {
            date.shift();
            data.shift();
        }
        now = new Date(+new Date(now) + interval);
    }
    for (var i = 0; i < count; i++) {addData();}
    var optionSecurityTrend = {
        tooltip: {
            trigger: 'axis'
        }
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
    if(id==="bg-security-trend"){
        securityTrendChart.setOption({
            backgroundColor:'url("imgs/box-bg.png")',
            grid:{
                bottom:20
            },
            title : {
                text: '安全趋势',
                left: 'left',
                textStyle : {
                    color: '#3765a1',
                    fontSize:28
                }
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : date,
                    axisLabel:{
                        textStyle:{
                            color:"#9fc3ff"
                        },
                        interval:(count/8)^0
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
                    axisTick:{
                        show:false
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#9fc3ff"
                        }
                    },
                    splitLine:{
                        lineStyle: {
                            color: "#9fc3ff"
                        }
                    }
                }
            ],
            series: [
                {
                    name:'威胁次数',
                    type:'line',
                    data: data,
                    symbol:"circle",
                    symbolSize:10,
                    lineStyle:{
                        normal:{
                            color:"#3F5697",
                            width:2
                        }

                    },
                    itemStyle:{
                        normal:{
                            color: '#8C6FE9',
                            borderWidth:3,
                            borderColor:"#6039CD",
                            shadowColor: 'rgba(43,46,89,.5)',
                            shadowBlur: 10
                        }
                    }
                }
            ]
        });
    }else{
        securityTrendChart.setOption({
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
        });
    }

    gengS();
    securityTrendChart.timeTicket = setInterval(gengS,30000);
    window.addEventListener("resize",securityTrendChart.resize);
}
//5.8攻击源排名
function attackSourceRanking(id){
    var attackSourceChart = echarts.init(document.getElementById(id)),
        attackSource=tab("attackSource"),ip=[],data=[];
    $.each(attackSource.data,function(i,n){
        ip.push(n.ip);
        data.push(n.account);
    });
    var optionAttackSource= {
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
//5.9攻击目的排名
function attackPurposesRanking(id){
    var attackPurposesChart = echarts.init(document.getElementById(id)),
        attackSource=tab("attackPurposes"),ip=[],data=[];
    $.each(attackSource.data,function(i,n){
        ip.push(n.ip);
        data.push(n.account);
    });
    var optionAttackPurposes = {
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
//5.10攻击访问统计关系图
var attackData;
function attackRelationship(attackData){
    var attackRelationshipChart = echarts.init(document.getElementById('attack-system-analysis-relationship')),
        link=[],sData=[],
        color=["#99C343","#87CDF9","#FF7F50","#E3B618","#31D45A","#7E8CF2","#E87F98","#D59421","#C586EA","#44CACA"];
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
        $.each(attackData.data,function(i,n){
            if(i==0){
                sData.push({
                    category:i,
                    name: n.target,
                    value : 10,
                    symbol:"image://imgs/0.png",
                    symbolSize:100
                });
            }
            if(i<10){
                sData.push({
                    category:i+1,
                    name: n.source,
                    value : 5,
                    itemStyle:{
                        normal:{
                            color:color[i]
                        }
                    }
                });
            }
        });
        return sData;
    }
    var optionAttackRelationship = {
        tooltip: {
            trigger:"axis"
        },
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                name: '关系图',
                layout: 'force',
                symbolSize:25,
                force:{
                    initLayout:"circular",
                    repulsion:150,
                    gravity:0,
                    edgeLength:150,
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
//5.11攻击访问统计饼图
function attackRelationshipPie(attackData){
    var data=[];
    function addData(){
        var value1=0,value2=0,value3=0,value4=0,value5=0;
        $.each(attackData.data,function(i,n){
            switch (n.type){
                case "类型1":value1++;break;
                case "类型2":value3++;break;
                case "类型3":value3++;break;
                case "类型4":value4++;break;
                case "类型5":value5++;break;
            }
        });
        value1>0&&data.push({value:value1, name:'类型1'});
        value2>0&&data.push({value:value2, name:'类型2'});
        value3>0&&data.push({value:value3, name:'类型3'});
        value4>0&&data.push({value:value4, name:'类型4'});
        value5>0&&data.push({value:value5, name:'类型5'});
        return data;
    }
    var attackRelationshipChart = echarts.init(document.getElementById('attack-system-analysis-relationship-pie'));
    var optionAttackRelationship = {
        color:["#71C834","#52AFE5","#FEB71B","#884FFA","#9F81DD"],
        series: [
            {
                name:'访问来源',
                type:'pie',
                z:3,
                selectedMode: 'single',
                radius: [0, '60%'],
                labelLine: {
                    normal: {
                        length:50,
                        length2:60

                    }
                },
                label: {
                    normal: {
                        formatter:"{b}:占{d}%"
                    }
                },
                data:addData()
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
                        value:1,
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

//6.进度条
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

//7.防御检测三个数据
function dataM(){
    $(".condition-details.t span").html(random(1000,9999));
    $(".condition-details.d span").html(random(1000,9999));
    $(".condition-details.h span").html(random(1,255)+"."+random(1,255)+"."+random(1,255)+"."+random(1,255));
}
function dataM1(){
    $(".condition-details.f span").html(random(1000,9999));
    $(".condition-details.l span").html(random(1000,9999));
    $(".condition-details.b span").html(random(1000,9999));
}

//8.zTree配置
var setting = {
        data: {
            simpleData: {
                enable: true
            }
        },
        view: {
            fontCss: getFontCss
        }
    },
    //入侵防护策略下基本特征库数据
    invasionProtection= [
        {"id":1, "pId":0, "name":"Buffer Overflow","icon":"imgs/icon04.png","isParent":true},
        {"id":1055099, "pId":1, "name":"EXPLOIT Squid Proxy Gopher Response Processing Buffer Overflow","l":"中","icon":"imgs/icon02.png","ty":"Buffer Overflow"},
        {"id":1055102, "pId":1, "name":"EXPLOIT Apache HTTPD mod_proxy_ajp Denial Of Service","l":"高","icon":"imgs/icon02.png","ty":"Buffer Overflow"},
        {"id":2, "pId":0, "name":"Dos/DDoS","icon":"imgs/icon04.png", "isParent":true},
        {"id":1055098, "pId":2, "name":"EXPLOIT Squid Proxy Gopher Response Processing Buffer Overflow","l":"中","icon":"imgs/icon02.png","ty":"Dos/DDoS"},
        {"id":1055101, "pId":2, "name":"EXPLOIT Apache HTTPD mod_proxy_ajp Denial Of Service","l":"高","icon":"imgs/icon02.png","ty":"Dos/DDoS"}
    ],
    //入侵防护策略下自定义特征库数据
    invasionProtectionCustom=[],
    //应用安全策略下特征库数据
    applicationSecurity= [
        {
            "id":1,
            "pId":0,
            "name":"Web_Server_Bug",
            "icon":"imgs/icon04.png",
            "isParent":true
        },
        {
            "id":27525212,
            "pId":1,
            "name":"iis_webdav_unicode_request_hypass",
            "icon":"imgs/icon02.png",
            "os":"Windows",
            "server":"IIS",
            "database":"所有数据库",
            "language":"所有系统语言",
            "l":"中",
            "ty":"Web_Server_Bug",
            "detailed":"CVE编号:CVE-2009-1535</br>危害描述：IIS的WEBDAX功能再解析RUL并发送回数据时没有正确的处理Unicode令牌环，远程攻击者可以通过提交恶意HTPP GET请求绕过受口令保护的文件夹认证，或在受口令保护的WebDAV目录中列出、上传或下载文件。</br>配置建议：对于IIS6.0以及IIS5.1且没有安装补丁的系统建议检查此项。"
        }
    ],
    //应用安全策略下自定义特征库数据
    applicationSecurityCustom=[],
    lastValue = "",
    //查找出的节点选项
    nodeList = [],
    //子节点显示框
    selectSpan=$(".pack span"),
    value,zTree;
function focusKey() {
    $(this).hasClass("empty")&&$(this).removeClass("empty");
}
function blurKey() {
    ($(this).get(0).value === "")&&$(this).addClass("empty");
}
function searchNode() {
    var option,value = $.trim($(this).get(0).value),SelectButton;
    if($(this)[0]===$("#typeTreeSearch")[0]){
        zTree = $.fn.zTree.getZTreeObj("treeType");
        SelectButton=selectButton;
        option=true;
    }else if($(this)[0]===$("#typeTreeSearch1")[0]){
        zTree = $.fn.zTree.getZTreeObj("treeType1");
        SelectButton=selectButton1;
        option=false;
    }
    ($(this).hasClass("empty"))?value = "":SelectButton.attr("disabled","true");
    if (lastValue === value) return;
    lastValue = value;
    if (value === ""){
        SelectButton.removeAttr("disabled");
        updateNodes(false,option);
        return;
    }
    updateNodes(false,option);
    nodeList = zTree.getNodesByParamFuzzy("name", value);
    updateNodes(true,option);
}
function searchNodes() {
    if($(this).parents(".portlet").has("#treeType").length!=0){
        zTree = $.fn.zTree.getZTreeObj("treeType");
        updateNodes(false,true);
        nodeList = zTree.getNodesByFilter(selectFilter);
        updateNodes(true,true);
    }else{
        zTree = $.fn.zTree.getZTreeObj("treeType1");
        updateNodes(false,false);
        nodeList = zTree.getNodesByFilter(selectFilter1);
        updateNodes(true,false);
    }
}
function selectFilter(node) {
    var type=$("#selectType").find("option:selected").text(),
        name=$("#selectName").find("option:selected").text(),
        level=$("#selectLevel").find("option:selected").text();
    if(type==="请选择"&&name==="请选择"&&level==="请选择"){
        return;
    }else if(type!=="请选择"&&name==="请选择"&&level==="请选择"){
        return (node.pId === null && node.name===type);
    }else if(type==="请选择"&&name!=="请选择"&&level==="请选择"){
        return (node.pId !== null && node.name===name);
    }else if(type==="请选择"&&name==="请选择"&&level!=="请选择"){
        return ( node.l===level);
    }else if(type!=="请选择"&&name!=="请选择"&&level==="请选择"){
        return (node.ty === type && node.name===name);
    }else if(type!=="请选择"&&name==="请选择"&&level!=="请选择"){
        return (node.ty === type && node.l===level);
    }else if(type==="请选择"&&name!=="请选择"&&level!=="请选择"){
        return (node.name === name && node.l===level);
    } else if(type!=="请选择"&&name!=="请选择"&&level!=="请选择"){
        return (node.name === name && node.l===level && node.ty===type);
    }
}
function selectFilter1(node) {
    var type=$("#selectType1").find("option:selected").text(),
        level=$("#selectLevel1").find("option:selected").text();
    if(type==="请选择"&&level==="请选择"){
        return;
    }else if(type!=="请选择"&&level==="请选择"){
        return (node.pId === null && node.name===type);
    }else if(type==="请选择"&&level!=="请选择"){
        return ( node.l===level);
    }else if(type!=="请选择"&&level!=="请选择"){
        return (node.l===level && node.ty===type);
    }
}
function updateNodes(highlight,option) {
    (option)?(zTree = $.fn.zTree.getZTreeObj("treeType")):(zTree = $.fn.zTree.getZTreeObj("treeType1"));
    for( var i=0, l=nodeList.length; i<l; i++) {
        nodeList[i].highlight = highlight;
        var node=zTree.getNodeByParam("id",nodeList[i].pId);
        (nodeList[i].pId!==null)&zTree.expandNode(node,highlight);
        zTree.updateNode(nodeList[i]);
    }
}
function getFontCss(treeId, treeNode) {
    return (!!treeNode.highlight) ? {color:"#A60000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
}

//9.删除
function del(text,original,option,originalName){
    if(originalName==="task"||originalName==="report"){
        $.each(original,function(i,n){
            if(n[option]===text){
                for(i;i<original.length-1;i++){
                    original[i]=original[i+1];
                }
            }
        });
        original.pop();
    }else{
        $.each(original.data,function(i,n){
            if(n[option]===text){
                for(i;i<original.data.length-1;i++){
                    original.data[i]=original.data[i+1];
                }
            }
        });
        original.data.pop();
    }
    addData(originalName);
}
function delInformation(){
    if ($("#application-security-policy").hasClass("active")) {
        if($("#WEB-leakage").hasClass("active")){
            (arguments[1].parents("table").attr("id")==="task")?del(arguments[0],task,"name","task"):del(arguments[0],report,"name","report");
        }
    } else if($("#intrusion-protection-strategy").hasClass("active")) {
        if($("#exceptions-host").hasClass("active")){
            del(arguments[0],exceptions,"featureID","exceptions");
        }
    }
}

//10.警告提示
function tipWarning(tipC,tip1,tipP,text){
    var contentHeight=$(".page-content>.tip-content").height(),
        panHeight=$(".tab-pane.active").height();
    tipC.show();
    if(contentHeight>panHeight){
        tipC.height(contentHeight)
    }else{
        tipC.height(panHeight)
    }
    tip1.show().siblings("div").hide();
    $(".tip1 img").attr("src","imgs/jing.png");
    tipP.text(text);
}

//11.弹出框位置
var tip=$(".tip"),tipAll=$(".tip, .tip1");
function position(){
    var top = ($(window).height() - tip.height()-84)/ 2,
        left = ($(window).width() - tip.width()-180)/ 2,
        scrollTop = $(document).scrollTop(),
        scrollLeft = $(document).scrollLeft();
    tipAll.css( { position : 'absolute', 'top' : top + scrollTop, left : left + scrollLeft } );
}

//12.统计分析
function analysis(relationship,relationshipPie,me,source,filterName,analysisSelector){
    var href=me[0].hash,textP;//所点击a的href属性
    analysisSelector.siblings("li").removeClass("active");//清空过滤项
    attackData=tab(source);
    $(href).addClass("active").siblings("div").removeClass("active");//显示关系图页面
    (relationship.css("display")==="block")? attackRelationship(attackData):attackRelationshipPie(attackData);//画图
    textP=(source==="attackSystemDataSource")?"当前源：":"当前目的：";
    analysisSelector.children("p").text(textP+attackData.data[0].target);//在页面上显示当前
    $("#"+source).addClass("active").siblings("table").removeClass("active");//显示排名表格
    addData(source);//填充表格中内容
    //图形切换按钮
    $(".filter-conditions button").click(function(){
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
    $("#"+source+" tbody,#"+filterName+" tbody").delegate("a", "click", function(e){//表格过滤事件
        e.preventDefault();
        var href=$(this)[0].hash.slice(1),
            value=$(this).text(),
            arr=[];
        $.each(attackData.data,function(i,n){ (n[href]===value)&& arr.push(n)});
        attackData.data=arr;
        (source==="attackSystemDataSource")?filter1=attackData:filter=attackData;
        (relationship.css("display")==="block")?attackRelationship(attackData):attackRelationshipPie(attackData);
        $("#"+filterName).addClass("active").siblings("table").removeClass("active");
        addData(filterName);
        $("#"+href+" p").text(value).parent().addClass("active");
    });
    $(".filter-conditions ul li i").click(function(){
        attackData=tab(source);
        var li=$(this).parent().siblings().has("i"),
            lArr=[],
            arr=[];
        $.each(li,function(i,n){
            (n.className==="active")&& lArr.push({name:n.id,value:n.childNodes[1].innerHTML});
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
        (relationship.css("display")==="block")?attackRelationship(attackData):attackRelationshipPie(attackData);
        $(this).parent().removeClass("active");
        (source==="attackSystemDataSource")?filter1=attackData:filter=attackData;
        addData(filterName);
    })
}

//13.删除树
function DelTree(start,end,id,custom,index){
    $.each(custom, function (i, n) {
        if (n.id == selectInput[index].value) {
            for (var j = i; j < custom.length; j++) {
                custom[j] = custom[j + 1];
            }
        }
    });
    custom.pop();
    for (var i = start; i < end; i++) {
        selectInput[i].value = ""
    }
    if(end===6){
        selectTextarea[0].value = "";
        selectTextarea[1].value = "";
    }else{
        selectTextarea[0].value = "";
    }
    $.fn.zTree.init($(id), setting, custom);
}

//14.模拟文件上传
function getFile(obj,inputName){
    var file_name = $(obj).val();
    $("input[name='"+inputName+"']").val(file_name);
}

//15.点击树查看详情
function addSpan(n, option) {
    switch (option) {
        case 1:
            selectSpan[0].innerHTML = n.name;
            selectSpan[1].innerHTML = n.id;
            selectSpan[2].innerHTML = n.l;
            selectSpan[3].innerHTML = n.ty;
            selectSpan[4].innerHTML = n.name;
            break;
        case 2:
            selectSpan[0].innerHTML = n.id;
            selectSpan[1].innerHTML = n.os;
            selectSpan[2].innerHTML = n.name;
            selectSpan[3].innerHTML = n.server;
            selectSpan[4].innerHTML = n.l;
            selectSpan[5].innerHTML = n.database;
            selectSpan[6].innerHTML = n.ty;
            selectSpan[7].innerHTML = n.language;
            selectSpan[8].innerHTML = n.detailed;
            break;
        case 3:
            selectInput[0].value = n.name;
            selectInput[1].value = n.id;
            selectInput[2].value = n.l;
            selectInput[3].value = n.ty;
            selectTextarea[0].value = n.detail;
            break;
        case 4:
            selectInput[0].value = n.id;
            selectInput[1].value = n.object;
            selectInput[2].value = n.name;
            selectInput[3].value = n.operation;
            selectInput[4].value = n.l;
            selectInput[5].value = n.ty;
            selectTextarea[0].value = n.detection;
            selectTextarea[1].value = n.detail;
            break;
    }
}

//16.全选框
function selectAll(chb){//全选或取消全选
    var id=$(chb).parents("table")[0].id;
    var chbs;
    if($(chb)[0].name==="upCheck"){
        chbs=$("#"+id+" [name='checkIP2']");
    }else{
        chbs=$("#"+id+" [name='checkIP']");
    }
    $.each(chbs,function(i,n){
        n.checked=chb.checked;
    });
}
function selectOne(){//选中或取消选中一个chb
    var id=$(this).parents("table")[0].id,
        mark=true,
        selAll,chbs;
    if($(this)[0].name==="checkIP2"){
        selAll=$("#"+id+" thead [name='upCheck']");
        chbs=$("#"+id+" [name='checkIP2']");
    }else{
        selAll=$("#"+id+" thead [name='mainChb']");
        chbs=$("#"+id+" [name='checkIP']");
    }
    if(this.checked==false){//如果当前chb的checked是false，
        selAll[0].checked=false;//将当前chb的checked改为false
    }else{
        $.each(chbs,function(i,n){
            if(n.checked==false){//如果当前chb没有选中，则直接返回
                mark=false
            }
        });
        mark && (selAll[0].checked=true);
    }
}

//17.表格删除按键
function tableDel(me,tipC,tip,tipP){
    var text = me.parent().siblings("[data-name='name']").text(),//对应行的名称
        contentHeight=$(".page-content>.tip-content").height(),
        panHeight=me.parents(".tab-pane.active").height();
    //展示提示框
    tipC.show();
    if(contentHeight>panHeight){
        tipC.height(contentHeight)
    }else{
        tipC.height(panHeight)
    }
    tip.show().siblings("div").hide();
    tipP.text("确认删除‘" + text + "’?");
}

//18.选择框
function checkBox(li){
    var chbs = $(".portlet-wrapper .tab-pane tbody tr td:first-child input");
    chb = [];
    $.each(chbs, function (i, n) {
        (n.checked) && chb.push($(this));
    });
    (chb.length > 0) ? li.addClass("active") : li.removeClass("active");
}

//19.多选删除按钮
function liDel(me,tipC,tip,tipP,tip1){
    var contentHeight=$(".page-content>.tip-content").height(),
        panHeight=me.parents(".tab-pane.active").height();
    if (me.hasClass("active")) {
        tipC.show();
        if(contentHeight>panHeight){
            tipC.height(contentHeight)
        }else{
            tipC.height(panHeight)
        }
        tip.show().siblings("div").hide();
        tipP.text("确认删除所选项？");
    } else {
        tipWarning(tipC, tip1, tipP, "请先选择要处理的数据信息！");
    }
}

//20.改变页面高度
function heightChange(menu){
    var wrapper=$(".page-content-wrapper"),
        tabContent=$(".portlet-wrapper>.tab-content");
    if((menu.height()>$(window).height()-144)&&(wrapper[0].id=="control")){
        wrapper.height($(".page-container").height());
    }else if(menu.height()>$(window).height()-154){
        wrapper.height($(".page-container").height());
        if(wrapper.hasClass("content-wrapper")){
            tabContent.height(wrapper.height()-34);
        }else if(wrapper.hasClass("iframe-content")){
            tabContent.height(wrapper.height()-34);
            $(".tab-content iframe").height(tabContent.height()-5);
        }else{
            tabContent.height(wrapper.height()-64);
        }
    }else{
        wrapper.height($(window).height()-114);
        if(wrapper.hasClass("content-wrapper")){
            tabContent.height(wrapper.height()-34);
        }else if(wrapper.hasClass("iframe-content")){
            tabContent.height(wrapper.height()-34);
            $(".tab-content iframe").height(tabContent.height()-5);
        }else{
            tabContent.height(wrapper.height()-64);
        }
    }
}
//21.设置页面初始高度
function heightSet(){
    var wrapper=$(".page-content-wrapper"),
        tabContent=$(".page-content>.tab-content");
    wrapper.height($(window).height()-114);
    if(wrapper.hasClass("content-wrapper")){
        tabContent.height(wrapper.height()-34);
    }else if(wrapper.hasClass("iframe-content")){
        tabContent.height(wrapper.height()-34);
        $(".tab-content iframe").height(tabContent.height()-5);
    }else{
        tabContent.height(wrapper.height()-64);
    }
    if($(".page-sidebar-menu").height()>wrapper.height()-10) {
        wrapper.height($(".page-container").height());
        if(wrapper.hasClass("content-wrapper")){
            tabContent.height(wrapper.height()-34);
        }else if(wrapper.hasClass("iframe-content")){
            tabContent.height(wrapper.height()-34);
            $(".tab-content iframe").height(tabContent.height()-5);
        }else{
            tabContent.height(wrapper.height()-64);
        }
    }
}

//22.添加页选择框
function checkSelect(){
    $("select").change(function(){
        var childName=$(this)[0].name,
            parent=$(this).parents("table")[0].id,
            fatherChecked=$('#'+parent+' [name="'+childName+'Chb"]')[0].checked;
        if(fatherChecked){
            var chbs=$('[name="'+childName+'"]'),
                value=$(this)[0].value;
            $.each(chbs,function(i,n){
                n.value=value;
            })
        }
    })
}

//23.添加页弹出框
function popContent(){
    $('[name="optionBtn"]').click(function(){
        var name=$(this).parents("tr").children()[1].innerHTML,
            contentHeight=$(this).parents(".page-content").children(".tip-content").height(),
            panHeight=$(this).parents("#WAF-strategy-add").height(),
            tip=$(".tip-container2");
        tip.show();
        (contentHeight>panHeight)? tip.height(contentHeight-10) : tip.height(panHeight);
        if(name==="CSRF检查"){
            $(".tip-container2 .pop").addClass("active")
                .load("data/security-policy/application-security-policy/WAF-strategy-add/security-agreement-pop/CSRF-check.html")
                .siblings("div").removeClass("active")
        }else if(name==="溢出检查"){
            $(".tip-container2 .pop").addClass("active")
                .load("data/security-policy/application-security-policy/WAF-strategy-add/security-agreement-pop/Overflow-check.html")
                .siblings("div").removeClass("active")
        }else if(name==="HTTP参数防护"){
            $(".tip-container2 .pop").addClass("active")
                .load("data/security-policy/application-security-policy/WAF-strategy-add/security-agreement-pop/HTTP-Parameters-protective/HTTP-Parameters-protective.html")
                .siblings("div").removeClass("active")
        }else if(name==="HTTP协议检查"){
            $(".tip-container2 .pop").addClass("active")
                .load("data/security-policy/application-security-policy/WAF-strategy-add/security-agreement-pop/HTTP-agreement-check.html")
                .siblings("div").removeClass("active")
        }else if(name==="HTTP方法控制"){
            $(".tip-container2 .pop").addClass("active")
                .load("data/security-policy/application-security-policy/WAF-strategy-add/security-agreement-pop/HTTP-methods-control.html")
                .siblings("div").removeClass("active")
        }else if(name==="URL禁用词过滤"){
            $(".tip-container2 .pop").addClass("active")
                .load("data/security-policy/application-security-policy/WAF-strategy-add/security-agreement-pop/URL-disable-word.html")
                .siblings("div").removeClass("active")
        }else if(name==="防盗链"){
            $(".tip-container2 .pop").addClass("active")
                .load("data/security-policy/application-security-policy/WAF-strategy-add/content-security-pop/preventing-hotlinking/preventing-hotlinking.html")
                .siblings("div").removeClass("active")
        }else if(name==="扫描器防护"){
            $(".tip-container2 .pop").addClass("active")
                .load("data/security-policy/application-security-policy/WAF-strategy-add/content-security-pop/scanner-protection.html")
                .siblings("div").removeClass("active")
        }else if(name==="爬虫防护"){
            $(".tip-container2 .pop").addClass("active")
                .load("data/security-policy/application-security-policy/WAF-strategy-add/content-security-pop/crawler-protection/crawler-protection.html")
                .siblings("div").removeClass("active")
        }
    })
}

//24.添加页弹出框样式
function popHeight(){
    var tipHeight=$(".tip-container2").height(),
        pop=$(".pop"),
        tableContent=$(".table-content"),
        table=$(".table-content table");
    if(tipHeight<pop.height()+20){
        if(tableContent.hasClass("table-only")){
            tableContent.height(tipHeight-136);
        }else{
            tableContent.height(tipHeight-177);
        }
        if($(".panel-body").hasClass("panel-body-form")){
            $(".panel-body-form").height(tipHeight-157);
        }
        pop.css("margin","10px 20px");
    }else{
        var marginTop=(tipHeight-pop.height())/2;
        tableContent.height(table.height()+10);
        pop.css("margin",marginTop+"px 20px");
    }
}
function pop1Height(){
    var tipHeight=$(".tip-container2").height(),
        pop=$(".pop1"),
        tableContent=$(".table-content"),
        table=$(".table-content table");
    if(tipHeight<pop.height()){
        tableContent.height(tipHeight-167);
        pop.css("margin","10px 20px");
    }else{
        var marginTop=(tipHeight-pop.height())/2;
        tableContent.height(table.height()+10);
        pop.css("margin",marginTop+"px 20px");
    }
}


function bgSelfState(){
    var riskValueChart=echarts.init(document.getElementById('bg-self-state'));//获取要显示图形的元素id
    var dataSC, dataFC,dataSM, dataFM,dataSD, dataFD,optionRiskValue;
    //环形图显示部分颜色
    var SItem={
        normal : {
            color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#61B500' // 0% 处的颜色
            }, {
                offset: 0.5, color: '#D9B300' // 50% 处的颜色
            }, {
                offset: 1, color: '#F81A00' // 100% 处的颜色
            }], false)
        }
    };
    //文字部分样式
    var FItem={
        normal : {
            color:"#737781",
            label : {
                formatter : '{b}',
                textStyle: {
                    fontSize:20,
                    baseline : 'top'
                }
            }
        }
    };
    //数值更新
    function dataGeng(){
        dataSC=random(0,100);
        dataFC=100-dataSC;
        dataSM=random(0,100);
        dataFM=100-dataSM;
        dataSD=random(0,100);
        dataFD=100-dataSD;
    }
    optionRiskValue= {
        backgroundColor:'url("imgs/box-bg.png")',
        title : {
            text: '自身状态',
            left: 'left',
            textStyle : {
                color: '#3765a1',
                fontSize:28
            }
        },
        series : [
            {
                type : 'pie',
                center : ['15%', '65%'],//环形图位置
                radius : [70, 80],//环形图圈的大小
                hoverAnimation:false,
                label:{//百分比的样式
                    normal:{
                        position : 'center',
                        show:true,
                        formatter : function (params){
                            return params.value+"%"
                        },
                        textStyle: {
                            fontSize:30,
                            color:"#fff",
                            baseline : 'bottom'
                        }
                    }
                },
                labelLine : {
                    normal:{
                        show : false
                    }
                }
            },
            {
                type : 'pie',
                center : ['50%', '65%'],//环形图位置
                radius : [70, 80],//环形图圈的大小
                hoverAnimation:false,
                label:{//百分比的样式
                    normal:{
                        position : 'center',
                        show:true,
                        formatter : function (params){
                            return params.value+"%"
                        },
                        textStyle: {
                            fontSize:30,
                            color:"#fff",
                            baseline : 'bottom'
                        }
                    }
                },
                labelLine : {
                    normal:{
                        show : false
                    }
                }
            },
            {
                type : 'pie',
                center : ['85%', '65%'],//环形图位置
                radius : [70, 80],//环形图圈的大小
                hoverAnimation:false,
                label:{//百分比的样式
                    normal:{
                        position : 'center',
                        show:true,
                        formatter : function (params){
                            return params.value+"%"
                        },
                        textStyle: {
                            fontSize:30,
                            color:"#fff",
                            baseline : 'bottom'
                        }
                    }
                },
                labelLine : {
                    normal:{
                        show : false
                    }
                }
            }
        ]
    };
    function geng(){
        dataGeng();
        riskValueChart.setOption({
            series: [
                {data:[
                    {name:'score',value:dataSC,itemStyle : SItem},
                    {name:'CPU',value:dataFC,itemStyle : FItem}
                ]},
                {data:[
                    {name:'score',value:dataSM,itemStyle : SItem},
                    {name:'内存',value:dataFM,itemStyle : FItem}
                ]},
                {data:[
                    {name:'score',value:dataSD,itemStyle : SItem},
                    {name:'硬盘',value:dataFD,itemStyle : FItem}
                ]}
            ]
        });
    }
    riskValueChart.setOption(optionRiskValue);
    geng();
    riskValueChart.timeTicket = setInterval(geng,2000);//每一秒更新一次
    window.onresize=riskValueChart.resize;
}