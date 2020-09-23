
## What is this?
This is the react web app that is running on the vertically mounted tv in my living room that displays train times, weather forecasts, and messages from my roommates and I's discord server.

## Where is it being hosted???
It's being hosted on Heroku for now, https://dashboard-display-webapp.herokuapp.com/ , but it will soon be moved over to the digital ocean server I have running the back end APIs

## Why'd you do this?
Because I never found a display board with enough customizability for me. Also I wanted to make a microservice based API on my own and I never really had the chance to learn react

## Links to all project code bases!

[React App](https://github.com/jayjayb772/Display-ReactApp)

[Orchestrator](https://github.com/jayjayb772/Display-orchestrator)

[CTAPI](https://github.com/jayjayb772/Display-CTAPI)

[WeatherAPI](https://github.com/jayjayb772/Display-Weather)

[DiscordBot](https://github.com/jayjayb772/1925-discord-bot)

---

# Functional Components
- _CTABox_
    - Desc: Can do montrose as default, or other station when given props
    - _Train_
        - Desc: Mapped from fetch call to orchestrator API
- _WeatherBox_
    - Desc: Only gives 5 day forecast as of now
    - _Forecast_
        - Desc: Mapped from fetch call to orchestrator API
- _DiscordBox_
    - Desc: Connected to Orchestrator websocket, recieves messages from discord
    - _Message_
        - Desc: Mapped from onMessage data from websocket

# Upcoming Components
- _CurrentWeatherBox_
    - Desc: Will get current weather and forecast for day. have gif/pic based on forecast/temp
    - Might brake into subcomponents for _Temps_, _WindDir_, _ForecastDesc_\
- _FamilyMessageBox_
    - Desc: Will be connected to websocket but make data contain a messageType field for Discord, or family, or other scalability in the future
    - Will probably reuse _Message_ from _DiscordBox_
- _ResidentsMessageNotifs_
    - Desc: Push Notification system for my roomates and I to send messages to be said using text to speech on the board
    - Will use websockets, need to work on overlays
- _ToDoBox_
    - Desc: A chore chart for my roomates and I! This will be a large feature that involves discord commands, orchestrator data retention, and possibly the biggest reason to make a mobile/client side page for controlling the board.
    - _ToDoItem_
        - Desc: Items will be stored in a DB, maybe firebase for real time sync, things will be auto populated based on when things need to be done. We'll then be able to cross things off using discord, maybe texting, and maybe even through a mobile page for broswers
         
#react web app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
