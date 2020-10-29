import crewFunctions from '../../helpers/data/crewData';

const getDataForDetailsCard = (id) => {
  const flightCrew = crewFunctions.getFlightCrewByFlightId(id);
  // const arrayCrew = [];
  Promise.all([flightCrew]).then((values) => {
    console.warn('each value', values);
    // arrayCrew.push(values[key].name);
    // // Object.keys(values).forEach((key) => {
    // //   console.warn(key, values[key].name);
    // //   arrayCrew.push(values[key].name);
    // // });
    return values;
  });
};
const flightDetailsCard = (flightData) => {
  const crew = getDataForDetailsCard(flightData.flightId);
  console.warn('this is the crew:', crew);
  const domString = `
  <div class="flight-details-card" id="${flightData.flightId}">
      <div>${flightData.flightNumber}</div>
      <div>${flightData.flightDuration}</div>
      <div>${flightData.departureTime}</div>
      <div>${crew}</div>
    </div>`;
  return domString;
};

export default { flightDetailsCard };
