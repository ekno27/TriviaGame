$("document").ready(function(){

    var questionCount = 0; //will keep track of the current question
    var showQuestion; //setQuestion when needed
    var correctCount = 0; //count of right
    var incorrectCount = 0; //count of wrong 
    var optionSelected; //var that will save the id of answer clicked
    var timer; //time for each question in seconds 
    var clockrunning = false;
    

    var questions = [

        question1 = {
            question: "what is the capital of California?",
            answer: "Sacramento",
            options: ["Los Angeles", "Westwood", "Sacramento", "Johanesburg"]
        },
        question2 = {
            question: "hello?",
            answer: "yes",
            options: ["maybe so", "perhaps", "goodbye", "yes"]
        },
        queston3 = {
            question: "can you count?",
            answer: "not really",
            options: ["maybe so", "not really", "This question is offensive", "perhaps"]
        },
        question4 = {
            question: "If a tree falls in the middle of the forest and no one is there to hear it, who invented the stapler?",
            answer: "Who cares",
            options: ["Johanson Scarlet", "Who cares", "Sean Paul", "Clark from UCLAx"]
        },
        question5 = {
            question: "how often are js-timers used in the real world?",
            answer: "More often than I'd ever wish",
            options:["I hated this assignment", "please tell me not often", "More often than I'd ever wish", "Can we go over this assignment at some point"]

        }
        
    ];//end of array

    //logging answers
    function checkChoice(){
        
        optionSelected = $(this).text();
        var result;
        console.log(optionSelected);
        if(optionSelected ==="Start Over"){
          
            startGame();
        }
        else{
            var correctAnswer = questions[questionCount-1].answer;
             if(optionSelected ===correctAnswer){
                 result = true;
                incorrectCount--;
                correctCount++;
                clearInterval(showQuestion);
                alert("correct!");
                // answerScreen(result, correctAnswer);
                
            }
            else{
                result = false;
                console.log("false");
                
                clearInterval(showQuestion);
                alert("incorrect. the correct answer is "+ correctAnswer);
                // answerScreen(result, correctAnswer);
            }
            displayQuestion();
            
        }
    
    }//end of chekchoice
    
    //Automated functions//

    //starts the game
    function startGame(){
        questionCount = 0;
        correctCount = 0;
        incorrectCount = 0;
        displayQuestion();
        // timerDisplay(3);
    }

    //correct/wrong Screen
    function answerScreen(result, correctAnswer){
        
        clearInterval(answerID);

        var answerID = setInterval(answerScreen,10000);
        clockrunning = false;
        if(result ===true){
          
            console.log("accessed true");
            $("#information").html("<h2> Correct!</h2>");
            displayQuestion();
        }
        else{
            console.log("accessed false");
            $("#information").html("<h2> Incorrect: The correct answer is" + correctAnswer + "</h2>");
            displayQuestion();
            }
        
    }

    //transitioning function
    function displayQuestion(){
        if(questionCount===questions.length){
            questionCount = 0; 
            endGame();
            clockrunning= false;
        }
        else{
            if(clockrunning===false){
                clockrunning= true;
                    timer = 10;
                    //resets timer per question
                    clearInterval(showQuestion);
                    //logging time left
                    showQuestion = setInterval(displayQuestion, (timer* 1000));
                    
                    //showing question
                    
                    $("#information").hide().html("<h2 id='currentQuestion panel'>"+ questions[questionCount].question + "</h2> <br>").fadeIn(1000);
                    
                    //showing options
                    printOptions(questions[questionCount].options);
                    incorrectCount++;
                    questionCount++; //ready to show the next question
                }
                clockrunning = false;
            }

    }//end of display function

    //ends game
    function endGame(){
        clearInterval(showQuestion);
        var a = $("<div>")
        a.append("<br><br><h2> End </h2>");
        a.append("<p> number correct: "+ correctCount+ "</p>");
        a.append("<p> number Incorrect: "+ incorrectCount+ "</p>");
        a.append("<button class='options btn btn-outline-dark'>Start Over</button>");

        $("#information").html(a);
        
        
    }

    //function to print array of options
    function printOptions(arr){
        
        for (var i = 0; i<arr.length;i++){
            //  console.log(arr[i]);
             $("#information").append("<p class='options zoom' id='question"+(i+1)+"'>" + arr[i] + "</p>");
         } 
       
    }
    //event listener for each question
    $("#information").on("click",".options",checkChoice);

     //clicking button starts game
     $("#questions").click(startGame);

});//end of main