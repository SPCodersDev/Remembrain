if (localStorage.loggedIn == null) {
    localStorage.setItem("loggedIn", JSON.stringify(false));
}

if (window.location.href.includes("login.html") || window.location.href.includes("signup.html")) {
    if (JSON.parse(localStorage.loggedIn)) {
        window.location.href = "home.html";
    }
} else if (window.location.href.includes("home.html") || window.location.href.includes("settings.html")) {
    if (!window.location.href.includes("5500") && !window.location.href.includes(".preview.app")) {
        if (!JSON.parse(localStorage.loggedIn)) {
            window.location.href = "login.html";
        }
    }
} else {
    if (JSON.parse(localStorage.loggedIn)) {
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}