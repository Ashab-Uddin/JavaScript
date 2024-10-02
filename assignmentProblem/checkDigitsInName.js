function checkDigitsInName(name) {
    let output =false;
    if(typeof name != 'string'){
        return " Invalid Input"
    }


    for(let i=0;i<name.length;i++){
        if(!isNaN(name[i])){
            output=true;
            break;
        }
    }
    return output;
}
let sentName = '!@#';
let result = checkDigitsInName(sentName);
console.log(result)