$(".getStarted").on("click", function() {
    if(JSON.parse(localStorage.loggedIn)) {
        window.location.href = "/home.html";
    } else {
        window.location.href = "/signup.html";
    }
});