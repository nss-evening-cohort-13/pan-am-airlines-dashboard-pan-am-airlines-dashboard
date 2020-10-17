import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBaggage = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/Baggage.json`)
    .then((response) => {
      const baggageResponse = response.data;
      const baggageList = [];
      if (baggageResponse) {
        Object.keys(baggageResponse).forEach((boardId) => {
          baggageList.push(baggageResponse[boardId]);
        });
      }
      resolve(baggageList);
    })
    .catch((error) => reject(error));
});

const addBaggage = (data) => axios
  .post(`${baseUrl}/Baggage.json`, data)
  .then((response) => {
    const update = { uid: response.data.name };
    axios.patch(`${baseUrl}/Baggage/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default {
  getBaggage,
  addBaggage
};
