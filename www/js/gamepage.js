var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var colors = ["RED", "GREEN", "BLUE", "YELLOW"];
var currentColor = 0;
var index = [];
var timer = 1000;
var colorVault = [];

function switchColor() {    
            
            var randomColorIndex =  Math.floor(Math.random() * 4);
        
            index.push(randomColorIndex);
            randomColorIndex = checkerFunction(randomColorIndex);
            var randomColor = colors[randomColorIndex];
    
            $('#theDiv').css('background-color', randomColor);
    
            colorVault.push(randomColor);
            
    }

setTimeout(switchColor,0); //Running Switch Color 

function checkerFunction(random){
            
            var value = 0;
            if(index.length == 2) { 
                if (index[0] == index[1])
                     {
                        value = Math.floor(Math.random() * 4);
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
var choice = ["",""];
var colors = ["RED", "GREEN", "BLUE", "YELLOW"];

setTimeout(randomChoices,0);
setInterval(randomChoices,timer);

var answera = document.getElementById("answera");
var answerb = document.getElementById("answerb");
    
    
function randomChoices(){
    
            var timing = Math.floor(Math.random()*4);
            var timing1 = Math.floor(Math.random()*4);
            var random1 = timing1 * Math.ceil(timing / 3);
            var random2 = timing * Math.floor(timing1 / 2);
    
            if (random1 == random2){
                
                var operatorRandom = Math.floor(Math.random() * 3 ) + 1;
                
                if ( random1 <= 3)
                    {
                        random2 = Math.abs(random2 - operatorRandom);
    
                    }
                else if ( random1 == 0 )
                    {
                        random2 = random2 + operatorRandom;
                    }
            }
                   
            answera.innerHTML = colors[random1];
            answerb.innerHTML = colors[random2];            
}

// -------------------------------------------------------------------------------------------------------------------------//
// -------------------------------------------------- Timer CountDown ------------------------------------------------------//

var timeElement = document.getElementById('time');
timeElement.innerHTML = '7';
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
    
      if (timeElement.innerHTML == "0"){
        alert("GAME OVER");
        timeElement.innerHTML = "GAME OVER :("  ;
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
    
    if (storage[0] !== storage[1])
    {
        wrongAnswer();
    }
        else if (storage[0] == storage[1] )
    {
        correctAnswer();
    }

    switchColor();
}


function correctAnswer(){
    
    var currentValue = parseInt(timeElement.innerHTML);
    var total = currentValue + 1;

    timeElement.innerHTML = total;
    
    score += 1;
    answer.innerHTML = score;
    
}

function wrongAnswer(){
    if (timeElement.innerHTML == "0"){
        alert("GAME OVER");
    }
    
    var currentValue = parseInt(timeElement.innerHTML);
    var total = currentValue - 1;
    
    
    timeElement.innerHTML = total;
    
}



    
