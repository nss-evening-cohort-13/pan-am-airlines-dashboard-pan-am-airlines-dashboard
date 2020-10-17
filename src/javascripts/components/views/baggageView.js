import baggageData from '../../helpers/data/baggageData';
import baggageCard from '../cards/baggageCard';

const showBaggage = (user) => {
  $('#app').html('');
  $('#app').append('<div id="baggage-btn-area" class="button-area"></div>');
  $('#app').append('<div id="baggage-area"></div>');

  baggageData.getBaggage().then((response) => {
    if (response.length) {
      $('#baggage-area').html('');
      response.forEach((baggage) => {
        $('#baggage-area').append(baggageCard.baggageBuilder(baggage));
        if (user) {
          if ($('#baggage-btn-area').is(':empty')) {
            $('#baggage-btn-area').append(
              '<button type="button" class="btn btn-success" id="add-food-btn"><i class="fas fa-plus-circle"></i>Add Baggage</button>'
            );
          }
          $(`#${baggage.uid}`).append(
            `<a href="#" class="card-link update-link" id=${baggage.name}>Update Item</a>`
          );
          $(`#${baggage.uid}`).append(
            `<a href="#" class="card-link remove-link" id=${baggage.name}>Remove Item</a>`
          );
        }
      });
    } else {
      $('#baggage-area').append('<h1>No Food!</h1>');
    }
  });
};

export default {
  showBaggage,
};
