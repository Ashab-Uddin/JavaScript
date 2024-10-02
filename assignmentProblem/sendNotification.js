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
const sendEmail = "nadim.naem5@outlook.com";
const result = sendNotification(sendEmail);
console.log(result);


