// tady je místo pro náš program

/**
 * Funkce přidá nebo odebere na prvku třídu, která se stará o červenou barvu písma
 *
 * @param {string} elementId
 */
/*
function prepniZcervenani(elementId) {
    document.getElementById(elementId).classList.toggle('cerveny-text');
}
*/

//REFAKTORING KODU -->> FUNKCE prepniZcervenani()

function prepniZcervenani() {
    let button = document.getElementById("getRed");
    button.addEventListener("click", function () {
        let element = document.getElementById("js-paragraph");
        element.classList.toggle("cerveny-text");
    });
}

prepniZcervenani();

/**
 * Funkce zvětší/změnší písmo v elementu o definovanou velikost
 *
 * @param {string} elementSelector
 * @param {int} fontSizeChange
 */

/*
function zvetsitPismo(elementSelector, fontSizeChange) {
    let element = document.querySelector(elementSelector);
    let currentFontSize = parseInt(element.style.fontSize);
    element.style.fontSize = (currentFontSize + fontSizeChange) + 'px';
}
*/

//REFAKTORING KODU -->> FUNKCE zvetsitPismo

function zvetsitPismo() {
    let button = document.getElementById("bigger");
    button.addEventListener("click", function () {
        let element = document.getElementById("js-paragraph");
        let currentSize = parseInt(element.style.fontSize);
        element.style.fontSize = currentSize + 1 + "px";
    });
}

zvetsitPismo();
/*--------------*/
/* AUDIO FUNKCE */
/*--------------*/

/*
function prehraj(elementSelector) {
    document.querySelector(elementSelector).play();
}

*/

//REFAKTORING KODU FUNKCE PREHRAJ

function prehraj() {
    let button = document.getElementById("play");
    button.addEventListener("click", function () {
        document.getElementById("js-audio").play();
    });
}

prehraj();

/*
function pauzni(elementSelector) {
    document.querySelector(elementSelector).pause();
}
*/

//REFAKTORING FUNKCE PAUZNI

function pauzni() {
    let button = document.getElementById("pause");
    button.addEventListener("click", function () {
        document.getElementById("js-audio").pause();
    });
}

pauzni();

/*
function upravHlasitost(elementSelector, volumeValue) {
    document.querySelector(elementSelector).volume = volumeValue;
}

*/

// REFAKTORING FUNKCE UPRAVHLASITOST

function upravHlasitost() {
    let button1 = document.getElementById("volume1");
    let button2 = document.getElementById("volume2");
    let button3 = document.getElementById("volume3");
    button1.addEventListener("click", function () {
        document.getElementById("js-audio").volume = 0;
    });
    button2.addEventListener("click", function () {
        document.getElementById("js-audio").volume = 0.5;
    });
    button3.addEventListener("click", function () {
        document.getElementById("js-audio").volume = 1;
    });
}

upravHlasitost();

/*
function resetuj(elementSelector) {
    document.querySelector(elementSelector).currentTime = 0;
}
*/

//REFAKTORING FUNKCE RESETUJ

function resetuj() {
    let button = document.getElementById("reset");
    button.addEventListener("click", function () {
        document.getElementById("js-audio").currentTime = 0;
    });
}

resetuj();
