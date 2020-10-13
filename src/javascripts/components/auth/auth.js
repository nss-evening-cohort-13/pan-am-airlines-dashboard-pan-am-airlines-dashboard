import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<div id="auth">
                        <button id="google-auth" class="btn btn-primary btn-lg">
                            <i class="fab fa-google"></i></i>Google Login
                        </button>
                        </div>`;

  $('#app').html(domString);
  $('#google-auth').on('click', signMeIn);
};

export default { loginButton };
