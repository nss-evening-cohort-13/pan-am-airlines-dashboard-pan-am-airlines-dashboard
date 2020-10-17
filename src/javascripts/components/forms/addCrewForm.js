import getCrewMembers from '../../helpers/data/crewData';

const crewForm = () => {
  $('#crew-form').html(
    `<h2>Add Crew</h2>
          <div id="success-message"></div>
          <form>
            <div id="error-message"></div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
            <label for="role">Role</label>
            <input type="text" class="form-control" id="role">
          </div>
            <div class="form-group">
              <label for="uid">uid</label>
              <input type="text" class="form-control" id="uid">
            </div>
            <button id="add-crew-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Add  Crew</button>
          </form>
          `
  );
  $('#add-crew-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#name').val() || false,
      role: $('#role').val() || false,
      uid: $('#uid').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      getCrewMembers.addCrew(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Crew Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#sucess-message').html('');
      }, 3000);
      $('#name').val('');
      $('#role').val('');
      $('#uid').val('');
    }
  });
};

export default { crewForm };
