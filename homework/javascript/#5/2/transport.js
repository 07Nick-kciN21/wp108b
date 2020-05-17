function transport(a, A){
    for(i = 0; i < a.length; i++){
        for(j = 0; j < a[i].length; j++){
            A[j][i] = a[i][j];
        }
    }
}
a=[[1,2,3],[3,2,1]];
A=[[],[],[]]
transport(a,A);
console.log(a);
console.log(A);