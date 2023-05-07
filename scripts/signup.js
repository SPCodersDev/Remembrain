// if (JSON.parse(localStorage.getItem("sign"))) {
//     window.location.href = "home.html"
// }

// if (localStorage.getItem("users") == null) {
//     window.location.href = "login.html";
// } else {
//     var users = JSON.parse(localStorage.getItem("users"));
// }

// var cont;

// var emailError = document.querySelector(".errorEmail");
// var passwordError = document.querySelector(".errorPassword");
// var usernameError = document.querySelector(".errorUsername");
// var passwordError2 = document.querySelector(".errorPassword2");

// function emailErrorShow(value) {
//     emailError.style.display = "block";
//     emailError.innerHTML = value;
// }

// function passwordErrorShow(value) {
//     passwordError.style.display = "block";
//     passwordError.innerHTML = value;
// }

// function usernameErrorShow(value) {
//     usernameError.style.display = "block";
//     usernameError.innerHTML = value;
// }

// function passwordErrorShow2(value) {
//     passwordError2.style.display = "block";
//     passwordError2.innerHTML = value;
// }

// var loginBtn = document.querySelector(".signupButton");

// loginBtn.addEventListener("click", function () {
//     emailError.style.display = "none";
//     passwordError.style.display = "none";
//     usernameError.style.display = "none";
//     passwordError2.style.display = "none";

//     if (document.querySelector(".signupCredentialEmail").value.length != 0) {
//         cont = true;
//     } else {
//         cont = false;

//         emailErrorShow("Please Enter Email");
//     }

//     if (document.querySelector(".signupCredentialPassword").value.length != 0) {
//         cont = true;
//     } else {
//         cont = false;

//         passwordErrorShow("Please Enter Password");
//     }

//     if (document.querySelector(".signupCredentialUsername").value.length != 0) {
//         cont = true;
//     } else {
//         cont = false;

//         usernameErrorShow("Please Enter Username");
//     }

//     if (cont && document.querySelector(".signupCredentialPassword").value.length != 0 && document.querySelector(".signupCredentialEmail").value.length != 0) {
//         if (document.querySelector(".signupCredentialEmail").value.split('@').length - 1 == 1 && document.querySelector(".signupCredentialEmail").value.split('.').length - 1 == 1) {
//             validate();
//         } else {
//             cont = false;

//             emailErrorShow("Please Enter a Valid Email");
//         }
//     }
// });

// Array.prototype.indexOfObject = function (property, value) {
//     for (let i = 0, len = this.length; i < len; i++) {
//         if (this[i][property] === value) {
//             return i;
//         }
//     }
//     return -1;
// }

// function validate() {
//     var email2 = document.querySelector(".signupCredentialEmail");
//     var password2 = document.querySelector(".signupCredentialPassword");
//     var password3 = document.querySelector(".signupCredentialPassword2");
//     var username2 = document.querySelector(".signupCredentialUsername");

//     let checkEmail = users.some((ele) => ele.email === email2.value);

//     if (checkEmail == false) {
//         if (password2.value.length >= 8 && !(password2.value.indexOf(" ") >= 0)) {
//             if (password3.value == password2.value) {

//                 var newUser = {
//                     email: email2.value,
//                     password: password2.value,
//                     username: username2.value,
//                 };

//                 users.push(newUser);

//                 localStorage.setItem("users", JSON.stringify(users));

//                 var idx = users.indexOfObject("email", email2.value);

//                 localStorage.setItem("sign", JSON.stringify(true));
//                 localStorage.setItem("currentUser", JSON.stringify(idx));

//                 Email.send({
//                     Host: "smtp.gmail.com",
//                     Username: "slearner321@gmail.com",
//                     Password: "singh2000",
//                     To: users[idx].email,
//                     From: "slearner321@gmail.com",
//                     Subject: "Welcome!",
//                     Body: "Welcome to Our Service, " + users[idx].username,
//                 })

//                 window.location.href = "home.html";

//             } else {
//                 passwordErrorShow2("Passwords do Not Match")
//             }
//         } else {
//             passwordErrorShow("Please Enter a Valid Password")
//         }
//     } else {
//         emailErrorShow("An Account With That Email Already Exists!");
//     }
// }