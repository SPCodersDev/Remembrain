const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get('query');

loadAll(document.querySelector(".icons"));
sortIcons(query, document.querySelector(".icons"), document.querySelectorAll(".icon"));
document.title = "Search Results For '" + query + "' | Remembrain";
$(".title").html("Search Results For '" + query + "'")

var allShown = false;
var allIcons = document.querySelectorAll(".icon");
for(i = 0; i < allIcons.length; i++) {
    if(allIcons[i].style.display == "block") {
        allShown = true;
    }
}

if(!allShown) {
    var error = document.createElement("div");
    error.classList.add("error");
    error.textContent = '<i class="fas fa-sad-tear"></i>&nbsp;No Results';

    document.querySelector(".icons").appendChild(error);

    if ($('.icon:visible').length) {
        document.querySelector(".error").remove();
    }

    $(".icons").css("margin-top", "12.5%");
}