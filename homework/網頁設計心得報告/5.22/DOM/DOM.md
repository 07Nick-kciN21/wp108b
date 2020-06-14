## 文檔對像模型(DOM)

### 查詢html元素
``` 
document.getElementById('id').innerHTML: 透過指定id，選取特定元素  
document.getElementsByTagName(<>):透過指定<html標籤>選取特定元素  
document.getElementsByClassName('class'):透過指定class選取特定元素  
document.querySelectorA()透過指定(id,class names,types, attributes, values of attributes)等等元素，選取符合的第一個特定值  
document.querySelectorAll():透過指定(id,class names,types, attributes, values of attributes)等等元素，選取符合的所有特定值  
``` 
document.querySelectorAll()個人實作例: 
[querySelectorAll](https://07nick-kcin21.github.io/wp108b/homework/%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E5%BF%83%E5%BE%97%E5%A0%B1%E5%91%8A/5.22/DOM/dom.html)   
參考[dom1.html](https://github.com/ccccourse/wp/blob/master/code/05-js/dom/dom1.html)   
### 更改html元素
``` 
document.write(""):可直接把文本送進HTML輸出流  
document.getElementById("id").style.property = 賦予特定元素新的style元素  
```  
