import airportData from '../../helpers/data/airportData';
import form from '../forms/airportUpdateForm';

const updateAirport = (airportUid) => {
  $('#app').html('<div class="airportForm" id="update-airport-form"></div>');
  airportData.getSingleAirport(airportUid).then((response) => {
    form.updateAirportForm(response);
  });
};

export default { updateAirport };
