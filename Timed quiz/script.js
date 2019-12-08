let container = $(".container");
let header = $("h1");
let topText = $("#topText");
let bottomText = $("#bottom-text");
let parentNode = $(".jumbotron");
let runningScoreSelector = $("#runningScore")
let runningScore = 0;
runningScoreSelector.text(runningScore);
let TimeLeft = 80;

startScreenLoad();

function startScreenLoad(){
    //create, add text to, and append title element    
    header.text("Welcome to my Coding Quiz!");
    topText.text("You will have 80 seconds to answer all ten questions once the quiz has begin");
    bottomText.text("Your score will show in the blue counter and your time left will show in the red counter. Be careful, if you get a question wrong then you'll loose time!");
    createNextButton();
    let startButton = $("#button");
    startButton.attr("onclick", "firstQuestion();");
    startButton.text("Start Quiz");
    startButton.attr("onclick", "timeBegin();  firstQuestion();")
}

function createNextButton(){
    let nextButton = $("<a>");
    nextButton.attr("class", "btn btn-primary btn-lg").attr("href", "#").attr("id", "button").attr("role", "button");
    parentNode.append(nextButton);
}

//first and last questions are unique
function firstQuestion(){
    $("#button").remove();
    header.text("Question 1");
    topText.text("What are the 2 values that a boolean can return?");
    bottomText.text("Please choose one:");
    createChoices_1();     
}
function secondQuestion(){ 
    removePreviousChoices();
    header.text("Question 2");
    topText.text("What are the 3 types of declarations that can be made in Javascript?");
    bottomText.text("Please choose one:");
    createChoices_2();  
}
function thirdQuestion(){ 
    removePreviousChoices();
    header.text("Question 3");
    topText.text("Is JavaScript the same as Java?");
    bottomText.text("Please choose one:");
    createChoices_3();  
}
function fourthQuestion(){ 
    removePreviousChoices();
    header.text("Question 4");
    topText.text("Is jQuery a language or a libray?");
    bottomText.text("Please choose one:");
    createChoices_4();  
}
function fifthQuestion(){ 
    removePreviousChoices();
    header.text("Question 5");
    topText.text("What's another name for an if/then statement?");
    bottomText.text("Please choose one:");
    createChoices_5();  
}
function sixthQuestion(){ 
    removePreviousChoices();
    header.text("Question 6");
    topText.text("What does HTML stand for?");
    bottomText.text("Please choose one:");
    createChoices_6();  
}
function seventhQuestion(){ 
    removePreviousChoices();
    header.text("Question 7");
    topText.text("What is debugging?");
    bottomText.text("Please choose one:");
    createChoices_7();  
}
function eigthQuestion(){ 
    removePreviousChoices();
    header.text("Question 8");
    topText.text("What does CSS stand for?");
    bottomText.text("Please choose one:");
    createChoices_8();  
}
function ninthQuestion(){ 
    removePreviousChoices();
    header.text("Question 9");
    topText.text("What is a for loop?");
    bottomText.text("Please choose one:");
    createChoices_9();  
}
function tenthQuestion(){ 
    removePreviousChoices();
    header.text("Question 10");
    topText.text("How many questions are there in this quiz?");
    bottomText.text("Please choose one:");
    createChoices_10();  
}
function finalScores(){
    removePreviousChoices();
    header.text("Congratulations!");
    topText.text("You got " + runningScore + " correct!");
    bottomText.text("Enter your name and save your score");
    //ran out of time on doing this, will come back later and fix
    // let newScore = prompt("Enter your Name!");
    // let previousHighScorevar = localStorage.getItem("previousHighScore", previousHighScore)
    // localStorage.setItem("Score_1",newScore);
    // let previousHighScoreButton = $("<button>").attr("class", "btn btn-primary btn-lg").attr("href", "#").attr("id", "scoreCard").attr("role", "button").textContent(previousHighScorevar);
    // parentNode.append(previousHighScoreButton);
    let restartButton = $("<button>").attr("class", "btn btn-primary btn-lg").attr("href", "#").attr("id", "scoreCard").attr("role", "button").textContent("Restart?").on("click", location.reload());
    parentNode.append(restartButton);

}
//still trying to get these working, text functions run before transitions can complete
// //transitions between questions
// function outboundTranstion(){
//     container.slideUp(800).delay(100);
// }

// function inboundTransition(){
//     container.delay(400).slideDown(800);
// }

//remove previous button and result display elements
function removePreviousChoices(){
    $("br").remove();
    $("#0").remove();
    $("#1").remove();
    $("#2").remove();
    $("#3").remove();
    $("#displayResult").remove();
}

function timeBegin(){
    Timebegin = setInterval(function(){
    let TimeLeftSelector = $("#TimeLeftCounter");
    TimeLeft -= 1;
    TimeLeftSelector.text(TimeLeft);
    }, 1000);
}

if(TimeLeft === -1){
    clearInterval(Timebegin);
    finalScores();
}

// Answer_1 options  
//threw conditionals to the wind cause I was having issues detecting the target button correctly.
//will come back and fix later with conditional statements
function correctAnswer_1(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_1");
    secondQuestion();
}   

function incorrectAnswer_1(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_1");
    secondQuestion();
}

