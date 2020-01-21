//Variables to hold correct and incorrect answers for display at end
let correctAnswers = 0;
let incorrectAnswers = 0;
//Countdown timer, and time to be shown to user
let timerInterval;
let time = 0;
//Tracks which question the user is on, used to pull from arrays on answer reveal page
let questionCounter = 0;
//Flag which checks whether or not answer was correct
let isCorrect = false;
//Will be used in setTimeout for moving to answer reveal page
let timesup;
//Array to reveal correct answer if user is incorrect.
let answerRevealArray = ["Incorrect! The right answer was: Johnathan Demme", "Incorrect! 'Gone with the Wind' holds the record!", "Sorry, the answer was 'Batman!' A monumental film which laid the foundations for the modern superhero blockbuster.", "Michael Clarke Duncan was the star of 'The Green Mile!'", "The answer was 'Spirited Away' by the legendary director Hayoa Miyazaki.", "'Batman Returns' was directed by Tim Burton. You might have been thinking of 'The Dark Knight,' or 'The Dark Knight Rises!'", "Al Pacino plays Vincent Hanna in Michael Mann's hit 'Heat!'", "Animated director Brad Bird is known for his work on 'The Incredibles,' 'Ratatouille,' and many other beloved classics.", "Incorrect! The answer was Penny Marshal.", "Martin Scorsese directed 'The Irishman' after making a deal with Netflix!"]

//Contextually relevant images to go with the answer page
let answerImage = ["./assets/images/jonathan-demme-resized.jpg", "./assets/images/gone-with-the-wind-resized.jpg", "./assets/images/batman-resized.jpg", "./assets/images/michael-clarke-duncan-resized.jpg", "./assets/images/spirited-away-resized.jpg", "./assets/images/batman-returns-resized.jpg", "./assets/images/vincent-hanna-resized.jpg", "./assets/images/brad-bird-resized.jpg", "./assets/images/penny-marshal-resized.jpg", "./assets/images/martin-scorsese-resized.jpg"]

//Function to reveal answer
function answerReveal(){
    clearTimeout(timesup);
    clearInterval(timerInterval);
    time = 5
    $("#countdown").text("Time Remaining: " + time + " seconds")
    timerInterval = setInterval(countdown, 1000)
    //Sets answer reveal page to automatically go to next question in ten seconds
    if (questionCounter == 0){
        setTimeout(question2, 5000);
    } else if (questionCounter == 1){
        setTimeout(question3, 5000);
    } else if (questionCounter == 2){
        setTimeout(question4, 5000);
    } else if (questionCounter == 3){
        setTimeout(question5, 5000);
    } else if (questionCounter == 4){
        setTimeout(question6, 5000);
    } else if (questionCounter == 5){
        setTimeout(question7, 5000);
    } else if (questionCounter == 6){
        setTimeout(question8, 5000);
    } else if (questionCounter == 7){
        setTimeout(question9, 5000);
    } else if (questionCounter == 8){
        setTimeout(question10, 5000);
    } else if (questionCounter == 9){
        setTimeout(showResults, 5000);
    }
    clickOff();
    $("#answerA").text("");
    $("#answerB").text("");
    $("#answerC").text("");
    $("#answerD").text("");
    $("#questionImage").show();


    if(!isCorrect){
        $("#question").text(answerRevealArray[questionCounter])
    } else {
        $("#question").text("Correct!")
    };

    questionCounter++;
    isCorrect = false;

};

function rotateImage(){
    $("#questionImage").attr("src", answerImage[questionCounter]);
    $("#questionImage").hide();
}

function timeoutAnswerReveal(){
    incorrectAnswers++;
    answerReveal();
};

function addCorrect(){
    correctAnswers++
    isCorrect = true;
};

