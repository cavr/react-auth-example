import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA7wO0RHLZ76alX6RPSQ8Ea9hR2ZybgvKY",
    authDomain: "manager-e5a71.firebaseapp.com",
    databaseURL: "https://manager-e5a71.firebaseio.com",
    projectId: "manager-e5a71",
    storageBucket: "manager-e5a71.appspot.com",
    messagingSenderId: "315921799052"
  };


export default  () => {
    Firebase.initializeApp(config);
}