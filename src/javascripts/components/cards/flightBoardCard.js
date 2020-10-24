const flightBoardCard = (flightObj) => {
  const domString = `
  <tr>
      <td>${flightObj.flightNumber}</td>
      <td>${flightObj.flightDuration}</td>
      <td>${flightObj.departureTime}</td>
    </tr>`;
  return domString;
};

export default { flightBoardCard };
