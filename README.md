# pan-am-airlines-dashboard

![image](images/frontPage.PNG)

# DEPLOYED
This project was deployed via Firebase
https://fir-pan-am.web.app/

# DESCRIPTION
 This project is called nutshell. We were tasked with finishing a half finished project on top of new requirments. The project was about making CRUD for a PanAm app. The new requirements were to be able to book flights with crew, meals (flights under 6hrs = snack, over 6hrs = snack, meal), destination, and your choice of plane. 

# MOTIVATION/CONTEXT
This project was completed as part of our portfolio at Nashville Software School. It was a collaborative effort that showcases our newly-acquired skills in using Firebase, Postman, and API's as well as relational databases. 

# CODE SNIPPET
``` crewFunctions.getFlightCrewByFlightId(flightData.flightId).then((response) => {
    $('#pilot').html('');
    $('#daCrew').html('');
    let pilots = 0;
    let crew = 0;
    response.forEach((item) => {
      if (item.role === 'Pilot') {
        pilots += 1;
        crew += 1;
        $('#pilot').append(
          `<div class='${item.uid}'>${item.name}</div>`
        );
      } else {
        crew += 1;
        $('#daCrew').append(
          `<div class='${item.uid}'>${item.name}</div>`
        );
      }
    });
    if ((pilots >= 2) && (crew >= 4)) {
      $('#complete').append('<h3 class="green">Complete Flight</h3>');
    } else {
      $('#complete').append('<h3 class="red">Incomplete Flight</h3>');
    }
  });
  ```


# TECHNOLOGY/TOOLS EMPLOYED
  - VS CODE
  - Javascript
  - HTML5
  - SASS/CSS
  - BOOTSTRAP
  - FIREBASE
  - POSTMAN
  - AXIOS
  - GITHUB
  - JQuery
  - Git

# CONTRIBUTORS
 - Chris Calhoun
 - Jordan Smith
 - Wendell Patton
 - Will Kotheimer

# ERD
![erd](images/flightsERD.PNG)

# UPDATE FLIGHT FORM
![image](images/UpdateFlightsForm.PNG)

# WIREFRAME
![wireframe](images/PanAmFigmaSample.png)
[Check out the rest here](https://www.figma.com/file/9y9GwujaCg3Rzr5w2QCHra/PanAm?node-id=0%3A1)

