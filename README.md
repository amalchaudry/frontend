# High-level overview of our App
![react-node-express-mysql-crud-example-architecture](https://github.gatech.edu/storage/user/46053/files/adadf5c7-1116-4a2e-ae57-6ffb16fffe85)


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

- ![ezgif-5-bcf54ce777](https://github.gatech.edu/storage/user/46053/files/8fbf06b1-7fc8-423e-97f5-159a87935d77)

### Debugging
- Remember that you need to run both the frontend and backend at the same time for this to work! So first start the backend, open another terminal tab and then start the frontend. 
- Also if you're getting errors with packaging missing, just install the package with npm. So if it says in the frontned that `axios` is missing, just run `npm install axios`
- I also recommend installing the "JSONVUE" and "React Dev Tools" extensions.
- The frontend for now just displays the table and has a select that enables you to switch between the different tables. 
  
# Adding the Stored Procedures
Now that you got the webapp running, you can now start adding the stored procedures. To do this, you first need to add an API call in the backend.

Open the `index.js` file in the backend. I've worked on `addAirport` and `grantPilotLicense` so you can look at those for reference.
  
Let's take a look at `grantPilotLicense`:

<img width="592" alt="Screenshot 2023-04-25 at 3 49 42 PM" src="https://github.gatech.edu/storage/user/46053/files/afc58630-59a2-436d-a737-a4d876f6369d">

As you can see, it basically takes the values from `personID` and `licenseID` and then makes a call to `grant_pilot_license` stored procedure in mySQL. The `?` stuff if just syntax that's used to pass into the parameters. 
So we essentially just write each new method so that it matches the parameters in each stored procedure in mySQL.

**IMPORTANT**: Anytime you make a change in the backend, you must re-run the server. So stop the current server in terminal and then run `node index.js` again.
  
As you are writing each new one, I recommend debugging it in a software called Postman. With Postman, you can make GET and POST requests without needing to run the frontend so you can make sure the data is being processed properly.
  
For example, let's make a POST request to grantPilotLicense with the body message as:
  ```
  {
  "personID": "p1",
  "licenseID": "other"
}
  ```
  
Remember to select `raw` and `JSON` under the body section. If the request goes through properly, it'll show like this:

<img width="1277" alt="Screenshot 2023-04-25 at 4 11 08 PM" src="https://github.gatech.edu/storage/user/46053/files/a774edca-ce41-4c71-9d3b-c39764e4117b">

And now in mySQL, if you run `SELECT * FROM pilot_licenses`, it'll look like this

<img width="180" alt="Screenshot 2023-04-25 at 4 17 13 PM" src="https://github.gatech.edu/storage/user/46053/files/5cd32f65-56c2-4f12-a1c4-249727b6bc28">

Now, that we verified that it works in the backend, we can now work on the frontend UI. The way I've been doing this is by making a separate file and React component for each stored procedure under `src/components`. 

For example, I created a `GrantPilotLicense.js` component which adds the inputs and buttons that we need for the UI.

We need to paricularly look at these two functions in the file:

<img width="567" alt="Screenshot 2023-04-25 at 4 23 39 PM" src="https://github.gatech.edu/storage/user/46053/files/31a53c02-3d04-434a-b542-12d8052f838e">

The `formdata` is the thing that stores the value as a user types it in. I used React's built in `useState` hook which essentially sets the data in the field. As the user types in one of the inputs, the `handleChange()` function is called and updates the `formdata`. 

Lastly, the `handleSubmit` is what's used to make the request to the backend API request that we've just created. It takes in the `personID` and `licenseID` that's stored in `formdata` and makes a POST request to `http://localhost:3001/api/grantPilotLicense`. 

Once we finish writing the component, we need to display it in the frontend. To do this, just add `<Component />` before the last `<div>` in `App.js`. 

Let's run through an example:

![ezgif-2-212074818f](https://github.gatech.edu/storage/user/46053/files/456cdfc8-f1f1-4ca5-b3ba-6da7185534a5)

As you may have noticed, while I was `console.log` the `formData`, it would only show what was typed previously. However, the data is still stored in the `formdata` properly. The reason this happens is because React calls are asynchronous. This is the same reason why I also needed to switch tables each time for the new data to show up. 

To fix this issue, we can use the `useEffect` hook but we can add that later on once we finish writing all the stored procedures.

Another issue is that Add Airport's `locationID` needs to be a dropdown instead of an input. We can do this once we finish writing the stored procedures.
