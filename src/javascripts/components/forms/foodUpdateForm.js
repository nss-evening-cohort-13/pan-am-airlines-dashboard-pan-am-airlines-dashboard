import foodData from '../../helpers/data/foodData';

const updateFoodForm = (foodObj) => {
  $('#update-food').html(
    `<h2>Add Food</h2>
          <div id="success-message"></div>
          <form>
            <div id="error-message"></div>
            <div class="form-group">
              <label for="name">Cost</label>
              <input value="${foodObj.cost}" type="text" class="form-control" id="cost">
            </div>
            <div class="form-group dropdown show">
            <label for="meal-type">Food Type</label>
            <select name="meal-type" id="meal-type">
              <option value="snack">Snack</option>
              <option value="meal">Meal</option>
            </select>
            </div>
            <div class="form-group">
            <label for="type">Description</label>
            <input value="${foodObj.description}" type="text" class="form-control" id="description">
          </div>
            <div class="form-group">
              <label for="type">Name</label>
              <input value="${foodObj.name}" type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
              <label for="image">Image Link</label>
              <input value="${foodObj.image_URL}" type="text" class="form-control" id="image">
            </div>
            <button id="update-food-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Update Food</button>
          </form>
          `
  );
  $('#update-food-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      cost: $('#cost').val() || false,
      description: $('#description').val() || false,
      name: $('#name').val() || false,
      image_URL: $('#image').val() || false,
      mealType: $('#meal-type').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      foodData
        .updateFood(foodObj.uid, data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Food Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#sucess-message').html('');
      }, 3000);
    }
  });
};

export default { updateFoodForm };
