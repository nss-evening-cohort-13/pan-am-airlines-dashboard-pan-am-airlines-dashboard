const foodCardBuilder = (foodItem) => {
  const domString = `<div class="card" style="width: 18rem;">
    <img src="${foodItem.image_URL}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${foodItem.name}</h5>
      <h5 class="card-title">${foodItem.cost}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${foodItem.description}</li>
    </ul>
    <div id="${foodItem.food_id}">
    </div>
  </div>`;
  return domString;
};
export default { foodCardBuilder };
