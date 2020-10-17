import planeData from '../../helpers/data/planeData';

const planeForm = () => {
  $('#plane-form').html(
    `<h2>Add A Plane</h2>
          <div id="success-message"></div>
          <form>
            <div id="error-message"></div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
              <label for="location">Location</label>
              <input type="text" class="form-control" id="location">
            </div>
            <div class="form-group">
              <label for="image">Image Link</label>
              <input type="text" class="form-control" id="image">
            </div>
            <button id="add-plane-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Add Plane</button>
          </form>
          `
  );
  $('#add-plane-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#name').val() || false,
      location: $('#location').val() || false,
      image: $('#image').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      planeData.addPlane(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Plane Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#sucess-message').html('');
      }, 30000);
      $('#name').val('');
      $('#location').val('');
      $('#image').val('');
    }
  });
};

export default { planeForm };
