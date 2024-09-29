function inchConverstToFeet(inch){
    let feet = inch/12;
    let feetNumber =parseInt(feet);
    let inchNumber = inch%12;
    let result = inch +' inch = '+ feetNumber +' feet '+inchNumber +' inch.'
    return result;
}
let result= inchConverstToFeet(75);
console.log(result);