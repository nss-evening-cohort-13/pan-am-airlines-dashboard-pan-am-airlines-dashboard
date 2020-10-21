import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json`).then((response) => {
    const userData = response.data;
    const users = [];
    if (userData) {
      Object.keys(userData).forEach((item) => {
        users.push(userData[item]);
      });
    }
    resolve(users);
  }).catch((error) => reject(error));
});

const setCurrentUser = (userObj) => {
  const user = {
    image: userObj.photoURL,
    uid: userObj.uid,
    name: userObj.displayName,
    email: userObj.email,
    lastSignInTime: userObj.metadata.lastSignInTime,
  };
  return user;
};

export default { setCurrentUser, getAllUsers };
