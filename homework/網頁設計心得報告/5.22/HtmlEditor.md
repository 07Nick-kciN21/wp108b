# HtmlEditor解析
> 說明: 本報告的節錄內容主要來源為--[HtmlEditor](https://github.com/ccccourse/wp/blob/master/code/06-app1/htmlEditor/HtmlEditorEmpty.htm)  

## 簡介  
展示如何動態的展現一個網頁HTML+CSS的結果  

## 方法  
首先劃分出三塊區域:  
兩個textarea: cssbox、editbox 輸入用
ˋˋˋc
<td width="50%">  
  <textarea id="cssbox" style="width:100%; height:100px;" >  
  </textarea>  
  <textarea id="editbox" style="width:100%; height:400px;">  
  </textarea>   
</td>  
ˋˋˋ
一個div: showbox 輸出用  
ˋˋˋc
<div id="showbox" style="width:100%; height:500px;">  
  </div>  
ˋˋˋ
ˋˋˋc  
function convert() {
  var cssbox  = document.getElementById("cssbox");
  var editbox = document.getElementById("editbox");
  var showbox = document.getElementById("showbox");
  var showboxstyle = document.getElementById("showboxstyle");
  showbox.innerHTML = editbox.value;
  showboxstyle.innerHTML = cssbox.value;
}
ˋˋˋ

