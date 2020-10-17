import home from '../components/views/homeView';
import airport from '../components/views/airportView';
import addplaneView from '../components/views/addPlaneView';
import Food from '../components/views/foodView';
import baggage from '../components/views/baggageView';
import crew from '../components/views/crewView';
import plane from '../components/views/planesView';
import addFoodView from '../components/views/addFoodView';

const viewHelper = (id, user) => {
  switch (id) {
    case '#':
    case 'home':
      return home.showHomepage();
    case 'airports-link':
      return airport.showAirport(user);
    case 'planes-link':
      return plane.viewPlanes(user);
    case 'add-plane-btn':
      $('#app').html('');
      return addplaneView.addplaneView();
    case 'foods-link':
      return Food.showFood(user);
    case 'add-food-btn':
      $('#app').html('');
      return addFoodView.addFoodView();
    case 'baggage-link':
      return baggage.showBaggage(user);
    case 'crew-link':
      return crew.viewCrew(user);
    case 'add-airport-btn':
      return airport.airportFormView();
    case 'add-baggage-btn':
      return baggage.baggageFormView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, user) => {
  viewHelper(view, user);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, user);
  });
  $('body').on('click', '.btn-success', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
