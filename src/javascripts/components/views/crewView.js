import crewData from '../../helpers/data/crewData';
import crewCard from '../cards/crewCard';

const viewCrew = (user) => {
  $('#app').html('');
  $('#app').append('<div id="crew-btn-area" class="button-area"></div>');
  $('#app').append('<div id="crew-area"></div>');
  $('#button-area').append(
    '<button type="button" class="btn btn success" id="add-crew-btn"><i class="fas fa plus"></i>Add Crew Member</button>'
  );

  crewData.getCrewMembers().then((response) => {
    if (response.length) {
      $('#crew-area').html('');
      response.forEach((crewObj) => {
        $('#crew-area').append(crewCard.crewBuilder(crewObj));
        if (user) {
          $(`#${crewObj.name}`).append(
            `<a href="#" class="card-link update-link" id=${crewObj.uid}>Update Crew</a>`
          );
          $(`#${crewObj.name}`).append(
            `<a href="#" class="card-link remove-link" id=${crewObj.uid}>Remove Crew Member</a>`
          );
        }
      });
    } else {
      $('#crew-area').append('<h1>No Crew!</h1>');
    }
  });
};

export default {
  viewCrew
};
