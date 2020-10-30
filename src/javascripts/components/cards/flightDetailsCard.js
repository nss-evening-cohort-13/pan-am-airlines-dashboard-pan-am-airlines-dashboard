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
    </div>`;
  crewFunctions.getFlightCrewByFlightId(flightData.flightId).then((response) => {
    response.forEach((item) => {
      if (item.role === 'Pilot') {
        $('#pilot').html('');
        $('#pilot').append(
          `<div class='${item.uid}'>${item.name}</div>`
        );
      } else {
        $('#daCrew').html('');
        $('#daCrew').append(
          `<div class='${item.uid}'>${item.name}</div>`
        );
      }
    });
  });
  return domString;
};

export default { flightDetailsCard };
