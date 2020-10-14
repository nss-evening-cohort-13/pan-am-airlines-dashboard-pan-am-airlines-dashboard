import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addPlane = (planeData) => axios.post(`${baseUrl}/plane.json`, planeData)
  .then((response) => {
    console.warn(planeData);
    const fbKey = { planeId: response.data.name };
    axios.patch(`${baseUrl}/plane/${response.data.name}.json`, fbKey);
  }).catch((error) => console.warn(error));

export default { addPlane };
