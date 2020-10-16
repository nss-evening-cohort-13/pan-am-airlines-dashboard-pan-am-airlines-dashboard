import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<button id="google-auth" class="btn btn-primary btn-lg">
                            <i class="fab fa-google"></i></i>oogle Login
                        </button>`;

  $('#btn-login').html(domString);
  $('#google-auth').on('click', signMeIn);
};

const logoutButton = () => {
  $('#btn-logout').html('<button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Logout</button>');
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

export default { loginButton, logoutButton };
