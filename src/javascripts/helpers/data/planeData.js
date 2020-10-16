import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

<<<<<<< HEAD
const addPlane = (planeData) => axios.post(`${baseUrl}/plane.json`, planeData)
  .then((response) => {
    console.warn(planeData);
    const fbKey = { planeId: response.data.name };
    axios.patch(`${baseUrl}/plane/${response.data.name}.json`, fbKey);
  }).catch((error) => console.warn(error));

export default { addPlane };
=======
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

export default {
  getPlanes,
};
>>>>>>> 27ee9f2e14c69e4876400105d1cc7558a521906d
