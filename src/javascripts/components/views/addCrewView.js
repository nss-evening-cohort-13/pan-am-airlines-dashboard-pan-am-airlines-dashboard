import form from '../forms/addCrewForm';

const addCrewView = () => {
  $('#app').html('<div class = "forms" id = "crew-form"></div>');
  form.crewForm();
};

export default { addCrewView };
