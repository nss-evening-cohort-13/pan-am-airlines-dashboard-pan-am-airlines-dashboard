import crewData from '../../helpers/data/crewData';

const updateCrewForm = (obj) => {
  $('#update-crew').html(`<h2>Update A Crew</h2>
  <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" value="${obj.name}" class="form-control" id="name">
    </div>
    <div class="form-group">
      <label for="role">Role</label>
      <input type="text" class="form-control" value="${obj.role}" id="role">
    </div>
    <button id="add-crew-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Update Crew</button>
  </form>
  `);
  $('#add-crew-btn').on('click', (e) => {
    e.preventDefault();
    const information = {
      name: $('#name').val() || false,
      role: $('#role').val() || false,
    };
    if (Object.values(information).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please fill all fields!</div>'
      );
    } else {
      $('#error-message').html('');
      crewData
        .updateCrewMember(obj.uid, information)
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

export default { updateCrewForm };
