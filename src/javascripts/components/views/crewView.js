import crewData from '../../helpers/data/crewData';
import crewCard from '../cards/crewCard';

const viewCrew = (user) => {
  $('#app').html('');
  $('#app').append('<div id="crew-btn-area" class="button-area"></div>');
  $('#app').append('<div id="crew-area"></div>');

  crewData.getCrewMembers().then((response) => {
    if (response.length) {
      $('#crew-area').html('');
      response.forEach((crewObj) => {
        $('#crew-area').append(crewCard.crewBuilder(crewObj));
        if (user) {
          if ($('#crew-btn-area').is(':empty')) {
            $('#crew-btn-area').append(
              '<button type="button" class="btn btn-success" id="add-crew-btn"><i class="fas fa-plus-circle"></i>Add Crew</button>'
            );
          }
          $(`#${crewObj.uid}`).append(
            `<a href="#" class="card-link update-link" id=${crewObj.name}>Update Crew</a>`
          );
          $(`#${crewObj.uid}`).append(
            `<a href="#" class="card-link remove-link" id=${crewObj.name}>Remove Crew</a>`
          );
        }
      });
    } else {
      if (user) {
        if ($('#crew-btn-area').is(':empty')) {
          $('#crew-btn-area').append(
            '<button type="button" class="btn btn-success" id="add-crew-btn"><i class="fas fa-plus-circle"></i>Add a Crew Member</button>'
          );
        }
      }
      if ($('#crew-area').is(':empty')) {
        $('#crew-area').append('<h1>No Crew!</h1>');
      }
    }
  });
};

export default {
  viewCrew
};
