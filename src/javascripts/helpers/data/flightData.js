import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addFlight = (data) => axios
  .post(`${baseUrl}/flights.json`, data)
  .then((response) => {
    const update = { flightId: response.data.name };
    axios.patch(`${baseUrl}/flights/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const getFlights = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/flights.json`)
    .then((response) => {
      const flightsResponse = response.data;
      const allFlights = [];
      if (flightsResponse) {
        Object.keys(flightsResponse).forEach((flightId) => {
          allFlights.push(flightsResponse[flightId]);
        });
      }
      resolve(allFlights);
    })
    .catch((error) => reject(error));
});

const getSingleFlight = (flightId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/flights.json?orderBy="flightId"&equalTo="${flightId}"`)
    .then((response) => {
      const flights = Object.values(response.data);
      const thisFlight = flights[0];
      resolve(thisFlight);
    })
    .catch((error) => reject(error));
});

const updateFlight = (flightId, dataObject) => axios.patch(`${baseUrl}/flights/${flightId}.json`, dataObject);

const deleteFlight = (uid) => axios.delete(`${baseUrl}/flights/${uid}.json`);

export default {
  addFlight,
  getFlights,
  updateFlight,
  getSingleFlight,
  deleteFlight
};
