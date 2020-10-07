# Pan Am Airlines Dashboard


Nutshell is a new product offering that you have been tasked with building. 
You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

- Functions
- Databases/API
- Github
- Objects
- CSS/SASS
- Handling user events
- Data entry/editing
- Modular code with Webpack
- Relational data
- CRUD

# Mentor
Jacob


## Project Requirements
* Clean code - single responsibility principle
* ES6 Modules bundled with webpack
* No errors - linters should be clean
* Jquery for any DOM manipulation (selectors, modifying css classes, events)
* SASS and Bootstrap for styling
* Completely planned out - before each section you should be making new cards before you code.  You should have wireframes and an ERD

### Planning and Setup
For planning and setup, your team will need to divide and conquer. All of these items will need to be completed and reviewed by noon on Saturday.

- Create an ERD and add to Readme
- Create Wireframes on Figma and add to Readme

#### Setup:
- Create a setup branch and setup webpack (make a ticket for this first)
  - Issue Ticket Template
  - Pull request Template
  - Set up readme
  
- Create 2 branches: `Main` and `Development`
  - Protect the `Main` branch from merging (DO NOT MERGE TO MAIN UNTIL APPROVAL FROM YOUR MENTOR IS OBTAINED)
  - All development should be done on the `Development` branch
  - When a milestone is completed, make a PR against the `Main` branch for your mentor to review.
  - DO NOT move on to another milestone until everyone on your team is completed with the milestone AND you get approval from your mentor.
  
- Create a new firebase project and enable google authentication
  - Share API keys with team (DO NOT PUSH TO GITHUB)
  - One person run deploys
___

### Expectations
- Break each section below into milestones
- Deploy each milestone
- Deployed URL on Readme
- Create a PR against the `Main` branch with:
  - The tickets completed that sprint
  - Explanation of what was completed in the sprint

## Week 1

### Description
Welcome to PanAm Express!  With some new funding, PanAm has been revived after dissolving in 1991, and unfortunately, their website didn't age well.  Fortunately for you, PanAm is hiring you to fix their website.  In order to get their business back off the ground (pun intended), they have requested you build them a dashboard to keep track of the crew, the planes, the airports, and the food provided during flights.  They need to be able to log in to make these changes, as they don't want just anyone from outside the organization to make changes.  They also have requested that their site be fully branded, since nobody in the internet age knows about PanAm.

### Requirements

- Authenticate to perform any actions (CUD)
- Crew Module
- Plane Module
- Airports Module
- Food Service Module
- Fully branded webpage
- Baggage Module

### User Stories

#### Authentication

- As a user, I should be able to log in to add, edit, or delete from any of the modules.
- As a user, if I'm not authenticated, I can only read the information.
- As a user, I should be able to login using Google
- As a user, I should be able to logout

#### Crew

- As a user, I should be able to view all crew members on the team.

- As a user, I should be able to add a crew member to the team.
- As a user, I should be able to edit a crew member on the team.
- As a user, I should be able to remove a crew member from the team.

#### Plane

- As a user, I should be able to view all the planes PanAm owns.
- As a user, I should be able to create a new plane.
- As a user, I should be able to edit a plane.
- As a user, I should be able to delete a plane.

#### Airports

- As a user, I should be able to view all the airports PanAm can be hangered.
- As a user, I should be able to add a new airport.
- As a user, I should be able to edit an airport.
- As a user, I should be able to delete an airport.

#### Food Service

- As a user, I should be able to view all the food options available for flights.
- As a user, I should be able to add items to the menu.
- As a user, I should be able to edit items on the menu.
- As a user, I should be able to delete items on the menu.

#### Baggage
- As a user, I should be able to all baggage in my system.
- As a user, I should be able to add a bag.
- As a user, I should be able to edit a bag.
- As a user, I should be able to delete a bag.
