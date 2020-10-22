import airportData from '../../helpers/data/airportData';

const updateAirportForm = (airportObj) => {
  $('#update-airport-form').html(`
      <h2>Update Aiport</h2>
      <div id="success-message"></div>
      <form>
        <div id="error-message"></div>
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" class="form-control" id="city" value="${airportObj.city}" placeholder="Example: Miami">
        </div>
        <div class="form-group">
          <label for="state">State</label>
          <input type="text" class="form-control" value="${airportObj.state}" id="state" placeholder="Example: Florida">
        </div>
        <div class="form-group">
          <label for="IATA">IATA</label>
          <input type="text" class="form-control" id="IATA" value="${airportObj.IATA}" placeholder="Example: MIA">
        </div>
        <div class="form-group">
          <label for="image">Image</label>
          <input type="image" class="form-control" id="image" value="${airportObj.image}" placeholder="Example: Image Address">
        </div>
       <button id="update-airport-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Airport</button>
      </form>
  `);

  $('#update-airport-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      city: $('#city').val() || false,
      state: $('#state').val() || false,
      IATA: $('#IATA').val() || false,
      image: $('#image').val() || false
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html('<div class="alert alert-danger" role="alert">Please complete all fields</div>');
    } else {
      $('#error-message').html('');

      airportData.updateAirport(airportObj.uid, data)
        .then(() => {
          $('#success-message').html('<div class="alert alert-success" role="alert">Your Airport Was Updated!</div>');

          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        }).catch((error) => console.warn(error));
    }
  });
};

export default { updateAirportForm };
