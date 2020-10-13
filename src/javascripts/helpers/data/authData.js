import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../../components/auth/auth';
import myNavbar from '../../components/navBar/navBar';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((userObj) => {
    if (userObj) {
      const currentUser = userData.setCurrentUser(userObject);
      myNavbar.myNavbar(currentUser);
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
