// 从尾到头打印链表
// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var result=[];
    while(head!=null){
        result.unshift(head.val);
        head=head.next;
    }
    return result;
}