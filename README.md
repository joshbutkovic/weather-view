##WeatherView

This app is powered by the OpenWeatherMap Weather API.  It was developed to demonstrate React and other technologies.

## Getting Started

Visit this link to create your own free API key:
[https://openweathermap.org/api](https://openweathermap.org/api").

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
export const API_KEY = '[YOUR-API-KEY]';
```
