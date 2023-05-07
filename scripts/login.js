function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    var entity = {
        id: profile.getId(),
        name: profile.getName(),
        image: profile.getImageUrl(),
        email: profile.getEmail(),
    }

    localStorage.setItem("entity", JSON.stringify(entity));
    localStorage.setItem("loggedIn", JSON.stringify(true));

    setData(entity);

    window.setTimeout(function () {
        window.location.href = "home.html";
    }, 100);
}

function setData(entityObj) {
    firebase.database().ref('users/' + entityObj.id).set({
        id: entityObj.id,
        name: entityObj.name,
        image: entityObj.image,
        email: entityObj.email,
    });
}

function signInWithEmailPassword() {
    var email = "test@example.com";
    var password = "hunter2";
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    // [END auth_signin_password]
  }
  
  function signUpWithEmailPassword() {
    var email = "test@example.com";
    var password = "hunter2";
    // [START auth_signup_password]
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_signup_password]
  }
  
  function sendEmailVerification() {
    // [START auth_send_email_verification]
    firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
        // ...
      });
    // [END auth_send_email_verification]
  }
  
  function sendPasswordReset() {
    const email = "sam@example.com";
    // [START auth_send_password_reset]
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_send_password_reset]
  }
// OLD CODE
//   if (JSON.parse(localStorage.getItem("sign"))) {
//     window.location.href = "home.html"
// }

// if (localStorage.getItem("users") == null) {
//     var users = [];

//     localStorage.setItem("users", JSON.stringify(users));
// } else {
//     var users = JSON.parse(localStorage.getItem("users"));
// }

// var cont;

// var emailError = document.querySelector(".errorEmail");
// var passwordError = document.querySelector(".errorPassword");

// function emailErrorShow(value) {
//     emailError.style.display = "block";
//     emailError.innerHTML = value;
// }

// function passwordErrorShow(value) {
//     passwordError.style.display = "block";
//     passwordError.innerHTML = value;
// }

// var loginBtn = document.querySelector(".loginButton");

// loginBtn.addEventListener("click", function () {
//     emailError.style.display = "none";
//     passwordError.style.display = "none";

//     if (document.querySelector(".loginCredentialEmail").value.length != 0) {
//         cont = true;
//     } else {
//         cont = false;

//         emailErrorShow("Please Enter Email");
//     }

//     if (document.querySelector(".loginCredentialPassword").value.length != 0) {
//         cont = true;
//     } else {
//         cont = false;

//         passwordErrorShow("Please Enter Password");
//     }

//     if (cont && document.querySelector(".loginCredentialPassword").value.length != 0 && document.querySelector(".loginCredentialEmail").value.length != 0) {
//         if (document.querySelector(".loginCredentialEmail").value.split('@').length - 1 == 1 && document.querySelector(".loginCredentialEmail").value.split('.').length - 1 == 1) {
//             validate();
//         } else {
//             cont = false;

//             emailErrorShow("Please Enter a Valid Email")
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
//     var email = document.querySelector(".loginCredentialEmail");
//     var password = document.querySelector(".loginCredentialPassword");

//     let checkEmail = users.some((ele) => ele.email === email.value);

//     if (checkEmail) {
//         var idx = users.indexOfObject("email", email.value);

//         if (users[idx].password == password.value) {
//             localStorage.setItem("sign", JSON.stringify(true));
//             localStorage.setItem("currentUser", JSON.stringify(idx));
//             localStorage.setItem("rememberMe", JSON.stringify(document.getElementById("rem").checked))

//             window.location.href = "home.html";
//         } else {
//             passwordErrorShow("Incorrect Password");
//         }
//     } else {
//         emailErrorShow("An Account With That Email Doesn't Exist!");
//     }
// }