const flightBoardCard = (flightObj) => {
  const domString = `
  <tr class="flightrow" id="${flightObj.flightId}">
      <td>${flightObj.flightNumber}</td>
      <td>${flightObj.flightDuration}</td>
      <td>${flightObj.departureTime}</td>
      <td>${flightObj.flightDuration >= 6 ? '<i class="fas fa-utensils"></i><i class="fas fa-cookie-bite"></i>' : '<i class="fas fa-cookie-bite"></i>'
}</td>
    </tr > `;
  return domString;
};

export default { flightBoardCard };
