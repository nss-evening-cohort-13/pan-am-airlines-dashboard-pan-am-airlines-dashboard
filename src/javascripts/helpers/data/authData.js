import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import myNavbar from '../../components/navBar/navBar';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((userObj) => {
    if (userObj) {
      $('#auth').html('');
      const currentUser = userData.setCurrentUser(userObj);
      myNavbar.myNavbar(currentUser);
    } else {
      myNavbar.myNavbar();
      auth.loginButton();
    }
  });
};

export default { checkLoginStatus };
