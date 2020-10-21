import firebase from 'firebase/app';
import 'firebase/auth';

const airportBuilder = (airport) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href="#" id="${airport.uid}" class="btn btn-info update-airport"><i class="far fa-edit"></i> Update airport</a>
    <a href="#" id="${airport.uid}" class="btn btn-danger delete-airport">Delete airport</a>
  `;
  }
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
  ${buttons}
</div>`;
  return domString;
};

export default { airportBuilder };
