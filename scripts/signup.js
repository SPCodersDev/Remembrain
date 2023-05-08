if (JSON.parse(localStorage.getItem("loggedIn"))) {
    window.location.href = "home.html"
}

var cont;

var emailError = document.querySelector(".errorEmail");
var passwordError = document.querySelector(".errorPassword");
var usernameError = document.querySelector(".errorUsername");
var passwordError2 = document.querySelector(".errorPassword2");

function emailErrorShow(value) {
    emailError.style.display = "block";
    emailError.innerHTML = value;
}

function passwordErrorShow(value) {
    passwordError.style.display = "block";
    passwordError.innerHTML = value;
}

function usernameErrorShow(value) {
    usernameError.style.display = "block";
    usernameError.innerHTML = value;
}

function passwordErrorShow2(value) {
    passwordError2.style.display = "block";
    passwordError2.innerHTML = value;
}

var loginBtn = document.querySelector(".signupButton");

loginBtn.addEventListener("click", function () {
    emailError.style.display = "none";
    passwordError.style.display = "none";
    usernameError.style.display = "none";
    passwordError2.style.display = "none";

    if (document.querySelector(".signupCredentialEmail").value.length != 0) {
        cont = true;
    } else {
        cont = false;

        emailErrorShow("Please Enter Email");
    }

    if (document.querySelector(".signupCredentialPassword").value.length != 0) {
        cont = true;
    } else {
        cont = false;

        passwordErrorShow("Please Enter Password");
    }

    if (document.querySelector(".signupCredentialUsername").value.length != 0) {
        cont = true;
    } else {
        cont = false;

        usernameErrorShow("Please Enter Username");
    }

    if (cont && document.querySelector(".signupCredentialPassword").value.length != 0 && document.querySelector(".signupCredentialEmail").value.length != 0) {
        if (document.querySelector(".signupCredentialEmail").value.split('@').length - 1 == 1 && document.querySelector(".signupCredentialEmail").value.split('.').length - 1 == 1) {
            validate();
        } else {
            cont = false;

            emailErrorShow("Please Enter a Valid Email");
        }
    }
});

function validate() {
    var email2 = document.querySelector(".signupCredentialEmail");
    var password2 = document.querySelector(".signupCredentialPassword");
    var password3 = document.querySelector(".signupCredentialPassword2");
    var username2 = document.querySelector(".signupCredentialUsername");

    if (password2.value.length >= 8 && !(password2.value.indexOf(" ") >= 0)) {
        if (password3.value == password2.value) {
            var email = email2.value;
            var password = password2.value;
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;

                    var userName = user.email.split("@")[0];

                    var entity = {
                        id: user.uid,
                        name: userName,
                        email: user.email,
                        emailVerified: user.emailVerified,
                    }

                    firebase.database().ref('users/' + user.uid).set({
                        id: user.uid,
                        name: userName,
                        email: user.email,
                        emailVerified: user.emailVerified,
                    });                    

                    localStorage.setItem("entity", JSON.stringify(entity));
                    localStorage.setItem("loggedIn", JSON.stringify(true));

                    window.setTimeout(function () {
                      window.location.href = "home.html";
                    }, 100);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    passwordErrorShow2(errorMessage);
                });
        } else {
            passwordErrorShow2("Passwords do Not Match")
        }
    } else {
        passwordErrorShow("Please Enter a Valid Password")
    }
}