# Sketch interview assessment

### Design architecture
This application wa bootstrapped using create-react-app as it gave me a quick inital setup for the project without having to work on the webpack configuration by myself.
I decided to use the container component pattern considering I have been working with Angular for a while now and I like separating the data fetching logic and presentational components. For styling, I am more familiar with direct use of sass, scss and plain old css. I decided to use the styled-components just to see how it works since it was mentioned that it is widely used in Sketch.

### possible improvements:
- Add tests both e2e tests with cypress and unit tests with jest
- Use a state management tool to reduce the number of server calls we are making. (though apollo provides caching for us 😊)
- Better UI/UX. Some of the pages don't have any UI done like the 404 page and the error pages. Some images might take a while to load and this leaves a blank screen. I could have maybe added a placeholder image while the images if being fetched.
- Accessibility: You will notice that I haven't added say aria-labels to buttons on the page for this app. This is one of the improvement I should have done to make the content accessible to everyone.

### Installation instructions:
Run the following commands:

#### `npm Install`
Run npm install to install all the pacakges needed for building/starting the application.

#### `npm start`

This command runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Other commands like `npm run build` are available if you want to bundle the app in production mode.


#### credits:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
