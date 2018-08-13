// 顺时针打印矩阵
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

function printMatrix(matrix)
{
    // write code here
    var rows=matrix.length;
    var cols=matrix[0].length;
    var result=[];
    var start=0;
    while(cols>start*2 && rows>start*2){
        //LR
      for(var j=start;j<cols-start-1;j++){
        result.push(matrix[start][j]);
      }
      //TB
      if(start<rows-1-start)
      for(var i=start;i<rows-start-1;i++){
          result.push(matrix[i][cols-start-1]);
      }
      //RL
      if(start<cols-1-start && start<rows-1-start)
      for(var j=cols-start-1;j>start;j--){
          result.push(matrix[rows-start-1][j]);
      }
      //BT
      for(var i=rows-start-1;i>start;i--){
          result.push(matrix[i][start]);
      }
      start++;
    }
    return result;
}

var matrix=[[1,2,3,4]];
console.log(printMatrix(matrix));