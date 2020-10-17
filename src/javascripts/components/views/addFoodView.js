import form from '../forms/foodForm';

const addFoodView = () => {
  $('#app').html('<div class = "forms" id = "food-form"></div>');
  form.foodForm();
};

export default { addFoodView };
