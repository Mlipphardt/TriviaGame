
//Variables to hold correct and incorrect answers for display at end
let correctAnswers = 0;
let incorrectAnswers = 0;

//Function to remove click events for previous answers from answer choices, so that new correct and incorrect answers can be assigned.
function clickOff(){
    $("#answerA").off("click");
    $("#answerB").off("click");
    $("#answerC").off("click");
    $("#answerD").off("click");
}

//Deactivates question1 click events, updates text and click events for question 2.
function question2(){
    clickOff();
    $("#question").text("Which of the following holds the Box Office all-time earnings record when adjusted for inflation?")
    $("#answerA").text("Gone with the Wind")
    $("#answerB").text("The Dark Knight")
    $("#answerC").text("Titanic")
    $("#answerD").text("Avenger's Endgame")

    $("#answerA").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question3();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question3();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question3();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question3();
    })


}

function question3(){

    clickOff();
    $("#question").text("What is Director Tim Burton's highest grossing film?")
    $("#answerA").text("The Nightmare Before Christmas")
    $("#answerB").text("Edward Scissorhands")
    $("#answerC").text("Alice in Wonderland")
    $("#answerD").text("Batman")

    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question4();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question4();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question4();
    })
    $("#answerD").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question4();
    })

};

function question4(){

    clickOff();
    $("#question").text("Which of the following starred in the Green Mile (1999)?")
    $("#answerA").text("Michael Clarke Duncan")
    $("#answerB").text("Harrison Ford")
    $("#answerC").text("Laura Dern")
    $("#answerD").text("Susan Sarandon")

    $("#answerA").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question5();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question5();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question5();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question5();
    })

};

function question5(){

    clickOff();
    $("#question").text("Which was the first (and only) foreign animated film to win the Academy Award for Best Animated Feature?")
    $("#answerA").text("Wallace & Gromit: The Curse of the Were-Rabbit (2005)")
    $("#answerB").text("Spirited Away (2001) ")
    $("#answerC").text("Grave of the Fireflies (1988)")
    $("#answerD").text("Fantastic Planet (1973)")

    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question6();
    })
    $("#answerB").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question6();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question6();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question6();
    })

}

function question6(){

    clickOff();
    $("#question").text("Which of the following did Christopher Nolan NOT direct?")
    $("#answerA").text("Inception (2010)")
    $("#answerB").text("Batman Returns (1992)")
    $("#answerC").text("Memento (2002)")
    $("#answerD").text("Doodlebug (1997)")

    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question7();
    })
    $("#answerB").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question7();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question7();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question7();
    })

};

function question7(){

    clickOff();
    $("#question").text("Which character does Al Pacino portray in Heat (1995)?")
    $("#answerA").text("Vincent Hanna")
    $("#answerB").text("Neil McCauley")
    $("#answerC").text("Jon Voight")
    $("#answerD").text("Tom Sizemore")

    $("#answerA").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question8();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question8();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question8();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question8();
    })

};

function question8(){

    clickOff();
    $("#question").text("Which of the following directed features including 'The Incredibles' (2004) and 'Ratatouille' (2007)?")
    $("#answerA").text("Genndy Tartakovsky")
    $("#answerB").text("Don Bluth")
    $("#answerC").text("Michael Eisner")
    $("#answerD").text("Brad Bird")

    $("#answerA").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question9();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question9();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question9();
    })
    $("#answerD").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question9();
    })

};

function question9(){

    clickOff();
    $("#question").text("Which of the following was the first female director to gross over $100 million at the box office?")
    $("#answerA").text("Penny Marshall")
    $("#answerB").text("Nancy Meyers")
    $("#answerC").text("Jodie Foster")
    $("#answerD").text("Lulu Wang")

    $("#answerA").on("click", function(){
        alert("Correct!")
        correctAnswers++;
        question10();
    })
    $("#answerB").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question10();
    })
    $("#answerC").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question10();
    })
    $("#answerD").on("click", function(){
        alert("Incorrect!")
        incorrectAnswers++;
        question10();
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
    $("#question").text("Which of the following directed the Silence of the Lambs?")
    $("#answerA").text("Anthony Hopkins")
    $("#answerB").text("Johnny Depp")
    $("#answerC").text("Jonathan Demme")
    $("#answerD").text("Goldie Hann")

  

})


//Question 1 click events
$("#answerA").on("click", function(){
    alert("Incorrect!")
    incorrectAnswers++;
    question2();
})
$("#answerB").on("click", function(){
    alert("Incorrect!")
    incorrectAnswers++;
    question2();
})
$("#answerC").on("click", function(){
    alert("Correct!")
    correctAnswers++;
    question2();
})
$("#answerD").on("click", function(){
    alert("Incorrect!")
    incorrectAnswers++;
    question2();
})

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