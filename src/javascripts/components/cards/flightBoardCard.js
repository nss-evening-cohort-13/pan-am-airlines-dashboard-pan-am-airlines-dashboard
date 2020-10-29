import crew from '../../helpers/data/crewData';

const flightBoardCard = (flightObj) => {
  const isFull = crew.getCrewComplete(flightObj.flightId);
  const domString = `
  <tr class="flightrow" id="${flightObj.flightId}">
      <td>${flightObj.flightNumber}</td>
      <td>${flightObj.flightDuration}</td>
      <td>${flightObj.departureTime}</td>
      <td>${isFull}</td>
    </tr>`;
  return domString;
};

export default { flightBoardCard };
