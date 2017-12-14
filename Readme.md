This is an interview example which client would like me to create a quick crud sample demo:

Here how to set up your dev env:
1. client side:
    $ cd client //( or go to client folder)

    $ npm install

    $ npm start //open url: http://localhost:3000

2. server side:
    $ cd sever //( or go to server folder)

    $ npm install

    $ port=3020 npm start (or port=3020 nodemon) //open url: http://localhost:3020 

Client Requirements
Create a notepad SPA (single-page application) with a React and Redux
frontend and a REST API that uses a PostgreSQL database to store notes.
The project must meet the following requirements:

[x] Written in ES6 (please use Babel)

[x] Use Webpack for packaging client-side code

[x] Use SASS for CSS

[] Use CSS animations and transitions to provide a richer user experience

[x] Express.js

[x] Node.js

[x] Yarn

[x] React

[x] Redux

[x] PostgreSQL

[x] Use Git and BitBucket for source control

[] Deploy publicly somewhere (e.g., Heroku, AWS ElasticBeanstalk, private server etc.)

[] Implement a REST API for note management with the following specification:

    [x] POST /notes     # Add a note
    [] where:           # Get notes, optionally specifying GET parameters
        # limit - indicates the maximum number of notes to
        [x] get; if unspecified, gets all notes
        # order - specifies in which order to sort the notes
        [] based on creation time, can be either "asc" or "desc"; if unspecified, defaults to descending
        # start - specifies where in the sorted notes to
        [] begin getting notes; if unspecified, defaults to 1 GET /notes?limit=10&start=1&order=asc

    [x] GET /notes/:id          # View a note with a given id
    [x] PUT /notes/:id          # Update a note with a given id
    [x] DELETE /notes/:id       # Delete a note with a given id
    [x] Use the REST API detailed above from your frontend
    [x] React SPA

Bonus

[] Use Auth0 to provide authentication and restrict users to only being able
to view, add, edit, and delete their own notes. This will require modifying
the REST API to allow specifying the user (e.g., GET /notes/:id becomes
GET /:user/notes/:id and so on). There also must be an additional route
to authenticate the user.

---------------------------------------------------------
Other javascript framework apply for this demo:
+ knex - http://knexjs.org/ - below is a quick overview:
    //create db: bash cmd

    >yarn knex pg - download the library knex and pg

    >createdb noteapp

    >knex migrate:make note  -- this will create a file in the migration folder then update the file and run the next bash

    exports.up = function(knex, Promise) {
        return knex.schema.createTable('note', (table) => {
            table.increments();
            table.text('title').notNullable();
        })
    };

    >knex seed:make note --- make a new file to see for call note, then update the seed file and run the next 

    >knex seed:run -- update the table in db 

    exports.down = function(knex, Promise) {
        return knex.schema.dropTable('note');
    };

    >knex migrate:latest - run the latest mirgration code -- then load another bash to view and manage db 

    >psql noteapp - connect to the noteapp db

    >\dt  -- describes all the table

    >\d note -- describe table note 
    
+ oxiom - http://www.axiombts.com/portfolio_entries/javascript/