# canvas  
> 說明: 本報告的節錄內容全部為原創。  
## 什麼是canvas  
HTML <canvas>元素用於通過JavaScript動態繪製圖形。  
<canvas>元素只是用於圖形的容器。還要使用JavaScript實際繪製圖形。  
canvas函式用於繪製路徑，邊線，圖形，文字和添加圖像。  

## canvas函式  
``` 
ctx.rect(x,y,w,l);      //在座標(x,y)的地方畫一個(寬w,長l)的矩形  
ctx.beginPath();        //生成一個路徑，切斷之前canvas圖形的關聯  
ctx.strokeStyle="red";  //設定邊框為紅色，沒有此項默認黑色  
ctx.fillStyle="yellow"; //把圖形設為黃色填滿，沒有此項默認黑色   
ctx.fillRect(x,y,w,l);  //座標(x,y)的地方畫一個(寬w,高l)的實心矩形  
ctx.stroke();           //實際繪製出圖形  
ctx.lineWidth = 5px;      //線的寬度為 5px  
ctx.arc(x,y,r,0S,PI);//以座標(x,y)為中心，畫一個半徑r，起始角0度，以順時針到弧度為PI的圓弧 
``` 
