
$(function(){
    $("#weixin").on('click',function(){
        chrome.tabs.create({
            url: "https://www.baidu.com",
            active: false
        });
    })
})