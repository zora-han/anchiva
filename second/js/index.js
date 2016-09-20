/*Created by Secret on 2016/7/14.*/
$(document).ready(function () {
    //当前时间显示
    setInterval(function () {
        $("#clock").text(moment().format("h:mm:ss"));
    }, 100);
    health();//自身健康仪表盘
    event();//事件分类饼图
    addData('virus');//第二行表格
    addData('virus1');//第三行表格
    //自身状态
    var span = $(".state span");
    setInterval(function () {
        for (var i = 0; i < span.length; i++) {
            span[i].dataset.img = Math.random() > 0.5 ? 1 : 0;
            var img = span[i].dataset.img;
            if (img === "0") {
                span[i].innerHTML = "<img src='imgs/down.png'>";
            }
            else {
                span[i].innerHTML = "<img src='imgs/up.png'>";
            }
        }
    }, 1000);
    var dataMTime,//检测防御数据更新定时器标记
        dataMTime1,//WAF数据更新定时器标记
        progressBarTime,//进度条定时器标记
        oldTime = new Date("2015/9/12 13:00:05");//开始使用产品的日期
    //表格按钮切换
    $(".table-bars li").click(function (e) {
        e.preventDefault();
        var href = $(this).children("a")[0].hash;
        $(href).addClass("active").siblings("table").removeClass("active");
        $(this).addClass("active").siblings("li").removeClass("active");
        addData(href.slice(1));
    });
    //左侧导航栏切换
    $(".page-sidebar-menu>.nav-item a").click(function (e) {
        e.preventDefault();
        var href = $(this)[0].hash;
        $(this).parent().siblings("li").children("ul").hide().children("li").removeClass("active").removeClass("open");
        if (href.slice(0, 1) === "#") {
            $(href).addClass("active").siblings("div").removeClass("active");
            $(this).parent().addClass("active").addClass("open").siblings("li").removeClass("active").removeClass("open");
        }
        if (href === "#control") {
            setTimeout(event, 200);
            setTimeout(health, 200);
        }
    });
    $(".sub-menu>.nav-item a").click(function (e) {
        e.preventDefault();
        $(this).parent().siblings("li").removeClass("active").removeClass("open");
        $(this).parents("li.nav-item.open").siblings("li").removeClass("open").removeClass("active");
        var href = $(this)[0].hash,
            fDiv = $(href + " .tab-content>div:first-child"),
            fSpan = $(href + " .nav-tabs li:first-child a");
        if (fDiv.css("display") !== "block") {//默认显示每个页面的第一个模块
            fDiv.addClass("active").siblings("div").removeClass("active");
            fSpan.attr("aria-expanded", "true").siblings("span").addClass("selected").parent().addClass("active").siblings("li").removeClass("active").children("a").attr("aria-expanded", "false").siblings("span").removeClass("selected");
        }
        if (href === "#system-state") {//状态监控——系统状态
            setTimeout(hInformation(), 200);//主机信息显示
            //时间区间选择
            $("#selectEd").on("change", function () {
                hInformation($(this).val());
            });
            $("#selectEd1").on("change", function () {
                httpConcurrent($(this).val());
                httpCreate($(this).val());
            });
            //使用产品天数
            setInterval(function () {
                var newTime = new Date();
                $(".h-text span.days").text(timeDifference(oldTime, newTime));
            }, 200);
            //进度条
            progressBar();
            clearInterval(progressBarTime);
            progressBarTime = setInterval(progressBar, 15000);//进度条每隔15秒更新一次
        } else if (href === "#monitoring-defense") {//状态监控——检测防御
            //第一行的三个数据
            dataM();
            clearInterval(dataMTime);
            dataMTime = setInterval(dataM, 1000);
            securityTrend("security-trend");//威胁安全趋势
            //攻击地图
            addData("mapData");
            attackMap("attack-map");
            //攻击源排名
            attackSourceRanking('attack-source-ranking');
            addData("attackSource");
            //攻击目的排名
            attackPurposesRanking('attack-purposes-ranking');
            addData("attackPurposes");
            //时间区间选择
            $("#selectEd2").on("change", function () {
                securityTrend("security-trend", $(this).val());
            });
        } else if (href === "#WAF") {//状态监控——WAF
            //第一行的三个数据
            dataM1();
            clearInterval(dataMTime1);
            dataMTime1 = setInterval(dataM1, 1000);
            //攻击地图
            attackMap("attack-map1");
            addData("mapData2");
            securityTrend("security-trend1");//威胁安全趋势
            //URL-TOP10
            attackSourceRanking('attack-source-ranking1');
            addData("attackSource2");
            //源URL-TOP10
            attackPurposesRanking('attack-purposes-ranking1');
            addData("attackPurposes2");
            //时间区间选择
            $("#selectEd3").on("change", function () {
                securityTrend("security-trend1", $(this).val());
            });
        } else if (href === "#intrusion-protection-strategy") {//安全策略——入侵防护策略
            addData("intrusion");//入侵防护策略表格
        } else if (href === "#application-security-policy") {//安全策略——应用安全策略
            addData("WAFIntrusion");//WAF策略表格
        }
    });
    //切换标签调用图表
    $(".nav-tabs li a").click(function () {
        var href = $(this)[0].hash;
        if (href === "#session-information") {//状态监控——系统状态——网络信息
            setTimeout(httpConcurrent, 200);//HTTP并发连接数
            setTimeout(httpCreate, 200);//HTTP新建连接数
            addData("session");//接口信息表
            $("#selectEd1").val("");//置空下拉框
        } else if (href === "#system-information") {//状态监控——系统状态——系统信息
            setTimeout(hInformation, 200);//主机信息
            $("#selectEd").val("");//置空下拉框
        } else if (href === "#defense-basic-situation") {//状态监控——检测防御——基本概况
            setTimeout(securityTrend, 200);//威胁安全趋势
            setTimeout(attackSourceRanking, 200);//攻击源排名
            setTimeout(attackPurposesRanking, 200);//攻击目的排名
            setTimeout(attackMap, 200);//攻击地图
            $("#selectEd2").val("");//置空下拉框
        } else if (href === "#defense-time-monitoring") {//状态监控——检测防御——实时监控
            $("#selectEd2").val("");//置空下拉框
        } else if (href === "#exceptions-host") {//安全策略——入侵防护策略——例外主机
            $("#exceptions").addClass("active").siblings("table").removeClass("active");//例外主机表格
            //置空搜索框
            var input = $("#exceptions-host form input");
            input[0].value = "";
            input[1].value = "";
            addData("exceptions");//加载表格内容
        } else if (href === "#intrusion-protection") {//安全策略——入侵防护策略——入侵防护策略
            addData("intrusion");//入侵防护策略表格
        } else if (href === "#exceptions-configuration") {//安全策略——应用安全策略——例外配置
            addData("configuration");//例外配置表格
        } else if (href === "#WEB-leakage") {//安全策略——应用安全策略——WEB扫漏
            addData("task");//任务列表
            addData("report");//报告列表
        } else if (href === "#characteristics") {////安全策略——入侵防护策略——特征库
            $.each(selectSpan, function (i, n) {
                n.innerHTML = "";
            });
            $.fn.zTree.init($("#treeType"), setting, invasionProtection);
        } else if (href === "#application-characteristics") {//安全策略——应用安全策略——特征库
            $.each(selectSpan, function (i, n) {
                n.innerHTML = "";
            });
            $.fn.zTree.init($("#treeType1"), setting, applicationSecurity);
        }
        $(this).siblings("span").addClass("selected");//标签下标识
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
            backgroundColor: "#F5F5F5",
            marginBottom: 0,
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = random(0, 100);
                        series.addPoint([x, y], true, true);
                        $(".details.r").html(y + "分");
                    }, 1000);
                }
            }
        },
        title: {
            text: '威胁风险',
            style: {
                color: "#333",
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: "Microsoft YaHei"
            },
            floating: true,
            align: "right",
            y: 30
        },
        subtitle: {
            text: '当前风险状况',
            align: "right",
            style: {
                color: "#333",
                fontSize: 15,
                fontFamily: "Microsoft YaHei"
            },
            y: 56
        },
        legend: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            labels: {
                enabled: false
            },
            tickWidth: 0,
            lineWidth: 0
        },
        yAxis: {
            title: null,
            gridLineWidth: 0,
            labels: {
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
                fillColor: "#dde4f0",
                lineWidth: 0
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
                        y: random(0, 100)
                    });
                }
                $(".details.r").html(data[data.length - 1].y + "分");
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
            backgroundColor: "#F5F5F5",
            marginBottom: 0,
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = random(0, 100);
                        series.addPoint([x, y], true, true);
                        $(".details.v").html(y + "次");
                    }, 1000);
                }
            }
        },
        title: {
            text: '安全事件',
            style: {
                color: "#333",
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: "Microsoft YaHei"
            },
            floating: true,
            align: "right",
            y: 30
        },
        subtitle: {
            text: '当前事件统计',
            align: "right",
            style: {
                color: "#333",
                fontSize: 15,
                fontFamily: "Microsoft YaHei"
            },
            y: 56
        },
        legend: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            labels: {
                enabled: false
            },
            tickWidth: 0,
            lineWidth: 0
        },
        yAxis: {
            title: null,
            gridLineWidth: 0,
            labels: {
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
                fillColor: "#D8EAC5",
                lineWidth: 0
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
                        y: random(0, 100)
                    });
                }
                $(".details.v").html(data[data.length - 1].y + "次");
                return data;
            }()),
            dataLabels: {
                show: true
            }
        }]
    });
    var relationship = $("#attack-system-analysis-relationship"),//关系图
        relationshipPie = $("#attack-system-analysis-relationship-pie");//饼图
    //攻击地图统计分析
    $("#mapData,#mapData2").delegate("a", "click", function (e) {
        e.preventDefault();
        attackData = tab("attackSystemData");
        var href = $(this)[0].hash;
        $(href).addClass("active").siblings("div").removeClass("active");
        console.log($(this).text());
        console.log($(this).parent().prev().text());
        attackRelationship(attackData);
        analysisSelector.children("p").text("当前源：" + attackData.data[0].target);
        $("#attackSystemData").addClass("active").siblings("table").removeClass("active");
        addData("attackSystemData");
        $("#attack-system-analysis-relationship~button").click(function () {
            $(this).siblings("button").removeAttr("disabled");
            $(this).attr("disabled", "true");
            var div = $(this).siblings("div");
            if ($(this)[0].className === "btn-right") {
                relationship.removeClass("active");
                relationshipPie.addClass("active");
                attackRelationshipPie(tab("attackSystemData"));
            } else {
                relationshipPie.removeClass("active");
                relationship.addClass("active");
                attackRelationship(tab("attackSystemData"));
            }
        });
    });
    //攻击源统计分析
    $("#attackSource,#attackSource2").delegate("a", "click", function (e) {
        e.preventDefault();//阻止跳转
        var source = "attackSystemDataSource",//攻击源排名
            me = $(this);
        analysis(relationship, relationshipPie, me, source, "filter1");
    });
    //攻击目的统计分析
    $("#attackPurposes,#attackPurposes2").delegate("a", "click", function (e) {
        e.preventDefault();//阻止跳转
        var source = "attackSystemDataAttack",//攻击目的排名
            me = $(this);
        analysis(relationship, relationshipPie, me, source, "filter");
    });
    //zTree
    key.bind("focus", focusKey)
        .bind("blur", blurKey)
        .bind("propertychange", searchNode)
        .bind("input", searchNode);
    selectButton.bind("click", searchNodes);
    key1.bind("focus", focusKey)
        .bind("blur", blurKey)
        .bind("propertychange", searchNode)
        .bind("input", searchNode);
    selectButton1.bind("click", searchNodes);
    //显示子节点具体内容
    $("#treeType,#treeType1").delegate("ul li", "click", function () {
        var li = $(this);
        if ($("#characteristics").css("display") === "block" && $("#intrusion-protection-strategy").css("display") === "block") {
            $.each(invasionProtection, function (i, n) {
                (n.name === li.text() && n.ty === li.parent().siblings("a").text()) && addSpan(n, 1)
            });
        } else if ($("#application-characteristics").css("display") === "block" && $("#application-security-policy").css("display") === "block") {
            $.each(applicationSecurity, function (i, n) {
                (n.name === li.text() && n.ty === li.parent().siblings("a").text()) && addSpan(n, 2)
            });
        }
    });
    $("#treeType2,#treeType3").delegate("ul li", "click", function () {
        var li = $(this), i;
        if ($("#characteristics").css("display") === "block" && $("#intrusion-protection-strategy").css("display") === "block") {
            $.each(invasionProtectionCustom, function (i, n) {
                (n.name === li.text() && n.ty === li.parent().siblings("a").text()) && addSpan(n, 3)
            });
            for (i = 0; i < 4; i++) {
                (i != 1) && selectInput[i].setAttribute("disabled", "true");
            }
            selectTextarea[0].setAttribute("disabled", "true");
            $("#characteristics .custom button").attr("disabled", true);
        } else if ($("#application-characteristics").css("display") === "block" && $("#application-security-policy").css("display") === "block") {
            $.each(applicationSecurityCustom, function (i, n) {
                (n.name === li.text() && n.ty === li.parent().siblings("a").text()) && addSpan(n, 4)
            });
            console.log(li.text())
            console.log(li.parent().siblings("a").text())
            for (i = 5; i < 10; i++) {
                selectInput[i].setAttribute("disabled", "true");
            }
            selectTextarea[1].setAttribute("disabled", "true");
            selectTextarea[2].setAttribute("disabled", "true");
            $("#application-characteristics .custom button").attr("disabled", true);
        }
    });
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
                selectSpan[5].innerHTML = n.id;
                selectSpan[6].innerHTML = n.os;
                selectSpan[7].innerHTML = n.name;
                selectSpan[8].innerHTML = n.server;
                selectSpan[9].innerHTML = n.l;
                selectSpan[10].innerHTML = n.database;
                selectSpan[11].innerHTML = n.ty;
                selectSpan[12].innerHTML = n.language;
                selectSpan[13].innerHTML = n.detailed;
                break;
            case 3:
                selectInput[0].value = n.name;
                selectInput[1].value = n.id;
                selectInput[2].value = n.l;
                selectInput[3].value = n.ty;
                selectTextarea[0].value = n.detail;
                break;
            case 4:
                selectInput[4].value = n.id;
                selectInput[5].value = n.object;
                selectInput[6].value = n.name;
                selectInput[7].value = n.operation;
                selectInput[8].value = n.l;
                selectInput[9].value = n.ty;
                selectTextarea[1].value = n.detection;
                selectTextarea[2].value = n.detail;
                break;
        }
    }

    //删除按键
    var tipC = $(".tip-container"),
        tip = $(".tip"),
        tip1 = $(".tip1"),
        tipP = $(".tip-container p"),
        child,
        tbody = $(".st-page .tab-pane tbody");
    //删除按键
    tbody.delegate("tr td:last-child img", "click", function () {
        tipC.show();
        tip.show().siblings("div").hide();
        var text = $(this).parent().siblings("[data-name='name']").text();
        ($("#exceptions-host").hasClass("active") && $("#intrusion-protection-strategy").hasClass("active")) ?
            tipP.text("确认删除例外主机‘" + text + "’?")
            : ($("#exceptions-configuration").hasClass("active") && $("#application-security-policy").hasClass("active")) ?
            tipP.text("确认删除例外配置‘" + text + "’?")
            : tipP.text("确认删除‘" + text + "’?");
        child = $(this);
    })
        //复制按键
        .delegate("tr td:nth-last-child(2) img", "click", function () {
            var name = $(this).parent().siblings("[data-name='name']").text(), copy = {}, index = 0, j, length, arr = [];
            if ($("#application-security-policy").hasClass("active")) {
                if ($("#WAF-strategy").hasClass("active")) {
                    length = WAFIntrusion.data.length;
                    $.each(WAFIntrusion.data, function (i, n) {
                        if (n.name === name) {
                            copy = {
                                id: n.id + 1,
                                feature: n.feature,
                                agreementSafe: n.agreementSafe,
                                contentSafe: n.contentSafe,
                                reference: n.reference,
                                matching: n.matching
                            };
                            index = i;
                        }
                        if (name.indexOf("副本") == -1) {
                            if (n.name.indexOf(name + "副本") != -1) {
                                arr.push(n.name);
                            }
                        } else if (n.name.indexOf(name.slice(0, name.indexOf("副本") + 2)) != -1) {
                            arr.push(n.name);
                        }
                        arr.sort(function (a, b) {
                            return parseInt(b.slice(b.indexOf("副本") + 3)) - parseInt(a.slice(a.indexOf("副本") + 3))
                        })
                    });
                    $.each(WAFIntrusion.data, function (i, n) {
                        if (n.name === arr[0]) {
                            index = i
                        }
                    });
                    (arr.length == 0) ?
                        copy.name = name + "副本(1)"
                        : copy.name = arr[0].slice(0, arr[0].indexOf("副本") + 2) + "(" + (parseInt(arr[0].slice(arr[arr.length - 1].indexOf("副本") + 3)) + 1) + ")";
                    for (j = length - 1; j > index; j--) {
                        WAFIntrusion.data[j + 1] = WAFIntrusion.data[j];
                        WAFIntrusion.data[j + 1].id = WAFIntrusion.data[j].id + 1;
                    }
                    WAFIntrusion.data[index + 1] = copy;
                    addData("WAFIntrusion");
                } else if ($("#exceptions-configuration").hasClass("active")) {
                    length = configuration.data.length;
                    $.each(configuration.data, function (i, n) {
                        if (n.featureID === name) {
                            copy = {
                                id: n.id + 1,
                                type: n.type,
                                featureName: n.featureName,
                                exceptionIp: n.exceptionIp,
                                exceptionURL: n.exceptionURL
                            };
                            index = i;
                        }
                        if (name.indexOf("副本") == -1) {
                            if (n.featureID.indexOf(name + "副本") != -1) {
                                arr.push(n.featureID);
                            }
                        } else if (n.featureID.indexOf(name.slice(0, name.indexOf("副本") + 2)) != -1) {
                            arr.push(n.featureID);
                        }
                        arr.sort(function (a, b) {
                            return parseInt(b.slice(b.indexOf("副本") + 3)) - parseInt(a.slice(a.indexOf("副本") + 3))
                        })
                    });
                    $.each(configuration.data, function (i, n) {
                        if (n.featureID === arr[0]) {
                            index = i;
                        }
                    });
                    (arr.length == 0) ?
                        copy.featureID = name + "副本(1)"
                        : copy.featureID = arr[0].slice(0, arr[0].indexOf("副本") + 2) + "(" + (parseInt(arr[0].slice(arr[arr.length - 1].indexOf("副本") + 3)) + 1) + ")";
                    for (j = length - 1; j > index; j--) {
                        configuration.data[j + 1] = configuration.data[j];
                        configuration.data[j + 1].id = configuration.data[j].id + 1;
                    }
                    configuration.data[index + 1] = copy;
                    addData("configuration");
                }
            } else if ($("#intrusion-protection-strategy").hasClass("active")) {
                if ($("#intrusion-protection").hasClass("active")) {
                    length = intrusion.data.length;
                    $.each(intrusion.data, function (i, n) {
                        if (n.name === name) {
                            copy = {
                                id: n.id + 1,
                                feature: n.feature,
                                name: n.name,
                                reference: n.reference,
                                matching: n.matching
                            };
                            index = i;
                        }
                        if (name.indexOf("副本") == -1) {
                            if (n.name.indexOf(name + "副本") != -1) {
                                arr.push(n.name);
                            }
                        } else if (n.name.indexOf(name.slice(0, name.indexOf("副本") + 2)) != -1) {
                            arr.push(n.name);
                        }
                        arr.sort(function (a, b) {
                            return parseInt(b.slice(b.indexOf("副本") + 3)) - parseInt(a.slice(a.indexOf("副本") + 3))
                        })
                    });
                    $.each(intrusion.data, function (i, n) {
                        if (n.name === arr[0]) {
                            index = i
                        }
                    });
                    (arr.length == 0) ?
                        copy.name = name + "副本(1)"
                        : copy.name = arr[0].slice(0, arr[0].indexOf("副本") + 2) + "(" + (parseInt(arr[0].slice(arr[arr.length - 1].indexOf("副本") + 3)) + 1) + ")";
                    for (j = length - 1; j > index; j--) {
                        intrusion.data[j + 1] = intrusion.data[j];
                        intrusion.data[j + 1].id = intrusion.data[j].id + 1;
                    }
                    intrusion.data[index + 1] = copy;
                    addData("intrusion");
                } else if ($("#exceptions-host").hasClass("active")) {
                    length = exceptions.data.length;
                    $.each(exceptions.data, function (i, n) {
                        if (n.featureID === name) {
                            copy = {
                                id: n.id + 1,
                                type: n.type,
                                featureName: n.featureName,
                                exceptionId: n.exceptionId
                            };
                            index = i;
                        }
                        if (name.indexOf("副本") == -1) {
                            if (n.featureID.indexOf(name + "副本") != -1) {
                                arr.push(n.featureID);
                            }
                        } else if (n.featureID.indexOf(name.slice(0, name.indexOf("副本") + 2)) != -1) {
                            arr.push(n.featureID);
                        }
                        arr.sort(function (a, b) {
                            return parseInt(b.slice(b.indexOf("副本") + 3)) - parseInt(a.slice(a.indexOf("副本") + 3))
                        })
                    });
                    $.each(exceptions.data, function (i, n) {
                        if (n.featureID === arr[0]) {
                            index = i;
                        }
                    });
                    (arr.length == 0) ?
                        copy.featureID = name + "副本(1)"
                        : copy.featureID = arr[0].slice(0, arr[0].indexOf("副本") + 2) + "(" + (parseInt(arr[0].slice(arr[arr.length - 1].indexOf("副本") + 3)) + 1) + ")";
                    for (j = length - 1; j > index; j--) {
                        exceptions.data[j + 1] = exceptions.data[j];
                        exceptions.data[j + 1].id = exceptions.data[j].id + 1;
                    }
                    exceptions.data[index + 1] = copy;
                    addData("exceptions");
                }
            }
        })
        //修改按键
        .delegate("tr td:nth-last-child(3) img", "click", function () {
            var name = $(this).parent().siblings("[data-name='name']").text();
            if ($("#WAF-strategy").hasClass("active")) {
                var input = $("#WAF-strategy-add .portlet-title table input")[0];
                $("#WAF-strategy-add").addClass("active").siblings("div").removeClass("active");
                input.value = name;
                input.disabled = true;
            }
        });
    //提示面板取消和关闭按键
    $(".tip-container .close,.tip-footer button").click(function () {
        tipC.hide();
    });
    var li = $(".bt-bars li:last-child"),
        add = $("#exceptions-configuration .bt-bars li:first-child"),
        add1 = $("#WAF-strategy .bt-bars li:first-child"),
        chb;
    tbody.delegate("tr td:first-child input", "click", function () {
        var chbs = $(".st-page .tab-pane tbody tr td:first-child input");
        chb = [];
        $.each(chbs, function (i, n) {
            if (n.checked) {
                chb.push($(this));
            }
        });
        (chb.length > 0) ? li.addClass("active") : li.removeClass("active");
    });
    //多选删除按钮/
    li.click(function () {
        if ($(this).hasClass("active")) {
            tipC.show();
            tip.show().siblings("div").hide();
            ($("#exceptions-host").hasClass("active") && $("#intrusion-protection-strategy").hasClass("active")) ?
                tipP.text("确认删除所选例外主机?")
                : ($("#exceptions-configuration").hasClass("active") && $("#application-security-policy").hasClass("active")) ?
                tipP.text("确认删除所选例外配置?")
                : tipP.text("确认删除所选项？");
        } else {
            tipWarning(tipC, tip1, tipP, "请先选择要处理的数据信息！");
        }
    });
    $(".tip .tip-footer button:first-child").click(function () {
        if (li.hasClass("active")) {
            var text;
            $.each(chb, function () {
                text = $(this).parent().siblings("[data-name='name']").text();
                delInformation(text);
            });
            li.removeClass("active");
        } else {
            text = child.parents("tr").children("[data-name='name']").text();
            delInformation(text, child);
        }
    });
    add.click(function () {
        $("#exceptions-configuration-add").addClass("active").siblings("div").removeClass("active");
        var str = "";
        for (var i = 0; i < 10; i++) {
            str += gridFour;
        }
        $('.con-add .row-add .tContainer tbody').html(str);
    });
    var m = 1;
    add1.click(function () {
        var WInput = $("#WAF-strategy-add .portlet-title table input");
        $("#WAF-strategy-add").addClass("active").siblings("div").removeClass("active");
        WInput[0].value = "";
        WInput.removeAttr("disabled");
        if (1 == m) {
            addData("basicCharacteristics");
            setTimeout(function () {
                $("#basicCharacteristics").treetable({expandable: true});
            }, 200);
        }
        m++;
    });
    $("#WAF-strategy-add [role='tablist'] [role='presentation']").click(function () {
        $(this).addClass("active").siblings("[role='presentation']").removeClass("active")
    });
    $("#exceptions-configuration,#filter2").delegate("td", "mousemove", function () {
        var td = $(this).has("span");
        if (td.length != 0) {
            var content = $(this).text().replace(/ .../, ""), str = "", j,
                name = $(this).siblings("[data-name='name']").text()
            if (td[0].dataset.name === "ip") {
                $.each(configuration.data, function (i, n) {
                    if (n.exceptionIp[0] === content && n.featureID === name) {
                        for (j = 0; j < n.exceptionIp.length; j++) {
                            str += n.exceptionIp[j];
                            (j != n.exceptionIp.length - 1) && (str += "、");
                        }
                    }
                });
            } else if (td[0].dataset.name === "url") {
                $.each(configuration.data, function (i, n) {
                    if (n.exceptionURL[0] === content && n.featureID === name) {
                        for (j = 0; j < n.exceptionURL.length; j++) {
                            str += n.exceptionURL[j];
                            (j != n.exceptionURL.length - 1) && (str += "、");
                        }
                    }
                });
            }
            td.poshytip({
                className: "tip-yellowsimple",
                content: str.replace(/、/g, "</br>"),
                alignTo: 'target',
                alignX: 'right',
                alignY: 'center',
                offsetX: 0,
                offsetY: 5
            });
        }
    });
    $("#exceptions,#filter3").delegate("td", "mousemove", function () {
        var td = $(this).has("span");
        if (td.length != 0) {
            var content = $(this).text().replace(/ .../, ""), str = "", j,
                name = $(this).siblings("[data-name='name']").text()
            $.each(exceptions.data, function (i, n) {
                if (n.exceptionId[0] === content && n.featureID === name) {
                    for (j = 0; j < n.exceptionId.length; j++) {
                        str += n.exceptionId[j];
                        (j != n.exceptionId.length - 1) && (str += "、");
                    }
                }
            });
            td.poshytip({
                className: "tip-yellowsimple",
                content: str.replace(/、/g, "</br>"),
                alignTo: 'target',
                alignX: 'right',
                alignY: 'center',
                offsetX: 0,
                offsetY: 5
            });
        }
    });
    $("#exceptions-host .f-btn-blue").click(function () {
        var input = $(this).siblings().children("input"), arr = [];
        if (input[0].value === "" && input[1].value === "") {
            tipWarning(tipC, tip1, tipP, "请先输入要处理的数据信息！");
        } else if (input[0].value === "" && input[1].value !== "") {
            $.each(exceptions.data, function (i, n) {
                $.each(n.exceptionId, function (j, m) {
                    if (m === input[1].value) {
                        arr.push(n);
                    }
                })
            });
        } else if (input[0].value !== "" && input[1].value !== "") {
            $.each(exceptions.data, function (i, n) {
                if (n.featureID === input[0].value) {
                    $.each(n.exceptionId, function (j, m) {
                        if (m === input[1].value) {
                            arr.push(n);
                        }
                    })
                }
            });
        } else if (input[0].value !== "" && input[1].value === "") {
            $.each(exceptions.data, function (i, n) {
                (n.featureID === input[0].value) && arr.push(n);
            });
        }
        if (arr.length == 0) {
            tipWarning(tipC, tip1, tipP, "没有所查数据信息！")
        } else {
            $.each(exceptions, function (i, n) {
                filter3.record_count = n.record_count;
                filter3.page_size = n.page_size;
                filter3.page_count = n.page_count;
                filter3.cur_page = n.cur_page;
            });
            filter3.data = arr;
            $("#exceptions").removeClass("active").siblings("table").addClass("active");
            addData("filter3");
        }
    });
    $("#exceptions-configuration .f-btn-blue").click(function () {
        var input = $(this).siblings().children("input"), arr = [];
        if (input[0].value === "" && input[1].value === "" && input[2].value === "") {
            tipWarning(tipC, tip1, tipP, "请先输入要处理的数据信息！");
        } else if (input[0].value !== "" && input[1].value === "" && input[2].value === "") {
            $.each(configuration.data, function (i, n) {
                $.each(n.exceptionId, function (j, m) {
                    if (m === input[1].value) {
                        arr.push(n);
                    }
                })
            });
        } else if (input[0].value !== "" && input[1].value !== "") {
            $.each(configuration.data, function (i, n) {
                if (n.featureID === input[0].value) {
                    $.each(n.exceptionId, function (j, m) {
                        if (m === input[1].value) {
                            arr.push(n);
                        }
                    })
                }
            });
        } else if (input[0].value !== "" && input[1].value === "") {
            $.each(configuration.data, function (i, n) {
                (n.featureID === input[0].value) && arr.push(n);
            });
        }
        if (arr.length == 0) {
            tipWarning(tipC, tip1, tipP, "没有所查数据信息！")
        } else {
            $.each(configuration, function (i, n) {
                filter3.record_count = n.record_count;
                filter3.page_size = n.page_size;
                filter3.page_count = n.page_count;
                filter3.cur_page = n.cur_page;
            });
            filter3.data = arr;
            $("#exceptions").removeClass("active").siblings("table").addClass("active");
            addData("filter3");
        }
    });
    var id = 1, typeArr = [], idArr = [], id1 = 1, typeArr1 = [], idArr1 = [];
    //添加下一个
    $(".custom button").click(function () {
        var arr = [], cId = random(10000, 99999), i, information = false;
        if ($("#application-security-policy").hasClass("active")) {//应用安全策略
            if ($("#application-characteristics").hasClass("active")) {
                for (i = 5; i < 10; i++) {
                    if (selectInput[i].value === "") {
                        arr.push(1);
                    }
                }
                if (arr.length != 0 || selectTextarea[1].value === "" || selectTextarea[2].value === "") {
                    tipWarning(tipC, tip1, tipP, "请先全部填写要处理的数据信息！");
                } else {
                    $.each(applicationSecurityCustom, function (i, n) {
                        if (n.name === selectInput[6].value && n.ty === selectInput[9].value) {
                            information = true;
                        }
                    });
                    if (information) {
                        tipWarning(tipC, tip1, tipP, "已存在重复数据信息！");
                    } else {
                        if (typeArr1.indexOf(selectInput[9].value) == -1) {
                            applicationSecurityCustom.push({
                                "id": id1,
                                "pId": 0,
                                "name": selectInput[9].value,
                                "icon": "imgs/icon04.png",
                                "isParent": true
                            });
                            typeArr1[id1] = selectInput[9].value;
                            id1++;
                        }
                        while (idArr1.indexOf(cId) != -1) {
                            cId = random(10000, 99999);
                        }
                        applicationSecurityCustom.push({
                            "id": cId,
                            "pId": typeArr1.indexOf(selectInput[9].value),
                            "name": selectInput[6].value,
                            "icon": "imgs/icon02.png",
                            "object": selectInput[5].value,
                            "operation": selectInput[7].value,
                            "l": selectInput[8].value,
                            "ty": selectInput[9].value,
                            "detection": selectTextarea[1].value,
                            "detail": selectTextarea[2].value
                        });
                        $.fn.zTree.init($("#treeType3"), setting, applicationSecurityCustom);
                        for (i = 4; i < 10; i++) {
                            selectInput[i].value = "";
                        }
                        selectTextarea[1].value = "";
                        selectTextarea[2].value = "";
                    }
                }
            }
        } else if ($("#intrusion-protection-strategy").hasClass("active")) {//入侵防护策略
            if ($("#characteristics").hasClass("active")) {
                for (i = 0; i < 4; i++) {
                    if (i == 1) {
                        continue;
                    }
                    if (selectInput[i].value === "") {
                        arr.push(1);
                    }
                }
                if (arr.length != 0 || selectTextarea[0].value === "") {
                    tipWarning(tipC, tip1, tipP, "请先全部填写要处理的数据信息！");
                } else {
                    $.each(invasionProtectionCustom, function (i, n) {
                        if (n.name === selectInput[0].value && n.ty === selectInput[3].value) {
                            information = true;
                        }
                    });
                    if (information) {
                        tipWarning(tipC, tip1, tipP, "已存在重复数据信息！");
                    } else {
                        if (typeArr.indexOf(selectInput[3].value) == -1) {
                            invasionProtectionCustom.push({
                                "id": id,
                                "pId": 0,
                                "name": selectInput[3].value,
                                "icon": "imgs/icon04.png",
                                "isParent": true
                            });
                            typeArr[id] = selectInput[3].value;
                            id++;
                        }
                        while (idArr.indexOf(cId) != -1) {
                            cId = random(10000, 99999);
                        }
                        invasionProtectionCustom.push({
                            "id": cId,
                            "pId": typeArr.indexOf(selectInput[3].value),
                            "name": selectInput[0].value,
                            "icon": "imgs/icon02.png",
                            "ty": selectInput[3].value,
                            "l": selectInput[2].value,
                            "detail": selectTextarea[0].value
                        });
                        $.fn.zTree.init($("#treeType2"), setting, invasionProtectionCustom);
                        for (i = 0; i < 4; i++) {
                            selectInput[i].value = ""
                        }
                        selectTextarea[0].value = ""
                    }
                }
            }
        }
    });
    //添加
    $("#characteristics .row:last-child .col-xs-3 .portlet-title a:nth-child(2) img").click(function () {
        for (var i = 0; i < 4; i++) {
            (i != 1) && selectInput[i].removeAttribute("disabled");
            selectInput[i].value = ""
        }
        selectTextarea[0].removeAttribute("disabled");
        selectTextarea[0].value = "";
        $("#characteristics .custom button").attr("disabled", false);
    });
    //修改
    $("#characteristics .row:last-child .col-xs-3 .portlet-title a:nth-child(3) img").click(function () {
        var confirm = $("#characteristics .portlet>.f-btn-blue"), information = true;
        for (var i = 0; i < 4; i++) {
            (i != 1) && selectInput[i].removeAttribute("disabled");
        }
        selectTextarea[0].removeAttribute("disabled");
        confirm.attr("disabled", false);
        confirm.click(function () {
            if (typeArr.indexOf(selectInput[3].value) == -1 && selectInput[3].value !== "") {
                invasionProtectionCustom.push({
                    "id": id,
                    "pId": 0,
                    "name": selectInput[3].value,
                    "icon": "imgs/icon04.png",
                    "isParent": true
                });
                typeArr[id] = selectInput[3].value;
                id++;
            }
            $.each(invasionProtectionCustom, function (i, n) {
                if (n.id != selectInput[1].value && n.name === selectInput[0].value && n.ty === selectInput[3].value) {
                    tipWarning(tipC, tip1, tipP, "该类型下有重复名称的数据信息！");
                    information = false;
                }
            });
            if (information) {
                $.each(invasionProtectionCustom, function (i, n) {
                    if (n.id == selectInput[1].value) {
                        n.name = selectInput[0].value;
                        n.l = selectInput[2].value;
                        n.ty = selectInput[3].value;
                        n.detail = selectTextarea[0].value;
                        n.pId = typeArr.indexOf(selectInput[3].value);
                    }
                });
                $.fn.zTree.init($("#treeType2"), setting, invasionProtectionCustom);
                for (var i = 0; i < 4; i++) {
                    selectInput[i].value = ""
                }
                selectTextarea[0].value = "";
                $(this).attr("disabled", true);
                $("#characteristics .custom button").attr("disabled", false);
            }
        });
    });
    //删除
    $("#characteristics .row:last-child .col-xs-3 .portlet-title a:nth-child(4) img").click(function () {
        DelTree(0, 4, "#treeType2", invasionProtectionCustom, 1);
    });
    //复制
    $("#characteristics .row:last-child .col-xs-3 .portlet-title a:nth-child(5) img").click(function () {
        var copy = {}, arr = [], cId = random(10000, 99999), arrV = [], i;
        for (i = 0; i < 4; i++) {
            if (i == 1) {
                continue;
            }
            if (selectInput[i].value === "") {
                arrV.push(1);
            }
        }
        if (arrV.length != 0 || selectTextarea[0].value === "") {
            return;
        } else {
            $.each(invasionProtectionCustom, function (i, n) {
                if (n.id == selectInput[1].value) {
                    copy.pId = n.pId;
                    copy.icon = n.icon;
                    copy.ty = n.ty;
                    copy.l = n.l;
                    copy.detail = n.detail;
                }
                if (selectInput[0].value.indexOf("副本") == -1) {
                    if (n.name.indexOf(selectInput[0].value + "副本") != -1) {
                        arr.push(n.name);
                    }
                } else if (n.name.indexOf(selectInput[0].value.slice(0, selectInput[0].value.indexOf("副本") + 2)) != -1) {
                    arr.push(n.name);
                }
                arr.sort(function (a, b) {
                    return parseInt(b.slice(b.indexOf("副本") + 3)) - parseInt(a.slice(a.indexOf("副本") + 3))
                })
            });
            (arr.length == 0) ?
                copy.name = selectInput[0].value + "副本(1)"
                : copy.name = arr[0].slice(0, arr[0].indexOf("副本") + 2) + "(" + (parseInt(arr[0].slice(arr[arr.length - 1].indexOf("副本") + 3)) + 1) + ")";
            while (idArr.indexOf(cId) != -1) {
                cId = random(10000, 99999);
            }
            copy.id = cId;
            invasionProtectionCustom.push(copy);
            $.fn.zTree.init($("#treeType2"), setting, invasionProtectionCustom);
        }
        for (i = 0; i < 4; i++) {
            selectInput[i].value = ""
        }
        selectTextarea[0].value = "";
    });
    //添加
    $("#application-characteristics .row:last-child .col-xs-3 .portlet-title a:nth-child(2) img").click(function () {
        for (var i = 4; i < 10; i++) {
            (i != 4) && selectInput[i].removeAttribute("disabled");
            selectInput[i].value = ""
        }
        selectTextarea[1].value = "";
        selectTextarea[1].removeAttribute("disabled");
        selectTextarea[2].value = "";
        selectTextarea[2].removeAttribute("disabled");
        $("#application-characteristics .custom button").attr("disabled", false);
    });
    //修改
    $("#application-characteristics .row:last-child .col-xs-3 .portlet-title a:nth-child(3) img").click(function () {
        var confirm = $("#application-characteristics .portlet>.f-btn-blue"), information = true;
        for (var i = 5; i < 10; i++) {
            selectInput[i].removeAttribute("disabled");
        }
        selectTextarea[1].removeAttribute("disabled");
        selectTextarea[2].removeAttribute("disabled");
        confirm.attr("disabled", false);
        confirm.click(function () {
            if (typeArr1.indexOf(selectInput[9].value) == -1 && selectInput[9].value !== "") {
                applicationSecurityCustom.push({
                    "id": id1,
                    "pId": 0,
                    "name": selectInput[9].value,
                    "icon": "imgs/icon04.png",
                    "isParent": true
                });
                typeArr1[id1] = selectInput[9].value;
                id1++;
            }
            $.each(applicationSecurityCustom, function (i, n) {
                if (n.id != selectInput[4].value && n.name === selectInput[6].value && n.ty === selectInput[9].value) {
                    tipWarning(tipC, tip1, tipP, "该类型下有重复名称的数据信息！");
                    information = false;
                }
            });
            if (information) {
                $.each(applicationSecurityCustom, function (i, n) {
                    if (n.id == selectInput[4].value) {
                        n.object = selectInput[5].value;
                        n.name = selectInput[6].value;
                        n.operation = selectInput[7].value;
                        n.l = selectInput[8].value;
                        n.ty = selectInput[9].value;
                        n.detection = selectTextarea[1].value;
                        n.detail = selectTextarea[2].value;
                        n.pId = typeArr1.indexOf(selectInput[9].value);
                    }
                });
                $.fn.zTree.init($("#treeType3"), setting, applicationSecurityCustom);
                for (var i = 4; i < 10; i++) {
                    selectInput[i].value = ""
                }
                selectTextarea[1].value = "";
                selectTextarea[2].value = "";
                $(this).attr("disabled", true);
                $("#application-characteristics .custom button").attr("disabled", false);
            }
        });
    });
    //删除
    $("#application-characteristics .row:last-child .col-xs-3 .portlet-title a:nth-child(4) img").click(function () {
        DelTree(4, 10, "#treeType3", applicationSecurityCustom, 4);
    });
    //提示框定位
    position();
    window.addEventListener("resize", position);
    window.addEventListener("scroll", position);

});