$(".getStarted").on("click", function() {
    if(JSON.parse(localStorage.loggedIn)) {
        window.location.href = "home.html";
    } else {
        window.location.href = "signup.html";
    }
});

var topBarRight = document.querySelector(".topBarRight");

topBarRight.innerHTML = "";

if(localStorage.loggedIn == null || !JSON.parse(localStorage.loggedIn)) {
    var topBarRightLink = document.createElement("div");
    topBarRightLink.classList.add("topBarRightLink");

    var topBarLogin = document.createElement("a");
    topBarLogin.href = "login.html";
    topBarLogin.classList.add("topBarLogin");
    topBarLogin.innerHTML = "Log In";

    topBarRightLink.appendChild(topBarLogin);

    topBarRight.appendChild(topBarRightLink);

    var topBarRightLink = document.createElement("div");
    topBarRightLink.classList.add("topBarRightLink");
    
    var topBarSignup = document.createElement("a");
    topBarSignup.href = "signup.html";
    topBarSignup.classList.add("topBarSignup");
    topBarSignup.innerHTML = "Sign Up"

    topBarRightLink.appendChild(topBarSignup);

    topBarRight.appendChild(topBarRightLink);
} else {
    var topBarRightLink = document. createElement ("div");
    topBarRightLink.classList.add("topBarRightLink");

    var topBarHome = document. createElement ("a");
    topBarHome.href = "home.html";
    topBarHome.classList.add("topBarLogin");
    topBarHome. innerHTML = "Home"
    
    topBarRightLink.appendChild(topBarHome);
    topBarRight.appendChild(topBarRightLink) ;
}