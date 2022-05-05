var MM=[ [1,  2,3,  4,5],
        [6,  7,8,  9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],    
        [21,22,23,24,25]];

var MM1=[ [1,  2,3,  4,5],
        [6,  7,8,  9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],    
        [21,22,23,24,25]];

var M = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
    ]
    
var M1=[[5,6],
        [9,10]
    ]
var M2=[
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
    ]
var M3=[
        [1,2,3,4],
        [5,6,7,8],
        [10,10,5,6],
        [13,14,9,10]
    ]

function subMat(matrix, submatrix){
    var numCol = matrix[0].length
    var numRow = matrix.length
    var result= null    
    //console.log(numRow,numCol)
    
    left = 0;
    right = submatrix[0].length
    right1 = submatrix[0].length-1
    top = 0; 
    bottom = submatrix.length
    bottom1 = submatrix.length-1
    
    for(var i=0;i<numRow;i++){
        if((right-i+1)<0){
            console.log(`i=${i+1}`)
            break;
        }
        else {for(var j=0;j<numCol;j++){
            if((bottom-j+1)<0){
                console.log(`j=${j+1}`)
                break;
            }else if(matrix[i][j]==submatrix[0][0]){
                //console.log(right+i, bottom+j)
                //console.log(i,j)
                //console.log(left, right)
                result = true;
                if((right+i-1>numRow) || (bottom+j-1>numCol)){
                    break;
                }
                var k=i;
                var d=j;
                //console.log(left, right, matrix[k][d])
                while(left!= right && top!=bottom && left!= right1 && top!=bottom1){
                    k+=left;
                    d+=left;
                    for(var j1=left;j1<right;j1++){
                        if(submatrix[left][j1]!=matrix[k][d]){
                            result= false;
                            break;
                        }
                        console.log(matrix[k][d])
                        d++;
                        //console.log(matrix[k][d])
                    } var j2=right1;
                    for(var i1=top ; i1<bottom ; i1++) {
                        //console.log(submatrix[i1][j2])
                        //console.log(matrix[k][d])
                        if(matrix[k][d-1]!=submatrix[i1][j2]){
                            result= false;
                            break;
                        }
                        console.log(matrix[k][d-1])
                        k++;
                    } var i2= bottom1;
                    for(var j2=right1 ; j2>=left ; j2-- ) {
                        //console.log(matrix[k-1][d-1]);
                        //console.log(j2)
                        //console.log(submatrix[i2][j2],matrix[k-1][d-1])
                        if(matrix[k-1][d-1]!=submatrix[i2][j2]){
                            result= false;
                            break;
                        }
                        console.log(matrix[k-1][d-1]);
                        d--;
                    } var j2=top
                        
                    for(var i2=bottom1 ; i2>=top ; i2--) {
                        //console.log(k, d);
                        //console.log(submatrix[i2][j2])
                        if(matrix[k-1][d]!=submatrix[i2][j2]){
                            result= false;
                            break;
                        }
                        console.log(matrix[k-1][d]);
                        k--;
                    }
                    //console.log("I'm here");
                    if(result==false){
                        break;
                    }
                    left++;
                    right--;
                    top++;
                    bottom--;
                    right1--;
                    bottom1--;
                    
                    //console.log(left ,right, right1 , top, bottom, bottom1);
                }
                //console.log("i'm here")
                if(result==false){
                    break;
                }
                if((left==right1) || (top==bottom1) || (left== right) || (top==bottom)){
                    //console.log(matrix[k+1][d+1], submatrix[left][left])
                    
                    if(matrix[k+1][d+1]!=submatrix[left][left]){
                        break;    
                    }
                    return "the sub matrice exist"
                }
                //console.log("find")
            }
        }
      }
    }
    return "the submatrix doesnt exist";
    
}    
    
console.log(subMat(M3,M1))
