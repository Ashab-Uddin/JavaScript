
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
const income = 3000;
const expenses = 1500;
const calculate = calculateTax(income,expenses);
console.log(calculate);


