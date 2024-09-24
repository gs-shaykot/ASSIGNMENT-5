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

    BalnaceSubmission('tkInput', 'CurrentFund', 'wallet');

    const donatedMoney=getInputById('tkInput');
 
    TransFunction(donatedMoney,'post1')

});


document.getElementById('subBTN2').addEventListener('click', function () {
    BalnaceSubmission('tkInput2', 'CurrentFund2', 'wallet');
    
    const donatedMoney=getInputById('tkInput2');
 
    TransFunction(donatedMoney,'post2')
});

document.getElementById('subBTN3').addEventListener('click', function () {
    BalnaceSubmission('tkInput3', 'CurrentFund3', 'wallet');

    const donatedMoney=getInputById('tkInput3');
 
    TransFunction(donatedMoney,'post3')
});

// SUBMIT BUTTONS FUNCTION END