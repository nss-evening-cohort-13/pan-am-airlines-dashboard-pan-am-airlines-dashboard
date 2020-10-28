import crewFunctions from '../../helpers/data/crewData';

const getDataForDetailsCard = (id) => new Promise((resolve, reject) => {
  Promise.all([crewFunctions.getFlightCrewByFlightId(id)]).then((crewResponse) => {
    const crewStuff = [];
    crewResponse.forEach((crew) => {
      crewStuff.push(crew);
    });
    resolve(crewStuff);
  }).catch((error) => reject(error));
});
const flightDetailsCard = (flightData) => {
  const data = getDataForDetailsCard(flightData.flightId);
  const domString = `
  <div class="flight-details-card" id="${flightData.flightId}">
      <div>${flightData.flightNumber}</div>
      <div>${flightData.flightDuration}</div>
      <div>${flightData.departureTime}</div>
      <div>${data[1][0].name}</div>
    </div>`;
  return domString;
};

export default { flightDetailsCard };
