let nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];
for(var i =0; i <nestedArr.length; i++)
{
    for(j = 0; j<nestedArr[i].length;j++){
        if (nestedArr[i][j]%2===0)
        console.log(nestedArr[i][j]);
    }
}
