function onSignIn(response) {

    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);

    var entity = {
        id: responsePayload.sub,
        name: responsePayload.name,
        image: responsePayload.picture,
        email: presponsePayload.email,
    }

    // var profile = googleUser.getBasicProfile();

    // var entity = {
    //     id: profile.getId(),
    //     name: profile.getName(),
    //     image: profile.getImageUrl(),
    //     email: profile.getEmail(),
    // }

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
