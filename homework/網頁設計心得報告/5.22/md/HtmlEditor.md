# HtmlEditor解析
> 說明: 本報告的節錄內容主要來源為--[HtmlEditor.html](https://github.com/ccccourse/wp/blob/master/code/06-app1/htmlEditor/HtmlEditorEmpty.htm)  
[呈現頁面](https://ccccourse.github.io/wp/code/06-app1/htmlEditor/HtmlEditorEmpty.htm)

## 簡介  
展示如何動態的展現一個網頁HTML+CSS的結果。  

## 主要構造  
三塊區域:  
兩個textarea: cssbox、editbox 輸入用
```c
<td width="50%">  
  <textarea id="cssbox" style="width:100%; height:100px;" >  
  </textarea>  
  <textarea id="editbox" style="width:100%; height:400px;">  
  </textarea>   
</td>  
```
一個div: showbox 輸出用  
```c
<div id="showbox" style="width:100%; height:500px;">  
  </div>  
```
一個button: 呼叫convert()函式
```c
<tr>  
  <td colspan="2" style="text-align:center">  
    HTML 原始碼 <input type="button" value=" → " onclick="convert()"/> 顯示結果  
  </td>  
</tr>  
```  
## 方法  
在cssbox、editbox輸入程式碼後，透過convert()函式，取得他們的內容  
```c
  var cssbox  = document.getElementById("cssbox");  
  var editbox = document.getElementById("editbox");  
```  
再輸入進showbox和showboxstyle，利用innerHTML可呈現html標籤的效果  
```c
  var showbox = document.getElementById("showbox");  
  var showboxstyle = document.getElementById("showboxstyle");  
  showbox.innerHTML = editbox.value;
  showboxstyle.innerHTML = cssbox.value;
```
showbox是html的部分  
showboxstyle則是CSS的部分  




