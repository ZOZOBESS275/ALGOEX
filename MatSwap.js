
function swapMinMax(matrix) {
    var MinMaxTab ={
        index : [],
        valSum : []
    }
    var numCol = matrix[0].length
    var numRow = matrix.length
    var max  = 0
    var maxIndex = 0
    var min = 0
    var minIndex = 0
    
    for(var j=0;j<numCol;j++){
        var sum=0;
        for(var i=0;i<numRow;i++){
            sum+=matrix[i][j]
        }
        MinMaxTab["index"].push(j)
        MinMaxTab["valSum"].push(sum)
    }
    
    for(var i=0;i<numCol;i++){
        if(max<MinMaxTab.valSum[i]){
            max=MinMaxTab.valSum[i]
            maxIndex = MinMaxTab.index[i]
        }else if(min >= MinMaxTab.valSum[i]){
            min =  MinMaxTab.valSum[i]
            minIndex = MinMaxTab.index[i]
        }
    }
    
    for(var i=0;i<numRow;i++){
         temp = matrix[i][maxIndex]
         matrix[i][maxIndex]=matrix[i][minIndex];
         matrix[i][minIndex]=temp;
        
    }
    return matrix
}

Matrix=[[1,-3,4, 0 ,9],
        [0,-9,7, 10,11],
        [2, 5,8,-11,45],
        [7, 4,12,-6,-5]]

console.log(Matrix);  
console.log(swapMinMax(Matrix));