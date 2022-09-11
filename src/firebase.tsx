import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAGK2ATyj8xzt4SoEO2T0FkdNxUVo6iNLY',
  authDomain: 'career-guru-f545f.firebaseapp.com',
  databaseURL: 'https://career-guru-f545f.firebaseio.com',
  projectId: 'career-guru-f545f',
  storageBucket: 'career-guru-f545f.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

initializeApp(firebaseConfig);