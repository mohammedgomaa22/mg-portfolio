// ---------------------------------------------------
// Count Dow Events
const countDownEvents = () => {
    const dateEvent = new Date("07/26/2023 23:59:59").getTime();
    // ------------------
    const counter = setInterval(() => {
        const dateNow = new Date().getTime(),
            dateDiff = dateEvent - dateNow,
            days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)),
            hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60)),
            seconds = Math.floor(dateDiff % (1000 * 60) / (1000));
        // ------------------
        // set Count In Page 
        document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        // -----------------------------
        // Stop Count Down 
        if (days <= 00 && hours <= 00 && minutes <= 00 && seconds <= 00) {
            clearInterval(counter);
        }
    }, 1000);
};
countDownEvents();
// ***************************************************
const scrollSections = () => {
    // Start Variables
    // variables To Scroll To Top
    const up = document.querySelector(".get-up"),
    // variables To Counter to Skills
        sectionSk = document.querySelector(".our-skills"),
        textWidth = document.querySelectorAll(".skill h3 > span"),
        progress = document.querySelectorAll(".skill .progress > span"),
    // variables To Counter to Stats
        sectionSt = document.querySelector(".stats"),
        textNum = document.querySelectorAll(".stats .num");
    let started = false;
    // End Variables
        // ------------------
    // Start Coding
    // Code To Scroll To Top
    up.onclick = () => {
        window.scrollTo(top, 0);
    };
    // Code To Skills
    for (let i = 0; i < progress.length; i++) {
        textWidth[i].innerHTML = progress[i].dataset.width;
    };
    // Code To Stats
    function startCount(ele) {
        let num = ele.dataset.number;
        let count = setInterval(() => {
            ele.textContent++;
            if (ele.textContent == num) {
                clearInterval(count);
            }
        }, 1800 / num);
    };
    // End Coding
        // ------------------
    // Start All Scrolling
    window.onscroll = () => {
        // Scroll To Top
        if (window.scrollY >= 2000) {
            up.style.cssText = "display: flex";
        } else {
            up.style.cssText = "display: none";
        }
        // Scroll To Skills
        if (window.scrollY >= sectionSk.offsetTop - 150) {
            progress.forEach((pro) => {
                pro.style.width = pro.dataset.width;
            });
        };
        // Scroll To Stats
        if (window.scrollY >= sectionSt.offsetTop - 200) {
            if (!started) {
                textNum.forEach((text) => startCount(text));
            }
            started = true;
        };
    };
    // End All Scrolling
};
scrollSections();
// ***************************************************