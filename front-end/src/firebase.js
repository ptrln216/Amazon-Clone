import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA2JDQVMl0mqusM1y7AcBN5Wc2zxL33oUc',
	authDomain: 'clone-c11ff.firebaseapp.com',
	databaseURL: 'https://clone-c11ff.firebaseio.com',
	projectId: 'clone-c11ff',
	storageBucket: 'clone-c11ff.appspot.com',
	messagingSenderId: '664762133320',
	appId: '1:664762133320:web:4c6e4327f06e2581d6e17d',
	measurementId: 'G-JM09850FB8'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
