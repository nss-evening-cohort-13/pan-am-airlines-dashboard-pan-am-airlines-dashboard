const airportBuilder = (airport) => {
  const domString = `<div class="card" style="width: 18rem;">
    <img src="${airport.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${airport.city}</h5>
      <p class="card-text">Location: ${airport.state}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Airport Code: ${airport.IATA}</li>
    </ul>
    <div class="card-body">
    </div>
  </div>`;
  //  if (user) {
  //   card-body.append <a href="#" class="card-link">Update Airport</a>
  //   <a href="#" class="card-link">Delete Airport</a>
  // }
  return domString;
};

export default { airportBuilder };
