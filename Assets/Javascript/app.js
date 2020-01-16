
//Variables to hold correct and incorrect answers for display at end
let correctAnswers = 0;
let incorrectAnswers = 0;
let timerInterval;
let time = 0


function timerReset(){
    time = 30
    $("#countdown").text("Time Remaining: " + time + " seconds")
}

function countdown(){
    $("#countdown").text("Time Remaining: " + time + " seconds")
    time--;
}

//Function to remove click events for previous answers from answer choices, so that new correct and incorrect answers can be assigned.
function clickOff(){
    $("#answerA").off("click");
    $("#answerB").off("click");
    $("#answerC").off("click");
    $("#answerD").off("click");
}



function question1(){
    
    $("#question").text("Which of the following directed the Silence of the Lambs?")
    $("#answerA").text("Anthony Hopkins")
    $("#answerB").text("Johnny Depp")
    $("#answerC").text("Jonathan Demme")
    $("#answerD").text("Goldie Hann")
   
    timerReset();

    timerInterval = setInterval(countdown, 1000)
   
    setTimeout(question2, 30000);
   
    timerInterval
   
    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question2();
        clearTimeout();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question2();
        clearTimeout();
    })
    $("#answerC").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question2();
        clearTimeout();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question2();
        clearTimeout();
    })

}

//Deactivates question1 click events, updates text and click events for question 2.
function question2(){
    clickOff();
    $("#question").text("Which of the following holds the Box Office all-time earnings record when adjusted for inflation?")
    $("#answerA").text("Gone with the Wind")
    $("#answerB").text("The Dark Knight")
    $("#answerC").text("Titanic")
    $("#answerD").text("Avenger's Endgame")

    setTimeout(question3, 30000)

    $("#answerA").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question3();
        clearTimeout();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question3();
        clearTimeout();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question3();
        clearTimeout();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question3();
        clearTimeout();
    })


}

function question3(){

    clickOff();
    $("#question").text("What is Director Tim Burton's highest grossing film?")
    $("#answerA").text("The Nightmare Before Christmas")
    $("#answerB").text("Edward Scissorhands")
    $("#answerC").text("Alice in Wonderland")
    $("#answerD").text("Batman")

    setTimeout(question4, 30000)

    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question4();
        clearTimeout();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question4();
        clearTimeout();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question4();
        clearTimeout();
    })
    $("#answerD").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question4();
        clearTimeout();
    })

};

function question4(){

    clickOff();
    $("#question").text("Which of the following starred in the Green Mile (1999)?")
    $("#answerA").text("Michael Clarke Duncan")
    $("#answerB").text("Harrison Ford")
    $("#answerC").text("Laura Dern")
    $("#answerD").text("Susan Sarandon")

    setTimeout(question5, 30000)
 
    $("#answerA").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question5();
        clearTimeout();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question5();
        clearTimeout();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question5();
        clearTimeout();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question5();
        clearTimeout();
    })

};

function question5(){

    clickOff();
    $("#question").text("Which was the first (and only) foreign animated film to win the Academy Award for Best Animated Feature?")
    $("#answerA").text("Wallace & Gromit: The Curse of the Were-Rabbit (2005)")
    $("#answerB").text("Spirited Away (2001)")
    $("#answerC").text("Grave of the Fireflies (1988)")
    $("#answerD").text("Fantastic Planet (1973)")

    setTimeout(question6, 30000)

    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question6();
        clearTimeout();
    })
    $("#answerB").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question6();
        clearTimeout();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question6();
        clearTimeout();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question6();
        clearTimeout();
    })

}

function question6(){

    clickOff();
    $("#question").text("Which of the following did Christopher Nolan NOT direct?")
    $("#answerA").text("Inception (2010)")
    $("#answerB").text("Batman Returns (1992)")
    $("#answerC").text("Memento (2002)")
    $("#answerD").text("Doodlebug (1997)")

    setTimeout(question7, 30000)

    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question7();
        clearTimeout();
    })
    $("#answerB").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question7();
        clearTimeout();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question7();
        clearTimeout();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question7();
        clearTimeout();
    })

};

function question7(){

    clickOff();
    $("#question").text("Which character does Al Pacino portray in Heat (1995)?")
    $("#answerA").text("Vincent Hanna")
    $("#answerB").text("Neil McCauley")
    $("#answerC").text("Jon Voight")
    $("#answerD").text("Tom Sizemore")

    setTimeout(question8, 30000)

    $("#answerA").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question8();
        clearTimeout();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question8();
        clearTimeout();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question8();
        clearTimeout();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question8();
        clearTimeout();
    })

};

function question8(){

    clickOff();
    $("#question").text("Which of the following directed features including 'The Incredibles' (2004) and 'Ratatouille' (2007)?")
    $("#answerA").text("Genndy Tartakovsky")
    $("#answerB").text("Don Bluth")
    $("#answerC").text("Michael Eisner")
    $("#answerD").text("Brad Bird")

    setTimeout(question9, 30000)


    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question9();
        clearTimeout();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question9();
        clearTimeout();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question9();
        clearTimeout();
    })
    $("#answerD").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question9();
        clearTimeout();
    })

};

function question9(){

    clickOff();
    $("#question").text("Which of the following was the first female director to gross over $100 million at the box office?")
    $("#answerA").text("Penny Marshall")
    $("#answerB").text("Nancy Meyers")
    $("#answerC").text("Jodie Foster")
    $("#answerD").text("Lulu Wang")

    setTimeout(question10, 30000)

    $("#answerA").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question10();
        clearTimeout();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question10();
        clearTimeout();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question10();
        clearTimeout();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question10();
        clearTimeout();
    })

};

function question10(){

    clickOff();
    $("#question").text("Who directed the recent, critically acclaimed film 'The Irishman' (2019)?")
    $("#answerA").text("Kevin Feige")
    $("#answerB").text("Christopher Nolan")
    $("#answerC").text("Martin Scorsese")
    $("#answerD").text("M. Night Shyamalan")

    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
    })
    $("#answerC").on("click", function(){
        alert("Correct!")
        correctAnswers++;
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
 })

};





//Initiates game with question 1, hides itself
$("#Start").on("click", function(){

    $("#Start").hide();
    question1()


})


//Question 1 click events


// //Question 2 click events
// $("#2answerA").on("click", function(){
//     alert("Correct!")
//     correctAnswers++;
// })
// $("#2answerB").on("click", function(){
//     alert("Incorrect!")
//     incorrectAnswers++;
// })
// $("#2answerC").on("click", function(){
//     alert("Incorrect!")
//     incorrectAnswers++;
// })
// $("#2answerD").on("click", function(){
//     alert("Incorrect!")
//     incorrectAnswers++;
// })