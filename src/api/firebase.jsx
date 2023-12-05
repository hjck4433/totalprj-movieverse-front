import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLA-DzcKtNeBsjKDH2o-RxH6wNWJFfJ3Y",
  authDomain: "movieverse-e1c4f.firebaseapp.com",
  projectId: "movieverse-e1c4f",
  storageBucket: "movieverse-e1c4f.appspot.com",
  messagingSenderId: "1092840104025",
  appId: "1:1092840104025:web:31eff7fbf20cf22c925148",
  measurementId: "G-JN12LEWLD0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
