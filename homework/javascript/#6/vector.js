class Vector {
    
    constructor(array) {
      this.array= array;
    }
    add(v2) {
      var v3 = [];
      var i;
      for(i=0; i<this.array.length; i++){
         v3[i]=this.array[i]+v2.array[i];
      }
      return new Vector(v3);
    }
    neg(){
      var v3 = [];
      var i;
      for(i=0; i<this.array.length; i++){
        v3[i]=-this.array[i];
      }
      return new Vector(v3);
    }
    dot(v2){
      var total = 0;
      var i;
      for(i=0;i<this.array.length;i++){
        total+=this.array[i]*v2.array[i];
      }
      return total;
    }
    sub(v2){
      var v3=[];
      var i;
      for(i=0;i<this.array.length;i++){
         v3[i]=this.array[i]-v2.array[i];
      }
      return new Vector(v3);
    }
  }
  
  module.exports = Vector;
  /*var v1 = new Vector([1,2,3])
  var v2 = new Vector([1,1,1])
 
  console.log('v1.add(v2)=', v1.add(v2))
  console.log('v1.neg()='  , v1.neg())
  console.log('v1.dot(v2)=', v1.dot(v2))
  console.log('v1.sub(v2)=', v1.sub(v2))*/