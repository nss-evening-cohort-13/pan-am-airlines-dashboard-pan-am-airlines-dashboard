import crewData from '../../helpers/data/crewData';
import form from '../forms/crewUpdateForm';

const updateCrew = (crewUid) => {
  $('#app').html('<div class="crewForm" id="update-crew"></div>');
  crewData.getSingleCrewMember(crewUid).then((response) => {
    form.updateCrewForm(response);
  });
};

export default { updateCrew };
