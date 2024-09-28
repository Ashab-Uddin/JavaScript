const mobile ={
    brand: 'sumsang',
    price: 23000,
    color:'blue',
    isNew: true
}
 //for of : array
 // for in: object
//  for(const pro in mobile){
//     console.log(pro)
//  }
 for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop]);
 }

 const keys = Object.keys(mobile);
 console.log(keys);

 for(const ke of keys){
    console.log(ke,mobile[ke])
 }
 