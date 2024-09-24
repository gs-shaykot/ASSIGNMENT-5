
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


// INPUT VALIDATION
function BalnaceSubmission(inputId, fundId, walletId) {
    const getip = getInputById(inputId);
    const walletBalance = getMoneyInNumber(walletId)
    if (getip > walletBalance) {
        alert('Donate Amount is Larger than Wallet Balance');
    }
    else if (getip > 0 && getip <= walletBalance) {
        TransFunction(getip, 'post1')
    }

    if (isNaN(getip)) {
        alert('Please Enter A number');
    }
    else if (getip == 0 || getip<0) {
        alert('Please Enter More than ZERO');
    }
    else {
        FinanceCalculation(getip, fundId, walletId); 
    }
}

// FINANCE CALCULATION
function FinanceCalculation(getip, availFund, availBal) {
    const FundCollected = getMoneyInNumber(availFund);
    const BalanceInWallet = getMoneyInNumber(availBal);

    // Check if BalanceInWallet is greater than getip
    if (BalanceInWallet >= getip) {  // Ensure balance is enough
        const NewFund = FundCollected + getip;
        const NewWallet = BalanceInWallet - getip;

        document.getElementById(availFund).innerText = NewFund;
        document.getElementById(availBal).innerText = NewWallet;
        
        my_modal_4.showModal()

    }
}

// TRANSACTION ADDER

function TransFunction(donatedMoney, postID) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('container', 'mx-auto', 'rounded-2xl', 'py-8', 'px-6', 'border-[#ece6e6]', 'border-2', 'mb-7')

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const getTittle = document.getElementById(postID).innerText;

    p1.classList.add('text-xl', 'font-bold', 'mb-3')

    p1.innerText = `${donatedMoney} Taka is Donated for ${getTittle}`;
    const time = new Date()
    p2.innerText = `DATE: ${time}`;
    p2.classList.add('font-light', 'text-base')

    newDiv.appendChild(p1);
    newDiv.appendChild(p2);

    const transactionSection = document.getElementById('transaction');
    transactionSection.appendChild(newDiv);
}

