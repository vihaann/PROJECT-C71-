import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyCcLL69SxD2hVJ9l9346gGJwiCtmYxQ-9o",
    authDomain: "story-hub-2-c79f0.firebaseapp.com",
    projectId: "story-hub-2-c79f0",
    storageBucket: "story-hub-2-c79f0.appspot.com",
    messagingSenderId: "605033840583",
    appId: "1:605033840583:web:3c99d000994fd3bc1763e2"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();