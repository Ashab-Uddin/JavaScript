function dublicateArray(array){
    let originalArray = [];
    for (const item of array){
        if(originalArray.includes(item) === false){
            originalArray.push(item);
        }
    }
    return originalArray;
}
let mainArray = [23,44,32,44,24,23,45,25,534,34,34,23,44,54,34,34,43,34];
console.log(dublicateArray(mainArray));