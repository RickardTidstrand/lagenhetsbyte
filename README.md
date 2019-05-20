This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intro

This project is built using React and uses React Hooks, material ui is used for designing elements.

## Problems encountered

The URL for the Chuck Norris jokes was incorrect, I found the right one at https://api.icndb.com/jokes/random

The URL http://idoweb.se/candidates/candidates.json did not have any access contoll headers, so I mocked the api call by making my own candidates.json file.

## Installing

Requires Node v8.10 or higher for install.

Clone the directory from release tag 1.0.0 using

git clone --branch 1.0.0 https://github.com/RickardTidstrand/lagenhetsbyte.git


### `npm install`

or

### `yarn install`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Known bugs`

Sometimes the material ui cards will overlap the header, even though they have different z-indexes.

The app is not optimized for IE 11 or below.

Scroll bar disappears when clicking the "done" button.
