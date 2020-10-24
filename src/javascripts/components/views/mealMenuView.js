import FoodData from '../../helpers/data/foodData';
import FoodCard from '../cards/foodCard';

const showMeals = (user) => {
  $('#app').html('');
  $('#app').append('<div id="food-btn-area" class="button-area"></div>');
  $('#app').append('<div id="meal-btn-area" class="button-area"></div>');
  $('#app').append('<div id="meal-area"></div>');

  FoodData.getMeals().then((response) => {
    if (response.length) {
      $('#meal-area').html('');
      $('#meal-btn-area').append(
        '<button type="button" class="btn btn-dark" id="snack-btn"><i class="fas fa-utensils"></i> Snack Menu</button>'
      );
      $('#meal-btn-area').append(
        '<button type="button" class="btn btn-outline-warning" id="meal-btn"><i class="fas fa-utensils"></i> Meal Menu</button>'
      );
      $('#meal-btn-area').append(
        '<button type="button" class="btn btn-secondary" id="all-foods-btn"><i class="fas fa-utensils"></i> All Foods</button>'
      );
      response.forEach((foodItem) => {
        if (foodItem !== undefined) {
          $('#meal-area').append(FoodCard.foodCardBuilder(foodItem));
          if (user) {
            if ($('#food-btn-area').is(':empty')) {
              $('#food-btn-area').append(
                '<button type="button" class="btn btn-success" id="add-food-btn"><i class="fas fa-plus-circle"></i> Add a Food Item</button>'
              );
            }
          }
        }
      });
    } else {
      $('#food-meal').append('<h1>No Food!</h1> <button type="button" class="btn btn-success" id="add-food-btn"><i class="fas fa-plus-circle"></i>Add a Food Item</button>');
    }
  });
};

export default {
  showMeals,
};
