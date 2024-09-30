function dublicate(strings){
    let originalString = [];
    for(const item of strings){
        if(originalString.includes(item) === false){
            originalString.push(item);
        }
    }
    return originalString;
}
let totalString = ['ashab','rohim','korim','babul','salam','ashab','korim','babul','salam'];
console.log(dublicate(totalString));