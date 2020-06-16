//平均數
function mean(x,a){
    for(i = 0; i < a.length; i++){
        x = x + a[i];
    }
    return x / a.length;
}
a = [1,2,3,4,5]; x = 0;
x = mean(x ,a);
b = "mean(["+ a + "]) => ";
console.log(b+x);

