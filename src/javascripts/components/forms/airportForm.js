import AirportData from '../../helpers/data/airportData';

const airportForm = () => {
  $('#airport-form').html(`
  <h2>Add an Airport</h2>
  <div id="success-message"></div>
  <form>
      <div id="error-message"></div>
      <div class="form-group">
      <label for="city">City</label>
      <input type="text" class="form-control" id="city" placeholder="Example: Nashville">
      </div>
      <div class="form-group">
      <label for="state">State</label>
      <input type="text" class="form-control" id="state" placeholder="Example: Tennessee">
      </div>
        <div class="form-group">
      <label for="iata">IATA</label>
      <input type="text" class="form-control" id="IATA" placeholder="Example: BNA">
      </div>
      <div class="form-group">
      <label for="image">Image</label>
      <input type="text" class="form-control" id="image" placeholder="Image address">
      </div>
      <button id="add-airport-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i>Add Airport</button>
  </form>`);

  $('#add-airport-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      city: $('#city').val() || false,
      state: $('#state').val() || false,
      IATA: $('#state').val() || false,
      image: $('#image').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      AirportData
        .addAirport(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Airport Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
      $('#name').val('');
      $('#image').val('');
    }
  });
};

export default {
  airportForm
};
