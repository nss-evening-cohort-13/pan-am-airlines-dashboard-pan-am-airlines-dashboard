import '../styles/main.scss';
import authData from './helpers/data/authData';

const init = () => {
  authData.checkLoginStatus();
};

init();
