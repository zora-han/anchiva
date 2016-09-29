/*Created by Secret on 2016/7/14.*/
$(document).ready(function () {
    var content=$("#content");
    content.load("data/control.html");
    //当前时间显示
    setInterval(function () {$("#clock").text(moment().format("h:mm:ss"));}, 100);
    //左侧导航栏切换
    $(".page-sidebar-menu>.nav-item a").click(function (e) {
        e.preventDefault();
        var href = $(this)[0].hash;
        $(this).parent().siblings("li").children("ul").hide().children("li").removeClass("active").removeClass("open");
        if (href.slice(0, 1) === "#") {
            $(href).addClass("active").siblings("div").removeClass("active");
            $(this).parent().addClass("active").addClass("open").siblings("li").removeClass("active").removeClass("open");
        }
        switch (href){
            case "#configuration-wizard":content.load("data/configuration-wizard.html");break;
            case "#control":content.load("data/control.html");break;
        }
    });
    $(".sub-menu>.nav-item a").click(function (e) {
        e.preventDefault();
        $(this).parent().siblings("li").removeClass("active").removeClass("open");
        $(this).parents("li.nav-item.open").siblings("li").removeClass("open").removeClass("active");
        var href = $(this)[0].hash,
            fSpan = $(href + " .nav-tabs li:first-child a");
            fSpan.attr("aria-expanded", "true").siblings("span").addClass("selected").parent().addClass("active").siblings("li").removeClass("active").children("a").attr("aria-expanded", "false").siblings("span").removeClass("selected");
        switch (href){
            case "#system-state":content.load("data/condition-monitoring/system-state.html");break;
            case "#monitoring-defense":content.load("data/condition-monitoring/monitoring-defense.html");break;
            case "#WAF":content.load("data/condition-monitoring/WAF.html");break;
            case "#policy-references":content.load("data/security-policy/policy-references.html");break;
            case "#intrusion-protection-strategy":content.load("data/security-policy/intrusion-protection-strategy.html");break;
            case "#application-security-policy":content.load("data/security-policy/application-security-policy.html");break;
            case "#language":content.load("data/system-configuration/language.html");break;
            case "#host":content.load("data/system-configuration/host.html");break;
            case "#detect-patterns":content.load("data/system-configuration/detect-patterns.html");break;
            case "#email-configuration":content.load("data/system-configuration/email-configuration.html");break;
            case "#system-report":content.load("data/system-configuration/system-report.html");break;
            case "#log":content.load("data/system-configuration/log.html");break;
            case "#warning-notice":content.load("data/system-configuration/warning-notice.html");break;
            case "#advanced-options":content.load("data/system-configuration/advanced-options.html");break;
        }
    });
    //提示框定位
    window.addEventListener("resize", position);
    window.addEventListener("scroll", position);
});