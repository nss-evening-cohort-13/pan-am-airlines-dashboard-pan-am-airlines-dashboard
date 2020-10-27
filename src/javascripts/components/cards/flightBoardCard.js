const flightBoardCard = (flightObj) => {
  const domString = `
  <tr class="flightrow" id="${flightObj.flightId}">
      <td>${flightObj.flightNumber}</td>
      <td>${flightObj.flightDuration}</td>
      <td>${flightObj.departureTime}</td>
    </tr>`;
  return domString;
};

export default { flightBoardCard };
