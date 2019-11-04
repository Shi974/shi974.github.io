var round1 = 0;
var current1 = document.getElementById("round1");
current1.innerHTML = round1;

var round2 = 0;
var current2 = document.getElementById("round2");
current2.innerHTML = round2;

var global1 = 0;
var totalScoreP1 = document.getElementById("scoreP1");
totalScoreP1.innerHTML = global1;

var global2 = 0;
var totalScoreP2 = document.getElementById("scoreP2");
totalScoreP2.innerHTML = global2;

var turnP1 = true;
var turnP2 = false;
turn();

function turn() {
    if (turnP1 === true) {
        document.getElementById('p1').style.fontWeight = 'bold';
        document.getElementById('p1Span').innerHTML = "PLAYER 1 <i class='icon ion-record'>";
        document.getElementById('p1').style.backgroundColor = "#f7f7f7";
    } else {
        document.getElementById('p1').style.fontWeight = 'normal';
        document.getElementById('p1Span').innerHTML = "PLAYER 1";
        document.getElementById('p1').style.backgroundColor = "#FFF";
    }
    if (turnP2 === true) {
        document.getElementById('p2').style.fontWeight = 'bold';
        document.getElementById('p2Span').innerHTML = "PLAYER 2 <i class='icon ion-record'>";
        document.getElementById('p2').style.backgroundColor = "#f7f7f7";
    } else {
        document.getElementById('p2').style.fontWeight = 'normal';
        document.getElementById('p2Span').innerHTML = "PLAYER 2";
        document.getElementById('p2').style.backgroundColor = "#FFF";
    }
}

function newGame() {
    global1 = 0;
    totalScoreP1.innerHTML = global1;
    round1 = 0;
    current1.innerHTML = round1;
    global2 = 0;
    totalScoreP2.innerHTML = global2;
    round2 = 0;
    current2.innerHTML = round2;
    turnP1 = true;
    turnP2 = false;
    turn();
    document.getElementById("imgDice").src = "";
}

function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("imgDice").src = "images/dice-" + dice + ".png";
    if (turnP1 === true) {
        if (dice != 1) {
            round1 += dice;
            current1.innerHTML = round1;
        } else {
            round1 = 0;
            current1.innerHTML = round1;
            turnP1 = false;
            turnP2 = true;
        };
    } else {
        if (dice != 1) {
            round2 += dice;
            current2.innerHTML = round2;
        } else {
            round2 = 0;
            current2.innerHTML = round2;
            turnP2 = false;
            turnP1 = true;
        };
    }
    turn();
}

function hold() {
    if (turnP1 === true) {
        global1 += round1;
        totalScoreP1.innerHTML = global1;
        round1 = 0;
        current1.innerHTML = round1;
        if (global1 >= 100) {
            alert("Le Joueur 1 gagne !");
            newGame();
        } else {
            document.getElementById('imgDice').src = "";
            turnP1 = false;
            turnP2 = true;
        }
    } else {
        global2 += round2;
        totalScoreP2.innerHTML = global2;
        round2 = 0;
        current2.innerHTML = round2;
        if (global2 >= 100) {
            alert("Le Joueur 2 gagne !");
            newGame();
        } else {
            document.getElementById("imgDice").src = "";
            turnP2 = false;
            turnP1 = true;
        }
    }
    turn();
}