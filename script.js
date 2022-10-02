console.log("Test message");

let startingNum = 0;
let timeNum= 0;
let dataNum = 0;

let buttonOne = document.getElementById("button1");
let buttonTwo = document.getElementById("button2");
let buttonThree = document.getElementById("button3");
let buttonFour = document.getElementById("button4");
let buttonFive = document.getElementById("button5");
let buttonSix = document.getElementById("button6");
let buttonSeven = document.getElementById("button7");

let itemCountOne = document.getElementById("producer-count-1");
let itemCountTwo = document.getElementById("producer-count-2");
let itemCountThree = document.getElementById("producer-count-3");
let itemCountFour = document.getElementById("producer-count-4");
let itemCountFive = document.getElementById("producer-count-5");
let itemCountSix = document.getElementById("producer-count-6");
let itemCountSeven = document.getElementById("producer-count-7");
    
const producerButtonValues = {
    buttonOne: 1,
    buttonTwo: 5,
    buttonThree: 50,
    buttonFour: 100,
    buttonFive: 500,
    buttonSix: 25000,
    buttonSeven: 1000000
};

let scoreCount = document.getElementById("score-count");
let timeCount = document.getElementById("time-count");
let dataCount = document.getElementById("data-count");
let clickImg = document.getElementById("click-img");
let passiveCountTotal = document.getElementById("passive-count");

setInterval(function() {
    timeNum ++;
    timeCount.textContent = timeNum + "s";
}, 1000);

setInterval(function() {
    dataNum += 14;
    dataCount.textContent = dataNum;
}, 222);

function clickIncrementer() {
    startingNum ++;
    scoreCount.textContent = startingNum;
};

clickImg.addEventListener("click", clickIncrementer);

setInterval(function() {
    if (startingNum >= 10) {
        document.getElementById("prod1").removeAttribute("hidden");
    } if (startingNum >= 40) {
        document.getElementById("prod2").removeAttribute("hidden");
    } if (startingNum >= 200) {
        document.getElementById("prod3").removeAttribute("hidden");
    } if (startingNum >= 900) {
        document.getElementById("prod4").removeAttribute("hidden");
    } if (startingNum >= 9500) {
        document.getElementById("prod5").removeAttribute("hidden");
    } if (startingNum >= 95000) {
        document.getElementById("prod6").removeAttribute("hidden");
    } if (startingNum >= 999999) {
        document.getElementById("prod7").removeAttribute("hidden");
    }
}, 100);

function passiveProductionOne() {
    if (startingNum >= 10) {
        startingNum -= 10;
        let newNum = itemCountOne.innerText;
        newNum++
        itemCountOne.innerText = newNum
    }
};

    buttonOne.addEventListener("click", passiveProductionOne);

function passiveProductionTwo() {
    if (startingNum >= 50) {
        startingNum -= 50;
        let newNum = itemCountTwo.innerText;
        newNum++
        itemCountTwo.innerText = newNum
    }
};

    buttonTwo.addEventListener("click", passiveProductionTwo);

function passiveProductionThree() {
    if (startingNum >= 250) {
        startingNum -= 250;
        let newNum = itemCountThree.innerText;
        newNum++
        itemCountThree.innerText = newNum
    }
};

    buttonThree.addEventListener("click", passiveProductionThree);

function passiveProductionFour() {
    if (startingNum >= 1000) {
        startingNum -= 1000;
        let newNum = itemCountFour.innerText;
        newNum++
        itemCountFour.innerText = newNum
    }
};

    buttonFour.addEventListener("click", passiveProductionFour);

function passiveProductionFive() {
        if (startingNum >= 10000) {
            startingNum -= 10000;
            let newNum = itemCountFive.innerText;
            newNum++
            itemCountFive.innerText = newNum
        }
    };
    
    buttonFive.addEventListener("click", passiveProductionFive);

function passiveProductionSix() {
        if (startingNum >= 100000) {
            startingNum -= 100000;
            let newNum = itemCountSix.innerText;
            newNum++
            itemCountSix.innerText = newNum
        }
    };
    
    buttonSix.addEventListener("click", passiveProductionSix);

function passiveProductionSeven() {
        if (startingNum >= 1000000) {
            startingNum -= 1000000;
            let newNum = itemCountSeven.innerText;
            newNum++
            itemCountSeven.innerText = newNum
        }
    };
    
    buttonSeven.addEventListener("click", passiveProductionSeven);


function multiplyPassiveSums() {
    let sumOne = Number(itemCountOne.innerText) * producerButtonValues.buttonOne;
    let sumTwo = Number(itemCountTwo.innerText) * producerButtonValues.buttonTwo;
    let sumThree = Number(itemCountThree.innerText) * producerButtonValues.buttonThree;
    let sumFour = Number(itemCountFour.innerText) * producerButtonValues.buttonFour;
    let sumFive = Number(itemCountFive.innerText) * producerButtonValues.buttonFive;
    let sumSix = Number(itemCountSix.innerText) * producerButtonValues.buttonSix;
    let sumSeven = Number(itemCountSeven.innerText) * producerButtonValues.buttonSeven;
        return sumOne + sumTwo + sumThree + sumFour + sumFive + sumSix + sumSeven
};

setInterval(function() {
    passiveCountTotal.innerText = multiplyPassiveSums()
}, 100);

setInterval(function() {
    startingNum += multiplyPassiveSums();
    scoreCount.innerText = startingNum
}, 1000);