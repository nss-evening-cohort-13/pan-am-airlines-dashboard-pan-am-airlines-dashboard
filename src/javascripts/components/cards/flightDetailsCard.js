import crewFunctions from '../../helpers/data/crewData';

const flightDetailsCard = (flightData) => {
  const domString = `
  <div class="flight-details-card" id="${flightData.flightId}">
      <div>${flightData.flightNumber}</div>
      <div>${flightData.flightDuration}</div>
      <div>${flightData.departureTime}</div>
      <h3> Crew: </h3>
      <div id="daCrew"></div>
    </div>`;
  crewFunctions.getFlightCrewByFlightId(flightData.flightId).then((response) => {
    response.forEach((item) => {
      $('#daCrew').append(
        `<div class='${item.uid}'>${item.name}</div>`
      );
    });
  });
  return domString;
};

export default { flightDetailsCard };
