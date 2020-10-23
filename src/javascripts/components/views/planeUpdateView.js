import planeData from '../../helpers/data/planeData';
import form from '../forms/planeUpdateForm';

const updatePlane = (planeUid) => {
  $('#app').html('<div class="planeForm" id="update-plane"></div>');
  planeData.getSinglePlane(planeUid).then((response) => {
    form.updatePlaneForm(response);
  });
};

export default { updatePlane };
