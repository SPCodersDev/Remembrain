var urlVar;

if (window.location.href.includes("login")) {
    urlVar = "login";
} else {
    urlVar = "signup";
}

document.querySelector(".showHide").addEventListener("click", function () {
    if (document.querySelector("." + urlVar + "CredentialPassword").type == "password") {
        document.querySelector("." + urlVar + "CredentialPassword").type = "text";

        document.querySelector(".showHide").innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        document.querySelector("." + urlVar + "CredentialPassword").type = "password"

        document.querySelector(".showHide").innerHTML = '<i class="fas fa-eye"></i>';
    }

    if (urlVar == "signup") {
        if (document.querySelector(".signupCredentialPassword2").type == "password") {
            document.querySelector(".signupCredentialPassword2").type = "text";

            document.querySelector(".showHide2").innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            document.querySelector(".signupCredentialPassword2").type = "password"

            document.querySelector(".showHide2").innerHTML = '<i class="fas fa-eye"></i>';
        }
    }
});

if (window.location.href.includes("signup")) {
    document.querySelector(".showHide2").addEventListener("click", function () {
        if (document.querySelector(".signupCredentialPassword2").type == "password") {
            document.querySelector(".signupCredentialPassword2").type = "text";

            document.querySelector(".showHide2").innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            document.querySelector(".signupCredentialPassword2").type = "password"

            document.querySelector(".showHide2").innerHTML = '<i class="fas fa-eye"></i>';
        }

        if (document.querySelector("." + urlVar + "CredentialPassword").type == "password") {
            document.querySelector("." + urlVar + "CredentialPassword").type = "text";

            document.querySelector(".showHide").innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            document.querySelector("." + urlVar + "CredentialPassword").type = "password"

            document.querySelector(".showHide").innerHTML = '<i class="fas fa-eye"></i>';
        }
    });
}