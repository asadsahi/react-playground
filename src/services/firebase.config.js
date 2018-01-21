import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB7o8sQu2RbKAHUukYuy_VHAwcyb5NUDJ4',
  authDomain: 'react-playground-f6f71.firebaseapp.com',
  databaseURL: 'https://react-playground-f6f71.firebaseio.com',
  projectId: 'react-playground-f6f71',
  storageBucket: 'react-playground-f6f71.appspot.com',
  messagingSenderId: '627376357876'
};
firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
