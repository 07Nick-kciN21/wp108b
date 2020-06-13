## 'str'.match()  
```
var str = 'my username is 07_Nick_21, I like apple' 
1. str.match(/[0-9]+/)       // 1 次以上的數字  
[ "07" ]  
2. str.match(/[0-9]+/g)      // 加上"/g"，會返回所有符合選項，不加只傳回第一項  
[ "07", "21" ]  
3. str.match(/\d+/)          // "\d" 等同於[0-9]  
[ "07" ]  
4. str.match(/[a-z]+/)       // 1 次以上的英文字  
[ "my" ]  
5. str.match(/[A-Za-z0-9_]+/g)// 1 次以上的英數字含底線  
[ "my","username","is","07Nick21","I","like","apple" ]  
6. str.match(/\w+/g)         // "\w" 等同於[A-Za-z0-9_]  
[ "my","username","is","07Nick21","I","like","apple" ]  
```
 
以下段落節錄自--[https://pjchender.github.io/2017/09/26/js-%E6%AD%A3%E5%89%87%E8%A1%A8%E9%81%94%E5%BC%8F-regular-expression-regex/](https://pjchender.github.io/2017/09/26/js-%E6%AD%A3%E5%89%87%E8%A1%A8%E9%81%94%E5%BC%8F-regular-expression-regex/)
## JavaScript 中可以使用正規式的函式包含
ˋˋˋ
RegExp.prototype.test()：搜尋字串中是否有符合的部分，回傳 true/false。  
RegExp.prototype.exec()：以陣列回傳字串中匹配到的部分，否則回傳 null。  
String.prototype.match()：以陣列回傳字串中匹配到的部分，否則回傳 null。  
String.prototype.replace()：尋找字串中匹配的部分，並取代之。  
String.prototype.search()：尋找字串中是否有符合的部分，有的話回傳 index，否則回傳 -1。  
String.prototype.split()：在字串根據匹配到的項目拆成陣列。  
ˋˋˋ