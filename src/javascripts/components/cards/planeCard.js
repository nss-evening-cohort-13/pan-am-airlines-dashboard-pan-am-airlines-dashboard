const planeBuilder = (plane) => {
  const domString = `<div class="card" style="width: 18rem;">
      <img src="${plane.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${plane.city}</h5>
        <p class="card-text">Location: ${plane.state}</p>
      </div>
      <div class="card-body">
        <a href="#" class="card-link">Update Plane</a>
        <a href="#" class="card-link">Delete Plane</a>
      </div>
    </div>`;
  return domString;
};

export default { planeBuilder };
