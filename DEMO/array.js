// 数组扁平化
var arr=[1,2,3,[1,2,3,[1,2,3],[1,2,3]],1,2,3,[1,2,3],1,2,3];


function A(arr,result=[]){
  for(var i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      A(arr[i],result);
    }else
      result.push(arr[i]);
  }
  return result;
}

console.log(A(arr));