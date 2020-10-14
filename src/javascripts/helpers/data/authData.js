import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import myNavbar from '../../components/navBar/navBar';
import view from '../viewHelper';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((userObj) => {
    view.viewListener('#');
    // If the user is logged in
    if (userObj) {
      const currentUser = userData.setCurrentUser(userObj);
      const { name } = currentUser;
      myNavbar.myNavbar(name);
      auth.logoutButton();
    // If the user isn't logged in
    } else {
      myNavbar.myNavbar();
      auth.loginButton();
    }
  });
};

export default { checkLoginStatus };
