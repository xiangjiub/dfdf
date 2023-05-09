(function() {
    var href = window.location.href;
    // console.log(href);
    // if (href.indexOf("dashboard") !=-1 && href.indexOf("redirect") ==-1) {
    //     // 发送消息给后台文件
    //     chrome.runtime.sendMessage({
    //         action: "get_cookies",
    //     },function(a) {
    //         console.log('支支持都四川都是你哦吵闹的送能从大司农吵闹的能从但是',a);
    //     })
    // }
    chrome.runtime.sendMessage({
        action: "Cookies",
    },function(a) {
        console.log('支支持都四川都是你哦吵闹的送能从大司农吵闹的能从但是',a);
    })
})();