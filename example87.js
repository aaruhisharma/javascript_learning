let nestedArrb = [[1,2][3,4][5,6]];
function sumTotal() {
    let total = 0;
    for (let i=0; i<nestedArr.length; i++){
    for (let j=0; j<nestedArr[i].length; j++){
        total += nestedArr[i][j];
    }
    }
    return total;
}
