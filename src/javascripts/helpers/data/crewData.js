import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

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

const getFlightCrewByFlightId = (flightId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/crew.json?orderBy="flightId"&equalTo="${flightId}"`)
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

const getCrewComplete = (flightId) => {
  let numberPilots = 0;
  let numberCrew = 0;
  getFlightCrewByFlightId(flightId)
    .then((response) => {
      response.forEach((data) => {
        if (data.role === 'Pilot') {
          numberPilots += 1;
        }
        numberCrew += 1;
      });
    });
  return ((numberCrew >= 4) && (numberPilots >= 2));
};

const getSingleCrewMember = (crewMemberUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/crew.json?orderBy="uid"&equalTo="${crewMemberUid}"`)
    .then((response) => {
      const crew = Object.values(response.data);
      const thisCrewMember = crew[0];
      resolve(thisCrewMember);
    })
    .catch((error) => reject(error));
});

const addCrew = (data) => axios
  .post(`${baseUrl}/crew.json`, data)
  .then((response) => {
    const update = { uid: response.data.name };
    axios.patch(`${baseUrl}/crew/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const deleteCrewMember = (crewMemberUid) => axios.delete(`${baseUrl}/crew/${crewMemberUid}.json`);

const updateCrewMember = (uid, dataObject) => axios.patch(`${baseUrl}/crew/${uid}.json`, dataObject);

export default {
  getCrewMembers,
  addCrew,
  deleteCrewMember,
  updateCrewMember,
  getSingleCrewMember,
  getFlightCrewByFlightId,
  getCrewComplete
};
