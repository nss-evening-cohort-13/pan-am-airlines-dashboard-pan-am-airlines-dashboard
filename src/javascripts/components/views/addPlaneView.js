import form from '../forms/addPlaneForm';

const addplaneView = () => {
  $('#app').html('<div class = "forms" id = "plane-form"></div>');
  form.planeForm();
};

export default { addplaneView };
