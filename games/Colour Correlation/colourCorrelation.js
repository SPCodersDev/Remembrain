var timeBar = document.getElementById('timeBar');
var colors = document.getElementById('colors');
var scr = document.getElementById('scr');
var score = 0;
var i, j;
var tick = document.getElementById('right');
var cross = document.getElementById('wrong');
var sartBt = document.getElementById('startBt');

leaderboardUpdate();

function start() {
    timeBar.classList.add("timeBar");
    col();
    startBt.style.display = "none";
}

function out() {
    colors.innerText = `Game Over: Score - ${score}`;
    checkLeaderboard(score, "Colour Correlation", "higher");
    leaderboardUpdate();
    colors.style.color = "black";
    score = 0;
    timeBar.classList.remove("timeBar");
    sartBt.style.display = "block";
}

function col() {
    var col = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'white', 'black'];
    k = Math.floor(Math.random() * 4)
    if (k == 1) {
        i = Math.floor(Math.random() * 6);
        j = i
        colors.innerText = col[i];
        colors.style.color = col[i]
    } else {
        i = Math.floor(Math.random() * 6);
        j = Math.floor(Math.random() * 6);
        colors.innerText = col[i];
        colors.style.color = col[j]
    }
}

function wrong() {
    if (i != j) {
        col();
        score++;
        timeBar.classList.remove("timeBar");
        cross.classList.add("clicked");
        setTimeout(() => {
            timeBar.classList.add("timeBar");
            cross.classList.remove("clicked");
        }, 200);
    } else {
        out();
    }
}

function right() {
    if (i == j) {
        col();
        score++;
        timeBar.classList.remove("timeBar");
        tick.classList.add("clicked");
        setTimeout(() => {
            timeBar.classList.add("timeBar");
            tick.classList.remove("clicked");
        }, 200);
    } else {
        out();
    }
}

document.onkeydown = function (e) {
    if (e.keyCode == 37) {
        right();
    }
    if (e.keyCode == 39) {
        wrong();
    }
}

var myInt = setInterval(() => {
    var timeWidth = timeBar.offsetWidth;
    var maxWidth = document.getElementById('prg').offsetWidth;
    if (timeWidth > maxWidth) {
        startBt.style.display = "block";
        colors.innerText = `Game Over: Score - ${score}`;
        checkLeaderboard(score, "Colour Correlation", "higher");
        leaderboardUpdate()
        colors.style.color = "black";
        timeBar.classList.remove("timeBar");
        setTimeout(() => {
            score = 0;
        }, 100)
    } else {
        scr.innerText = score;
    }
}, 1);

function leaderboardUpdate() {
    window.setTimeout(function() { outputLeaderboard("Colour Correlation") }, 500);
}