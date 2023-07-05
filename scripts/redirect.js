if(!window.location.href.includes(".html") && !window.location.href.includes("games")) {
    window.location.href = "/index.html";
} else {
    if(localStorage.loggedIn == null) {
        localStorage.setItem("loggedIn", JSON.stringify(false));
    }

    if (window.location.href.includes("login.html") || window.location.href.includes("signup.html")) {
        if (JSON.parse(localStorage.loggedIn)) {
            window.location.href = "/home.html";
        } 
    } else if (window.location.href.includes("home.html") || window.location.href.includes("all.html") || window.location.href.includes("search.html") || window.location.href.includes("games") || window.location.href.includes("settings.html")) {            
        if (!JSON.parse(localStorage.loggedIn)) {
            window.location.href = "/login.html";
        }
    } else if(!window.location.href.includes("index.html") && !window.location.href.includes("about.html") && !window.location.href.includes("contact.html")) {
        if (JSON.parse(localStorage.loggedIn)) {
            window.location.href = "/home.html";
        } else {
            window.location.href = "/login.html";
        }
    }
}