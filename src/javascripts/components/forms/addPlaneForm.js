import planeData from '../../helpers/data/planeData';

const addPlaneForm = () => {
  $('#app').append(`<form id="addPlaneForm">
  <h1>Add a Plane</h1>
  <div id="planeErrorMsg"></div>
  <div id="planeSuccessMsg"></div>
  <div class="form-group">
    <label for="planeName">Name</label>
    <input type="text" class="form-control" id="planeName" required>
  </div>
  <div class="form-group">
    <label for="planeImage">Image Link</label>
    <input type="url" class="form-control" id="planeImage" required/>
  </div>
  <button type="submit" class="btn btn-outline-dark" id="submitPlane">Submit</button>
</form>`);

  $('#submitPlane').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#planeName').val(),
      imageUrl: $('#planeImage').val()
    };

    if (document.getElementById('addPlaneForm').checkValidity()) {
      $('#planeErrorMsg').html('');

      planeData.addPlane(data)
        .then(() => {
          $('#planeSuccessMsg').html('<div class="alert alert-success" role="alert">The plane has been added!</div>');
        }).catch((error) => console.warn(error));

      setTimeout(() => {
        $('#planeSuccessMsg').html('');
      }, 2000);

      $('#planeName').val('');
      $('#planeImage').val('');
    } else {
      $('#planeErrorMsg').html('<div class="alert alert-danger" role="alert">Please fill out all fields correctly.</div>');
    }
  });
};

export default { addPlaneForm };
