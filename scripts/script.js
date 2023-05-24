if(!window.location.href.includes("index.html") && !window.location.href.includes("about.html") && !window.location.href.includes("contact.html")) {
    if(innerWidth < innerHeight) {
        document.body.innerHTML = "";

        var message = document.createElement("div");
        message.innerHTML = "Sorry, Remembrain is Not Available For Mobile";
        message.classList.add("mobileMsg");

        document.body.appendChild(message);
    }
}