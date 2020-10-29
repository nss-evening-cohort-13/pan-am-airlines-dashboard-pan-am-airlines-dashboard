import crewFunctions from '../../helpers/data/crewData';

const getDataForDetailsCard = (id) => new Promise((resolve, reject) => {
  const flightCrew = crewFunctions.getFlightCrewByFlightId(id);
  Promise.all([flightCrew]).then(([crewResponse]) => {
    let crew = '';
    crewResponse.forEach((crewguy) => {
      crew += `<div>${crewguy.name}</div>`;
    });
    resolve(crew);
  }).catch((error) => reject(error));
});

const flightDetailsCard = (flightData) => {
  console.warn(getDataForDetailsCard(flightData.flightId));
  const domString = `
  <div class="flight-details-card" id="${flightData.flightId}">
      <div>${flightData.flightNumber}</div>
      <div>${flightData.flightDuration}</div>
      <div>${flightData.departureTime}</div>
      <div>${getDataForDetailsCard(flightData.flightId)}</div>
    </div>`;
  return domString;
};

export default { flightDetailsCard };
