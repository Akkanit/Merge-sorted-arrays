export function merge(collection1: Array<number>, collection2: Array<number>): Array<number> {
    let idx1: number = 0;
    let idx2: number = 0;
    let mergedCollection: Array<number> = [];
    while(idx1 < collection1.length || idx2 < collection2.length){
        if(idx1 >= collection1.length){
            mergedCollection.push(collection2[idx2]);
            idx2 += 1;
        }
        else if(idx2 >= collection2.length){
            mergedCollection.push(collection1[idx1]);
            idx1 += 1;
        }
        else if (collection1[idx1] >= collection2[idx2]){
            mergedCollection.push(collection2[idx2]);
            idx2 += 1;
        }
        else{
            mergedCollection.push(collection1[idx1]);
            idx1 += 1;
        }
    }
    
    return mergedCollection;
}
//merge([1,2,3],[4,5,6]);