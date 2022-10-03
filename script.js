let startingScore = 0; // Defines the starting score
let timeNum= 0; // Defines the starting number on the timer
let dataNum = 0; // Defines the starting number on data counter

// Sets the html button elements to js variables
let buttonOne = document.getElementById("button1");
let buttonTwo = document.getElementById("button2");
let buttonThree = document.getElementById("button3");
let buttonFour = document.getElementById("button4");
let buttonFive = document.getElementById("button5");
let buttonSix = document.getElementById("button6");
let buttonSeven = document.getElementById("button7");

// Sets the html element that counts each number of producers owned to a js variable
let itemCountOne = document.getElementById("producer-count-1");
let itemCountTwo = document.getElementById("producer-count-2");
let itemCountThree = document.getElementById("producer-count-3");
let itemCountFour = document.getElementById("producer-count-4");
let itemCountFive = document.getElementById("producer-count-5");
let itemCountSix = document.getElementById("producer-count-6");
let itemCountSeven = document.getElementById("producer-count-7");

// Creates an object setting each button variable to a value equal to the amount of clicks they generate per second    
const producerButtonValues = {
    buttonOne: 1,
    buttonTwo: 5,
    buttonThree: 50,
    buttonFour: 100,
    buttonFive: 500,
    buttonSix: 25000,
    buttonSeven: 1000000
};

// Sets html elements of the score count, timer, data count, image that gets clicked on and the passive producer count to js variables
let scoreCount = document.getElementById("score-count");
let timeCount = document.getElementById("time-count");
let dataCount = document.getElementById("data-count");
let clickImg = document.getElementById("click-img");
let passiveCountTotal = document.getElementById("passive-count");

// Creates a timer by increasing the timeNum variable by 1 every second and setting the timeCount html text to the variable
setInterval(function() {
    timeNum ++;
    timeCount.textContent = timeNum + "s";
}, 1000);

// Creates a number generator that increases the "data count" by 14 every 222 milliseconds
setInterval(function() {
    dataNum += 14;
    dataCount.textContent = dataNum;
}, 222);

// Creates a function that increases the startingScore variable by 1 and sets the score count html text to the variable
function clickIncrementer() {
    startingScore ++;
    scoreCount.textContent = startingScore;
};


clickImg.addEventListener("click", clickIncrementer); // Event listener that invokes the clickIncrementor function every time the clickImg is clicked

// A function set every 100 milliseconds that checks if the startingScore is equal to certain numbers
// When the score is equal to or greater than these numbers the hidden attribute is removed from the producer elements
// Making them available for purchase
setInterval(function() {
    if (startingScore >= 10) {
        document.getElementById("prod1").removeAttribute("hidden");
    } if (startingScore >= 40) {
        document.getElementById("prod2").removeAttribute("hidden");
    } if (startingScore >= 200) {
        document.getElementById("prod3").removeAttribute("hidden");
    } if (startingScore >= 900) {
        document.getElementById("prod4").removeAttribute("hidden");
    } if (startingScore >= 9500) {
        document.getElementById("prod5").removeAttribute("hidden");
    } if (startingScore >= 95000) {
        document.getElementById("prod6").removeAttribute("hidden");
    } if (startingScore >= 999999) {
        document.getElementById("prod7").removeAttribute("hidden");
    }
}, 100);

// All the following functions created that checks if the score is greater than or equal to 10
// If it is, then ten is subtracted from the score
// A newNum variable is created equal to the html text of itemCountOne
// newNum is increased by one and the itemCountOne is set to the updated value
function passiveProductionOne() {
    if (startingScore >= 10) {
        startingScore -= 10;
        let newNum = itemCountOne.innerText;
        newNum++
        itemCountOne.innerText = newNum
    }
};

// Creates on click event for buttonOne that invokes the above function
// All the following on click functions do the same for their respective buttons and functions
buttonOne.addEventListener("click", passiveProductionOne);

function passiveProductionTwo() {
    if (startingScore >= 50) {
        startingScore -= 50;
        let newNum = itemCountTwo.innerText;
        newNum++
        itemCountTwo.innerText = newNum
    }
};

buttonTwo.addEventListener("click", passiveProductionTwo);

function passiveProductionThree() {
    if (startingScore >= 250) {
        startingScore -= 250;
        let newNum = itemCountThree.innerText;
        newNum++
        itemCountThree.innerText = newNum
    }
};

buttonThree.addEventListener("click", passiveProductionThree);

function passiveProductionFour() {
    if (startingScore >= 1000) {
        startingScore -= 1000;
        let newNum = itemCountFour.innerText;
        newNum++
        itemCountFour.innerText = newNum
    }
};

buttonFour.addEventListener("click", passiveProductionFour);

function passiveProductionFive() {
        if (startingScore >= 10000) {
            startingScore -= 10000;
            let newNum = itemCountFive.innerText;
            newNum++
            itemCountFive.innerText = newNum
        }
    };
    
buttonFive.addEventListener("click", passiveProductionFive);

function passiveProductionSix() {
        if (startingScore >= 100000) {
            startingScore -= 100000;
            let newNum = itemCountSix.innerText;
            newNum++
            itemCountSix.innerText = newNum
        }
    };
    
buttonSix.addEventListener("click", passiveProductionSix);

function passiveProductionSeven() {
        if (startingScore >= 1000000) {
            startingScore -= 1000000;
            let newNum = itemCountSeven.innerText;
            newNum++
            itemCountSeven.innerText = newNum
        }
    };
    
buttonSeven.addEventListener("click", passiveProductionSeven);


// A function that sets new varables sum(s) 1-7 to the product of this equation:
// itemCount html text(converted to a Number) * the value of the corresponding producerButtonValue keys
// Then these sums are added together and returned for a total value of what all current producers are producing
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

// Function that sets the passiveCountTotal html text to the above sum and updates this value every 100ms
setInterval(function() {
    passiveCountTotal.innerText = multiplyPassiveSums()
}, 100);

// Function that adds the sum of all the passive production (the multiplyPassiveSums function) to the starting score 
// Then the scoreCount html text is set as equal to that final sum
// This is run once every second
setInterval(function() {
    startingScore += multiplyPassiveSums();
    scoreCount.innerText = startingScore
}, 1000);