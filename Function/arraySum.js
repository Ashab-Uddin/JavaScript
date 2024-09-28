function sumOfNumbers(numbers){
    let sum = 0;
    for (let i =0;i<numbers.length; i++){
    sum = sum+numbers[i];
    }
    return sum;
}
console.log(sumOfNumbers([10,20,30,30,50,23]))