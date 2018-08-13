var quickSort2=function(array){
  if(array!==[]){
  quick(array,0,array.length-1); //length-1！！！
  return array;}
  else return false;
};

//使用时也可以直接用quick(array,0,array.lenth-1)
var quick=function(array,left,right){
  var index;
  if(array.length>1){
      if (left<right) {
      index=partition(array,left,right);
      if(left<index-1){quick(array,left,index-1);}
      if(right>index+1){quick(array,index+1,right);}
      }
      else return array;
  }
  else return false;
};
var partition=function(array,left,right){
  var pivot=array[left];
  var i=left,j=right;
  while(i<j){
      while(i<j&&array[j]>=pivot){j--;}  //!important >=
      swap(array,i,j);
      while (i<j&&array[i]<=pivot){i++;}
      swap(array,i,j);

  }
  return i;
};

function swap(array,i,j){
  var temp;
  temp=array[i];array[i]=array[j]; array[j]=temp;
}

var arr=[1,4,65,23,5,6,7,0]
console.log(quickSort2(arr));