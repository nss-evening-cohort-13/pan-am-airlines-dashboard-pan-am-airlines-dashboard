import home from '../components/views/homeView';
import airport from '../components/views/airportView';
import baggage from '../components/views/baggageView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'home':
      return home.showHomepage();
    case 'airports-link':
      return airport.showAirport();
    case 'planes-link':
      return baggage.showBaggage();
    case 'foods-link':
      return $('#app').html('Food services under development');

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
