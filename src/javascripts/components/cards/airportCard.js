import firebase from 'firebase/app';
import 'firebase/auth';
import airportData from '../../helpers/data/airportData';

const airportBuilder = (airport) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href="#" id="${airport.uid}" class="btn btn-info update-airport"><i class="far fa-edit"></i> Update airport</a>
    <a href="#" id="${airport.uid}" class="btn btn-danger delete-airport">Delete airport</a>
  `;
  }
  const domString = `<div class="card" id="airport-${airport.uid}" style="width: 18rem;">
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
  $('body').on('click', '.delete-airport', (e) => {
    console.warn('dlete');
    e.stopImmediatePropagation();
    const uid = e.currentTarget.id;
    $(`.card#airport-${uid}`).remove();
    airportData.deleteAirport(uid);
  });
  return domString;
};

export default { airportBuilder };
