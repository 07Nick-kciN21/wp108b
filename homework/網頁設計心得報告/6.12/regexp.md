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
> str.replace(/[A-Z]/,'_')  
_ am Nick_07, I do not like banana  
> str.replace(/[A-Z]/g,'_')  
_ am _ick_07, _ do not like banana  
> str.replace(/[0-9]/g,'_')  
I am Nick___, I do not like banana  

## flag(標籤)  
```  
regex = /hello/; // 區分大小寫，匹配 "hello", "hello123", "123hello123", "123hello"，但不匹配 "hell0", "Hello"  
regex = /hello/i; // 不區分大小寫 "hello", "HelLo", "123HelLO"  
regex = /hello/g; // 全域搜尋  
```  
下面為個人在deno中實作例   
> var str = 'I am Nick_07, I do not like banana'  
undefined  
> var str = 'I am Nick_07, I do not like banana'  
undefined  
> str.match(/[A-Z]+/g)  
[ "I", "N", "I" ]  
> str.match(/[a-z]+/)  
[ "am" ]  
> str.match(/[A-Z]+/ig)  
[  
  "I",    "am",  
  "Nick", "I",  
  "do",   "not",    
  "like", "banana"  
]  
### \s  
ES 2019 新增 /s 的標籤，過去/./可以用來匹配除了換行符號以外（\n, \r）的所有字元：  
下面為個人在deno中實作例   
> /./.test('\n')  
false  
過去雖然可以使用 [\w\W] 來匹配到換行符號，但這不是最好的做法：  
> /[\w\W]/.test('\n')  
true  
在 ES 2019 中，只要最後有標記 /s 的標籤，如此 . 將也能夠匹配到換行符號：  
> /./s.test('\n')  
true  

## 反斜線\  
```    
/* 在「非」特殊字元前面使用反斜線時，表示要把反斜線後的字當作是特殊字元 */  
regex = /\b/      // b 原本不是特殊字元，這個 b 要當成特殊字元  

/* 在特殊字元前面使用反斜線時，表示要把反斜線後的字當作是「非」特殊字元 */  
regex = /if\(true/    // ( 原本是特殊字元，但這裡要當成非特殊字元  
regex = /1\+2=3/    // + 原本是特殊字元，但這裡要當成非特殊字元  
```  
