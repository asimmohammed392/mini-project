const questionNumber=document.querySelector(".question-number");
const questionText=document.querySelector(".question-text");
const optionContainer=document.querySelector(".option-container");
const answerIndicatorContainer=document.querySelector(".answers-indicator");
const homeBox=document.querySelector(".home-box");
const quizBox=document.querySelector(".quiz-box");
const resultBox=document.querySelector(".result-box");

const questionLimit=10;

let questionCounter=0;
let currentQuestions;
let availableQuestions=[];
let availableOptions=[];
let correctAnswers=0;
let attempts=0;

function setAvailableQuestions(){
    const totalQuestion=quiz.length;
    for(let i=0; i<totalQuestion;i++){
        availableQuestions.push(quiz[i]);
    }
}
function getNewQuestion(){
    console.log(availableQuestions)
    questionNumber.innerHTML="Question "+(questionCounter+1)+" of "+ questionLimit;
    const questionIndex= availableQuestions[Math.floor(Math.random()*availableQuestions.length)];
    currentQuestions=questionIndex;
    questionText.innerHTML= currentQuestions.q;
    const index1 = availableQuestions.indexOf(questionIndex); 
    availableQuestions.splice(index1,1);

    const optionLen= currentQuestions.options.length;
    for (let i=0;i<optionLen;i++){
        availableOptions.push(i);
    }
    optionContainer.innerHTML='';
    for(let i=0;i<optionLen;i++){
        const optionIndex=availableOptions[Math.floor(Math.random()*availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2,1);
        const option= document.createElement("div");
        option.innerHTML=currentQuestions.options[optionIndex];
        option.id=optionIndex;
        option.className="option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }

    questionCounter++;
}
function getResult(element){
    const id=parseInt(element.id);
    if(id===currentQuestions.answer){
        element.classList.add("correct");
        correctAnswers++;
    }else{
        element.classList.add("wrong");
    }
    attempts++;
    unclickableOptions();
}

function unclickableOptions(){
    const optionLen= optionContainer.children.length;
    for(let i=0; i<optionLen;i++){
        optionContainer.children[i].style="pointer-events:none;";
    }
}

function answersIndicator(){
    answerIndicatorContainer.innerHTML='';
    const totalQuestion = questionLimit;
    for(let i=0;i<totalQuestion;i++){
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}


function next(){
    if(questionCounter === questionLimit){
        quizOver();
    }else{
        getNewQuestion();
    }
}

function quizOver(){
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
}
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML=questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML=attempts;
    resultBox.querySelector(".total-correct").innerHTML=correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML=attempts-correctAnswers;
    const percentage = (correctAnswers/questionLimit)*100;
    resultBox.querySelector(".total-percent").innerHTML= percentage.toFixed(2)+"%";
    resultBox.querySelector(".total-score").innerHTML=correctAnswers+" / "+questionLimit;
}
function resetQuiz(){
    questionCounter=0;
    correctAnswers=0;
    attempts=0;
    availableQuestions=[];
}
function tryAgainQuiz(){
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}
function goToHome(){
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
}
function startQuiz(){
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
}

window.onload=function(){
    homeBox.querySelector(".total-question").innerHTML=questionLimit;
}