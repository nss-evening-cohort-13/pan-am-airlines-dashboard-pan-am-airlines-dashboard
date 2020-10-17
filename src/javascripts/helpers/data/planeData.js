import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlanes = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/planes.json`)
    .then((response) => {
      const planeResponse = response.data;
      const planeFleet = [];
      if (planeResponse) {
        Object.keys(planeResponse).forEach((planeId) => {
          planeFleet.push(planeResponse[planeId]);
        });
      }
      resolve(planeFleet);
    })
    .catch((error) => reject(error));
});

const addPlane = (data) => axios
  .post(`${baseUrl}/airports.json`, data)
  .then((response) => {
    const update = { uid: response.data.name };
    axios.patch(`${baseUrl}/planes/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default {
  getPlanes, addPlane
};
