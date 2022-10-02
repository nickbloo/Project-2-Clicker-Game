console.log("Test message");

let startingNum = 0;
let timeNum= 0;
let dataNum = 0;

const gameState = {
    totalNumOfClicks: 0,
    numOfPassiveClicks: 0,
    intervalLoopID: undefined
};

let scoreCount = document.getElementById("score-count");
let timeCount = document.getElementById("time-count");
let dataCount = document.getElementById("data-count");
let clickImg = document.getElementById("click-img");

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



// Step 2 - Clicking buy button adds a producer to inventory
//      Step 2a - each producer adds a number per second to the scoreCount
//      Step 2b - producers do not stop producing (while loop?)