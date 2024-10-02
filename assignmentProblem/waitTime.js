
function  waitingTime(waitingTimes  , serialNumber) {

    let sumOfVivaTime = 0;
    let averageVivaTime = 0;

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || waitingTimes.length <= 0 ) {
        return "Invalid Input";
    }
    for(let i=0;i<waitingTimes.length;i++){
        sumOfVivaTime +=waitingTimes[i];
    }
    
    averageVivaTime = Math.round(sumOfVivaTime/waitingTimes.length);
    let waitingPeople = serialNumber-waitingTimes.length-1;
    let finalWaitingTime = averageVivaTime*waitingPeople;


    return finalWaitingTime;
}
let waitingTimes =[ 3, 5, 7, 11, 6 ] ;
let serialNumber = 10;
let result =waitingTime(waitingTimes,serialNumber);
console.log(result);
