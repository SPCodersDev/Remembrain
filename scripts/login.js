function onSignIn = (googleUser) => {
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

function handleCredentialResponse(response) {
          console.log("Encoded JWT ID token: " + response.credential);
        }
        window.onload = function () {
          google.accounts.id.initialize({
            client_id: "YOUR_GOOGLE_CLIENT_ID",
            callback: handleCredentialResponse
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog
        }

function setData(entityObj) {
    firebase.database().ref('users/' + entityObj.id).set({
        id: entityObj.id,
        name: entityObj.name,
        image: entityObj.image,
        email: entityObj.email,
    });
}
