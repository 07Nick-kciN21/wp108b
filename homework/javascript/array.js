a = [1,2,3];
console.log(a);//[1, 2, 3]
/*a.push(9,9,9);// push 擺最後
console.log(a);//[1, 2, 3, 9, 9, 9]
b=a.concat(5)// 
console.log(b);//[1, 2, 3, 9, 9, 9, 5, 4, …]*/
b = a.join(':');
console.log(b);//1:2:3:9:9:9*/
a.pop();
console.log(a);//[1, 2, 3, 9, 9]
c = a.shift();
console.log(c);
console.log(a);
