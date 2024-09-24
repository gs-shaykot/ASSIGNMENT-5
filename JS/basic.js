// Function to change header background on scroll
window.addEventListener('scroll', function () {
    const header = document.getElementById('main_header');
    const default_bg = this.document.getElementById('main-nav')
    if (window.scrollY > 50) {
        header.classList.add('glass', 'shadow-lg');
        default_bg.classList.remove('bg-[#f9f7f3]');
    } else {
        header.classList.remove('glass', 'shadow-lg');
        default_bg.classList.add('bg-[#f9f7f3]');
    }
});

// BLOG BUTTON FUNCTION START
document.getElementById('logo').addEventListener('click', function () {
    window.location.href = './faq.html'
})

// BLOG BUTTON FUNCTION END 

// BUTTONS FUNCTION START

document.getElementById('transBTN').addEventListener('click', function () {

    document.getElementById('DonatBTN').classList.remove('activeBTN');

    document.getElementById('transBTN').classList.add('activeBTN');

    document.getElementById('transaction').classList.remove('hidden');

    document.getElementById('posts').classList.add('hidden');
})

document.getElementById('DonatBTN').addEventListener('click', function () {
    document.getElementById('DonatBTN').classList.add('activeBTN');

    document.getElementById('transBTN').classList.remove('activeBTN');

    document.getElementById('posts').classList.remove('hidden');

    document.getElementById('transaction').classList.add('hidden');
})

// BUTTONS FUNCTION END


// SUBMIT BUTTONS FUNCTION START

document.getElementById('subBTN').addEventListener('click', function () {
    BalnaceSubmission('tkInput', 'CurrentFund', 'wallet');
    document.getElementById('tkInput').value='';
});


document.getElementById('subBTN2').addEventListener('click', function () {
    BalnaceSubmission('tkInput2', 'CurrentFund2', 'wallet');
    document.getElementById('tkInput2').value='';
});

document.getElementById('subBTN3').addEventListener('click', function () {
    BalnaceSubmission('tkInput3', 'CurrentFund3', 'wallet');
    document.getElementById('tkInput3').value='';
});

// SUBMIT BUTTONS FUNCTION END