import planeData from '../../helpers/data/planeData';
import planeCard from '../cards/planeCard';

const viewPlanes = (user) => {
  $('#app').html('');
  $('#app').append('<div id="button-area"></div>');
  $('#app').append('<div id="planes-area"></div>');
  $('#button-area').append('<button type="button" class="btn btn-success" id="add-plane-btn"><i class="fas fa-plus"></i> Add New Plane</button>');

  planeData.getPlanes().then((response) => {
    if (response.length) {
      $('#planes-area').html('');
      response.forEach((plane) => {
        $('#planes-area').append(planeCard.planeMaker(plane));
        if (user) {
          $(`#${plane.uid}`).append(
            `<a href="#" class="card-link update-link" id=${plane.uid}>Update Plane</a>`
          );
          $(`#${plane.uid}`).append(
            `<a href="#" class="card-link remove-link" id=${plane.uid}>Remove Plane</a>`
          );
        }
      });
    } else {
      $('#planes-area').append('<h1>No Planes!</h1>');
    }
  });
};

export default { viewPlanes };
