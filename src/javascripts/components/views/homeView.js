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
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
      </table>`
      );
    }
  });
};

export default { showHomepage };
