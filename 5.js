// 用两个栈实现队列
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

var result=[];
function push(node)
{
    // write code here
    result.push(node);
}
function pop()
{
    // write code here
   return result.shift();
}