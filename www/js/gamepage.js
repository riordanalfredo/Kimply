var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var colors = ["red", "green", "blue", "yellow"];
var currentColor = 0;
var index = [];
var timer = 1500;

    function switchColor() {    
       
        var randomColorIndex =  Math.floor(Math.random() * 4);
        
         index.push(randomColorIndex);
         randomColorIndex = checkerFunction(randomColorIndex);
         
        $('#theDiv').css('background-color', colors[randomColorIndex]);
        var now = new Date();
       
        
        setTimeout(switchColor, timer);
    }

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

    setTimeout(switchColor,0);  

        var intervalId = setInterval(updateTime, 0);;
        var progressbar = document.getElementById("progressbar");
        
        function updateTime()
        {
            var now = new Date();
            progressbar.value = now.getMilliseconds()*2;
            //progressbar.setAttribute("value", now.getMilliseconds());
        }

//------------------------------------------------------------------------//

var score = 0;
var answer = document.getElementById('score');
answer.innerHTML = score;

function scoreCalculator(){
    score += 1;
    answer.innerHTML = score;
}

//---------------------------------Random Answer Choice--------------------------------------//
var choice = ["",""];
var colors = ["RED", "GREEN", "BLUE", "YELLOW", "GREEN"];

setTimeout(randomChoices,0);
setInterval(randomChoices,timer);

var answera = document.getElementById("answera");
var answerb = document.getElementById("answerb");
    
    
function randomChoices(){
    
            var timing = Math.floor(Math.random()*4);
            var timing1 = Math.floor(Math.random()*4);
            var random1 = timing1 * Math.floor(timing / 3);
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



 