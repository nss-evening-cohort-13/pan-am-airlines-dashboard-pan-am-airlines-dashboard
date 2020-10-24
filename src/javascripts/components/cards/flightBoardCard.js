// import firebase from 'firebase/app';
// import 'firebase/auth';

const flightBoardCard = (flightObj) => {
  // const user = firebase.auth().currentUser;
  // if (user) {
  //   buttons += `<a href='#' id='${flightObj.flightId}' class='btn btn-primary edit-flight'>Update Flight</a>
  //   <a id='delete__${flightObj.flightId}' href='#' class='delete btn btn-danger'>Delete Flight</a>`;
  // }
  const domString = `
  <tr>
      <td>${flightObj.flightNumber}</td>
      <td>${flightObj.flightDuration}</td>
      <td>${flightObj.departureTime}</td>
    </tr>`;
  return domString;
};

export default { flightBoardCard };
