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
    var numCol = matrix[0].length // nombre de column
    var numRow = matrix.length // nombre de ligne 
    var result= null    //Dans le cas ou on ne trouve pas de solution
    //console.log(numRow,numCol)
    
    left = 0;   // Begin of the sub matrice
    right = submatrix[0].length // nombre de column de la sub matrice
    right1 = submatrix[0].length-1 // la position de la derniere case de la ligne
    top = 0; //
    bottom = submatrix.length //nombre de ligne de la sub matrice
    bottom1 = submatrix.length-1 // la position de la derniere case de la columne
    
    for(var i=0;i<numRow;i++){
        // On verifie si on peux trouver la sub matrice dans le reste des lignes
        if((right-i+1)<0){
            console.log(`i=${i+1}`)
            break;
        }
        else {for(var j=0;j<numCol;j++){
            // on verifie si on peux trouver la sub matrice dans le reste des columnes 
            if((bottom-j+1)<0){
                console.log(`j=${j+1}`)
                break;
            }else if(matrix[i][j]==submatrix[0][0]){
                // Nous avons trouver le premier element de la sous matrice dans la matrice
                result = true;
                if((right+i-1>numRow) || (bottom+j-1>numCol)){  // Nous verifions si on peux trouver la sous matrice 
                    break;
                }
                var k=i;
                var d=j;
                // on fait la recherche de notre sub matrice
                while(left!= right && top!=bottom && left!= right1 && top!=bottom1){
                    k+=left;
                    d+=left;
                    for(var j1=left;j1<right;j1++){ // on parcours du debut a la fin ligne par ligne
                        if(submatrix[left][j1]!=matrix[k][d]){
                            result= false;
                            break;
                        }
                        console.log(`mat = ${matrix[k][d]} sub mat =${submatrix[left][j1]}`) //on affiche l'element comparer
                        d++;
                        
                    } var j2=right1;
                    for(var i1=top ; i1<bottom ; i1++) { // on parcours de debut a la fin column par column
                        
                        if(matrix[k][d-1]!=submatrix[i1][j2]){
                            result= false;
                            break;
                        }
                        console.log(`mat = ${matrix[k][d-1]} sub mat =${submatrix[i1][j2]}`)//on affiche l'element comparer
                        k++;

                    } 
                    var i2= bottom1;
                    for(var j2=right1 ; j2>=left ; j2-- ) {  // on parcours de la fin ou debut de la ligne par ligne
                        
                        if(matrix[k-1][d-1]!=submatrix[i2][j2]){
                            result= false;
                            break;
                        }
                        console.log(`mat = ${matrix[k-1][d-1]} sub mat =${submatrix[i2][j2]}`);//on affiche l'element comparer
                        d--;

                    } var j2=top
                        
                    for(var i2=bottom1 ; i2>=top ; i2--) { // on parcours de la fin ou debut  column par column
                        
                        if(matrix[k-1][d]!=submatrix[i2][j2]){
                            result= false;
                            break;
                        }
                        console.log(`mat = ${matrix[k-1][d]} sub mat =${submatrix[i2][j2]}`);//on affiche l'element comparer
                        k--;

                    }
                    
                    if(result==false){
                        break;
                    }
                    //on mets a jour les positions
                    left++;
                    right--;
                    top++;
                    bottom--;
                    right1--;
                    bottom1--;
                    
                    
                }
                //Si on ne trouve pas de resulta on jump
                if(result==false){
                    break;
                }
                // On verifie dans le cas d'une matrice impaire le dernier element
                if((left==right1) || (top==bottom1) || (left== right) || (top==bottom)){
                    
                    
                    if(matrix[k+1][d+1]!=submatrix[left][left]){
                        break;    
                    }
                    return "the sub matrice exist"
                }
                
            }
        }
      }
    }
    return "the submatrix doesnt exist";
    
}    
    
console.log(subMat(M3,M1))
