document.addEventListener("DOMContentLoaded", function () {
    const swirl2 = document.getElementById('swirlWrapper2');
    swirl2.style.visibility = 'hidden';
});

document.getElementById('catBlinker').addEventListener('mouseenter', function() {
    const noBlink = this.getAttribute('data-noBlink-src');
    const blink = this.getAttribute('data-blink-src');
    
    this.src = blink;
    
    setTimeout(() => {
        this.src = noBlink;
    }, 500);
});

document.getElementById('info').addEventListener('mouseenter', function() {
    const catBlinker = document.getElementById('catBlinker');
    const blink = catBlinker.getAttribute('data-blink-src');
    const noBlink = catBlinker.getAttribute('data-noBlink-src');
    const swirl = document.getElementById('swirlWrapper');
    const swirl2 = document.getElementById('swirlWrapper2');

    swirl.style.visibility = 'visible';
    swirl2.style.visibility = 'hidden';
    catBlinker.src = blink;
    
    setTimeout(() => {
        catBlinker.src = noBlink;
    }, 500);
});

document.getElementById('slots').addEventListener('mouseenter', function() {
    const catBlinker = document.getElementById('catBlinker');
    const blink = catBlinker.getAttribute('data-blink-src');
    const noBlink = catBlinker.getAttribute('data-noBlink-src');
    const swirl = document.getElementById('swirlWrapper');
    const swirl2 = document.getElementById('swirlWrapper2');
    
    swirl.style.visibility = 'hidden';
    swirl2.style.visibility = 'visible';
    catBlinker.src = blink;
    
    setTimeout(() => {
        catBlinker.src = noBlink;
    }, 500);
});

// Disable all zoom
document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Disable keyboard zoom
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
    }
});