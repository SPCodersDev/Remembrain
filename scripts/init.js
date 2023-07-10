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

// var analyticsScript = document.createElement("script");
// analyticsScript.src = "https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js";
// document.head.appendChild(analyticsScript);

// const analytics = firebase.analytics();

// console.log(analytics)

// if(window.location.href.includes("/games/")) {
//     var leaderboardScript = document.createElement("script");
//     leaderboardScript.src = '/scripts/leaderboard.js';

//     document.body.appendChild(leaderboardScript);

//     var gameScript = document.createElement("script");

//     var windowRef = window.location.pathname;
//     var curPage = windowRef.substring(windowRef.lastIndexOf("/games/"), windowRef.indexOf(".html"));

//     var gameName = curPage.split("/")[curPage.split("/").length - 1];
//     var gameNameWords = gameName.split(/(?=[A-Z])/);
//     var gameFolderCode = toTitleCase(gameNameWords[0]) + " " + toTitleCase(gameNameWords[1]);


//     if(curPage == "game") {
//         gameScript.src = '/scripts/' + gameName + '.js';
//     } else {
//         gameScript.src = '/games/' + gameFolderCode + '/' + gameName + '.js';
//     }

//     document.body.appendChild(gameScript);
// }

if(window.location.href.includes("games")) {
    var leaderboardScript = document.createElement("script");
    leaderboardScript.src = '/scripts/leaderboard.js';

    document.body.appendChild(leaderboardScript);

    var gameScript = document.createElement("script");
    
    if(window.location.href.toLowerCase().includes("colourcorrelation")) {
        gameScript.src = "/games/Colour Correlation/colourCorrelation.js";
    } else if(window.location.href.toLowerCase().includes("memorymatch")) {
        gameScript.src = "/games/Memory Match/memoryMatch.js";
    } else if(window.location.href.toLowerCase().includes("typingtest")) {
        gameScript.src = "/games/Typing Test/typingTest.js";
    }

    document.body.appendChild(gameScript);
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
         function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}