function displayresults(){

    const question1 =document.quiz.question1.value;
    const question2 =document.quiz.question2.value;
    const question3 =document.quiz.question3.value;
    const question4 =document.quiz.question4.value;

    var correct =0;

    if (question1 == "White Lion"){
        correct++;
        }
        if (question2 == "Abyssinian Lion"){
            correct++;
            }
            if (question3 == "African Lion"){
                correct++;
                }
                if (question4 == "Katanga Lion"){
                    correct++;
                    }

                    document.getElementById("after_submit").style.visibility="visible";
                    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct answers! "
}

function refresh(){
    location.reload();
}