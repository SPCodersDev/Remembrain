$("#sEmail").html(JSON.parse(localStorage.entity).email);
$("#sUsername").html(JSON.parse(localStorage.entity).name);

function showError1(error) {
    $("#cpe1").show();
    $("#cpe1").html(error);
}

function showError2(error) {
    $("#cpe2").show();
    $("#cpe2").html(error);
}

$("#cpBtn").on("click", function() {
    if (document.getElementById("cp1").value.length == 0) {
        showError1("Please Enter Password");
    }

    if (document.getElementById("cp2").value.length == 0) {
        showError2("Please Enter Password");
    }

    if (document.getElementById("cp1").value.length != 0 && document.getElementById("cp2").value.length != 0) {
        if (document.getElementById("cp1").value.length >= 8 && !(document.getElementById("cp1").value.indexOf(" ") >= 0)) {
            if (document.getElementById("cp2").value == document.getElementById("cp1").value) {
                localStorage.setItem("users", JSON.stringify(users));

                document.getElementById("cp1").value = "";
                document.getElementById("cp2").value = "";

                changed();
            } else {
                showError2("Passwords do Not Match")
            }
        } else {
            showError1("Please Enter a Valid Password");
        }
    }
});