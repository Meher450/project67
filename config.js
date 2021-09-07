import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyADhhsoIfEUEBMJ7P_dw6PY5xoU-B-Pt-Q",
    authDomain: "project-67-73800.firebaseapp.com",
    databaseURL: "https://project-67-73800-default-rtdb.firebaseio.com",
    projectId: "project-67-73800",
    storageBucket: "project-67-73800.appspot.com",
    messagingSenderId: "429297233881",
    appId: "1:429297233881:web:dbf379546d716ab10833c8"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();