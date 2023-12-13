
var changeableTextElement = document.getElementById('changeableText');
var changeButtonElement = document.getElementById('changeButton');
var userInputElement = document.getElementById('userInput');
var userInputDisplayElement = document.getElementById('userInputDisplay');
var timerElement = document.getElementById('timer');
var headerElement = document.getElementById('header');

changeButtonElement.addEventListener('click', function() {
    changeableTextElement.textContent = "Text changed! Thanks for clicking!";
});

function displayUserInput() {
    var userInput = userInputElement.value;
    userInputDisplayElement.textContent = "You typed: " + userInput;
}

function changeBackgroundColor() {
    
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
   
    document.body.style.backgroundColor = randomColor;
}



var timerInterval = setInterval(updateTimer, 1000);
