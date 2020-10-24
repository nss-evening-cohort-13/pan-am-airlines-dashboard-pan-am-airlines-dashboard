import flightData from '../../helpers/data/flightData';
import form from '../forms/flightUpdateForm';

const updateFlight = (flightId) => {
  $('#app').html('<div class="flightForm" id="update-flight"></div>');
  flightData.getSingleFlight(flightId).then((response) => {
    form.updateFlightForm(response);
  });
};

export default { updateFlight };
