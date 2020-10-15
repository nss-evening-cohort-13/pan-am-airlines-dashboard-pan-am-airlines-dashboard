import home from '../components/views/homeView';
import airport from '../components/views/airportView';

const viewHelper = (id, user) => {
  switch (id) {
    case '#':
      $('#app').html('');
      return home.showHomepage();
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
      return $('#app').html('Food services under development');

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
