## Welcome to my codeChallenge!

[Visit the live site hosted on Heroku](https://spotify-stephaniemanwaring.herokuapp.com/)

First and foremost - thank you for considering me for this once-in-a-lifetime position!

If you have any questions about the app, please don't hesitate to reach out to me directly at stephanie.manwaring@gmail.com

### About the app

This is a small CRUD app where you can:
* view people in the codeChallenge database (each person has an id, name, and favorite city)
* edit a person in the codeChallenge database 
* add people to the codeChallenge database
* query people in the codeChallenge database by ID

codeChallenge is a responsive web app built using the NERDS stack (Node.js, Express, React/Redux, Database-Sequelize). It uses HTML5, CSS3, and Sass.

It uses [materialize css](http://materializecss.com/) for styling. 


### Code Challenge Client Directions 
To mimic the code challenge guidelines in order please follow these instructions (in order): 

1. To make a GET request to /people: click on the __view all__ tab.

1. To make a POST request to /people: click on the __add new__ tab and enter in a name, and a favorite city for that person. To follow the example given in the guidelines, the name should be Sean and the favorite city should be New York.

1. To make a GET request to retrieve the object created in the previous request: From step 2, after you click on "ADD PERSON" click on green prompt that appears that reads "Person successfully added and has an ID of X. Click here to view record."

1. To make a PUT request to /people and modify the attribute city to be “Brooklyn”: if you are still on the page from step 3 (viewing the recently added user from the __add new__ page) simply click on the pencil icon of the user listed on your screen and change either the name or city, then hit save. OR you can navigate to either the __view all__ tab (will make another request to GET /people) and click on the pencil next to that user, or __view by id__ tab, search for the ID of the person (will make a request to GET /people/:personId) and then click on the pencil icon to the right of the user that appears, then edit from there. A modal will pop up where you can edit the favorite city of that user (and name, if you so choose) then hit save.

1. To make a GET request to /people/1: Depending on the current database of the deployed app, a user with an ID of 1 may not exist. However, query the database for a user with a specific idea and hit the /people/:personId route simply go to the __view by id__ tab and search for an id of an existing person.

1. To make a DELETE request to /people/1: Depending on the current database of the deployed app, a user with an ID of 1 may not exist. However, to delete a specific user by id and hit the DELETE /people/:personId route, simply go to the __view all__ tab and click on the trash icon next to a user you want to delete.

1. To make a GET request to /people: click on the __view-all__ tab.


### About my API

To view the API routes, go to server/routes/index.js

All API endpoints are under https://spotify-stephaniemanwaring.herokuapp.com/api/. Below are current endpoints. You can also try it out by yourself using [Postman](https://www.getpostman.com/).

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b679dd0210a9500f7fef)

| Verb        | Path           | Description  |
| ------------- |:-------------:| :-----|
| GET      | /people | Get all the people currently listed in the DB |
| POST     | /people |   Add a new person the the database. Requires a body that includes name and favoriteCity as a string |
| PUT      | /people/{id}   |  Updates a person in the dabase based on what is passed in in the request body |
| GET      | /people/{id} | Finds a specific user by ID and sends that information back in the response body if one is found |
| DELETE     | /people/{id} | Finds a specific user by ID and deletes that instance in the DB  |

### Prerequisites

Make sure you have the following:

[Node.js (>6.7) and npm](https://nodejs.org/en/)

[PostgreSQL](https://www.postgresql.org/) (be sure this is up and running when you launch)

### Running Locally

Clone the repository.

```
npm install

```
This will install all runtime dependencies, as well as Webpack build and Mocha/Chai/Enzyme testing tools.

Also, make sure to populate the proper environment variables for your local setup!


## Running the app

There are two ways to run the app in development mode:

```
npm run build-watch
npm run dev

```
The first command will run Webpack in watch mode, rebuilding the client static files in '/public' every time a change is made to the source files. The second command will run the Node.js server in development mode.

### Production Variables

1. `DATABASE_URL` environment variable must point to your PostgreSQL DB
1. `NODE_ENV` environment variable must equal `production`
1. `PORT` environment variable must be set to the listening port of the Node app


## Testing

To run the test suite, execute the command `npm test`

The easiest way to test is with [Postman](https://www.getpostman.com/).

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b679dd0210a9500f7fef)










