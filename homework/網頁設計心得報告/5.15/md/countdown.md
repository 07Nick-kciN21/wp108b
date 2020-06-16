# calculator解析  
> 說明: 本報告的節錄內容主要來源為--[clock.html](https://github.com/ccccourse/wp/blob/master/code/05-js/countdown.html)  
[呈現頁面](https://ccccourse.github.io/wp/code/05-js/countdown.html)  
## 簡介  
倒數計時器  

## 方法  
在showtime()函式中，把n的值塞給<div id="time">  
```c
document.getElementById("time").innerHTML=n+'';
```
在還沒歸零時，因為setTimeout(showtime,1000)，延遲1000毫秒後再次呼叫showtime()函式  
```c
setTimeout(showtime,1000);
n=n-1;
```
直到歸零，跳出時間到了  
```c
if(n===0){
      alert("時間到了");
    }		    
```
## 個人總結：  
這個計時器程式跑到n=1會先跳出”時間到了”再跳出n=0，重點在於  
```c
if(n===0){
      alert("時間到了");
    } else {		 
      setTimeout(showtime,1000);
      n=n-1;
    }
```
alert("時間到了")會比n=0要早出現  
如果要改成先跳出0再跳”時間到了”，就把if(n===0)  改成if(n===-1)，這樣就是n=0再跳”時間到了”後跳n=-1  
```c
if(n === -1){
        alert("時間到了");      
      } else {       
        setTimeout(showtime,1000);
        n=n-1;
    }

```
可我們也不想要跳出-1，這時再把  
document.getElementById("time").innerHTML=n+'';移到else {}當中  
```c
if(n===-1){
      alert("時間到了");
    } else {
      document.getElementById("time").innerHTML=n+'';		 
      setTimeout(showtime,1000);
      n=n-1;
    }  
```    
問題就解決了。  
[修改後成品](https://07nick-kcin21.github.io/wp108b/homework/%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E5%BF%83%E5%BE%97%E5%A0%B1%E5%91%8A/5.15/countdown.html)

