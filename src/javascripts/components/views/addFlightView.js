import form from '../forms/addFlightForm';

const addFlightView = () => {
  $('#app').html('<div class ="forms" id ="flight-form"></div>');
  form.flightForm();
};

export default { addFlightView };
