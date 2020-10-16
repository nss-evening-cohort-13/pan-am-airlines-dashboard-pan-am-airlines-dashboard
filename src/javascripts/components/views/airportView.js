import airportData from '../../helpers/data/airportData';
import airportCard from '../cards/airportCard';

const showAirport = () => {
  $('#app').append('<div id="button-area"></div>');
  $('#app').append('<div id="airports-area"></div>');
  $('#button-area').append('<button type="button" class="btn btn-success" id="add-airport-btn"><i class="fas fa-plus-circle"></i> Add an Airport</button>');
  airportData.getAirports().then((response) => {
    if (response.length) {
      $('#airports-area').html('');
      response.forEach((airport) => {
        $('#airports-area').append(airportCard.airportBuilder(airport));
      });
    } else {
      $('#airports-area').append('<h1>No Airports!</h1>');
    }
  });
};

export default {
  showAirport,
};
