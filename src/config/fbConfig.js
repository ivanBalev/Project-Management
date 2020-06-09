import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAkFrgZM5vvHXovem2e8NYBUFo5ddJ68c8",
    authDomain: "net-ninja-marioplan-2e4c3.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-2e4c3.firebaseio.com",
    projectId: "net-ninja-marioplan-2e4c3",
    storageBucket: "net-ninja-marioplan-2e4c3.appspot.com",
    messagingSenderId: "745949453766",
    appId: "1:745949453766:web:40ac400cc2fab5986066c7",
    measurementId: "G-RMZ7LHF40J"
};
firebase.initializeApp(firebaseConfig);

export default firebase;