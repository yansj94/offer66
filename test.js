function printMatrix(matrix)
{
    // write code here
    var rows=matrix.length;
    var cols=matrix[0].length;
    var start=0;
    var result=[];
    while(rows>start*2 && cols>start*2){
        var endX=rows-start-1;
        var endY=cols-start-1;
        for(var i=start;i<=endY;i++){
            result.push(matrix[start][i]);
        }
        if(start<endX){
            for(var i=start+1;i<=endX;i++){
                result.push(matrix[i][endY]);
            }
        }
        if(start<endX && start<endY){
            for(var i=endY-1;i>=start;i--){
                result.push(matrix[endX][i]);
            }
        }
        if(start<endX-1 && start<endY){
            for(var i=endX-1;i>start;i--){
                result.push(matrix[i][start]);
            }
        }
        start++;
    }
    return result;
}

var matrix=[[1,2,3]];
console.log(printMatrix(matrix));