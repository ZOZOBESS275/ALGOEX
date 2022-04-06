// input : T=[2,3,4,15,16,17,0,0,-4,5,6,7,8,9,10,1,2]
// output : [2,3,4,15,16,17,0,0,10,9,8,7,6,5,-4,1,2]

function longSeq(T){
    //Creating an object to store the beginning and ending of the longest seq
    var obj = {
        dist:0,
        begin:0,
        end:0,
    }
    
    var i=0,j=1,dist=0,d;
    while(i<T.length){
        //the var d help us conserve the beginnig of the seq
        d=i;
        dist=0;
        while(j<T.length && (T[i]<T[j])){
            i=j;
            j++;
            dist++;
        }
        
        if(obj.dist<dist){
            obj.begin=d;
            obj.end=j-1;
            obj.dist=dist;
        }
    i=j;
    j++;
    }
    i=obj.begin;
    j=obj.end;

    //Reverse the longest seq 
    while(i<=j){
        [T[i],T[j]]=[T[j],T[i]];
        i++; j--;
    }

    return T;
}

console.log(longSeq([2,3,4,15,16,17,0,0,-4,5,6,7,8,9,10,1,2]));