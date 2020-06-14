# canvas  

## 什麼是canvas  
HTML <canvas>元素用於通過JavaScript動態繪製圖形。  
該<canvas>元素只是用於圖形的容器。您必須使用JavaScript實際繪製圖形。  
畫布有幾種繪製路徑，框，圓，文本和添加圖像的方法。  

## canvas函式  
``` 
ctx.rect(x,y,w,l);      //在座標(x,y)的地方畫一個(寬w,長l)的矩形  
ctx.beginPath();        //生成一個路徑，切斷之前canvas圖形的關聯  
ctx.strokeStyle="red";  //設定邊框為紅色，沒有此項默認黑色  
ctx.fillStyle="yellow"; //把圖形設為黃色填滿，沒有此項默認黑色   
ctx.fillRect(x,y,w,l);  //座標(x,y)的地方畫一個(寬w,高l)的實心矩形  
ctx.stroke();           //實際繪製出圖形  
``` 