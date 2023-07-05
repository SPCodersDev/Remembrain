var topBar = document.querySelector(".topBar");

topBar.innerHTML = "";

topBar.innerHTML = (`<div class="topBarLeft">
                        <a href = "index.html" class = "topBarLogo">
                            <i class = "fas fa-brain"></i>
                            <div class="topBarLeftText">Remembrain</div>
                        </a>
                        <div class="topBarSec">
                            <a href="about.html">About</a>
                        </div>
                        <div class="topBarSec">
                            <a href="contact.html">Contact Us</a>
                        </div>
                    </div>
                    <div class="topBarRight">
                        <div class="topBarRightLink">
                            <a href="login.html" class"topBarLogin">Log In</a>
                        </div>
                        <div class="topBarRightLink">
                            <a href="signup.html" class="topBarSignup">Sign Up</a>
                        </div>
                    </div>`);

var topBarRight = document.querySelector(".topBarRight");

topBarRight.innerHTML = "";

if (localStorage.loggedIn == null || !JSON.parse(localStorage.loggedIn)) {
    var topBarRightLink = document.createElement("div");
    topBarRightLink.classList.add("topBarRightLink");

    var topBarLogin = document.createElement("a");
    topBarLogin.href = "/login.html";
    topBarLogin.classList.add("topBarLogin");
    topBarLogin.innerHTML = "Log In";

    topBarRightLink.appendChild(topBarLogin);

    topBarRight.appendChild(topBarRightLink);

    var topBarRightLink = document.createElement("div");
    topBarRightLink.classList.add("topBarRightLink");

    var topBarSignup = document.createElement("a");
    topBarSignup.href = "/signup.html";
    topBarSignup.classList.add("topBarSignup");
    topBarSignup.innerHTML = "Sign Up"

    topBarRightLink.appendChild(topBarSignup);

    topBarRight.appendChild(topBarRightLink);
} else {
    var topBarRightLink = document.createElement("div");
    topBarRightLink.classList.add("topBarRightLink");

    var topBarHome = document.createElement("a");
    topBarHome.href = "/home.html";
    topBarHome.classList.add("topBarLogin");
    topBarHome.innerHTML = "Home"

    topBarRightLink.appendChild(topBarHome);
    topBarRight.appendChild(topBarRightLink);
}

if(innerWidth < innerHeight) {
    $(".topBarRight").html('');
    $(".topBarRight").html("Remembrain Is Not Available For Mobile");
    $(".topBarRight").css("width", "200px");
    $(".topBarRight").css("margin-right", "10px");
    $(".topBarRight").css("text-align", "end");
    $(".topBarRight").css("font-style", "italic");
    $(".topBarRight").css("font-size", "14px");
    $(".getStarted").hide();
}