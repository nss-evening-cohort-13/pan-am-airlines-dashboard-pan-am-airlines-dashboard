import FoodData from '../../helpers/data/foodData';
import FoodCard from '../cards/foodCard';

const showSnacks = (user) => {
  $('#app').html('');
  $('#app').append('<div id="food-btn-area" class="button-area"></div>');
  $('#app').append('<div id="snack-btn-area" class="button-area"></div>');
  $('#app').append('<div id="snack-area"></div>');

  FoodData.getSnacks().then((response) => {
    if (response.length) {
      $('#snack-btn-area').html('');
      $('#snack-area').html('');
      $('#snack-btn-area').append(
        '<button type="button" class="btn btn-outline-dark" id="snack-btn"><i class="fas fa-utensils"></i> Snack Menu</button>'
      );
      $('#snack-btn-area').append(
        '<button type="button" class="btn btn-warning" id="meal-btn"><i class="fas fa-utensils"></i> Meal Menu</button>'
      );
      $('#snack-btn-area').append(
        '<button type="button" class="btn btn-secondary" id="all-foods-btn"><i class="fas fa-utensils"></i> All Foods</button>'
      );
      response.forEach((foodItem) => {
        if (foodItem !== undefined) {
          $('#snack-area').append(FoodCard.foodCardBuilder(foodItem));
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
      $('#snack-area').append('<h1>No Food!</h1> <button type="button" class="btn btn-success" id="add-food-btn"><i class="fas fa-plus-circle"></i>Add a Food Item</button>');
    }
  });
};

export default {
  showSnacks,
};
