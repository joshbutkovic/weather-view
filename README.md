# WeatherView
*"A neat little React/Redux app to search current and future weather"*

Created By: **Josh Butkovic**

This app is powered by the OpenWeatherMap Weather API.  It was developed to demonstrate React and other technologies.

## Featured Libraries
Axios,
Bulma,
Lodash,
Moment,
Node Sass,
React,
React-Router,
Redux,
Thunk,
React Easy Chart,
React Resize Detector,
React Toggle Switch,
React Font Awesome,

A big thanks to PopMotion, all the animations are done with Pose for React.
What a fantastic high level library!

## Getting Started

Visit this link to create your own free API key:
[https://openweathermap.org/api](https://openweathermap.org/api").

This is a fantastic free API for building fun projects like this one.

Clone the app
```bash
git clone https://github.com/joshbutkovic/weather-view.git
```

Navigate to the directory and npm install
```bash
cd weather-view/
```

Create a new JavaScript file that exports the API key
```bash
touch /src/config/apiKey.js
```

Add the following line to the newly created file apiKey.js replacing the string with your API key
```Javascript
export const API_KEY = 'YOUR-API-KEY';
```
Navigate to the project root and run the app
```bash
cd /weather-view && npm run start
```
WeatherView will then open in a browser and run at 
http://localhost:3000
