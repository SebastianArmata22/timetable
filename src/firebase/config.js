import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVhR1QcX2RjPiB9skUcLe0g4BDuOcPmUc",
    authDomain: "timetable-7aa52.firebaseapp.com",
    projectId: "timetable-7aa52",
    storageBucket: "timetable-7aa52.appspot.com",
    messagingSenderId: "517658682039",
    appId: "1:517658682039:web:4e17871634a32e2651e332",
    measurementId: "G-0YL3Y64ZC0"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase
  export const database = firebase.firestore();
  export const auth = firebase.auth()