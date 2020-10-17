import planeData from '../../helpers/data/planeData';

const updatePlaneForm = (obj) => {
  $('#update-pin').html(`<h2>Update A Plane</h2>
  <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name">
    </div>
    <div class="form-group">
      <label for="type">Type</label>
      <input type="text" class="form-control" id="type">
    </div>
    <div class="form-group">
      <label for="image">Image Link</label>
      <input type="text" class="form-control" id="image">
    </div>
    <button id="add-plane-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Update Plane</button>
  </form>
  `);
  $('#add-plane-btn').on('click', (e) => {
    e.preventDefault();
    const information = {
      name: $('#name').val() || false,
      type: $('#type').val() || false,
      image: $('#image').val() || false,
    };
    if (Object.values(information).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please fill all fields!</div>'
      );
    } else {
      $('#error-message').html('');
      planeData
        .updatePlane(obj.uid, information)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Info Updated!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#success-message').html('');
      }, 2000);
      $('#board').val('');
    }
  });
};

export default { updatePlaneForm };
