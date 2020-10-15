import baggageData from '../../helpers/data/baggageData';
import baggageCard from '../cards/baggageCard';

const showBaggage = () => {
  $('#app').html('');
  $('#app').append('<div id="button-area"></div>');
  $('#app').append('<div id="baggage-area"></div>');
  $('#button-area').append('<button type="button" class="btn btn-success" id="add-baggage-btn"><i class="fas fa-plus-circle"></i> Add Baggage</button>');
  baggageData.getBaggage().then((response) => {
    if (response.length) {
      response.forEach((baggage) => {
        $('#baggage-area').append(baggageCard.baggageBuilder(baggage));
      });
    } else {
      $('#baggage-area').append('<h1>No Baggage!</h1>');
    }
  });
};

export default {
  showBaggage,
};
