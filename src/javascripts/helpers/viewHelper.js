import home from '../components/views/homeView';
import airport from '../components/views/airportView';

const viewHelper = (id) => {
  switch (id) {
    case '#':
      return home.showHomepage();
    case 'airports-link':
      return airport.showAirport();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
