// firebase.database().ref('leaderboard/' + "Typing Test").set({
//     scores: [2, 1],
//     names: ["Test Value", "Test Value"],
// });

function sortedIndex(array, value) {
    var low = 0,
        high = array.length;

    while (low < high) {
        var mid = (low + high) >>> 1;
        if (array[mid] < value) low = mid + 1;
        else high = mid;
    }

    return low;
}

function checkLeaderboard(score, game, comparison) {
    var leaderboardData = firebase.database().ref('leaderboard/' + game);
    leaderboardData.once('value', (snapshot) => {
        var namesArray = [];
        var scoresArray = [];

        const val = snapshot.val();

        namesArray = val.names;
        scoresArray = val.scores;

        var winner = false;

        for(i = 0; i < scoresArray.length; i++) {
            if(comparison == "higher") {
                if(score > scoresArray[i]) {
                    winner = true;
                }
            } else {
                if(score < scoresArray[i]) {
                    winner = true;
                }
            }
        }

        if(scoresArray.length < 19) {
            winner = true;
        }

        if(winner) {
            if(scoresArray.length >= 20) {
                scoresArray.pop();
                namesArray.pop();
            }

            if(typeof(scoresArray) != "object") {
                scoresArray = [scoresArray].flat();
                namesArray = [namesArray].flat();
            }

            if(comparison == "higher") {
                scoresArray.reverse();
                namesArray.reverse();
            }

            var idx = sortedIndex(scoresArray, score);

            scoresArray.splice(idx, 0, score);
            namesArray.splice(idx, 0, JSON.parse(localStorage.entity).name);

            if(comparison == "higher") {
                scoresArray.reverse();
                namesArray.reverse();
            }
        }

        firebase.database().ref('leaderboard/' + game).set({
            scores: scoresArray,
            names: namesArray,
        });
    });
}

function outputLeaderboard(game) {
    var leaderboardData = firebase.database().ref('leaderboard/' + game);
    leaderboardData.once('value', (snapshot) => {
        var namesArray = [];
        var scoresArray = [];

        const val = snapshot.val();

        namesArray = val.names;
        scoresArray = val.scores;

        var leaderboardDiv = document.querySelector(".leaderboard");

        leaderboardDiv.textContent = "";

        for(i = 0; i < scoresArray.length; i++) {
            var leaderboardPart = document.createElement("div");
            leaderboardPart.classList.add("leaderboardPart");

            var leaderboardPlace = document.createElement("div");
            leaderboardPlace.classList.add("leaderboardPlace");
            leaderboardPlace.textContent = i + 1;

            var leaderboardTitle = document.createElement("div");
            leaderboardTitle.classList.add("leaderboardTitle");
            leaderboardTitle.textContent = namesArray[i];

            leaderboardPlace.appendChild(leaderboardTitle);

            leaderboardPart.appendChild(leaderboardPlace);

            var leaderboardPoints = document.createElement("div");
            leaderboardPoints.classList.add("leaderboardPoints");
            leaderboardPoints.textContent = scoresArray[i];
            if(game == "Memory Match") leaderboardPoints.textContent += "s";
            if(game == "Typing Test") leaderboardPoints.textContent += " WPM";

            leaderboardPart.appendChild(leaderboardPoints);

            leaderboardDiv.appendChild(leaderboardPart);
        }
    });
}