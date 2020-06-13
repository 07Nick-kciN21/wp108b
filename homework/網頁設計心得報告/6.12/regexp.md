var str = 'my username is 07Nick21, I like apple'
undefined

'str'.match()
```
> str.match(/[0-9]+/) // 1 次以上的數字  
[ "07" ]  
> str.match(/[0-9]+/g)// 加上/g，會返回所有符合選項，不加只傳回第一項  
[ "07", "21" ]  
> str.match(/\d+/) // "\d" 等同於[0-9]  
[ "07" ]  
> str.match(/[a-z]+/) // 1 次以上的英文字  
[ "my" ]  
> str.match(/[A-Za-z0-9]+/g)// 1 次以上的英數字含底線  
[  
  "my","username","is","07Nick21","I","like","apple"  
]  
> str.match(/\w+/g) "\w" 等同於[A-Za-z0-9]  
[  
  "my","username","is","07Nick21","I","like","apple"  
]  
```