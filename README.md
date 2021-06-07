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

The app loads the issues by packets of size 100 and displays 20 issues per page, in 5 pages. With clicking the next button, the app fetches the next 100 issues, updates redux store and adjust pagination, displays new page (numbers)s. I chose this approach to implement pagination. 
The number of issues per page to be displayed, current page count, and current page data hold in Redux store.

According to API, to get the issues, we should provide a value to before/after arguments but these arguments (cursor) are not easy to calculate, from what I understand, encoded in base64. As I wasn’t sure, I didn’t change my implementation.

There is a minor bug here, rage clicking of the next button can’t handle fetching and storing data but I didn’t have enough time left to fix this part. There should be a loading component displayed at this point.

Loaded issues stored in Redux. For this app, it is not mandatory to use Redux; context-based API or hooks could be used for storing data but as Redux was mentioned in the task description, I used Redux.

To filter, as it's only Open/Close filtering, I used buttons and implemented a simple logic just for handling state change, after filter change, Redux store updates accordingly.
One alternative would be storing Open and Close issues separately, concatenating & sorting before displaying, but due to time limitations, I didn’t change my implementation.

Also issue detail page is mostly a proof of concept. I used react-router-dom to direct to issue detail page on clicking the list item. Styling can be improved a lot.
Unfortunately, I couldn't finish writing test cases during this time.

I didn't work with GraphQL before and it's been a long time since I worked with Redux. Therefore, I believe it was an instructive and fun challenge :)
