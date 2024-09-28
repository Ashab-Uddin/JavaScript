function doubleOrTriple(num,doDouble){
    if(doDouble === true){
        const result = num*2;
        return result;
    }
    else{
        const result = num*3;
        return result;
    }
}
console.log(doubleOrTriple(5,true))
console.log(doubleOrTriple(6,false))