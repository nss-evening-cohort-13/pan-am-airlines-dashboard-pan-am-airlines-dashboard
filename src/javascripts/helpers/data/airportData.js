import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAirports = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/airports.json`)
    .then((response) => {
      const airportResponse = response.data;
      const airportList = [];
      if (airportResponse) {
        Object.keys(airportResponse).forEach((boardId) => {
          airportList.push(airportResponse[boardId]);
        });
      }
      resolve(airportList);
    })
    .catch((error) => reject(error));
});

const addAirport = (data) => axios
  .post(`${baseUrl}/airports.json`, data)
  .then((response) => {
    const update = { uid: response.data.name };
    axios.patch(`${baseUrl}/airports/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));
export default {
  getAirports,
  addAirport
};
