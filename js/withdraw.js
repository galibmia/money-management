document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Get the value from withdraw input filed
    const withdrawAmountFiled = document.getElementById('withdraw-filed');
    const withdrawAmountFiledString = withdrawAmountFiled.value;
    const withdrawAmount = parseFloat(withdrawAmountFiledString);
    withdrawAmountFiled.value = '';
    if(isNaN(withdrawAmount) == true || withdrawAmount<=0){
        alert("Enter a valid Amount");
        return;
    }
    // Get the current withdraw amount
    const currentWithdrawAmountString = document.getElementById('withdraw-amount');
    const currentWithdrawAmount  = parseFloat(currentWithdrawAmountString.innerText);
    
    const totalWithdrawAmount = withdrawAmount + currentWithdrawAmount;
    


    const currentBalanceAmountString = document.getElementById('total-amount');
    const currentBalanceAmount = parseFloat(currentBalanceAmountString.innerText);
    
    // Make total of Balance
    const totalBalanceAmount = currentBalanceAmount - withdrawAmount;
    // Set the total balance
    if(withdrawAmount>currentBalanceAmount){
        alert("Not enough balance");
        return;
    }
    currentBalanceAmountString.innerText = totalBalanceAmount;
    currentWithdrawAmountString.innerText = totalWithdrawAmount;

});