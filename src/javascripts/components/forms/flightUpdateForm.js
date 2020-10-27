import flightData from '../../helpers/data/flightData';
import airportData from '../../helpers/data/airportData';
import planeData from '../../helpers/data/planeData';

const updateFlightForm = (obj) => {
  $('#update-flight').html(`<h2>Update a Flight</h2>
  <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
    <div class="form-group">
        <label for="flight-number">Flight Number:</label>
        <input type="text" value="${obj.flightNumber}" class="form-control" id="flight-number">
    </div>
    <div class="form-group">
    <label for="flight-origin">Origin:</label>
      <select class="form-control" id="flight-origin">
          <option value="">Select an Origin</option>
      </select>
    </div>
    <div class="form-group">
      <label for="flight-destination">Destination:</label>
        <select class="form-control" id="flight-destination">
            <option value="">Select a Destination</option>
        </select>
    </div>
    <div class="form-group">
        <label for="flight-departure-time">Departure Time:</label>
        <input type="text" value="${obj.departureTime}" class="form-control" id="flight-departure-time">
    </div>
    <div class="form-group">
        <label for="flight-duration">Duration:</label>
        <input type="text" value="${obj.flightDuration}" class="form-control" id="flight-duration">
    </div>
    <div class="form-group">
          <label for="planeId">Plane</label>
            <select class="form-control" id="planeId">
              <option value="">Select Plane</option>
            </select>
        </div>
    <button id="add-flight-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Update Flight</button>
  </form>
  `);

  airportData.getAirports().then((response) => {
    response.forEach((item) => {
      $('select#flight-origin').append(
        `<option value = "${item.uid}">${item.city}, ${item.state}</option>`
      );
      $('select#flight-destination').append(
        `<option value = "${item.uid}">${item.city}, ${item.state}</option>`
      );
    });
  });

  $('#add-flight-btn').on('click', (e) => {
    e.preventDefault();
    const information = {
      flightNumber: $('#flight-number').val() || false,
      departureTime: $('#flight-departure-time').val() || false,
      flightDuration: $('#flight-duration').val() || false,
      planeId: $('#planeId').val() || false
    };
    if (Object.values(information).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please fill all fields!</div>'
      );
    } else {
      $('#error-message').html('');
      flightData
        .updateFlight(obj.flightId, information)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Info Updated!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#success-message').html('');
      }, 2000);
    }
  });
  planeData.getPlanes().then((response) => {
    response.forEach((item) => {
      $('#planeId').append(`<option value='${item.uid}' ${obj.planeId === item.uid ? "selected='selected'" : ''}>${item.name}</option>`);
    });
  });
};

export default { updateFlightForm };
