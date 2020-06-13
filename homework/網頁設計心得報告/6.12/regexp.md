> 說明: 本報告的節錄內容主要來源為--[[JS] 正則表達式(Regular Expression, regex) | PJCHENder 未整理筆記](https://pjchender.github.io/2017/09/26/js-%E6%AD%A3%E5%89%87%E8%A1%A8%E9%81%94%E5%BC%8F-regular-expression-regex/)

## JavaScript 中使用正規式的函式
```
RegExp.prototype.test()：搜尋字串中是否有符合的部分，回傳 true/false。  
RegExp.prototype.exec()：以陣列回傳字串中匹配到的部分，否則回傳 null。  
String.prototype.match()：以陣列回傳字串中匹配到的部分，否則回傳 null。  
String.prototype.replace()：尋找字串中匹配的部分，並取代之。  
String.prototype.search()：尋找字串中是否有符合的部分，有的話回傳 index，否則回傳 -1。  
String.prototype.split()：在字串根據匹配到的項目拆成陣列。  
```  
## RegExp.prototype.test() 搜尋內容
搜尋字串中是否有符合的部分，回傳 true/false。 

下面為個人在deno中實作例    

> var str = 'my username is 07Nick21'  
undefined  
> /\d+/.test(str)  
true  
> /[a-z]+/.test(str)  
true  
> /[A-Z]+/.test(str)  
true  
> /[_]+/.test(str)  
false  


## RegExp.prototype.exec() 尋找並取出內容
搜尋字串中是否有符合的部分，回傳 true/false。 

下面為個人在deno中實作例   
> var str = 'my username is 07Nick_21'   
> /\d+/.exec(str)  
[ "07" ]  
> /[a-z]+/.exec(str)  
[ "my" ]  
> /[A-Z]+/.exec(str)  
[ "N" ]  
> str = 'My username is 07Nick21'  
> /[A-Z]+/g.exec(str)  
[ "M" ]  
> /[_]+/g.exec(str)  
null   
> var str = 'my username is 07Nick_21'  
undefined  
> /[_]+/g.exec(str)  
[ "_" ]  

下面為個人在JaveScript中實作例，參考[regexp1.js](https://github.com/ccccourse/wp/blob/master/code/08-app2/basic/regexp1.js) 
```c  
let str = 'My username is 07Nick21'
let regexp = /\w+/g
var m
while ((m = regexp.exec(str))) {
  console.log(`Found ${m[0]}. Next starts at ${regexp.lastIndex}.`);
}  
輸出結果:  
Found My. Next starts at 2.      
Found username. Next starts at 11.  
Found is. Next starts at 14.  
Found 07Nick21. Next starts at 23.  
```  
## RegExp.prototype.split()：在字串根據匹配到的項目拆成陣列
下面為個人在deno中實作例  
> var str = 'My name is Nick, I like cookies'  
undefined  
> str.split(",")  
[ "My name is Nick", " I like cookies" ]  
str.split(/\s+/)  
[  
  "My",  
  "name",   
  "is",  
  "Nick,",  
  "I",  
  "like",  
  "cookies"  
]  

## String.prototype.replace()：尋找字串中匹配的部分，並取代之。
下面為個人在deno中實作例   
> var str = 'I am Nick_07, I do not like banana'  
undefined  
> str.replace(/[A-Z]/,'HAA')  
HAA am Nick_07, I do not like banana  
> str.replace(/[A-Z]/g,'HAA')  
HAA am HAAick_07, HAA do not like banana  
> str.replace(/[0-9]/g,'NUM')  
I am Nick_NUMNUM, I do not like banana  




