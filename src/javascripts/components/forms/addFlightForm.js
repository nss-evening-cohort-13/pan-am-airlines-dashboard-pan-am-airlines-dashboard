import flightData from '../../helpers/data/flightData';
import planeData from '../../helpers/data/planeData';

const flightForm = () => {
  $('#flight-form').html(`
  <h2>Add A Flight</h2>
    <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
      <div class="form-group">
        <label for="flight-number">Flight Number:</label>
        <input type="text" class="form-control" id="flight-number">
      </div>
      <div class="form-group">
        <label for="flight-departure-time">Departure Time:</label>
        <input type="text" class="form-control" id="flight-departure-time">
      </div>
      <div class="form-group">
      <label for="flight-duration">Duration:</label>
      <input type="text" class="form-control" id="flight-duration">
    </div>
    <div class="form-group">
          <label for="planeId">Plane</label>
            <select class="form-control" id="planeId">
              <option value="">Select Plane</option>
            </select>
        </div>
    <button id="add-flight-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Add Flight</button>
  </form>
  `);
  $('#add-flight-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      flightNumber: $('#flight-number').val() || false,
      departureTime: $('#flight-departure-time').val() || false,
      flightDuration: $('#flight-duration').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      const planeInfo = $('#planeId').val();

      flightData
        .addFlight(data)
        .then((response) => {
          const flightInfo = {
            flightId: response
          };
          planeData.updatePlane(planeInfo, flightInfo);
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Flight Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
      $('#flight-number').val('');
      $('#flight-departure-time').val('');
      $('#flight-duration').val('');
      $('#planeId').val('');
    }
  });
  planeData.getPlanes().then((response) => {
    response.forEach((item) => {
      $('#planeId').append(`<option value='${item.uid}'}>${item.name}</option>`);
    });
  });
};

export default { flightForm };
