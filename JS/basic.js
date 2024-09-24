// BLOG BUTTON FUNCTION START
document.getElementById('logo').addEventListener('click',function(){
    window.location.href = '../faq.html'
}) 
// BLOG BUTTON FUNCTION END 

// BUTTONS FUNCTION START

document.getElementById('transBTN').addEventListener('click',function(){

    document.getElementById('DonatBTN').classList.remove('activeBTN');

    document.getElementById('transBTN').classList.add('activeBTN');
    
    document.getElementById('transaction').classList.remove('hidden');

    document.getElementById('posts').classList.add('hidden');
})

document.getElementById('DonatBTN').addEventListener('click',function(){
    document.getElementById('DonatBTN').classList.add('activeBTN');

    document.getElementById('transBTN').classList.remove('activeBTN');

    document.getElementById('posts').classList.remove('hidden');

    document.getElementById('transaction').classList.add('hidden');
})
 
// BUTTONS FUNCTION END


// SUBMIT BUTTONS FUNCTION START

document.getElementById('subBTN').addEventListener('click', function () {
    const donatedMoney=getInputById('tkInput');
    const walletBalance=getMoneyInNumber('wallet')
    if(donatedMoney>walletBalance){
        alert('Donate Amount is Larger than Wallet Balance');
    }
    else if(donatedMoney>0 && donatedMoney<=walletBalance){
        TransFunction(donatedMoney,'post1')
    }

    BalnaceSubmission('tkInput', 'CurrentFund', 'wallet');

});


document.getElementById('subBTN2').addEventListener('click', function () {
    const donatedMoney=getInputById('tkInput2');
    const walletBalance=getMoneyInNumber('wallet')
    if(donatedMoney>walletBalance){
        alert('Donate Amount is Larger than Wallet Balance');
    }
    else if(donatedMoney>0 && donatedMoney<=walletBalance){
        TransFunction(donatedMoney,'post2')
    }

    BalnaceSubmission('tkInput2', 'CurrentFund2', 'wallet');
    
});

document.getElementById('subBTN3').addEventListener('click', function () {
    const donatedMoney=getInputById('tkInput2');
    const walletBalance=getMoneyInNumber('wallet')
    if(donatedMoney>walletBalance){
        alert('Donate Amount is Larger than Wallet Balance');
    }
    else if(donatedMoney>0 && donatedMoney<=walletBalance){
        TransFunction(donatedMoney,'post2')
    }

    BalnaceSubmission('tkInput3', 'CurrentFund3', 'wallet');
});

// SUBMIT BUTTONS FUNCTION END