import airportData from '../../helpers/data/airportData';
import airportCard from '../cards/airportCard';
import form from '../forms/airportForm';

const showAirport = (user) => {
  $('#app').html('');
  $('#app').append('<div id="airport-btn-area" class="button-area"></div>');
  $('#app').append('<div id="airports-area"></div>');
  airportData.getAirports().then((response) => {
    if (response.length) {
      $('#airports-area').html('');
      response.forEach((airport) => {
        $('#airports-area').append(airportCard.airportBuilder(airport, user));
        if (user) {
          if ($('#airport-btn-area').is(':empty')) {
            $('#airport-btn-area').append(
              '<button type="button" class="btn btn-success" id="add-airport-btn"><i class="fas fa-plus-circle"></i>Add a New Airport</button>'
            );
          }
          $(`#${airport.uid}`).append(
            `<a href="#" class="card-link update-link" id=${airport.IATA}>Update Airport</a>`
          );
          $(`#${airport.uid}`).append(
            `<a href="#" class="card-link remove-link" id=${airport.IATA}>Remove Airport</a>`
          );
        }
      });
    } else {
      if (user) {
        if ($('#airport-btn-area').is(':empty')) {
          $('#airport-btn-area').append(
            '<button type="button" class="btn btn-success" id="add-airport-btn"><i class="fas fa-plus-circle"></i>Add a New Airport</button>'
          );
        }
      }
      if ($('#airports-area').is(':empty')) {
        $('#airports-area').append('<h1>No Airports!</h1>');
      }
    }
  });
};

const airportFormView = () => {
  $('#app').html('<div class = "forms" id = "airport-form"></div>');
  form.airportForm();
};

export default {
  showAirport,
  airportFormView
};
