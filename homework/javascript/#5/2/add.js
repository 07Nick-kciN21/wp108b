function add(a){
    var c = [[],[]];
    for(i = 0; i < a.length; i++){
        for(j = 0; j < a[i].length; j++){
            c[i][j] = a[0][i][j]+a[1][i][j];
        }
    }
   return c;
}
//add([[1,2],[3,4]], [[1,1],[1,1]]) => [[2,3], [4,5]]
a = [[[1,2],[3,4]],[[1,1],[1,1]]];
//b = [[1,1],[1,1]];

ab = add(a);
console.log(ab);