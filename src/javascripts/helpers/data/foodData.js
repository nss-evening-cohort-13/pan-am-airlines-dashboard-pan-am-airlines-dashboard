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

const deleteFood = (uid) => axios.delete(`${baseUrl}/food/${uid}.json`);

const addFood = (data) => axios
  .post(`${baseUrl}/food.json`, data)
  .then((response) => {
    const update = { uid: response.data.name };
    axios.patch(`${baseUrl}/food/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default {
  getFoodItems, addFood, deleteFood
};