function showResults(){
    $("#questionImage").hide();
    clearTimeout(timesup);
    timerReset();
    $("#countdown").text("");
    $("#question").text("Finished!");
    $("#answerA").text("Correct: " + correctAnswers);
    $("#answerB").text("Incorrect: " + incorrectAnswers);
    $("#answerC").text("Your final score is: " + ((correctAnswers * 10) + "%"))
    $("#answerD").text("");
    Reset = $("<button class = 'btn btn-lg'>");
    $(".jumbotron").append(Reset);
    $(Reset).text("Play again?");
    $(Reset).on("click", function(){
        correctAnswers = 0;
        incorrectAnswers = 0;
        questionCounter = 0;
        isCorrect = false;
        $("#Start").show();
        $(Reset).remove();
        $("#question").text("");
        $("#answerA").text("");
        $("#answerB").text("");
        $("#answerC").text("");
        $("#countdown").text("");
    })
};

function timerReset(){
    clearInterval(timerInterval);
    time = 30
    $("#countdown").text("Time Remaining: " + time + " seconds")
};

function countdown(){
    time--;
    $("#countdown").text("Time Remaining: " + time + " seconds")
};

//Function to remove click events for previous answers from answer choices, so that new correct and incorrect answers can be assigned.
function clickOff(){
    $("#answerA").off("click");
    $("#answerB").off("click");
    $("#answerC").off("click");
    $("#answerD").off("click");
};

function question1(){
    $("#question").text("Which of the following directed the Silence of the Lambs?");
    $("#answerA").text("Anthony Hopkins");
    $("#answerB").text("Johnny Depp");
    $("#answerC").text("Jonathan Demme");
    $("#answerD").text("Goldie Hann");
    rotateImage();

    timerReset();

    timerInterval = setInterval(countdown, 1000);
   
    timesup = setTimeout(timeoutAnswerReveal, 30000);
   

    $("#answerA").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerB").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerC").on("click", function(){
        addCorrect();
        answerReveal();
    })
    $("#answerD").on("click", function(){
        incorrectAnswers++;
        answerReveal();
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
    $("#questionImage").attr("src", answerImage[questionCounter]);
    $("#questionImage").hide();
    rotateImage();
  
    timerReset();

    timerInterval = setInterval(countdown, 1000)

    timesup = setTimeout(timeoutAnswerReveal, 30000);

    $("#answerA").on("click", function(){
        addCorrect();
        answerReveal();
    })
    $("#answerB").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerC").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerD").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })

}

function question3(){
    clickOff();
    $("#question").text("What is Director Tim Burton's highest grossing film?");
    $("#answerA").text("The Nightmare Before Christmas (1993)");
    $("#answerB").text("Edward Scissorhands (1990)");
    $("#answerC").text("Alice in Wonderland (2010)");
    $("#answerD").text("Batman (1989)");
    rotateImage();

    timerReset();

    timerInterval = setInterval(countdown, 1000);

    timesup = setTimeout(timeoutAnswerReveal, 30000);

    $("#answerA").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerB").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerC").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerD").on("click", function(){
        addCorrect();
        answerReveal();
    })

};

function question4(){
    clickOff();
    $("#question").text("Which of the following starred in 'The Green Mile' (1999)?");
    $("#answerA").text("Michael Clarke Duncan");
    $("#answerB").text("Harrison Ford");
    $("#answerC").text("Laura Dern");
    $("#answerD").text("Susan Sarandon");
    rotateImage();

    timerReset();

    timerInterval = setInterval(countdown, 1000)

    timesup = setTimeout(timeoutAnswerReveal, 30000);
 
    $("#answerA").on("click", function(){
        addCorrect();
        answerReveal();
    })
    $("#answerB").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerC").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerD").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })

};

function question5(){
    clickOff();
    $("#question").text("Which was the first (and only) foreign animated film to win the Academy Award for Best Animated Feature?");
    $("#answerA").text("Wallace & Gromit: The Curse of the Were-Rabbit (2005)");
    $("#answerB").text("Spirited Away (2001)");
    $("#answerC").text("Grave of the Fireflies (1988)");
    $("#answerD").text("Fantastic Planet (1973)");
    rotateImage();

    timerReset();

    timerInterval = setInterval(countdown, 1000);

    timesup = setTimeout(timeoutAnswerReveal, 30000);

    $("#answerA").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerB").on("click", function(){
        addCorrect();
        answerReveal();
    })
    $("#answerC").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })
    $("#answerD").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })

}

