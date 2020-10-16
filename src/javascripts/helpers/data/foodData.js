import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFoodItems = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/food.json`)
    .then((response) => {
      const foodItems = response.data;
      const foodItemsList = [];
      if (foodItems) {
        Object.keys(foodItems).forEach((foodId) => {
          foodItemsList.push(foodItems[foodId]);
        });
      }
      resolve(foodItemsList);
    })
    .catch((error) => reject(error));
});

export default {
  getFoodItems,
};
