import flightData from '../../helpers/data/flightData';
import airportData from '../../helpers/data/airportData';
import planeData from '../../helpers/data/planeData';
import crewData from '../../helpers/data/crewData';

const updateFlightForm = (obj) => {
  $('#update-flight').html(`<h2>Update a Flight</h2>
  <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
    <div class="form-group">
        <label for="flight-number">Flight Number:</label>
        <input type="text" value="${obj.flightNumber}" class="form-control" id="flight-number">
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
        <input type="time" value="${obj.departureTime}" class="form-control" id="flight-departure-time">
    </div>
    <div class="form-group">
        <label for="flight-duration">Duration:</label>
        <select class="form-control" id="flight-duration">
              <option ${(obj.flightDuration === 1) ? 'selected' : ''} value="1">1</option>
              <option ${(obj.flightDuration === 2) ? 'selected' : ''} value="2">2</option>
              <option ${(obj.flightDuration === 3) ? 'selected' : ''}value="3">3</option>
              <option ${(obj.flightDuration === 4) ? 'selected' : ''} value="4">4</option>
              <option ${(obj.flightDuration === 5) ? 'selected' : ''} value="5">5</option>
              <option ${(obj.flightDuration === 6) ? 'selected' : ''} value="6">6</option>
              <option ${(obj.flightDuration === 7) ? 'selected' : ''} value="7">7</option>
              <option ${(obj.flightDuration === 8) ? 'selected' : ''} value="8">8</option>
              <option ${(obj.flightDuration === 9) ? 'selected' : ''} value="9">9</option>
              <option ${(obj.flightDuration === 10) ? 'selected' : ''} value="10">10</option>
              <option ${(obj.flightDuration === 11) ? 'selected' : ''} value="11">11</option>
              <option ${(obj.flightDuration === 12) ? 'selected' : ''} value="12">12</option>
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
    <button id="add-flight-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Update Flight</button>
  </form>
  `);

  crewData.getCrewMembers().then((response) => {
    $('optgroup#crewId').html('');
    $('optgroup#pilotId').html('');
    response.forEach((crewMember) => {
      if (crewMember.role === 'Crew Member') {
        $('optgroup#crewId').append(`<option value='${crewMember.uid}' ${obj.flightId === crewMember.flightId ? "selected='selected'" : ''}>${crewMember.name}</option>`);
      } else {
        $('optgroup#pilotId').append(`<option value='${crewMember.uid}' ${obj.flightId === crewMember.flightId ? "selected='selected'" : ''}>${crewMember.name}</option>`);
      }
    });
  });

  airportData.getAirports().then((response) => {
    $('#flight-origin').html('');
    $('#flight-destination').html('');
    response.forEach((item) => {
      $('select#flight-origin').append(`<option value='${item.uid}' ${obj.origin_id === item.uid ? "selected='selected'" : ''}>${item.city}, ${item.state}</option>`);

      $('select#flight-destination').append(`<option value='${item.uid}' ${obj.destination_id === item.uid ? "selected='selected'" : ''}>${item.city}, ${item.state}</option>`);
    });
  });

  planeData.getPlanes().then((response) => {
    $('#planeId').html('');
    response.forEach((item) => {
      $('#planeId').append(`<option value='${item.uid}' ${obj.flightId === item.flightId ? "selected='selected'" : ''}>${item.name}</option>`);
    });
  });

  $('#add-flight-btn').on('click', (e) => {
    e.preventDefault();

    const information = {
      flightNumber: $('#flight-number').val() || false,
      departureTime: $('#flight-departure-time').val() || false,
      flightDuration: $('#flight-duration').val() || false,
      origin_id: $('#flight-origin').val() || false,
      destination_id: $('#flight-destination').val() || false,
    };

    if (Object.values(information).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please fill all fields!</div>'
      );
    } else {
      $('#error-message').html('');
      const crewInfo = $('#crewGroupSelect').val();
      const planeInfo = $('#planeId').val();
      flightData
        .updateFlight(obj.flightId, information)
        .then(() => {
          const flightInfo = {
            flightId: obj.flightId
          };

          // need to compare existing crew members with selected
          crewData.getFlightCrewByFlightId(obj.flightId).then((response) => {
            if (response.length) {
              response.forEach((item) => {
                // if existing crew member is not found in selected
                if (!crewInfo.includes(item.uid)) {
                  crewData.updateCrewMember(item.uid, {
                    flightId: ''
                  });
                }
              });
            }
          });

          crewInfo.forEach((crewId) => {
            crewData.updateCrewMember(crewId, flightInfo);
          });

          planeData.updatePlane(planeInfo, flightInfo);
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Info Updated!</div>'
          );
        })
        .catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 2000);
    }
  });
};

export default { updateFlightForm };
