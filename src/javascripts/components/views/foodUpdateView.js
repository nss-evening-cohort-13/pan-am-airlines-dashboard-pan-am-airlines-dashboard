import foodData from '../../helpers/data/foodData';
import form from '../forms/foodUpdateForm';

const updateFoodView = (foodUid) => {
  $('#app').html('<div class="foodForm" id="update-food"></div>');
  foodData.getSingleFoodItem(foodUid).then((response) => {
    form.updateFoodForm(response);
  });
};

export default { updateFoodView };
