const cards = document.querySelectorAll(".card");
const timeTag = document.querySelector(".time b");
const flipsTag = document.querySelector(".flips b");
const refreshBtn = document.querySelector(".details button");

let maxTime = 0;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

leaderboardUpdate();

function initTimer() {
    timeTag.style.color = "black";
    //if(timeLeft <= 0) {
        //timeTag.innerText = "GAME OVER";
        //timeTag.style.color = "red";
        //return clearInterval(timer);
    //}
    timeLeft = timeLeft + 0.1;
    let num = String(timeLeft)
    let arr = num.split(".");
    let newSecond = arr[1][0]
    let final = arr[0]+newSecond
    timeTag.innerText = parseFloat(final/10);
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 100);
    }
    if(clickedCard !== cardOne && !disableDeck) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view object").data,
        cardTwoImg = cardTwo.querySelector(".back-view object").data;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 6) {
            clearInterval(timer);

            checkLeaderboard(parseFloat(Math.floor(timeLeft * 10) / 10), "Memory Match", "lower");
            leaderboardUpdate();
            
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        disableDeck = false;
    } else {
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);
    
        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }
}

function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view object");
        setTimeout(() => {
            imgTag.data = `/games/Memory Match/images/img-${arr[index]}.svg`;
        }, 100);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

function leaderboardUpdate() {
    window.setTimeout(function() { outputLeaderboard("Memory Match") }, 500);
}