const airportBuilder = (airport) => {
  const domString = `<div class="card" style="width: 18rem;">
  <img src="${airport.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${airport.state}</h5>
    <p class="card-text">Location: ${airport.city}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${airport.IATA}</li>
  </ul>
  <div class="card-body" id="${airport.uid}">
  </div>
</div>`;
  return domString;
};

export default { airportBuilder };
