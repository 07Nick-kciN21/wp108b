可透過開發人員工具執行以下指令取得特定數值或某些動作  

document.body.clientHeight或document.documentElement.clientHeight:取得視窗的高  
document.body.clientWidth或document.documentElement.clientWidth:取得視窗的寬度  
open():開啟新視窗  
close():開啟目前視窗  
moveTo("url"):移動到指定位址  
resizeTo():調整視窗寬高

screen.width:取得螢幕的寬度  
screen.availWidth:取得螢幕的可用寬度  
screen.height:取得螢幕的高度  
screen.availheight:取得螢幕的可用高度
screen.colorDepth:取得螢幕的像素深度  

location.href:取得目前頁面的網址  
location.pathname:取得目前網頁的路徑名稱  
location.protocol:取得目前網頁的協定
location.assign("url"):載入一個檔案或網頁  

goBack():返回上一頁  
goForward():前往下一頁  

navigator.appName:取得瀏覽器應正式名稱  
navigator.appCodeName:瞿德瀏覽器編碼名稱  
navigator.product  
navigator.appVersion:取得瀏覽器版本  
navigator.userAgent:取得代理商名稱與瀏覽器版本  
navigator.platform:取得平台版本  
navigator.language:取得瀏覽器使用的語言  
navigator.onLine:確認是否在線上  
navigator.javaEnabled():是否啟用Java  

alert("字串"):跳出帶有"字串"的警告  
confirm("字串"):跳出帶有"字串"的確認框，根據選擇傳回true或false  
prompt("字串"):跳出帶有"字串"的輸入框，傳回輸入的內容  

setTimeout(function, milliseconds):延遲一段時間執行function  
clearTimeout():可停止setTimeout()中指定的函數  
setInterval(function, millisecond):每隔一段時間重複執行指定函式  
clearInterval():停止setInterval()中指定函式的執行  
