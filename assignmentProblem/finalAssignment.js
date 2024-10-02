function calculateTax(income, expenses) {
    let totalProfit;
    const tax = .20;
    let taxPay;
    
    if(income < 0 || expenses<0){
    return "Invalid Input"
    }
    if(income>=expenses){
        totalProfit = income -expenses;
        taxPay = totalProfit*tax;

    }
    else {
        return "Invalid Input"
    }
    return taxPay;
}





function  sendNotification(sendEmail) {
    
    if (sendEmail.indexOf('@') > 0 && sendEmail.indexOf('@') < sendEmail.length - 1) {

        const divideEmail = sendEmail.split('@');
        
        const userName = divideEmail[0];
        const domainName = divideEmail[1];
        
        const sendNotificationMessage = userName + " sent you an email from " + domainName + ".";
        
        return sendNotificationMessage;
    }
    
    else
    {
        return "Invalid Email";
    }
}







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






function calculateFinalScore(obj) {
    let farmerScore = 0;
    let finalScore =0;

    if (obj.isFFamily === true) {
        farmerScore = 20; 
    }

    const testScore = obj.testScore || 0; 
    const schoolGrade = obj.schoolGrade || 0; 
    

    if (typeof obj !== 'object' || obj === null || Array.isArray(obj))
    {
        return "Invalid Input";
    }


    finalScore = testScore + schoolGrade + farmerScore;

    
    if (finalScore >= 80) {
        return true; 
    } else {
        return false;
    }
}







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