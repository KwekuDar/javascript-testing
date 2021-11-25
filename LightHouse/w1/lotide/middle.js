function returnMiddle(arr){
    let final = [] 
    if(arr.length === 1 || arr.length === 2){
        return final;
    }
    else{
        if(arr.length % 2 === 0){
            final.push(arr[(arr.length/2) - 1]);
            final.push(arr[arr.length/2]);
        }
        else{
            final.push(arr[(arr.length -1)/2]);
        }
    }
    return final;
}
console.log(returnMiddle([1,2,3,4,5,6,7]));
console.log(returnMiddle([1,2]));
console.log(returnMiddle([1,2,3,4,5,6]));



