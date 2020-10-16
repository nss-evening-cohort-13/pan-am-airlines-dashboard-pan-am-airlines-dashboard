const baggageBuilder = (baggage) => {
  const domString = `<div class="card" style="width: 18rem;">
      <img src="${baggage.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${baggage.city}</h5>
        <p class="card-text">Location: ${baggage.state}</p><p class="card-text">Owner: ${baggage.name}</p>
        <a href="#" class="card-link">Update Bags</a>
        <a href="#" class="card-link">Delete Bags</a>
      </div>
    <div class="card-body">
      </div>
    </div>`;

  return domString;
};
export default { baggageBuilder };
