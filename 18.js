// 二叉树的镜像

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if(root==null) return null;
    var temp=root.left;
    root.left=root.right;
    root.right=temp;
    Mirror(root.left);
    Mirror(root.right);
    return root;
}