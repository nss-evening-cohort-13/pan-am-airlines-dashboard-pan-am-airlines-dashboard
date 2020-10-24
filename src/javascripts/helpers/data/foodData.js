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

const getSingleFoodItem = (foodUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/food.json?orderBy="uid"&equalTo="${foodUid}"`)
    .then((response) => {
      const food = Object.values(response.data);
      const thisFood = food[0];
      resolve(thisFood);
    })
    .catch((error) => reject(error));
});

const getMeals = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/food.json?orderBy="mealType"&equalTo="meal"`)
    .then((response) => {
      const mealItems = response.data;
      const mealItemsList = [];
      if (mealItems) {
        Object.keys(mealItems).forEach((mealType) => {
          mealItemsList.push(mealItems[mealType]);
        });
      }
      resolve(mealItemsList);
    })
    .catch((error) => reject(error));
});
const getSnacks = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/food.json?orderBy="mealType"&equalTo="snack"`)
    .then((response) => {
      const snackItems = response.data;
      const snackItemsList = [];
      if (snackItems) {
        Object.keys(snackItems).forEach((mealType) => {
          snackItemsList.push(snackItems[mealType]);
        });
      }
      resolve(snackItemsList);
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

const updateFood = (uid, foodObject) => axios.patch(`${baseUrl}/food/${uid}.json`, foodObject);

export default {
  getFoodItems,
  addFood,
  updateFood,
  getSingleFoodItem,
  deleteFood,
  getMeals,
  getSnacks
};
