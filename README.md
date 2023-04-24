# Steps to Install

First clone all three repos: frontend, backend, database

1) Run the Database
- The database repo is the same as the one from phase3. Make sure the database is created before you proceed to the next steps. So that means running the `STARTING_POINT_v2` and the `stored_procedures_team15` file from phase 3.

2) Run the Backend
- Now you need to get the backend working. To do this, in terminal, cd to the backend repo and run `npm install`. This will install all the packages that are necessary for the backend to run. If you don't have npm, then install that first.
- Now, you may notice that in the `index.js` file, the password is declared as `process.env.DB_PASSWORD`. Because it's better practice to not include your password as plain text, you need to enter this command in terminal: `export DB_PASSWORD='yourpassword'` where `'yourpassword'` is the password that you used to setup MySQL. 
- Once you get all the packages installed, do `node index.js` or alternatively `npm start`. This will start a backend server on `localhost:3001` where all the SQL queries are now converted into a JSON file that can be read on the web through an API.
  - To see this in action, in your browser, go to `http://localhost:3001/api/{table}` where `{table}` is the table you want to see. For example, for the airport table, you would do `http://localhost:3001/api/airport` and it'll look like this:
  - <img width="607" alt="Screenshot 2023-04-24 at 6 23 33 PM" src="https://github.gatech.edu/storage/user/46053/files/637c5a30-5e1f-4745-aba1-39159b1c55fd">

3) Run the Frontend
- Just like with the backend, cd to the frontend repo and do `npm install` to install all the necessary packages. 
- Now do `npm start` to start the web app and it should automatically open in your browser as a localhost.
- If it's done correctly, it should look like this:

![ezgif-5-bcf54ce777](https://github.gatech.edu/storage/user/46053/files/8fbf06b1-7fc8-423e-97f5-159a87935d77)

- The frontend for now just displays the table and has a <select> that enables you to switch between the different tables. 

