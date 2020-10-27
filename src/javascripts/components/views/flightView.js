import flightData from '../../helpers/data/flightData';
import card from '../cards/flightCard';
import flightDetails from '../cards/flightDetailsCard';

const viewFlight = (flightId) => {
  flightData.getSingleFlight(flightId).then((response) => {
    if (response) {
      $('.flight-details #details').html('');
      $('.flight-details #details').append(flightDetails.flightDetailsCard(response));
    }
  });
};

const viewFlights = (user) => {
  $('#app').html('');
  $('#app').append('<div id="flight-btn-area" class="button-area"></div>');
  $('#app').append('<div id="flights-area"></div>');

  flightData.getFlights().then((response) => {
    if (response.length) {
      $('#flights-area').html('');
      response.forEach((flight) => {
        $('#flight-area').append(card.flightCard(flight));
        if (user) {
          if ($('#flight-btn-area').is(':empty')) {
            $('#flight-btn-area').append(
              '<button type="button" class="btn btn-success" id="add-flight-btn"><i class="fas fa-plus-circle"></i>Add a New Flight</button>'
            );
          }
        }
      });
    } else if (user) {
      if ($('#flight-btn-area').is(':empty')) {
        $('#flight-btn-area').append(
          '<button type="button" class="btn btn-success" id="add-flight-btn"><i class="fas fa-plus-circle"></i>Add a New Flight</button>'
        );
      }
      $('#flights-area').append('<h1>No Flights!</h1>');
    }
  });
};

export default { viewFlights, viewFlight };
