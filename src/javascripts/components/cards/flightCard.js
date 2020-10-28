import firebase from 'firebase/app';
import 'firebase/auth';
import deleteFlight from '../../helpers/data/flightData';

const flightCard = (flightObj) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href='#' id='${flightObj.flightId}' class='btn btn-primary edit-flight'>Update Flight</a>
    <a id='${flightObj.flightId}' href='#' class='delete-flight btn btn-danger'>Delete Flight</a>`;
  }

  const domString = $('#flights-area').append(`
    <div class="flight card" id="flight-${flightObj.flightId}" style="width: 18rem;">
    <h3 class="card-title">Flight Number: ${flightObj.flightNumber}</h3>
    <div class="card-body">
      <h3 id="flight-departure-time">Departure Time: ${flightObj.departureTime}</h3>
      <h5 id="flight-duration">Flight Duration: ${flightObj.flightDuration}</h5>
    </div>
    ${buttons}
  </div>`);

  $('body').on('click', '.delete-flight', (e) => {
    e.stopImmediatePropagation();
    const flightId = e.currentTarget.id;
    $(`.card#flight-${flightId}`).remove();
    deleteFlight.deleteFlight(flightId);
  });
  return domString;
};

export default { flightCard };
