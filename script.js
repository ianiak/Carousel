const radios = document.querySelectorAll('input[type="radio"]');
let currentIndex = 0;
let autoSwitch;
let timeout;

function switchRadio() {
    radios[currentIndex].checked = false;
    currentIndex = (currentIndex + 1) % radios.length;
    radios[currentIndex].checked = true;
}

function startAutoSwitch() {
    autoSwitch = setInterval(switchRadio, 5000); 
}

function stopAutoSwitch() {
    clearInterval(autoSwitch);
}

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        stopAutoSwitch();
        clearTimeout(timeout);
        timeout = setTimeout(startAutoSwitch, 10000); 
    });
});

startAutoSwitch(); 
