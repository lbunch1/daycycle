const slider = document.getElementById("day-slider");
const clock = document.getElementById("clock");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const ampm = document.getElementById("am-pm");
const daylight = document.getElementById("daylight");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const dayMountains = document.getElementById("day-mountains");
const stars = document.querySelector(".stars");
const cloud = document.querySelector(".cloud");


function setClock() {
    minute.innerText = String(((slider.value % 4) * 15)).padStart(2, '0');
    if (slider.value < 48){
        ampm.innerText = "AM";
    } else {
        ampm.innerText = "PM"
    }
    if ( slider.value < 1) {
        hour.innerText = "12"
    } else if ( slider.value >= 52) {
        hour.innerText = String(Math.floor(slider.value / 4) - 12).padStart(2, '0')
    } else {
        hour.innerText = String(Math.floor(slider.value / 4)).padStart(2, '0');
    }

}

function setBackground() {
    if (slider.value <= 48) {
        daylight.style.backgroundColor = `rgb(99, 211, 242, ${(slider.value / 48)*1.5})`
    } else {
        daylight.style.backgroundColor = `rgb(99, 211, 242, ${((96 / slider.value)*2) - 2})`;
    }
    // console.log(daylight.style.backgroundColor)
}

function moveSun() {
    if (slider.value <= 48) {
        sun.style.bottom = `${(slider.value/96)*200 - 20}vh`;
        moon.style.top = `${(slider.value/96)*200 + 10}vh`;
    } else {
        sun.style.bottom = `${(1-slider.value/96)*200 - 20}vh`;
        moon.style.top = `${(1-slider.value/96)*200 + 10}vh`;
    }
    // console.log(sun.style.bottom, moon.style.top)
}

function setMountains() {
    if (slider.value <= 48) {
        dayMountains.style.opacity = `${(slider.value/96)*2}`;
    } else {
        dayMountains.style.opacity = `${(1-slider.value/96)*2}`;
    }
}

function setStars() {
    if (slider.value < 25 || slider.value > 72) {
        stars.style.opacity = '1';
        clock.style.color = 'white';
    } else {
        stars.style.opacity = '0';
        clock.style.color = 'black';
    }
}

function setCloud() {
    if (slider.value < 25 || slider.value > 72) {
        cloud.style.transform = 'translateX(-50vw)';
    } else {
        cloud.style.transform = 'translateX(0)';
    }
}

function handleSlider() {
    setClock();
    setBackground();
    moveSun();
    setMountains();
    setStars();
    setCloud();
}

slider.addEventListener('mousedown', () => {
    slider.addEventListener('mousemove', handleSlider)
});