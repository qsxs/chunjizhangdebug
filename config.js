var config={
    downloadurl:"./index/chunjizhang.apk",
    downloadImg:["./index/c_1.png","./index/c_2.png","./index/c_3.png"],
    payCode:["./index/donate_wechat.jpg","./index/donate_alipay.png"]
}



var dnimg=$(".download_img"),payc=$(".payCode");
for(var i=0;i<dnimg.length;i++)$(dnimg[i]).attr({"src":config.downloadImg[i]});

for(var i=0;i<payc.length;i++)$(payc[i]).attr({"src":config.payCode[i]});
$(".download_url").attr({"href":config.downloadurl});

/*
* 智能机浏览器版本信息:
*
*/
var browser = {
versions: function() {
    var u = navigator.userAgent, app = navigator.appVersion;
    return {//移动终端浏览器版本信息 
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
}(),
language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

//苹果
if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
    $(".download_url").attr({"href":"#"});
   $(".download_url").on("click",function(){
        alert("Come Soon");
   })
}
//安卓
if (browser.versions.android) {
    //微信
    if(is_weixn()){
        $(".download_url").attr({"href":"./index/jump.htm"});
    }else{
        $(".download_url").attr({"href":config.downloadurl});
    }
}
//下载赋值
//检测是否为微信
function is_weixn(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}
