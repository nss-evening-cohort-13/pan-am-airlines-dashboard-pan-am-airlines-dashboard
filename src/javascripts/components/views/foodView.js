import FoodData from '../../helpers/data/foodData';
import FoodCard from '../cards/foodCard';

const showFood = (user) => {
  $('#app').html('');
  $('#app').append('<div id="food-button-area"></div>');
  $('#app').append('<div id="food-area"></div>');
  $('#button-area').append(
    '<button type="button" class="btn btn-success" id="add-food-btn"><i class="fas fa-plus-circle"></i> Add a Food Item</button>'
  );
  FoodData.getFoodItems().then((response) => {
    if (response.length) {
      $('#food-area').html('');
      response.forEach((foodItem) => {
        $('#food-area').append(FoodCard.foodCardBuilder(foodItem));
        if (user) {
          $(`#${foodItem.uid}`).append(
            `<a href="#" class="card-link update-link" id=${foodItem.IATA}>Update Food</a>`
          );
          $(`#${foodItem.uid}`).append(
            `<a href="#" class="card-link remove-link" id=${foodItem.IATA}>Remove Airport</a>`
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
