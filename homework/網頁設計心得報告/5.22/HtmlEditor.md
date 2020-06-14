# HtmlEditor解析
> 說明: 本報告的節錄內容主要來源為--[HtmlEditor](https://github.com/ccccourse/wp/blob/master/code/06-app1/htmlEditor/HtmlEditorEmpty.htm)  
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



