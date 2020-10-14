import myNavbar from '../../components/navBar/navBar';
import view from '../viewHelper';

const checkLoginStatus = () => {
  myNavbar.myNavbar();
  view.viewListener('#');
};

export default { checkLoginStatus };
