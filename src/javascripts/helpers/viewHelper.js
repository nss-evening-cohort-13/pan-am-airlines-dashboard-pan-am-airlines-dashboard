import home from '../components/views/homeView';
import airport from '../components/views/airportView';
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
      return $('#app').html('Planes under development');
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
