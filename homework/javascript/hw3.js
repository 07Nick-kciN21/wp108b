a=3,b=7,c=0;

function isPrime(n) {
    for (var i=2; i<n; i++) {
      if (n%i === 0)
        return false;
    }
    return true;
  }

  for (var i=a; i<=b; i++) {
    if (isPrime(i))
     c=c+1;
  }
  console.log("countPrime(%d,%d)=>%d",a,b,c);