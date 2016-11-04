var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var colors = ["RED", "GREEN", "BLUE", "YELLOW","ORANGE","PINK","PURPLE","BROWN","VIOLET","MAROON"];
var currentColor = 0;
var index = [];
var timer = 1000;
var colorVault = [];
var iterations = 9;


//Global varible for randomChoices

var choice = ["",""];
var vault = [];
var answera = document.getElementById("answera");
var answerb = document.getElementById("answerb");
var answerc = document.getElementById("answerc");
var answerd = document.getElementById("answerd");


function switchColor() {    
            
            var randomColorIndex =  Math.round(Math.random() * iterations);
        
            index.push(randomColorIndex);
            randomColorIndex = checkerFunction(randomColorIndex);
            var randomColor = colors[randomColorIndex];
    
            $('#theDiv').css('background-color', randomColor);
    
            colorVault.push(randomColor);
            
    }

switchColor(); //Running Switch Color 
randomChoices();

function checkerFunction(random){
            
            var value = 0;
            if(index.length == 2) { 
                
                if (index[0] == index[1])
                     {
                        value = Math.round(Math.random() * iterations);
                        index = [random];
                        index.push(value);
                        value = checkerFunction(value);
                        index = []; //clearing
                     }
                else {
                        value = random; //if it is not similar, return the correct value
                        index = [];
                     }
             }
            else { value = random }
            return value;
        }
 


//---------------------------------Random Answer Choice--------------------------------------//

    
    
function randomChoices(){
    
            answera.innerHTML = "";
            answerb.innerHTML = "";
            answerc.innerHTML = "";
            answerd.innerHTML = "";
    
            var random1 = Math.round(Math.random()*iterations);
            var random2 = Math.ceil(Math.random()*iterations);
            var random3 = Math.ceil(Math.random()*iterations);
            var random4 = Math.ceil(Math.random()*iterations);
    
            if (random1 == random2 | random1 == random3 | random1 == random4 | random2 == random4 | random2 == random3 | random3 == random4)
                {
                
                    randomChoices();
                }
            else
                {
                
                    if( colorVault[colorVault.length - 1] == colors[random1] | colorVault[colorVault.length - 1] == colors[random2] | colorVault[colorVault.length - 1] == colors[random4] | colorVault[colorVault.length - 1] == colors[random3])
                         {
                
                            answera.innerHTML = colors[random1];
                            answerb.innerHTML = colors[random2];
                            answerc.innerHTML = colors[random3];
                            answerd.innerHTML = colors[random4];    
            
                         } 
                    else {
                
                            randomChoices();
                
                         }
                }   
}



// -------------------------------------------------------------------------------------------------------------------------//
// -------------------------------------------------- Timer CountDown ------------------------------------------------------//

var timeElement = document.getElementById('time');
timeElement.innerHTML = '10';
setTimeout(setInterval(timerCountdown,1000),1000);
 
function timerCountdown(){
    
    var currentValue = parseInt(timeElement.innerHTML);
    if (currentValue == 0){
        
        var total = currentValue + 0;
        
    }
    else if (currentValue <= -1){
        
        var total = currentValue + 1;
    }
    
    else{
        
        var total = currentValue - 1;
    }
    
      if (parseInt(timeElement.innerHTML) <= 0){
        if(confirm('GAME OVER')){
            saveHighscore();
            window.location.reload();  
        }
    }
    
    else{
         timeElement.innerHTML = total;
    }
}



//-------------------------------------------------- CORRECT OR NOT! -----------------------------------------------------//

var score = 0;
var answer = document.getElementById('score');
answer.innerHTML = score;

var storage = [];

function scoreCalculator(i){
    
    
    storage.push(colorVault[colorVault.length - 1]);
    
    if ( i == "a")
        {
            storage.push(answera.innerHTML);
        }
    else if (i == "b"){
            storage.push(answerb.innerHTML);
        }
    else if ( i == "c")
        {
            storage.push(answerc.innerHTML);
        }
    else if (i == "d"){
            storage.push(answerd.innerHTML);
        }
    
    if (storage[0] !== storage[1])
    {
        wrongAnswer();
    }
        else if (storage[0] == storage[1] )
    {
        correctAnswer();
    }
    storage = [];
    switchColor();
    randomChoices();
    
     if (parseInt(timeElement.innerHTML) <= 0){
        if(confirm('GAME OVER')){
            saveHighscore();
            window.location.reload();
            
            
        }
    }
}


function correctAnswer(){
    
    var currentValue = parseInt(timeElement.innerHTML);
    var total = currentValue + 1;

    timeElement.innerHTML = total;
    
    score += 1;
    answer.innerHTML = score;
    
}

function wrongAnswer(){
        
    
    var currentValue = parseInt(timeElement.innerHTML);
    var total = currentValue - 2;
    
    
    timeElement.innerHTML = total;
    
}

    
/* Storing the HighScore */

var highscore = document.getElementById("highscore");
highscore.innerHTML = "0";
var STORAGE_KEY = "score";

function saveHighscore(){
    
    // Code to save person object to Local Storage
    highscore.innerHTML = JSON.stringify(scoreJSON);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(score));

}
// Code to restore polygon from Local Storage

    var scoreJSON = localStorage.getItem(STORAGE_KEY);
    if (scoreJSON)
    {
        var scoreStorage = JSON.parse(scoreJSON);

        highscore.innerHTML = scoreStorage;
    }
    else
    {
        console.log("Error: No Local Storage item for \"" + STORAGE_KEY + "\" key. "); 
        console.log("Uncomment and run the code to save person to Local Storage.");
    }

