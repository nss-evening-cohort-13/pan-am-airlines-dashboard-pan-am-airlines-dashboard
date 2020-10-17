import BaggageData from '../../helpers/data/baggageData';

const baggageForm = () => {
  $('#baggage-form').html(`
  <h2>Add a Bag</h2>
  <div id="success-message"></div>
  <form>
      <div id="error-message"></div>
      <div class="form-group">
      <label for="owner">Owner</label>
      <input type="text" class="form-control" id="owner" placeholder="Example: Lauryn Hill">
      </div>
      <div class="form-group">
      <label for="state">Destination</label>
      <input type="text" class="form-control" id="state" placeholder="Example: Tennessee">
      </div>
        <div class="form-group">
      <label for="color">Color</label>
      <input type="text" class="form-control" id="color" placeholder="Example: Black">
      </div>
      <div class="form-group">
      <label for="image">Image</label>
      <input type="text" class="form-control" id="image" placeholder="Image address">
      </div>
      <button id="add-baggage-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i>Add Baggage</button>
  </form>`);

  $('#add-baggage-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      owner: $('#owner').val() || false,
      state: $('#state').val() || false,
      color: $('#color').val() || false,
      image: $('#image').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      BaggageData
        .addBaggage(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Baggage Was Added!</div>'
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
  baggageForm
};
