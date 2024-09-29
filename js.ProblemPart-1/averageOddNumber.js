function averageOddNumber(number){
    let average,sum =0,count=0;
    for (let i =0;i<number.length;i++){
        if(number[i] %2 !== 0){
            sum =sum+number[i];
            count++;
        }
        average =sum/count;
    }
    
    return average;
}
let averageOdd = averageOddNumber([1,2,3,4,5,6,7])
console.log(averageOdd);