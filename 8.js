// 跳台阶
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
function jumpFloor(number)
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