import crewFunctions from '../../helpers/data/crewData';

const flightDetailsCard = (flightData) => {
  const domString = `
  <div class="flight-details-card" id="${flightData.flightId}">
      <div>${flightData.flightNumber}</div>
      <div>${flightData.flightDuration}</div>
      <div>${flightData.departureTime}</div>
      <h3> Crew: </h3>
      <div id="daCrew"></div>
      <h3> Pilot: </h3>
      <div id="pilot"></div>
      <div id="complete"></div>
    </div>`;
  crewFunctions.getFlightCrewByFlightId(flightData.flightId).then((response) => {
    $('#pilot').html('');
    $('#daCrew').html('');
    let pilots = 0;
    let crew = 0;
    response.forEach((item) => {
      if (item.role === 'Pilot') {
        pilots += 1;
        crew += 1;
        $('#pilot').append(
          `<div class='${item.uid}'>${item.name}</div>`
        );
      } else {
        crew += 1;
        $('#daCrew').append(
          `<div class='${item.uid}'>${item.name}</div>`
        );
      }
    });
    $('#complete').html('');
    if ((pilots >= 2) && (crew >= 4)) {
      $('#complete').append('<h3 class="green">Complete Flight</h3>');
    } else {
      $('#complete').append('<h3 class="red">Incomplete Flight</h3>');
    }
  });
  return domString;
};

export default { flightDetailsCard };
