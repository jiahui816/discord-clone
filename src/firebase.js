import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6n8tlT2Xt-gCnZCRL4rogi_ImItvJOY4",
  authDomain: "discord-clone-68bd4.firebaseapp.com",
  databaseURL: "https://discord-clone-68bd4.firebaseio.com",
  projectId: "discord-clone-68bd4",
  storageBucket: "discord-clone-68bd4.appspot.com",
  messagingSenderId: "80095598974",
  appId: "1:80095598974:web:bf4cbae51df3cec1ae7b2f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
