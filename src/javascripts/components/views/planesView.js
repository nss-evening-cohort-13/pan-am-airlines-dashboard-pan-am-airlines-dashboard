import planeData from '../../helpers/data/planeData';
import planeCard from '../cards/planeCard';

const viewPlanes = (user) => {
  $('#app').html('');
  $('#app').append('<div id="planes-btn-area" class="button-area"></div>');
  $('#app').append('<div id="planes-area"></div>');

  planeData.getPlanes().then((response) => {
    if (response.length) {
      $('#planes-area').html('');
      response.forEach((plane) => {
        $('#planes-area').append(planeCard.planeMaker(plane));
        if (user) {
          if ($('#planes-btn-area').is(':empty')) {
            $('#planes-btn-area').append(
              '<button type="button" class="btn btn-success" id="add-plane-btn"><i class="fas fa-plus-circle"></i>Add a New Plane</button>'
            );
          }
        }
      });
    } else if (user) {
      if ($('#planes-btn-area').is(':empty')) {
        $('#planes-btn-area').append(
          '<button type="button" class="btn btn-success" id="add-plane-btn"><i class="fas fa-plus-circle"></i>Add a New Plane</button>'
        );
      }
      $('#planes-area').append('<h1>No Planes!</h1>');
    }
  });
};

export default { viewPlanes };
