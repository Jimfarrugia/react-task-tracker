# React Task Tracker

## About

This project uses the `json-server` npm package to serve as local backend and databse in order to perform CRUD requests from the react app.

The database can be directly edited by modifying the file: `/db.json`.

### Features

- Create new tasks to the list by clicking the 'Add' button and filling out and submitting the form.
- Remove a task by clicking the red 'X' icon.
- Toggle the 'reminder' status of a task by double clicking the task in the list.

## Running the Application Locally

This project requires **Nodejs** to be installed in order to run the `npm` command.

You can download Nodejs [here](https://nodejs.org).

### 1. Install Dependancies
Navigate to the project's root folder and run the following command:
```
npm install
```
Wait a moment for the installation to complete and then all of the required npm packages should be installed.

### 2. Start json-server
Navigate to the project's root folder and run the following command:
```
npm run server
```
The backend should now be running at `http://localhost:5000/`.

### 3. Start the React App
Navigate to the project's root folder and run the following command:
```
npm run start
```
The react app should now be running at `http://localhost:3000/`.

## Create a Production Build
Navigate to the project's root folder and run the following command:
```
npm run build
```
All of the files for the production-ready build should now be found in the folder: `/build`.