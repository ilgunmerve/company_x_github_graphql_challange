# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm install`

## To Run App
.To run app env.local file should be created (not inluded in any folder, same with package.json) and personal gitgub Token should be added similar to this;

Github -> Settings -> Developer Settings -> Personal Access Tokens -> Generate New Token 

REACT_APP_GITHUB_TOKEN = 'ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'


### Implementation Details

App loads the issues by packets of size 100 and displays 20 issues per page, in 5 pages. With clicking next button, app fetches the next 100 issues, update redux store and adjust pagination, displays new page (numbers)s. I choosed this approach to implement pagination. Number of issues per page to be displayed , current page count and current page data hold in Redux store.

According to API, to get the issues, we should provide a value to before/after arguments but this arguments (cursor) is not easy to calculate, from what I understand, encoded in base64. As i wasn’t sure, I didn’t change my implementation. 

There is a minor bug here, rage clicking of next button can’t handle fetching and storing data but i didn’t have enough time left to fix this part. There should be loading component displayed at this point.

Loaded issues stored in Redux. 
For this app, it is not mandatory to use Redux; context based api or hooks could be used for storing data but as Redux was mentioned in task description, I used Redux.

To filter, as its only Open/Close filtering, I used buttons and implemented a simple logic just for handling state change, after changes in filter, Redux store updated accordingly.

One alternative would be storing Open and Close issues separately, concatanating & sorting before displaying, but due to time limitations I didn’t change my implementation.

Also issue detail page is mostly a proof of concept. I used react-router-dom to direct to issue detail page on clicking the list items. Styling can be improved a lot.

Unfortunately, I couldn't finish writing test cases during this time.

I didn't worked with GraphQL before and its been a long time since I worked with Redux. Therefor, I believe it was an instructive and fun challange :)
