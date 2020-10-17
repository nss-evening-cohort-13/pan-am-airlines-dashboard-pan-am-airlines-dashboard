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

const getSinglePlane = (boardUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/planes.json?orderBy="uid"&equalTo="${boardUid}"`)
    .then((response) => {
      const plane = Object.values(response.data);
      const thisPlane = plane[0];
      resolve(thisPlane);
    })
    .catch((error) => reject(error));
});

const updatePlane = (uid, dataObject) => axios.patch(`${baseUrl}/planes/${uid}.json`, dataObject);

const addPlane = (data) => axios
  .post(`${baseUrl}/planes.json`, data)
  .then((response) => {
    const update = { uid: response.data.name };
    axios.patch(`${baseUrl}/planes/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default {
  getPlanes,
  addPlane,
  getSinglePlane,
  updatePlane
};
