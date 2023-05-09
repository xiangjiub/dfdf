// // 监听前台文件发送的消息
// chrome.runtime.onMessage.addListener(function (result) {
//   // action需要与前台文件对应
//   if (result.action == "Cookies") {
//     // 获取指定网址的Cookie
//     chrome.cookies.getAll(
//       {
//         url: "https://www.youzan.com/",
//       },
//       function (result) {
//         var res = result;
//         var list = [];
//         if (res.length) {
//           // 对获取的结果进行处理
//           for (var i = 0; i < res.length; i++) {
//             var item = res[i].name + "=" + res[i].value;
//             list.push(item);
//           }
//           var cookies = list.join(",");
//           console.log(
//             cookies,
//             "获取的出的四处都是成都四川目的是莫测的什么从是多么蚕豆从地上"
//           );
//           // 发起请求给后端
//           // $.post("入库地址", {"cookies":cookies},function(data){

//           // });
//         }

//         console.log("静茹了");
//       }
//     );
//   }
// });

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    const requestHeaders = details.requestHeaders;
    console.log(requestHeaders);
    for (let i = 0; i < requestHeaders.length; i++) {
      const header = requestHeaders[i];
      if (header.name === "Sec-Fetch-Site") {
        console.log(header.value);
      }
    }
    return {
      requestHeaders: details.requestHeaders,
    };
  },
  {
    urls: ["https://www.baidu.com/*"],
  },
  ["blocking", "requestHeaders", "extraHeaders"]
);
