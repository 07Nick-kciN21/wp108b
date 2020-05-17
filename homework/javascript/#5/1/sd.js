//sd([1,2,3,4,5]) = sqrt((2^2+1^2+0^2+1^2+2^2)/5) = sqrt(2)=1.414。
//       c                      d                      e        
function mean(x,a){
    for(i = 0; i < a.length; i++){
        x = x + a[i];
    }
    return x / a.length;
}   
function sd(x, a){
    y=0;
    n=0;
    for(i = 0; i < a.length; i++){
            n = a[i] - x;
            y = y + n*n;
    }
    return y / a.length;
}

a = [1,2,3,4,5]; 
A = a;
x =0;     y = 0; 
x = mean(x, a);//平均數
c = "sd(["+ a + "]) = ";
y = sd(x, a);//標準差
for(i = 0; i < a.length; i++){
    A[i] = Math.abs(a[i] - x) + "^2";
}

d = "sqrt((" + A.join('+') + ")/" + a.length + ") = ";

Y = Math.sqrt(y);
e = "sqrt(" + y + ")=" + Y;
console.log(c+d+e);
