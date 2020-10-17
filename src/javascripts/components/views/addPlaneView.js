import form from '../forms/addPlaneForm';

const addPlaneView = () => {
  $('#app').html('<div id="plane-form">Put plane form here</div>');
  form.planeForm();
};

export default { addPlaneView };