function question6(){
    clickOff();
    $("#question").text("Which of the following did Christopher Nolan NOT direct?");
    $("#answerA").text("Inception (2010)");
    $("#answerB").text("Batman Returns (1992)");
    $("#answerC").text("Memento (2002)");
    $("#answerD").text("Doodlebug (1997)");
    rotateImage();

    timerReset();

    timerInterval = setInterval(countdown, 1000);

    timesup = setTimeout(timeoutAnswerReveal, 30000);

    $("#answerA").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });
    
    $("#answerB").on("click", function(){
        addCorrect();
        answerReveal();
    });

    $("#answerC").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });
    
    $("#answerD").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });

};

function question7(){
    clickOff();
    $("#question").text("Which character does Al Pacino portray in Heat (1995)?");
    $("#answerA").text("Vincent Hanna");
    $("#answerB").text("Neil McCauley");
    $("#answerC").text("Jon Voight");
    $("#answerD").text("Tom Sizemore");
    rotateImage();

    timerReset();

    timerInterval = setInterval(countdown, 1000);

    timesup = setTimeout(timeoutAnswerReveal, 30000);

    $("#answerA").on("click", function(){
        addCorrect();
        answerReveal();
    });

    $("#answerB").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });
    
    $("#answerC").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });
    
    $("#answerD").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });

};

function question8(){
    clickOff();
    $("#question").text("Which of the following directed features including 'The Incredibles' (2004) and 'Ratatouille' (2007)?");
    $("#answerA").text("Genndy Tartakovsky");
    $("#answerB").text("Don Bluth");
    $("#answerC").text("Michael Eisner");
    $("#answerD").text("Brad Bird");
    rotateImage();

    timerReset();

    timerInterval = setInterval(countdown, 1000);

    timesup = setTimeout(timeoutAnswerReveal, 30000);

    $("#answerA").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });

    $("#answerB").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });

    $("#answerC").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });

    $("#answerD").on("click", function(){
        addCorrect();
        answerReveal();
    })

};

function question9(){
    clickOff();
    $("#question").text("Which of the following was the first female director to gross over $100 million at the box office?");
    $("#answerA").text("Penny Marshall");
    $("#answerB").text("Nancy Meyers");
    $("#answerC").text("Jodie Foster");
    $("#answerD").text("Lulu Wang");
    rotateImage();

    timerReset();

    timerInterval = setInterval(countdown, 1000);

    timesup = setTimeout(timeoutAnswerReveal, 30000);

    $("#answerA").on("click", function(){
        addCorrect();
        answerReveal();
    });

    $("#answerB").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });

    $("#answerC").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });
    
    $("#answerD").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    });

};

function question10(){
    clickOff();
    $("#question").text("Who directed the recent, critically acclaimed film 'The Irishman' (2019)?");
    $("#answerA").text("Kevin Feige");
    $("#answerB").text("Christopher Nolan");
    $("#answerC").text("Martin Scorsese");
    $("#answerD").text("M. Night Shyamalan");
    rotateImage();

    timerReset();

    timerInterval = setInterval(countdown, 1000);

    timesup = setTimeout(timeoutAnswerReveal, 30000);
    
    $("#answerA").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })

    $("#answerB").on("click", function(){
        incorrectAnswers++;
        answerReveal();
    })

    $("#answerC").on("click", function(){
        correctAnswers++;
        answerReveal();
    })

    $("#answerD").on("click", function(){
        incorrectAnswers++;
        answerReveal();
 })

};


//Initiates game with question 1, hides itself
$("#Start").on("click", function(){

    $("#Start").hide();
    question1()


})

