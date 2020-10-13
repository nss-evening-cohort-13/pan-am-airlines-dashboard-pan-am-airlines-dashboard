// import firebase from 'firebase/app';
import 'firebase/auth';
import myNavbar from '../../components/navBar/navBar';

const checkLoginStatus = () => {
  myNavbar.myNavbar();
};

export default { checkLoginStatus };
