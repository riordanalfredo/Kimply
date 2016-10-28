var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var colors = ["red", "green", "blue", "purple", "yellow", "orange","teal"];

    var currentColor = 0;
    function switchColor() {    
        if (currentColor >= colors.length) currentColor = 0;

        $('#theDiv').css('background-color', colors[currentColor++]);
        var now = new Date();
        setTimeout(switchColor, 1000);
    }

    setTimeout(switchColor,3000);  

        var intervalId = setInterval(updateTime, 1);;
        var progressbar = document.getElementById("progressbar");
        
        function updateTime()
        {
            var now = new Date();
            progressbar.value = now.getMilliseconds();
            //progressbar.setAttribute("value", now.getMilliseconds());
        }

