import firebase from 'firebase/app';
import 'firebase/auth';
import foodData from '../../helpers/data/foodData';

const foodCardBuilder = (foodItem) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href="#" id="${foodItem.uid}" class="btn btn-info update-food"><i class="far fa-edit"></i> Update food</a>
    <a href="#" id="${foodItem.uid}" class="btn btn-danger delete-food">Delete food</a>
  `;
  }
  const domString = `<div class="card food" id="food-${foodItem.uid}" style="width: 18rem;">
    <img src="${foodItem.image_URL}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${foodItem.name}</h5>
      <h5 class="card-title">${foodItem.cost}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${foodItem.description}</li>
      <li class="list-group-item">${foodItem.mealType}</li>
    </ul>
    <div class="card-body" id="${foodItem.food_id}">
    </div>
    ${buttons}
  </div>`;
  $('body').on('click', '.delete-food', (e) => {
    e.stopImmediatePropagation();
    const uid = e.currentTarget.id;
    $(`.card#food-${uid}`).remove();
    foodData.deleteFood(uid);
  });
  return domString;
};
export default { foodCardBuilder };
