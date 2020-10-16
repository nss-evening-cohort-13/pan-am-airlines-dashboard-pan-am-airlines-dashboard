import home from '../components/views/homeView';
import airport from '../components/views/airportView';
<<<<<<< HEAD
import baggage from '../components/views/baggageView';
=======
import plane from '../components/views/planesView';
import Food from '../components/views/foodView';
>>>>>>> 27ee9f2e14c69e4876400105d1cc7558a521906d

const viewHelper = (id, user) => {
  switch (id) {
    case '#':
    case 'home':
      $('#app').html('');
      return home.showHomepage();
    case 'airports-link':
      $('#app').html('');
      return airport.showAirport(user);
    case 'planes-link':
<<<<<<< HEAD
      return baggage.showBaggage();
=======
      $('#app').html('');
      return plane.viewPlanes(user);
>>>>>>> 27ee9f2e14c69e4876400105d1cc7558a521906d
    case 'foods-link':
      $('#app').html('');
      return Food.showFood(user);

    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, user) => {
  viewHelper(view, user);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, user);
  });
};

export default { viewListener };
