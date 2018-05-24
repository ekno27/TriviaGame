$("document").ready(function(){

    var questionCount = 0; //will keep track of the current question
    var showQuestion; //setQuestion when needed
    var correctCount = 0; //count of right
    var incorrectCount = 0; //count of wrong 
    var clickedID; //will save id of the question clicked
    
    //array with questions
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
            options: ["maybe so", "perhaps", "goodbye", "not really"]
        }
        
    ];//end of array

    //testing using key
    document.onkeyup=function(event){
        input = event.key;

        if(input === "s"){
            startGame();
        }
        else if(input =="c"){
            alternateStart();
        }
    };
 
    //clicking button starts game
    $("#questions").click(startGame);

    
    /**Timing events **/
    //starts the game
    function startGame(){
        count = 0;
        displayQuestion();
        showQuestion = setInterval(displayQuestion,20000);
        clockRunning = true; 
    }

    //logging answers and increasing score accordingly
    
    $("#information").on("click","#question1",function(event){
        clickedID = event.id;
        alert("clicked id:"+ clickedID);
                
    
    }).on("click","#question2",function(){
        alert("question two was clicked");

    }).on("click","#question3",function(){
        alert("question three was clicked");

    }).on("click","#question4",function(){
        alert("question one was clicked");

    });

    //transitioning function
    function displayQuestion(){
        
        if(questionCount===questions.length){
            count = 0; 
            endGame();
        }
        else{
            // console.log(questions[questionCount].question);
            $("#information").html("<h2 id='currentQuestion'>"+ questions[questionCount].question + "</h2> <br>");
            printOptions(questions[questionCount].options);
        }   
        questionCount++;
         
    }

    //ends game
    function endGame(){
        $("#information").html("end");
        // console.log("end");
        clearInterval(showQuestion);
        clockRunning = false;
    }

    //function to print array of options
    function printOptions(arr){
        
        for (var i = 0; i<arr.length;i++){
            //  console.log(arr[i]);
             $("#information").append("<p id='question"+(i+1)+"'>" + (i+1)+". "+ arr[i] + "</p>");
         } 
       
    }

});//end of main