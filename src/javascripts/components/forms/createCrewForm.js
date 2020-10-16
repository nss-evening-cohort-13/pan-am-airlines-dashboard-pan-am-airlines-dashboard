// import planeData from '../../helpers/data/planeData';
import crewData from '../../helpers/data/crewData';

const addBoardForm = () => {
  $('#crewForm').html(`<h1>Add a crew member</h1>
    <div id="user-message"></div>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="John Smith">
      </div>
      <div class="form-group>
        <label for="image">Role</label>
        <input type="text" class="form-control" id="role" placeholder="Co-pilot, flight attendant">
      </div>
      <div class="form-group>
        <label for="plane">Plane</label>
          <select class="form-control" id="airplane">
            <option value="">What Plane do they belong to?</option>
          </select>
      </div>
      <button id="addCrewButton" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add It!</button>
</form>
    `);
  // planeData.getAllPlanes().then((response) => {
  //   response.forEach((item) => {
  //     $('select').append(`<option value="${item.uid}">${item.name}</select>`);
  //   });
  // });
  $('#addCrewButton').on('click', (e) => {
    e.preventDefault();

    const crewInfo = {
      name: $('#name').val() || false,
      role: $('#role').val() || false,
      planeuid: $('#airplane').val() || false,
    };

    if (Object.values(crewInfo).includes(false)) {
      $('#user-message').html('<div class="alert alert-danger" role="alert">All fields must have values!</div>');
    } else {
      $('#user-message').html('');
      crewData
        .addCrew(crewInfo)
        .then(() => {
          $('#user-message').html('<div class="alert alert-success" role="alert">Crew member added</div>');
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#user-message').html('');
      }, 2000);
      $('#name').val('');
      $('#role').val('');
      $('#airplane').val('');
    }
  });
};

export default { addBoardForm };
