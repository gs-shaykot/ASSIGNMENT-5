document.getElementById('subBTN').addEventListener('click', function () {
    BalnaceSubmission('tkInput', 'CurrentFund', 'wallet');
});

document.getElementById('subBTN2').addEventListener('click', function () {
    BalnaceSubmission('tkInput2', 'CurrentFund2', 'wallet');
});

document.getElementById('subBTN3').addEventListener('click', function () {
    BalnaceSubmission('tkInput3', 'CurrentFund3', 'wallet');
});

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

