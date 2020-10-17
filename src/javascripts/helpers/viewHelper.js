import home from '../components/views/homeView';
import airport from '../components/views/airportView';
import plane from '../components/views/planesView';
import Food from '../components/views/foodView';
import baggage from '../components/views/baggageView';

const viewHelper = (id, user) => {
  switch (id) {
    case '#':
    case 'home':
      return home.showHomepage();
    case 'airports-link':
      return airport.showAirport(user);
    case 'planes-link':
      return plane.viewPlanes(user);
    case 'foods-link':
      return Food.showFood(user);
    case 'baggage-link':
      return baggage.showBaggage(user);
    case 'add-airport-btn':
      return airport.airportFormView();
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
