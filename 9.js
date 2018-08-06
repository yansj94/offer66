// 变态跳台阶
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法

function jumpFloorII(number)
{
    // write code here
    if(number==0) return 0;
    if(number==1) return 1;
    if(number==2) return 2;
    var tmp = 0;
    while(number > 1){
        tmp+=jumpFloorII(number-1);
        number--;
    }
    return tmp+1;
}