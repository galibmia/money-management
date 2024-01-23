document.getElementById('btn-deposit').addEventListener('click', function(){
    // Get input deposit amount
    const depositAmountFiled =document.getElementById('deposit-filed');
    const depositAmountString = depositAmountFiled.value;
    const depositAmount = parseFloat(depositAmountString);
    depositAmountFiled.value = '';
    // Validation check
    if( isNaN(depositAmount) == true || depositAmount<=0){
        alert("Enter a valid Amount");
        return;
    }
    // Clear input filed
    depositAmountFiled.value = '';
    // Get previous deposit amount total
    const currentDepositAmountString =document.getElementById('deposit-amount');
    const currentDepositAmount = parseFloat(currentDepositAmountString.innerText);
    // Make total
    const totalDepositAmount = depositAmount + currentDepositAmount;
    // Set the total deposit
    currentDepositAmountString.innerText = totalDepositAmount;
    // Get previous balance amount total
    const currentBalanceAmountString =document.getElementById('total-amount');
    const currentBalanceAmount = parseFloat(currentBalanceAmountString.innerText);
    // Make total of Balance
    const totalBalanceAmount = depositAmount + currentBalanceAmount;
    // Set the total balance
    currentBalanceAmountString.innerText = totalBalanceAmount;
});