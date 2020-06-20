# calculator解析  
> 說明: 本報告的程式內容主要來源為--[calculator.html](https://github.com/ccccourse/wp/blob/master/code/05-js/calculator.html)  
[呈現頁面](https://ccccourse.github.io/wp/code/05-js/calculator.html)  
>其餘文字為原創  
## 簡介   
可做加減乘除的計算。  
## 方法  
在calculate()函式中取得要做運算的a、b字串和當運算符的op字串，再用eval()函式求值。  
```c
function calculate() {
    var a = document.getElementById('a')
    var op = document.getElementById('op')
    var b = document.getElementById('b')
    var result = document.getElementById('result')
    result.innerText = eval(a.value + op.value + b.value)
  }
```
## 個人總結(完全原創)

document.getElementById(‘id’)：
把特定id內的元素提出來使用，var a = document.getElementById('a') 等於是var a = (value="3")

eval()：可以執行某一段字串的運算，如果該字串是運算式，則 eval 會計算出運算結果。  
PS C:\Users\Nick\Desktop\wp108b\homework\wp\code\05-js> node  
> x = 1  
1  
>  y =2  
2  
> y + x  
3  
> eval('x+y')  
3      
> 'x+y'  
'x+y'     
