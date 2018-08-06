// 链表中倒数第k个结点
// 输入一个链表，输出该链表中倒数第k个结点。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    if(head==null||k<=0) return null;
    var first=head;
    for(var i=0;i<k-1;i++){
        if(head.next!==null)
            head=head.next;
        else return null;
    }
    var second=head;
    while(second.next!==null){
        second=second.next;
        first=first.next;
    }
    return first;
}