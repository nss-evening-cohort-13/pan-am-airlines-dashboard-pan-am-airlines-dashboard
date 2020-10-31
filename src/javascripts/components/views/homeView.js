import flightData from '../../helpers/data/flightData';
import flightBoardCard from '../cards/flightBoardCard';

const showHomepage = () => {
  $('#app').html('');
  $('#app').append('<p>Welcome to the PanAm DashBoard!</p>');
  $('#app').append('<div id="landing-page-table"></div>');

  flightData.getFlights().then((response) => {
    if (response.length) {
      let rows = '';
      response.forEach((flight) => {
        rows += flightBoardCard.flightBoardCard(flight);
      });
      $('#landing-page-table').html('');
      $('#landing-page-table').append(
        `<div><h1>Departures</h1></div><table class="table table-hover table-responsive table-dark table-striped">
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Flight Duration</th>
              <th>Departure Time</th>
              <th>Meals on Flight</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
      </table>`
      );
      $('.flight-details').html('');
      $('#app').append(`<div class="flight-details">
      <div class="title"><h1>Welcome to Panam</h1></div>
      <div class="instructions">Click on a flight row to see details</div>
      <div id="details">(none selected)</div>
      </div>`);
    }
  });
};

export default { showHomepage };
