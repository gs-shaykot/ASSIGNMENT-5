// COVERT THE STRING MONEY TO NUMBER
function getInputById(id) {
    const InputVal = document.getElementById(id).value;

    return parseFloat(InputVal);
}

// COVERT THE STRING HTML TEXT TO NUMBER
function getMoneyInNumber(id) {
    const MoneyInNumber = document.getElementById(id).innerText;

    return parseFloat(MoneyInNumber);
}

// FINANCE CALCULATION
function FinanceCalculation(getip, availFund, availBal) {
    const FundCollected = getMoneyInNumber(availFund);
    const BalanceInWallet = getMoneyInNumber(availBal);
    const NewFund = FundCollected + getip;
    const NewWallet = BalanceInWallet - getip
    document.getElementById(availFund).innerText = NewFund;

    document.getElementById(availBal).innerText = NewWallet;

}

// INPUT VALIDATION

function BalnaceSubmission(inputId, fundId, walletId) {
    const getip = getInputById(inputId);

    if (isNaN(getip)) {
        alert('Please Enter A number');
    }
    else if (getip == 0) {
        alert('Please Enter More than ZERO');
    }
    else {
        FinanceCalculation(getip, fundId, walletId);
    }
}