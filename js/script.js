var text = (document.getElementsByTagName("p"));
text = text[0];
var userLives = 0;
var botLives = 0;
function game(choice) {
    var result = '';
    var computerChoice = Math.random();
    var userChoice = choice.id;
    var computerChoiceName;
    computerChoice = Math.floor((computerChoice * 5) + 1);
    if (computerChoice == 1) {
        computerChoiceName = "Piedra";
    }
    else if (computerChoice == 2) {
        computerChoiceName = "Papel";
    }
    else if (computerChoice == 3) {
        computerChoiceName = "Tijera";
    }
    else if (computerChoice == 4) {
        computerChoiceName = "Lagarto";
    }
    else {
        computerChoiceName = "Spock";
    }
    var userWins = 'Bot: ' + computerChoiceName + '<span> TÚ GANAS !!</span>';
    var botWins = 'Bot: ' + computerChoiceName + '<span> TÚ PIERDES !!</span>';
    var draw = 'Bot: ' + computerChoiceName + '<span> DRAW</span>';
    if (computerChoiceName == "Piedra") {
        if (userChoice == "Papel" || userChoice == "Spock") {
            result = userWins;
        }
        else if (userChoice == "Piedra") {
            result = draw;
        }
        else {
            result = botWins;
        }
    }
    else if (computerChoiceName == "Papel") {
        if (userChoice == "Tijera" || userChoice == "Lagarto") {
            result = userWins;
        }
        else if (userChoice == "Papel") {
            result = draw;
        }
        else {
            result = botWins;
        }
    }
    else if (computerChoiceName == "Tijera") {
        if (userChoice == "Spock" || userChoice == "Piedra") {
            result = userWins;
        }
        else if (userChoice == "Tijera") {
            result = draw;
        }
        else {
            result = botWins;
        }
    }
    else if (computerChoiceName == "Lagarto") {
        if (userChoice == "Piedra" || userChoice == "Tijera") {
            result = userWins;
        }
        else if (userChoice == "Lagarto") {
            result = draw;
        }
        else {
            result = botWins;
        }
    }
    else if (computerChoiceName == "Spock") {
        if (userChoice == "Lagarto" || userChoice == "Papel") {
            result = userWins;
        }
        else if (userChoice == "Spock") {
            result = draw;
        }
        else {
            result = botWins;
        }
    }
    if (result == userWins) {
        text.style.color = "green";
        choice.style.background = "green";
        text.innerHTML = result;
        setTimeout(function () { choice.style.background = ""; }, 1000);
    }
    else if (result == botWins) {
        text.style.color = "red";
        choice.style.background = "red";
        text.innerHTML = result;
        setTimeout(function () { choice.style.background = ""; }, 1000);
    }
    else if (result == draw) {
        text.style.color = "white";
        choice.style.background = "white";
        text.innerHTML = result;
        setTimeout(function () { choice.style.background = ""; }, 1000);
    }
    score(result, userWins, botWins);
}
;
function score(result, userWins, botWins) {
    var life = document.getElementsByClassName("icon-heart");
    if (result == userWins) {
        life[(botLives++) + 3].style.color = "black";
    }
    else if (result == botWins) {
        life[(userLives++)].style.color = "black";
    }
    if (botLives == 3 || userLives == 3) {
        if (userLives == 3) {
            text.innerHTML += "<span>No eres un rival digno</span>";
        }
        else {
            text.innerHTML += "<span>Maldita la suerte del principiante</span>";
        }
        for (var i = life.length - 1; i >= 0; i--) {
            life[i].style.color = "rgb(255,0,0)";
            botLives = 0;
            userLives = 0;
        }
    }
}
;
