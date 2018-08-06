// 斐波那契数列
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39

function Fibonacci(n)
{
    // write code here
    if(n<2) return n;
    var first=0;
    var second=1;
    var result;
    for(var i=1;i<n;i++){
        result=first+second;
        first=second;
        second=result;
    }
    return result;
}