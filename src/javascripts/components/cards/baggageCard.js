import firebase from 'firebase/app';
import 'firebase/auth';

const baggageBuilder = (baggage) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href="#" id="${baggage.uid}" class="btn btn-info update-baggage"><i class="far fa-edit"></i> Update baggage</a>
    <a href="#" id="${baggage.uid}" class="btn btn-danger delete-baggage">Delete baggage</a>
  `;
  } else {
    buttons += '<div class="sellMessage">Please ask the desk attendent about our assortment of baggage for sale!</div>';
  }
  const domString = `<div class="card" style="width: 18rem;">
      <img src="${baggage.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Owner: ${baggage.owner}</h5>
        <div class="card-text">Destination: ${baggage.state}</div>
        <ul class="list-group list-group-flush">
    <li class="list-group-item">Color: ${baggage.color}</li>
  </ul>
      
    <div class="card-body"  id="${baggage.uid}">
      </div>
      ${buttons}
    </div>`;

  return domString;
};
export default { baggageBuilder };
