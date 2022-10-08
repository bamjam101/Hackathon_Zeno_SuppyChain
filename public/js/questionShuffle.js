let questionCounter = 0;
let nextCount = 0;
let score = 0;
let currentQue;
let availableQue = [];
let availableOpt = [];
let correct;
const optContainer = document.querySelector(".options");
const queText = document.querySelector(".question");
const scored = document.querySelector(".score");
const button = document.querySelector("button");
const buttonRedirect = document.querySelector(".redirect-home");
const bubbble = document.querySelector("#bubble");
const learnBtn = document.querySelector('.learn-btn');

//Learn-box variable 
const learnTitle = document.querySelector('.learn-title');
const learnContent = document.querySelector('.learn-content');

//curtain and learn toggle functions

function curtain() {
    const curtain = document.querySelector("section");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    setTimeout(() => {
        footer.style.display = "block";
        main.style.display = "block";
        header.style.display = "block";
    }, 2800);
    setTimeout(() => {
        footer.style.opacity = "100";
        main.style.opacity = "100";
        header.style.opacity = "100";
        curtain.style.display = "none";
    }, 3000);
    curtain.style.top = "-100%";
    setQuestion();
    getNewQuestion();
}

let learnToggle = true;

function learnSection() {
    const queBox = document.querySelector('.que');
    const question = document.querySelector(".question");
    const options = document.querySelector(".options");
    const learnBox = document.querySelector(".learn-box");

    const learnBtn = document.querySelector('.learn-btn');
    const crossBtn = document.querySelector('.crossBtn');
    const nextBtn = document.querySelector('button');

    if (learnToggle == true) {
        question.style.opacity = '0';
        options.style.opacity = '0';

        queBox.style.height = '60vh';
        nextBtn.style.opacity = '0';
        crossBtn.style.display= 'block';
        learnBox.style.display = 'block';
        setTimeout(() => {
            learnBtn.style.display = 'none';
            options.style.display = 'none';
            learnBox.style.opacity = '100';
            crossBtn.style.opacity = '100';
        }, 500);
        return learnToggle = false;
    } else {
        options.style.display = 'block';

        question.style.opacity = '1';
        options.style.opacity = '1';

        queBox.style.height = '17.6vh';

        learnBox.style.opacity = '0';
        learnBtn.style.display = 'block';
        crossBtn.style.opacity = '0';
        nextBtn.style.opacity = '1';
        setTimeout(() => {
            crossBtn.style.display= 'none';
            learnBox.style.display = 'none';
        }, 1000);
        return learnToggle = true;
    }
}

//quiz logic functions
function setQuestion() {
    const totalQue = quiz.length;
    for (let i = 0; i < totalQue; i++) {
        availableQue.push(quiz[i]);
    }
}

function getNewQuestion() {
    const questionIndex = availableQue[Math.floor(Math.random() * availableQue.length)]
    currentQue = questionIndex;
    // Set the question on webpage using innerHTML
    queText.innerHTML = currentQue.q;

    //learn-box content
    // learnTitle.innerHtml = currentQue.title;
    learnContent.innerHTML = currentQue.learn;
    // Set respective theme bubble
    bubbble.style.opacity = "0";

    setTimeout(() => {
        bubbble.setAttribute("src", currentQue.theme);
    }, 200);
    setTimeout(() => {
        bubbble.style.opacity = "30%";
    }, 1500);
    // index of current question, position in availableQue array
    const indexSlice = availableQue.indexOf(questionIndex);
    // slice out the asked question to avoid repetition
    availableQue.splice(indexSlice, 1);
    // optionCode
    const optionLen = currentQue.option.length;

    for (let i = 0; i < optionLen; i++) {
        availableOpt.push(i);
    }
    optContainer.innerHTML = '';
    // What is correct option?
    correct = currentQue.ans;
    // set the options randomly
    for (let i = 0; i < optionLen; i++) {
        const optIndex = availableOpt[Math.floor(Math.random() * availableOpt.length)];
        const optSlice = availableOpt.indexOf(optIndex);
        availableOpt.splice(optSlice, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQue.option[optIndex];
        option.id = optIndex;
        option.className = "box";
        // option.style.animationDelay = "0.2s";
        optContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this, correct)")
    }
    questionCounter++;
}

function getResult(element, ans) {
    const optionChose = element.id;
    if (optionChose == ans) {
        // styling green, score++, or 
        element.classList.add("correct");
        score++;
    } else {
        // style red
        element.classList.add("wrong");
        // To show the correct answer along
        const optLen = optContainer.children.length;
        for (let i = 0; i < optLen; i++) {
            if (optContainer.children[i].id == ans) {
                optContainer.children[i].classList.add("correct");
            }
        }
    }
    restrictClick();
}

function restrictClick() {
    const optRegionLen = optContainer.children.length;
    for (let i = 0; i < optRegionLen; i++) {
        optContainer.children[i].classList.add("already-clicked");
    }
}

function next() {
    nextCount++;
    queText.style.opacity = "0";
    setTimeout(() => {
        queText.style.opacity = "100";

        if (questionCounter === 5) {
            bubbble.style.opacity = '0'
            queText.style.opacity = "0";
            button.style.opacity = "0";
            learnBtn.style.opacity = '0';
            optContainer.style.background = 'none';
            setTimeout(() => {
                buttonRedirect.style.display = 'block';
                queText.innerHTML = "You've Finished The Game!";
                queText.style.opacity = "100";
                optContainer.innerHTML = "";
                learnBtn.style.display = 'none';
                button.innerHTML = "Start Again!";
            }, 500);
            setTimeout(() => {
                buttonRedirect.style.opacity = '100';
                optContainer.innerHTML = 'Scored ' + score + ' of 5';
                bubbble.style.display = 'none';
            }, 1000);
            setTimeout(() => {
                button.style.opacity = "100";
            }, 2000);
            button.removeAttribute("onclick", "next()");
            button.setAttribute("onclick", "reload()");
        } else {
            getNewQuestion();
        }
    }, 1000);

}

function reload() {
    window.location.reload();
}

// window.onload = function () {
//     setQuestion();
//     getNewQuestion();
// }