import firebase from 'firebase/app';
import 'firebase/auth';

const flightCard = (flightObj) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href='#' id='${flightObj.flightId}' class='btn btn-primary edit-flight'>Update Flight</a>
    <a id='delete__${flightObj.flightId}' href='#' class='delete btn btn-danger'>Delete Flight</a>`;
  }

  const domString = $('#app').append(`
    <div class="flight" id="flight-${flightObj.flightId}">
    <div class="card" style="width: 18rem;">
    <h3 class="card-title">Flight Number: ${flightObj.flightNumber}</h3>
    <div class="card-body">
      <h3 id="flight-departure-time">Departure Time: ${flightObj.departureTime}</h3>
      <h5 id="flight-duration">Flight Duration: ${flightObj.flightDuration}</h5>
      ${buttons}
    </div>
  </div>`);
  return domString;
};

export default { flightCard };
