import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
// CREW ROSTER - AN EMPTY ARRAY TO PUSH CREWOBJ JSON TO //
const getCrewMembers = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/crew.json`)
    .then((response) => {
      const crewMembers = response.data;
      const crewRoster = [];
      if (crewMembers) {
        Object.keys(crewMembers).forEach((crewId) => {
          crewRoster.push(crewMembers[crewId]);
        });
      }
      resolve(crewRoster);
    })
    .catch((error) => reject(error));
});

export default {
  getCrewMembers,
};
