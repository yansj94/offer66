// 包含min函数的栈
// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

var result=[];
function push(node)
{
    // write code here
    result.push(node);
}
function pop()
{
    // write code here
   return result.pop();
}
function top()
{
    // write code here
    result.shift();
}
function min()
{
    // write code here
    return Math.min.apply(null,result);
}