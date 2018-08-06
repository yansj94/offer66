// 反转链表
// 输入一个链表，反转链表后，输出新链表的表头

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if(pHead===null || pHead.next===null)
        return pHead;
    var pre=null;
    var next=null;
    while(pHead!==null){
        next=pHead.next;
        pHead.next=pre;
        pre=pHead;
        pHead=next;
    }
    return pre;
}