document.querySelector(".openPopup").addEventListener("click", function () {
    if (document.querySelector(".openPopup").innerHTML.includes("down")) {
        document.querySelector(".openPopup").innerHTML = '<i class="fas fa-chevron-up"></i>';

        document.getElementById("popup").style.display = "inline-block";
    } else {
        document.querySelector(".openPopup").innerHTML = '<i class="fas fa-chevron-down"></i>';

        document.getElementById("popup").style.display = "none";
    }
});