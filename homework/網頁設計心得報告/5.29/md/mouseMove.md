# moveMouse解析  
> 說明: 本報告的節錄內容主要來源為--[mouseMove.html](https://github.com/ccccourse/wp/blob/master/code/07-canvas/canvas/mouseMove.html)  
[呈現頁面](https://ccccourse.github.io/wp/code/07-canvas/canvas/mouseMove.html)

## 簡介  
追蹤滑鼠在canvas中的座標

## 主要構造  
``` 
畫布  
<canvas id="myCanvas" width="578" height="200"></canvas>  
``` 
## 方法 
當移動滑鼠時，觸發以下事件  
```c  
canvas.addEventListener('mousemove',            
    function(evt) {          
    var mousePos = getMousePos(canvas, evt);   
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;  
    writeMessage(canvas, message);}, false);    
``` 
透過getMousePos(canvas, evt)求出座標
```c
function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
```
設一個message把座標放進去  
```c
var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
```
在writeMessage中顯示出來，同時清除舊座標
```c
function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);//不斷清除舊的座標
        context.font = '18pt Calibri';                       //字體
        context.fillStyle = 'black';                         //字的顏色
        context.fillText(message, 10, 25);                   //放置的位置
      }
```