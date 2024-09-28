const sectence = 'I want to learn javaScript';
console.log(sectence);
let reverse = '';
for(const letter of sectence){
    //reverse = letter + reverse;
}
console.log(reverse);
let rev = '';
for(let i =0;i<sectence.length;i++){
    // console.log(i);
   // console.log(sectence[i]);
   const letter = sectence[i];
   rev = letter +rev;

}
//console.log(rev);
const reversed = sectence.split('').reverse().join('');
console.log(reversed);