import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import authData from './helpers/data/authData';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
};

init();
