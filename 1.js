// 二维数组中的查找
//在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
function Find(target, array)
{
    // write code here
    let cols=array[0].length;
    let rows=array.length;
    for(let i =rows-1,j=0;i>=0 && j<cols;){
        if(array[i][j]===target){
            return true;
        }else if(array[i][j]>target){
            i--;
            continue;
        }else if(array[i][j]<target){
            j++;
            continue;
        }
    }
    return false;
}