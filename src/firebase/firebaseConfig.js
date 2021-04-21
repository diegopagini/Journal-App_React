/** @format */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAF_-Z-d1ckU_z4gaC8vMiAhCRf0Yg60h8',
	authDomain: 'journalapp-react-f6204.firebaseapp.com',
	projectId: 'journalapp-react-f6204',
	storageBucket: 'journalapp-react-f6204.appspot.com',
	messagingSenderId: '915512358096',
	appId: '1:915512358096:web:14c45954f0d3abeae3dad5',
	measurementId: 'G-GY7065MJX1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
