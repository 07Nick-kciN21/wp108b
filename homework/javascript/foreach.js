var a = [1,7,4,5,2,0];

for(i in a){
    console.log("a[%d] = %d", i, a[i]);
}
for(i of a){
    console.log("i = %s", i);
}