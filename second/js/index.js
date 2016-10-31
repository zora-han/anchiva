/*Created by Secret on 2016/7/14.*/
$(document).ready(function () {
    var content=$("#content"),//正文框架
        menu=$(".page-sidebar-menu");
    content.load("data/control.html");//加载控制面板页
    setInterval(function () {$("#clock").text(moment().format("h:mm:ss"));}, 100);//当前时间显示
    //左侧导航栏切换
    $(".page-sidebar-menu>.nav-item a").click(function (e) {
        e.preventDefault();//阻止默认动作
        //切换单页
        var href = $(this)[0].hash;
        (href.slice(0, 1) === "#") && $(this).parent().addClass("active").addClass("open").siblings("li").removeClass("active").removeClass("open").children("ul").slideUp().siblings("a").children("span.arrow").removeClass("open");
        switch (href){
            case "#configuration-wizard":content.load("data/configuration-wizard/configuration-wizard.html");break;//配置向导
            case "#control":content.load("data/control.html");break;//控制面板
        }
    });
    $(".sub-menu>.nav-item a").click(function (e) {
        e.preventDefault();//阻止默认事件
        $(this).parents(".sub-menu").parents("li.nav-item.open").siblings("li").removeClass("open").removeClass("active").children("ul").children("li").removeClass("open").removeClass("active");
        var href = $(this)[0].hash;
        switch (href){
            //监控状态-系统状态
            case "#system-state":content.load("data/condition-monitoring/system-state/system-state.html");break;
            //监控状态-检测防御
            case "#monitoring-defense":content.load("data/condition-monitoring/monitoring-defense/monitoring-defense.html");break;
            //监控状态-WAF
            case "#WAF":content.load("data/condition-monitoring/WAF/WAF.html");break;
            //安全策略-策略引用
            case "#policy-references":content.load("data/security-policy/policy-references.html");break;
            //安全策略-入侵防护策略
            case "#intrusion-protection-strategy":content.load("data/security-policy/intrusion-protection-strategy/intrusion-protection-strategy.html");break;
            //安全策略-应用安全策略
            case "#application-security-policy":content.load("data/security-policy/application-security-policy/application-security-policy.html");break;
            //日志报表-日志
            case "#logs":content.load("data/log-report/logs.html");break;
            //日志报表-报表
            case "#reports":content.load("data/log-report/reports.html");break;
            //网络配置-网络接口
            case "#network-interface":content.load("data/network-configuration/network-interface.html");break;
            //网络配置-聚合接口
            case "#aggregate-interface":content.load("data/network-configuration/aggregate-interface.html");break;
            //网络配置-接口联动
            case "#interface-linkage":content.load("data/network-configuration/interface-linkage.html");break;
            //网络配置-arp表
            case "#ARP":content.load("data/network-configuration/ARP.html");break;
            //网络配置-虚拟局域网
            case "#LAN":content.load("data/network-configuration/LAN.html");break;
            //网络配置-静态MAC地址
            case "#static-MAC-address":content.load("data/network-configuration/static-MAC-address.html");break;
            //网络配置-路由表
            case "#routing-table":content.load("data/network-configuration/routing-table.html");break;
            //网络配置-安全区域
            case "#safety-area":content.load("data/network-configuration/safety-area.html");break;
            //网络配置-高可用性
            case "#high-availability":content.load("data/network-configuration/high-availability.html");break;
            //网络配置-网络诊断
            case "#network-diagnostics":content.load("data/network-configuration/network-diagnostics.html");break;
            //系统配置-语言
            case "#language":content.load("data/system-configuration/language.html");break;
            //系统配置-主机
            case "#host":content.load("data/system-configuration/host.html");break;
            //系统配置-侦测模式
            case "#detect-patterns":content.load("data/system-configuration/detect-patterns.html");break;
            //系统配置-邮件配置
            case "#email-configuration":content.load("data/system-configuration/email-configuration.html");break;
            //系统配置-报表
            case "#system-report":content.load("data/system-configuration/system-report.html");break;
            //系统配置-日志
            case "#log":content.load("data/system-configuration/log.html");break;
            //系统配置-警告通知
            case "#warning-notice":content.load("data/system-configuration/warning-notice.html");break;
            //系统配置-高级选项
            case "#advanced-options":content.load("data/system-configuration/advanced-options.html");break;
            //系统维护-系统更新
            case "#system-update":content.load("data/system-maintenance/system-update.html");break;
            //系统维护-许可证
            case "#license":content.load("data/system-maintenance/license.html");break;
            //系统维护-系统重启
            case "#system-restart":content.load("data/system-maintenance/system-restart.html");break;
            //系统维护-智能诊断工具
            case "#intelligent-diagnostic-tools":content.load("data/system-maintenance/intelligent-diagnostic-tools.html");break;
            //系统维护-技术支持
            case "#technical-support":content.load("data/system-maintenance/technical-support.html");break;
            //访问管理-用户帐号
            case "#user-account":content.load("data/access-management/user-account.html");break;
            //访问管理-访问控制
            case "#access-control":content.load("data/access-management/access-control.html");break;
            //访问管理-网站管理
            case "#website-administrator":content.load("data/access-management/website-administrator.html");break;
            //访问管理-radius
            case "#radius":content.load("data/access-management/radius.html");
        }
    });
    //提示框定位
    window.addEventListener("resize", position);
    window.addEventListener("resize", popHeight);
    window.addEventListener("resize", function(){
        var contentHeight=$(".page-content>.tab-content").height(),
            panHeight=$(".page-content>.tab-content>.tab-pane.active").height();
        if(contentHeight>panHeight){
            $(".tip-container2,.tip-container").height(contentHeight);
        }else{
            $(".tip-container2,.tip-container").height(panHeight);
        }
    });
    window.addEventListener("scroll", position);
    //窗口大小改变时，主内容栏高度变化
    window.addEventListener("resize",function(){
        heightChange(menu);
    });
    //左侧导航栏高度改变时，主内容栏高度的变化
    menu.resize(function(){
        heightChange(menu);
    });
});
