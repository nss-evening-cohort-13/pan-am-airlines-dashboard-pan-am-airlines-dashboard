import flightData from '../../helpers/data/flightData';
import airportData from '../../helpers/data/airportData';
import crewData from '../../helpers/data/crewData';
import planeData from '../../helpers/data/planeData';

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
        <label for="flight-origin">Origin:</label>
          <select class="form-control" id="flight-origin">
              <option value="">Select an Origin</option>
          </select>
      </div>
      <div class="form-group">
        <label for="flight-destination">Destination:</label>
          <select class="form-control" id="flight-destination">
              <option value="">Select a Destination</option>
          </select>
      </div>
      <div class="form-group">
        <label for="flight-departure-time">Departure Time:</label>
        <input type="time" class="form-control" id="flight-departure-time">
      </div>
      <div class="form-group">
      <label for="flight-duration">Duration:</label>
      <select class="form-control" id="flight-duration">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
    </div>
    <select class="mdb-select md-form" multiple id="crewGroupSelect">
  <optgroup id="crewId" label="Crew Members">
 </optgroup>
  <optgroup id="pilotId" label="Pilots">
  </optgroup>
</select>
    <div class="form-group">
          <label for="planeId">Plane</label>
            <select class="form-control" id="planeId">
              <option value="">Select Plane</option>
            </select>
        </div>
    <button id="add-flight-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Add Flight</button>
  </form>
  `);

  airportData.getAirports().then((response) => {
    $('#flight-origin').html('');
    $('#flight-destination').html('');
    response.forEach((item) => {
      $('select#flight-origin').append(
        `<option value = "${item.uid}">${item.city}, ${item.state}</option>`
      );
      $('select#flight-destination').append(
        `<option value = "${item.uid}">${item.city}, ${item.state}</option>`
      );
    });
  });

  crewData.getCrewMembers().then((response) => {
    $('#crewId').html('');
    $('#pilotId').html('');
    response.forEach((item) => {
      if (item.role === 'Crew Member') {
        $('optgroup#crewId').append(
          `<option value=${item.uid}>${item.name}</option>`
        );
      } else {
        $('optgroup#pilotId').append(
          `<option value=${item.uid}>${item.name}</option>`
        );
      }
    });
  });

  $('#add-flight-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      flightNumber: $('#flight-number').val() || false,
      departureTime: $('#flight-departure-time').val() || false,
      flightDuration: $('#flight-duration').val() || false,
      origin_id: $('#flight-origin').val() || false,
      destination_id: $('#flight-destination').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      const planeInfo = $('#planeId').val();
      const crewInfo = $('#crewGroupSelect').val();

      flightData
        .addFlight(data)
        .then((response) => {
          const flightInfo = {
            flightId: response,
          };

          crewInfo.forEach((crewId) => {
            crewData.updateCrewMember(crewId, flightInfo);
          });

          planeData.updatePlane(planeInfo, flightInfo);
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
      $('#flight-destination').val('');
      $('#flight-origin').val('');
      $('#planeId').val('');
      $('#crewGroupSelect').val('');
    }
  });

  planeData.getPlanes().then((response) => {
    $('#planeId').html('');
    response.forEach((item) => {
      $('#planeId').append(
        `<option value='${item.uid}'}>${item.name}</option>`
      );
    });
  });

  crewData.getCrewMembers().then((response) => {
    response.forEach((crewItem) => {
      $('#crewGroupSelect').append(
        `<option value='${crewItem.uid}>${crewItem.name}</option>`
      );
    });
  });
};

export default { flightForm };
