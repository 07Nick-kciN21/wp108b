# ballmove解析  
> 說明: 本報告的節錄內容主要來源為 -- [ballmove1.html](https://github.com/ccccourse/wp/blob/master/code/07-canvas/canvas/ballmove1.html)  
[呈現頁面](https://ccccourse.github.io/wp/code/07-canvas/canvas/ballmove1.html)

## 簡介  
呈現圖片在頁面中移動的樣子  

## 主要構造  
``` 
使用的圖片  
<canvas id="myCanvas" width="578" height="200"></canvas>  
當邊界用的畫板  
<canvas id="myCanvas" width="300" height="300" style="border:1px solid #d3d3d3;"/>  
```  
## 方法 
當頁面載入時同步執行function()，載入圖片  
```c 
window.onload = function() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  img = document.getElementById("ball");
  setTimeout(draw, 100);
}
``` 
因為setTimeout(draw, 100)，延遲100毫秒後執行draw()，又因為setTimeout(draw, 100)，執行draw()  
```c 
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //把圖片之前的痕跡清除  
  ctx.drawImage(img, x, y);                         //在輸入的座標(x,y)放置圖片  
  x+=10; y+=10;                                     //增加x,y值  
  setTimeout(draw, 100);                            
}
```

