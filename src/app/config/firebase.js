import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCWDVPNXRhA8jgfCukq_iDTNgB3RWyF1lU',
  authDomain: 'raveon-42a06.firebaseapp.com',
  projectId: 'raveon-42a06',
  storageBucket: 'raveon-42a06.appspot.com',
  messagingSenderId: '119092008384',
  appId: '1:119092008384:web:af57ad55912a841bdf2425',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
