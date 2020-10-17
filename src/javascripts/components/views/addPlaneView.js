import firebase from 'firebase/app';
import 'firebase/auth';
import planeForm from '../forms/addPlaneForm';

const planeView = () => {
  const user = firebase.auth().currentUser;

  if (user) {
    $('#app').html(`
    <div id="addPlaneDiv">
    <button type="button" class="btn btn-outline-dark" id="addPlaneBtn">Add a Plane</button>
    </div>`);

    $('#addPlaneBtn').on('click', () => {
      planeForm.addPlaneForm();
      $('#addPlaneBtn').attr('disabled', true);
    });
  } else {
    $('#app').html('<h1>Display plane only</h1>');
  }
};

export default { planeView };
