const flightDetailsCard = (flightData) => {
  const domString = `
  <tr class="flight-details-card" id="${flightData.flightId}">
      <td>${flightData.flightNumber}</td>
      <td>${flightData.flightDuration}</td>
      <td>${flightData.departureTime}</td>
    </tr>`;
  return domString;
};

export default { flightDetailsCard };
