// import airportData from '../../helpers/data/airportData';
// import airportCard from '../cards/airportCard';

const showAirport = () => {
  $('#app').html('');
  $('#app').append('<div id="airports-area"></div>');
  $('#airports-area').append('<button type="button" class="btn btn-success" id="add-airport-btn"><i class="fas fa-plus-circle"></i> Add an Airport</button>');
  $('#airports-area').append('<h1>No Airports!</h1>');
};

export default { showAirport };
// $('#app').html('');
//   airportData.getAirports(user).then((response) => {
//     if (response.length) {
//       response.forEach((item) => {
//         $('#app').append(airportCard.airportBuilder(item));
//       });
