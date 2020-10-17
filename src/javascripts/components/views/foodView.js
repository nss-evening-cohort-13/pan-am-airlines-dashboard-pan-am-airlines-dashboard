import FoodData from '../../helpers/data/foodData';
import FoodCard from '../cards/foodCard';

const showFood = (user) => {
  $('#app').html('');
  $('#app').append('<div id="food-btn-area" class="button-area"></div>');
  $('#app').append('<div id="food-area"></div>');

  FoodData.getFoodItems().then((response) => {
    if (response.length) {
      $('#food-area').html('');
      response.forEach((foodItem) => {
        $('#food-area').append(FoodCard.foodCardBuilder(foodItem));
        if (user) {
          if ($('#food-btn-area').is(':empty')) {
            $('#food-btn-area').append(
              '<button type="button" class="btn btn-success" id="add-food-btn"><i class="fas fa-plus-circle"></i>Add a Food Item</button>'
            );
          }
          $(`#${foodItem.food_id}`).append(
            `<a href="#" class="card-link update-link" id=${foodItem.food_id}>Update Item</a>`
          );
          $(`#${foodItem.food_id}`).append(
            `<a href="#" class="card-link remove-link" id=${foodItem.food_id}>Remove Item</a>`
          );
        }
      });
    } else {
      $('#food-area').append('<h1>No Food!</h1>');
    }
  });
};

export default {
  showFood,
};
