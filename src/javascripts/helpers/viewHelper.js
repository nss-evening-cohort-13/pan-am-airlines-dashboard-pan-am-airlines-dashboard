import home from '../components/views/homeView';
import airport from '../components/views/airportView';
import plane from '../components/views/planesView';
import Food from '../components/views/foodView';

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
      $('#app').html('');
      return plane.viewPlanes(user);
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
  $('body').on('click,');
};

export default { viewListener };
