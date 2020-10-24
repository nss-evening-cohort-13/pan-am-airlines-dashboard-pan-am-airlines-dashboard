import flightData from '../../helpers/data/flightData';

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

      flightData
        .addFlight(data)
        .then(() => {
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
    }
  });
};

export default { flightForm };
