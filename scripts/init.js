const firebaseConfig = {
    apiKey: "AIzaSyCKlV4dAhx748lk8bp62fEm5Aq7dE3LEYc",
    authDomain: "remembrain-1ad7c.firebaseapp.com",
    databaseURL: "https://remembrain-1ad7c-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "remembrain-1ad7c",
   storageBucket: "remembrain-1ad7c.appspot.com",
    messagingSenderId: "162216838424",
    appId: "1:162216838424:web:65394f894cd45047440a6d",
    measurementId: "G-3SMBTZ4S01"
};

firebase.initializeApp(firebaseConfig);

if(window.location.href.includes("/games/")) {
    var leaderboardScript = document.createElement("script");
    leaderboardScript.src = '/scripts/leaderboard.js';

    document.body.appendChild(leaderboardScript);

    if(window.location.href.includes("/games/game.html")) {
        var gameScript = document.createElement("script");
        gameScript.src = '/scripts/game.js';

        document.body.appendChild(gameScript);
    } else if(window.location.href.includes("/games/colourCorrelation.html")) {
        var gameScript = document.createElement("script");
        gameScript.src = '/games/Colour Correlation/colourCorrelation.js';

        document.body.appendChild(gameScript);
    }
}