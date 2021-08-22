
import firebase from "firebase"

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAfKyQtuLMZFQB35mdZGp0cwNqnE0VvDYE",
  authDomain: "messenger-app-75cc4.firebaseapp.com",
  projectId: "messenger-app-75cc4",
  storageBucket: "messenger-app-75cc4.appspot.com",
  messagingSenderId: "1006625308374",
  appId: "1:1006625308374:web:4ee0254e5386209cb89377",
  measurementId: "G-PSB57N8XD6"
}
);

const db = firebaseApp.firestore();
export default db;