import Firebase from 'firebase'

let config={
    apiKey: "AIzaSyAuj0YSDs7a9OPnPn-OeGWtn7coAWImIsA",
    authDomain: "proyectoacceso1.firebaseapp.com",
    projectId: "proyectoacceso1",
    storageBucket: "proyectoacceso1.appspot.com",
    messagingSenderId: "815633287242",
    appId: "1:815633287242:web:1b721edd1d12389f433eb3",
    measurementId: "G-4GWG1B8J9T"
};

let app= Firebase.initializeApp(config);
export const db= app.database();

