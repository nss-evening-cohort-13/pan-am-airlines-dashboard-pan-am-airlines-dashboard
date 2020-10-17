import getFoodItems from '../../helpers/data/foodData';

const foodForm = () => {
  $('#food-form').html(
    `<h2>Add Food</h2>
          <div id="success-message"></div>
          <form>
            <div id="error-message"></div>
            <div class="form-group">
              <label for="name">Cost</label>
              <input type="text" class="form-control" id="cost">
            </div>
            <div class="form-group">
            <label for="type">Description</label>
            <input type="text" class="form-control" id="description">
          </div>
            <div class="form-group">
              <label for="type">Name</label>
              <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
              <label for="image">Image Link</label>
              <input type="text" class="form-control" id="image">
            </div>
            <button id="add-food-btn" type="submit" class="btn btn-info"><i class="far fa-calendar-plus"></i> Add Food</button>
          </form>
          `
  );
  $('#add-food-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      cost: $('#cost').val() || false,
      description: $('#description').val() || false,
      name: $('#name').val() || false,
      image: $('#image').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      getFoodItems.addFood(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your Food Was Added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#sucess-message').html('');
      }, 3000);
      $('#cost').val('');
      $('#description').val('');
      $('#name').val('');
      $('#image').val('');
    }
  });
};

export default { foodForm };
