# sketchpad解析  
> 說明: 本報告的節錄內容主要來源為 -- [sketchapad.html](https://github.com/ccccourse/wp/blob/master/code/07-canvas/sketchpad/sketchpad.html)  
[呈現頁面](https://ccccourse.github.io/wp/code/07-canvas/canvas/sketchpad.html)
## 簡介  
設置不同顏色和粗細的選項，再透過追蹤滑鼠軌跡畫出線條，具有複製圖畫的功能  
## 主要構造  
```c 
調色盤選項  
<div id="dPallete"></div>  
粗細調整選項  
<div id="dLine"></div>  
畫布  
<div id="dCanvas">  
<canvas id="cSketchPad" width="300" height="300" style="border: 2px solid gray" >  
</div>  
存放複製圖的畫布    
<div id="dOutput"></div>  
``` 
## 方法 
產生不同顏色的方格  
``` c  
var colors ="red;orange;yellow;green;blue;indigo;purple;black;white".split(';');
var sb = [];
$.each(colors, function (i, v) {            //放置每格顏色選項的<div>元素
    sb.push("<div class='option' style='background-color:" + v + "'></div>");
});
```
```c
產生不同尺寸的方格當作線條粗細選項
sb = [];
for (var i = 1; i <= 9; i++)            
sb.push("<div class='option lw'>" +
    "<div style='margin-top:#px;margin-left:#px;width:%px;height:%px'></div></div>".replace(/%/g, i).replace(/#/g, 10 - i / 2));
$("#dLine").html(sb.join('\n'));
``` 
調整顏色  
```c   
$clrs.click(function () {          //點選顏色改變選項時  
    $clrs.removeClass("active");   //去除之前點選的選項的改變  
    $(this).addClass("active");    //添加現在點選的選項的改變  
    p_color = this.style.backgroundColor;//把線條粗細選項的顏色變成當前選擇的顏色  
    $lws.children("div").css("background-color", p_color);  
}).first().click();  
``` 
調整粗細  
```c 
$lws.click(function () {  
    $lws.removeClass("active");  
    $(this).addClass("active");  
    p_width =                   //把畫筆的顏色變成當前選擇的模樣  
        $(this).children("div").css("width").replace("px", "");  
}).eq(3).click();  
```
取得canvas context  
```c  
var $canvas = $("#cSketchPad");         //取得手寫板的canvas  
var ctx = $canvas[0].getContext("2d");  
    ctx.lineCap = "round";  
    ctx.fillStyle = "white";            //整個canvas塗上白色背景避免PNG的透明底色效果  
    ctx.fillRect(0, 0, $canvas.width(), $canvas.height());  
    var drawMode = false;  
```  
按下滑鼠時，取得顏色、粗細和起點，開啟drawMode  
```c  
$canvas.mousedown(function (e) {
    ctx.beginPath();          
    ctx.strokeStyle = p_color;
    ctx.lineWidth = p_width;
    ctx.moveTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
    drawMode = true;
})
``` 
放開滑鼠時，關閉drawMode  
```c
.mouseup(function (e) {
        drawMode = false;
});
```  
滑鼠滑動時，如果有按住滑鼠，就畫線  
```c 
.mousemove(function (e) {
    if (drawMode) {
        ctx.lineTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
        ctx.stroke();
    }
})
```
利用.toDataqURL()將繪圖結果轉成圖檔
```c
$("#bGenImage").click(function () {
    $("#dOutput").html(
        $("<img />", { src: $canvas[0].toDataURL(),"class": "output"
    }));
});
```