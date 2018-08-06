// 调整数组顺序使奇数位于偶数前面
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变
function reOrderArray(array)
{
    // write code here
    var arr1=[];
    var arr2=[];
    array.map(function(item){
        item%2 ? arr1.push(item):arr2.push(item);
    })
    return arr1.concat(arr2);
}