function createChoices_1(){
    let question_1Array = ["Turtles or Ferrets", "Troy or France", "True or False", "Tron or Fabio"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_1Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_1Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_1();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#2").removeAttr("onclick", "incorrectAnswer_1();");//select array number for correct answer
    $("#2").attr("onclick", "correctAnswer_1();");
}

//Answers_2
function correctAnswer_2(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_2");
    thirdQuestion();
}   

function incorrectAnswer_2(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_1");
    thirdQuestion();
}

function createChoices_2(){
    let question_2Array = ["Constantinople, Venice or Libria", "Condiments, Vodka, Lettuce", "Constants, Variables or Lets"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_2Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_2Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_2();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#2").removeAttr("onclick", "incorrectAnswer_2();");//select array number for correct answer
    $("#2").attr("onclick", "correctAnswer_2();");
}

//Answers_3
function correctAnswer_3(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_3");
    fourthQuestion();
}   

function incorrectAnswer_3(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_3");
    fourthQuestion();
}

function createChoices_3(){
    let question_3Array = ["Yes", "No"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_3Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_3Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_3();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#1").removeAttr("onclick", "incorrectAnswer_3();");//select array number for correct answer
    $("#1").attr("onclick", "correctAnswer_3();");
}

//Answers_4
function correctAnswer_4(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_4");
    fifthQuestion();
}   


function incorrectAnswer_4(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_4");
    fifthQuestion();
}

function createChoices_4(){
    let question_4Array = ["jQuery is a Library", "jQuery is a Language", "jQuery is a blessing from God himself", "None above"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_4Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_4Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_4();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#0").removeAttr("onclick", "incorrectAnswer_4();");//select array number for correct answer
    $("#0").attr("onclick", "correctAnswer_4();");
}

//Answer_5
function correctAnswer_5(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_5");
    sixthQuestion();
}   

function incorrectAnswer_5(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_5");
    sixthQuestion();
}

function createChoices_5(){
    let question_5Array = ["A Hypothesis", "An Inference", "A Condidtional"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_5Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_5Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_5();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#2").removeAttr("onclick", "incorrectAnswer_5();");//select array number for correct answer
    $("#2").attr("onclick", "correctAnswer_5();");
}

//Answer_6
function correctAnswer_6(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_6");
    seventhQuestion();
}   

function incorrectAnswer_6(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_6");
    seventhQuestion();
}

function createChoices_6(){
    let question_6Array = ["Hippos, Turtles, Mammoths, and Llamas", "HyperText Markup Language", "Hamburgers, Tomato, Mayo and Lettuce"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_6Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_6Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_6();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#1").removeAttr("onclick", "incorrectAnswer_6();");//select array number for correct answer
    $("#1").attr("onclick", "correctAnswer_6();");
}

//Answer_7
function correctAnswer_7(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_7");
    eigthQuestion();
}   

function incorrectAnswer_7(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_7");
    eigthQuestion();
}

function createChoices_7(){
    let question_7Array = ["Picking Ticks out of your hair", "A medival torture method used by the spainish inquision on programmers", "The process of correcting mistakes in code"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_7Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_7Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_7();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#2").removeAttr("onclick", "incorrectAnswer_7();");//select array number for correct answer
    $("#2").attr("onclick", "correctAnswer_7();");
}
//Answer_8
function correctAnswer_8(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_8");
    ninthQuestion();
}   

function incorrectAnswer_8(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_8");
    ninthQuestion();
}

function createChoices_8(){
    let question_8Array = ["Cats Shooting Shotguns", "Cascading Style Sheet", "Conditional Super Style"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_8Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_8Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_8();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#1").removeAttr("onclick", "incorrectAnswer_8();");//select array number for correct answer
    $("#1").attr("onclick", "correctAnswer_8();");
}
//Answer_9
function correctAnswer_9(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_9");
    tenthQuestion();
}   

function incorrectAnswer_9(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_9");
    tenthQuestion();
}

function createChoices_9(){
    let question_9Array = ["A continuously occuring set of events defined by an arguement", "A knot for wrangling cows", "A function to declare variables"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_9Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_9Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_9();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#0").removeAttr("onclick", "incorrectAnswer_9();");//select array number for correct answer
    $("#0").attr("onclick", "correctAnswer_9();");
}
//Answer_10
function correctAnswer_10(){
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Correct!");
    parentNode.append(displayResult);
    let runningScoreSelector = $("#runningScore")
    runningScore += 1;
    runningScoreSelector.text(runningScore);
    console.log("correct_10");
    finalScores();
}   

function incorrectAnswer_10(){    
    let displayResult = $("<p>");
    displayResult.attr("id", "displayResult");
    displayResult.text("Incorrect!");
    parentNode.append(displayResult);
    TimeLeft -=10;
    console.log("incorrect_10");
    finalScores();
}

function createChoices_10(){
    let question_10Array = ["10", "9000+", "too many"];
    let parentNode = $(".jumbotron");
    for (let i = 0; i<question_10Array.length; i++){
        let AnswerButton = $("<button>");
        AnswerButton.text(question_10Array[i]);
        AnswerButton.attr("class", "btn btn-info").attr("id", [i]).attr("onclick", "incorrectAnswer_10();");
        parentNode.append(AnswerButton);
        let Break = $("<br />" + "<br />");
        parentNode.append(Break);
    }
    $("#2").removeAttr("onclick", "incorrectAnswer_10();");//select array number for correct answer
    $("#2").attr("onclick", "correctAnswer_10();");
}