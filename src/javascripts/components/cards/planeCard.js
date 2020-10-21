import firebase from 'firebase/app';
import 'firebase/auth';

const planeMaker = (plane) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href="#" id="${plane.uid}" class="btn btn-info update-plane"><i class="far fa-edit"></i> Update plane</a>
    <a href="#" id="${plane.uid}" class="btn btn-danger delete-plane">Delete plane</a>
  `;
  }
  const domString = `<div class="card" style="width: 18rem;">
      <img src="${plane.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${plane.name}</h5>
        <p class="card-text">Type: ${plane.type}</p>
      </div>
      <div class="card-body" id="${plane.uid}">
      </div>
      ${buttons}
    </div>`;

  return domString;
};

export default { planeMaker };
