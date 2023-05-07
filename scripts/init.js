const firebaseConfig = {
    apiKey: "AIzaSyBeUGKkDd4CpYQrzeSJF_gEQEHDlsQIGg0",
    authDomain: "programmingcompetition2023.firebaseapp.com",
    databaseURL: "https://programmingcompetition2023-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "programmingcompetition2023",
    storageBucket: "programmingcompetition2023.appspot.com",
    messagingSenderId: "482409458124",
    appId: "1:482409458124:web:c6472678e76fbd2583d569"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref('test/').set({
    text: "working - IS"
});