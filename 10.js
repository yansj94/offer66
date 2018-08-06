// 矩形覆盖
// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

function rectCover(number)
{
    // write code here
    if(number<3) return number;
    var first=1;
    var second=2;
    var result;
    for(var i=3;i<=number;i++){
        result=first+second;
        first=second;
        second=result;
    }
    return result;
}