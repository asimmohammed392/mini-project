const questionNumber=document.querySelector(".question-number");
const questionText=document.querySelector(".question-text");
const optionContainer=document.querySelector(".option-container");

let questionCounter=0;
let currentQuestions;
let availableQuestions=[];
let availableOptions=[];

function setAvailableQuestions(){
    const totalQuestion=quiz.length;
    for(let i=0; i<totalQuestion;i++){
        availableQuestions.push(quiz[i]);
    }
}
function getNewQuestion(){
    questionNumber.innerHTML="Question "+(questionCounter+1)+" of "+quiz.length;
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
function next(){
    if(questionCounter === quiz.length){
        console.log("Quiz Over");
    }else{
        getNewQuestion();
    }
}

window.onload=function(){
    setAvailableQuestions();
    getNewQuestion();
}