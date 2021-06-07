# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## To Run App
.env.local file should be created (not inluded in any folder, same with package.json) and personal gitgub Token should be added similar to this;

REACT_APP_GITHUB_TOKEN = 'ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'


### Implementation

App loads the issues by packets of size 100 and displays 20 issues per page, in 5 pages. With clicking next button, app loads the next 100 issues and adjust pagination, displays new page (numbers). I choosed this approach to implement pagination.
According to API, to get the issues, we should provide a value to before/after arguments but this arguments (cursor) is not easy to calculate, from what I understand, encoded in base64. As i wasn’t sure, I didn’t change my implementation. 
There is a minor bug here, rage clicking of next button can’t handle fetching and storing data but i didn’t have enough time left to fix this part. There should be loading component displayed at this point.
Loaded issues stored in Redux. For this app, it is not mandatory to use Redux, context based api or hooks could be used for storing but as Redux was mentioned, I used Redux.
To filter, there are Open/Close buttons. Logic is same with loading issues. App loads from scratch the filtered issues by providing states variable to same query.
One alternative would be storing Open and Close issues separately, concaing & sorting before displaying, but due to time limitations I didn’t change my implementation.
List items are clickable, directs to item detail page.
