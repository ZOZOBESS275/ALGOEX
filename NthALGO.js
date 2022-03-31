
var U0 =0
var U1=1
var U2= 2
function recersiveNth(val){


    if(val>=3){
        res = 2*U2 + 3*U0
        U0 = U1
        U1 = U2
        U2 = res
        recersiveNth(val-1)
    }
    return res
}

console.log("The recursive method : " +recersiveNth(5));

function iterativeNth(value){
    var U0 =0
    var U1=1
    var U2= 2
    var res = 0;

for (var i=3; i <= value;i++){
    res = 2*U2 + 3*U0
    U0 = U1
    U1 = U2
    U2 = res
}
return res
}

console.log("The iterative method : " + iterativeNth(5));