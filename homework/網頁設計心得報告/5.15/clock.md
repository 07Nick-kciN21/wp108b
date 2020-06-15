# clock解析
> 說明: 本報告的節錄內容主要來源為--[clock.html](https://github.com/ccccourse/wp/blob/master/code/05-js/clock.html)  

## 方法 
在showTime()函式中取得時、分、秒，再塞回id為time的<div>中    
```c
function showTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    document.getElementById('time').innerHTML = h+":"+m+":"+s;
    setTimeout(showTime,1000);
}
```
## 個人總結

new Date()：一種物件，內含各種時間數值，如果沒特別設定格式，會以  
星期 月  日  年  時 : 分 : 秒 格林威治標準時間呈現，例如  
Fri May 15 2020 20:06:26 GMT+0800 (台北標準時間)  

setTimeout( function, time)：具延遲功能，會經過指定時間(time)後，執行function，與迴圈相似
