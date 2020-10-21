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
        }
      });
    } else if (user) {
      if ($('#crew-btn-area').is(':empty')) {
        $('#crew-btn-area').append(
          '<button type="button" class="btn btn-success" id="add-crew-btn"><i class="fas fa-plus-circle"></i>Add Crew</button>'
        );
      }
      $('#crew-area').append('<h1>No Crew!</h1>');
    }
  });
};

export default {
  viewCrew
};
