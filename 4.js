// 重建二叉树
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length==0 || vin.length==0) return null;
    var root=pre[0];
    var vinIndex=vin.indexOf(root);
    var vinLeft=vin.slice(0,vinIndex);
    var vinRight=vin.slice(vinIndex+1);
    var preLeft=pre.slice(1,vinIndex+1);
    var preRight=pre.slice(vinIndex+1);
    return {
        val:pre[0],
        left:reConstructBinaryTree(preLeft,vinLeft),
        right:reConstructBinaryTree(preRight,vinRight)
    }
}