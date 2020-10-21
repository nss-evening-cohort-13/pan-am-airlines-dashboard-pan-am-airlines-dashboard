import firebase from 'firebase/app';
import 'firebase/auth';
import planeData from '../../helpers/data/planeData';

const planeMaker = (plane) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href="#" id="${plane.uid}" class="btn btn-info update-plane"><i class="far fa-edit"></i> Update Plane</a>
    <a href="#" id="${plane.uid}" class="btn btn-danger delete-plane"><i class="fas fa-trash"></i> Delete Plane</a>
  `;
  }
  const domString = `<div class="card plane" id="plane-${plane.uid}" style="width: 18rem;">
      <img src="${plane.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${plane.name}</h5>
        <p class="card-text">Type: ${plane.type}</p>
      </div>
      <div class="card-body" id="${plane.uid}">
      </div>
      ${buttons}
    </div>`;
  $('body').on('click', '.delete-plane', (e) => {
    e.stopImmediatePropagation();
    const uid = e.currentTarget.id;
    $(`.card#plane-${uid}`).remove();
    planeData.deletePlanes(uid);
  });
  return domString;
};

export default { planeMaker };
