const foodCardBuilder = (foodItem) => {
    const domString = `<div class="card" style="width: 18rem;">
    <img src="${foodItem.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${foodItem.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${foodItem.description}</li>
    </ul>
    <div class="card-body" id="${foodItem.uid}">
    </div>
  </div>`;
    return domString;
  };
  
  export default { foodCardBuilder };
  