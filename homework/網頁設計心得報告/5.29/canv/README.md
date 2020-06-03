canvas.html:

c.getContext("2D"):指定2D繪圖類型，也可以做3D繪圖  
ctx.beginPath():生成一個路徑  
ctx.strokeStyle="red":設定邊框為紅色，沒有此項默認黑色    
ctx.rect(20,20,55,40):在座標(20,20)的地方畫一個(寬55,長40)的矩形  
ctx.fillStyle="yellow":把圖形設為黃色填滿，沒有此項默認黑色  
ctx.fillRect(80,20,50,50):座標(80,20)的地方畫一個(寬50,高50)的實心矩形
ctx.lineWidth = 2:設線條寬度為2  
ctx.arc(100,75,50,0,2*Math.PI);以座標(100,75)為中心，畫一個半徑50，起始角0度，以順時針到2 Math.PI的圓弧  
ctx.fill():與ctx.fillStyle搭配可畫實心圓  

canvasSave.html:  




