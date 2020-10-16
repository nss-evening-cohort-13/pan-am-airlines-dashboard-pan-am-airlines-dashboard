const planeMaker = (plane) => {
  const domString = `<div class="card" style="width: 18rem;">
      <img src="${plane.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${plane.name}</h5>
        <p class="card-text">Type: ${plane.type}</p>
      </div>
      <div class="card-body" id="${plane.uid}">
      </div>
    </div>`;

  return domString;
};

export default { planeMaker };
