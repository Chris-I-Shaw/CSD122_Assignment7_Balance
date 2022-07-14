/*
Chris Shaw
Javascript Assignment 7
11/22/19
*/

//Sets initial balance to $1,000
let balance = 1000.0;
//Constant rates
let annnualInterestRate = .12;
let monthlyInterestRate = annnualInterestRate / 12;
let minimumMonthlyPayment = 20;

//function to update a yearly balance monthly
function updateBalance(balance) {
    //sets balance to a local variable
    var updatedBalance = balance;
    //loop to simulate monthly balance updates
    for(var i = 0; i <12; i++) {
        //calculation for the monthly balanced updates
        var monthlyUnpaidBalance = updatedBalance - minimumMonthlyPayment;
        updatedBalance = monthlyUnpaidBalance + (monthlyInterestRate*monthlyUnpaidBalance);
    }
    //returns the balance after the executed loops
    return updatedBalance.toFixed(2);
}
//run/prints function
console.log("Your balance: $" + updateBalance(balance));


