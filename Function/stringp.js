function evenSizedString(str){
    const size =str.length;
    console.log('The string length:',size)
    if(size % 2 == 0){
        
        return 'this string is even'
    }
    else{
        return 'this string is odd'
    }
}
const result = evenSizedString('Dhaka')

console.log(result)