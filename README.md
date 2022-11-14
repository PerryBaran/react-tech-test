# React Technical Test

A react technical test to create a search engine that requests data from NASA's image API and displays it using react.

Completed as part of the Manchester Codes fast-track bootcamp.

App built in React, tested with Jest and React-Testing-Library.

![desktop view](./public/images/nasa-desktop.png)

![mobile view](./public/images/nase-mobile.png)

## [Live Preview](https://perrybaran.github.io/react-tech-test/)

## Dependencies

1. [react](https://reactjs.org/)
2. [axios](https://www.npmjs.com/package/axios)
3. [prop-types](https://www.npmjs.com/package/prop-types)

### Dev Dependencies

1. [prettier](https://prettier.io/)
2. [gh-pages](https://www.npmjs.com/package/gh-pages)

## Setup

### `npm i`

Install all dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run prettier`

Runs prettier on all files to format code.

### `npm run pre-deploy`

helps to bundle the react app. \
This command is run automatically when running deploy.

### `npm run deploy`

Generates a production build of the app and deploys it to GitHub pages.

## What I would add if I had more time

- Add error handling on API requests
- test getImages - mock axios
- test Search input functionality - mock getImages

## Attribution

Created by **Perry Baran**