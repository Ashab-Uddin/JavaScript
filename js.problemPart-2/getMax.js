let getMaxNumber = [23,49,59,95,20,45,23,54,39,59,49,101];
function getMax(array){
    let max =array[0];
    for (let i=0;i<array.length;i++){
        if(max<array[i]){
            max = array[i];
        }
    }
    return max;
}
let max =getMax(getMaxNumber);
console.log(max);