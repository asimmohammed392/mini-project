function check(){
    var count=0;
    var q1=document.quiz.ques1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    if(q1=="Java"){count++}
    if(q2=="Russia"){count++}
    if(q3=="Sohail"){count++}
    if(q4=="Phir Hera pheri"){count++}
    if(q5=="Akshay"){count++}

    document.write(count);
}