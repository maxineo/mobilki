import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5iXUlml7PHOjh0NUXIZG7akk_wp2__-k",
  authDomain: "mobilki-1c761.firebaseapp.com",
  projectId: "mobilki-1c761",
  storageBucket: "mobilki-1c761.appspot.com",
  messagingSenderId: "15844126187",
  appId: "1:15844126187:web:dfdd9556b189d4c8667dae",
  measurementId: "G-G19WVY7ZCB"
};

firebase.initializeApp(firebaseConfig);

export const db = getFirestore();
